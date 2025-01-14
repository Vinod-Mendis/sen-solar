'use client'
import React, { useEffect, useRef, useState } from 'react';

const ScrollAnimation = () => {
  const [currentFrame, setCurrentFrame] = useState(1);
  const [isInView, setIsInView] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const targetFrameRef = useRef(1);
  const rafId = useRef(null);
  const lastScrollTime = useRef(Date.now());
  const totalFrames = 360;

  // Smooth interpolation function
  const lerp = (start, end, factor) => {
    return start + (end - start) * factor;
  };

  // Calculate frame based on scroll position
  const calculateFrame = () => {
    const section = sectionRef.current;
    if (!section) return 1;

    const sectionRect = section.getBoundingClientRect();
    const progress = -sectionRect.top / (sectionRect.height - window.innerHeight);
    return Math.max(1, Math.min(totalFrames, Math.ceil(progress * totalFrames)));
  };

  // Smooth frame updates
  const updateFrame = () => {
    if (Math.abs(currentFrame - targetFrameRef.current) > 0.1) {
      setCurrentFrame(prev => Math.round(lerp(prev, targetFrameRef.current, 0.1)));
      rafId.current = requestAnimationFrame(updateFrame);
    } else {
      rafId.current = null;
    }
  };

  // Handle scroll position and frame updates
  const handleScrollUpdate = () => {
    if (!isInView) return;

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

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
        
        if (entry.isIntersecting) {
          // When coming back into view, reset to correct frame
          const newFrame = calculateFrame();
          targetFrameRef.current = newFrame;
          setCurrentFrame(newFrame);
          handleScrollUpdate();
        } else {
          // Clean up animation when leaving view
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

    // Unified scroll and wheel handler
    const handleScroll = () => {
      handleScrollUpdate();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleScroll, { passive: true });

    // Initial frame calculation
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

  // Load first frame
  useEffect(() => {
    const testLoad = async () => {
      try {
        const img = new Image();
        img.onload = () => setIsLoading(false);
        img.onerror = () => setIsLoading(false);
        img.src = getFrameSource(1);
      } catch (error) {
        setIsLoading(false);
      }
    };
    testLoad();
  }, []);

  const getFrameSource = (index) => {
    return `/frames/frame${index.toString().padStart(3, '0')}.png`;
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full h-[300vh] rounded-3xl relative bg-[#D6DFDF]"
    >
      <div 
        ref={containerRef}
        className="sticky top-0 w-full h-screen flex items-center justify-center"
      >
        <div className="relative w-full max-w-6xl mx-auto">
          <div className="aspect-video w-full relative">
            {isLoading ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-black text-lg font-medium">
                  Loading frames...
                </div>
              </div>
            ) : (
              <>
                <img
                  src={getFrameSource(currentFrame)}
                  alt={`Animation frame ${currentFrame}`}
                  className="w-full h-full object-contain"
                  draggable={false}
                />
                <div className="absolute top-4 left-4 text-black bg-white/50 px-2 py-1 rounded">
                  Frame: {currentFrame}
                  <br />
                  InView: {isInView ? 'Yes' : 'No'}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollAnimation;