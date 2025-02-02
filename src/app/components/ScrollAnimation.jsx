'use client'
import React, { useEffect, useRef, useState } from 'react';

const ScrollAnimation = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const targetFrameRef = useRef(1);
  const rafId = useRef(null);
  const lastScrollTime = useRef(Date.now());
  const imageCache = useRef(new Map());
  const totalFrames = 80;

  const lerp = (start, end, factor) => {
    return start + (end - start) * factor;
  };

  const calculateFrame = () => {
    const section = sectionRef.current;
    if (!section) return 1;

    const sectionRect = section.getBoundingClientRect();
    const progress = -sectionRect.top / (sectionRect.height - window.innerHeight);
    return Math.max(1, Math.min(totalFrames, Math.ceil(progress * totalFrames)));
  };

  const updateFrame = () => {
    if (Math.abs(currentFrame - targetFrameRef.current) > 0.1) {
      setCurrentFrame(prev => Math.round(lerp(prev, targetFrameRef.current, 0.15)));
      rafId.current = requestAnimationFrame(updateFrame);
    } else {
      rafId.current = null;
    }
  };

  const handleScrollUpdate = () => {
    if (!isInView || isLoading) return;

    const now = Date.now();
    if (now - lastScrollTime.current < 16) return;
    lastScrollTime.current = now;

    const newFrame = calculateFrame();
    if (newFrame !== targetFrameRef.current) {
      targetFrameRef.current = newFrame;
      if (!rafId.current) {
        rafId.current = requestAnimationFrame(updateFrame);
      }
    }
  };

  // Preload all images with parallel loading
  useEffect(() => {
    let mounted = true;
    const preloadImages = async () => {
      const batchSize = 40; // Load 40 images at once
      const batches = Math.ceil(totalFrames / batchSize);
      let loadedCount = 0;

      // Create loading animation
      const loadingFrame = setInterval(() => {
        if (mounted) {
          setCurrentFrame(prev => (prev % 80) + 1);
        }
      }, 50);

      // Load all frames in parallel batches
      for (let batch = 0; batch < batches; batch++) {
        const start = batch * batchSize + 1;
        const end = Math.min(start + batchSize - 1, totalFrames);
        const promises = [];

        for (let i = start; i <= end; i++) {
          if (!imageCache.current.has(i)) {
            promises.push(
              new Promise((resolve) => {
                const img = new Image();
                img.onload = () => {
                  if (mounted) {
                    imageCache.current.set(i, img);
                    loadedCount++;
                    setLoadingProgress(Math.round((loadedCount / totalFrames) * 100));
                  }
                  resolve();
                };
                img.onerror = resolve; // Continue on error
                img.src = getFrameSource(i);
              })
            );
          }
        }

        await Promise.all(promises);
      }

      if (mounted) {
        clearInterval(loadingFrame);
        setIsLoading(false);
      }
    };

    preloadImages();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);

        if (entry.isIntersecting) {
          const newFrame = calculateFrame();
          targetFrameRef.current = newFrame;
          setCurrentFrame(newFrame);
          handleScrollUpdate();
        } else {
          if (rafId.current) {
            cancelAnimationFrame(rafId.current);
            rafId.current = null;
          }
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: '50px 0px'
      }
    );

    observer.observe(section);

    const handleScroll = () => {
      handleScrollUpdate();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleScroll, { passive: true });

    handleScrollUpdate();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [isLoading, isInView]);

  const getFrameSource = (index) => {
    // Add format-auto=webp to convert to WebP
    return `https://pub-64a50b10905d44588ecc0ab3210613fa.r2.dev/frame${index.toString().padStart(4, '0')}.webp`;
  };

  return (
    <section
      ref={sectionRef}
      className="w-full h-[300vh] relative"
    >
      <div
        ref={containerRef}
        className="sticky top-0 w-full h-screen flex items-center justify-center"
      >
        <div className="relative w-full  mx-auto">
          <div className="aspect-video w-full relative ">
            <img
              src={getFrameSource(currentFrame)}
              alt={`Animation frame ${currentFrame}`}
              className="w-full h-full object-contain "
              draggable={false}
            />
            {isLoading && (
              <div className="absolute inset-0 bg-[#D6DFDF]/80 backdrop-blur-sm flex flex-col items-center justify-center gap-4">
                <div className="text-black text-2xl font-medium">
                  Loading Experience ({loadingProgress}%)
                </div>
                <div className="w-64 h-2 bg-black/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-black transition-all duration-300"
                    style={{ width: `${loadingProgress}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollAnimation;