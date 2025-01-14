'use client'
import React, { useEffect, useRef, useState } from 'react';

const ScrollAnimation = () => {
  const [currentFrame, setCurrentFrame] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);
  const scrollStartRef = useRef(0);
  const totalFrames = 148;
  
  // Lock/unlock scroll
  useEffect(() => {
    const body = document.body;
    
    const lockScroll = () => {
      const scrollY = window.scrollY;
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
      body.style.width = '100%';
    };

    const unlockScroll = () => {
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };

    if (isAnimating) {
      lockScroll();
    } else {
      unlockScroll();
    }

    return () => {
      if (isAnimating) unlockScroll();
    };
  }, [isAnimating]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!containerRef.current || !isAnimating) return;
      
      e.preventDefault();
      
      // Determine scroll direction and update frame
      const scrollDown = e.deltaY > 0;
      setCurrentFrame(prev => {
        const newFrame = scrollDown ? 
          Math.min(prev + 1, totalFrames) : 
          Math.max(prev - 1, 1);
        
        // If we've reached the end of frames, stop animating
        if (newFrame === 1 || newFrame === totalFrames) {
          setIsAnimating(false);
        }
        
        return newFrame;
      });
    };

    const handleIntersection = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsAnimating(true);
      } else {
        setIsAnimating(false);
      }
    };

    // Set up intersection observer
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5
    });
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Add wheel event listener with passive: false to prevent default
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      observer.disconnect();
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isAnimating]);

  // Function to format frame number with leading zeros
  const getFrameSource = (frameNumber) => {
    const paddedNumber = String(frameNumber).padStart(4, '0');
    return `/frames/frame${paddedNumber}.jpg`; // Adjust path according to your frame naming
  };

  


  return (
    <div 
      ref={containerRef}
      className="relative w-[1558px] h-[770px] mx-auto"
    >
      <div className="w-full h-full flex items-center justify-center bg-black">
        <img
          src={getFrameSource(currentFrame)}
          alt={`Animation frame ${currentFrame}`}
          className="w-full h-full object-cover"
        />
        {/* Optional frame counter for debugging */}
        <div className="absolute bottom-4 right-4 text-white bg-black/50 px-2 py-1 rounded">
          Frame: {currentFrame}/{totalFrames}
          {isAnimating ? ' (Locked)' : ' (Free)'}
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimation;