import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, animate } from 'framer-motion';

const isClickableTarget = (el) => {
  while (el && el !== document.body) {
    if (
      el.tagName === 'A' ||
      el.tagName === 'BUTTON' ||
      el.tagName === 'INPUT' ||
      el.tagName === 'SELECT' ||
      el.tagName === 'TEXTAREA' ||
      el.dataset?.cursor === 'pointer'
    ) {
      return true;
    }
    el = el.parentElement;
  }
  return false;
};

export default function DotCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Core dot: tight, near-instant follow
  const coreSpring = { damping: 30, stiffness: 700, mass: 0.15 };
  const coreX = useSpring(cursorX, coreSpring);
  const coreY = useSpring(cursorY, coreSpring);

  // Outer ring: looser, trails slightly for a "premium drag" feel
  const ringSpring = { damping: 22, stiffness: 180, mass: 0.6 };
  const ringX = useSpring(cursorX, ringSpring);
  const ringY = useSpring(cursorY, ringSpring);

  // Motion values instead of React state -> no re-renders
  const isVisible = useMotionValue(0);
  const ringSize = useMotionValue(16);

  // Design Token Fallbacks: Set initially to transparent/default, filled dynamically via CSS variables
  const ringBg = useMotionValue('var(--cursor-ring-bg, rgba(255,255,255,0))');
  const ringBorder = useMotionValue('var(--cursor-ring-border, rgba(255,255,255,0.8))');

  const dotScale = useMotionValue(1);
  const pressScale = useMotionValue(1); // Now fully mapped below!

  const isPointerRef = useRef(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    // Read the current computed style tokens from the DOM to animate smoothly between them
    const rootStyle = getComputedStyle(document.documentElement);
    const tokenRingBgActive = rootStyle.getPropertyValue('--cursor-ring-bg-hover').trim() || 'rgba(255,255,255,0.2)';
    const tokenRingBgIdle = rootStyle.getPropertyValue('--cursor-ring-bg').trim() || 'rgba(255,255,255,0)';
    const tokenRingBorderActive = rootStyle.getPropertyValue('--cursor-ring-border-hover').trim() || 'rgba(255,255,255,1)';
    const tokenRingBorderIdle = rootStyle.getPropertyValue('--cursor-ring-border').trim() || 'rgba(255,255,255,0.8)';

    const handlePointerMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (isVisible.get() === 0) {
        animate(isVisible, 1, { duration: 0.2 });
      }

      const hovering = isClickableTarget(e.target);
      if (hovering !== isPointerRef.current) {
        isPointerRef.current = hovering;
        animate(ringSize, hovering ? 48 : 16, { type: 'spring', stiffness: 400, damping: 26 });
        animate(ringBg, hovering ? tokenRingBgActive : tokenRingBgIdle, { duration: 0.2 });
        animate(ringBorder, hovering ? tokenRingBorderActive : tokenRingBorderIdle, { duration: 0.2 });
        animate(dotScale, hovering ? 0.3 : 1, { type: 'spring', stiffness: 400, damping: 26 });
      }
    };

    const handlePointerDown = () => animate(pressScale, 0.8, { duration: 0.12 });
    const handlePointerUp = () => animate(pressScale, 1, { type: 'spring', stiffness: 400, damping: 20 });

    const handleLeave = () => animate(isVisible, 0, { duration: 0.15 });
    const handleEnter = () => animate(isVisible, 1, { duration: 0.15 });

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('pointerup', handlePointerUp, { passive: true });
    document.addEventListener('mouseleave', handleLeave);
    document.addEventListener('mouseenter', handleEnter);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('mouseenter', handleEnter);
    };
  }, [cursorX, cursorY, isVisible, ringSize, ringBg, ringBorder, dotScale, pressScale]);

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          body, a, button, input, select, textarea {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: ringSize,
          height: ringSize,
          opacity: isVisible,
          scale: pressScale, // Connected the click shrink interaction here
          backgroundColor: ringBg,
          borderStyle: 'solid',
          borderWidth: '2px',
          borderColor: ringBorder,
          boxShadow: '0 0 16px var(--cursor-glow, rgba(255,255,255,0.15))',
          willChange: 'transform, opacity, background-color, border-color, width, height',
        }}
      />

      {/* Core dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block rounded-full"
        style={{
          x: coreX,
          y: coreY,
          translateX: '-50%',
          translateY: '-50%',
          width: 8,
          height: 8,
          scale: dotScale, // Dot shrinks independently on hover
          opacity: isVisible,
          backgroundColor: 'var(--cursor-dot-bg, #ffffff)', // Tokenized core color
          boxShadow: '0 0 12px var(--cursor-dot-glow, rgba(255,255,255,0.5))',
          willChange: 'transform, opacity',
        }}
      />
    </>
  );
}
