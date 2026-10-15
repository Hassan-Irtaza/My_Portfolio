import React, { useCallback, useEffect, useRef, useState } from 'react';
import { decodedFrame } from './name-animation.js';

// Inspired by the name decode interaction at https://aradhyapuneeth.github.io/.
// Implemented independently for React, with fixed-width text and cleanup.
export default function AnimatedName({ firstName = 'Hassan', lastName = 'Irtaza', id }) {
  const first = firstName.toUpperCase();
  const last = lastName.toUpperCase();
  const [display, setDisplay] = useState([first, last]);
  const frames = useRef([null, null]);
  const reduced = useRef(true);
  const lastReplay = useRef([-Infinity, -Infinity]);

  const animate = useCallback((index, duration = 850, delay = 0) => {
    const word = index === 0 ? first : last;
    if (reduced.current) return;
    if (frames.current[index] !== null) cancelAnimationFrame(frames.current[index]);
    let start;
    let lastPaint = -Infinity;
    function tick(now) {
      if (start === undefined) start = now + delay;
      const elapsed = now - start;
      if (elapsed >= 0) {
        const progress = Math.min(elapsed / duration, 1);
        if (now - lastPaint >= 32 || progress === 1) {
          const next = decodedFrame(word, progress);
          setDisplay(current => current.map((value, i) => i === index ? next : value));
          lastPaint = now;
        }
        if (progress === 1) {
          frames.current[index] = null;
          return;
        }
      }
      frames.current[index] = requestAnimationFrame(tick);
    }
    frames.current[index] = requestAnimationFrame(tick);
  }, [first, last]);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    function syncPreference() {
      reduced.current = preference.matches;
      if (preference.matches) {
        frames.current.forEach(frame => { if (frame !== null) cancelAnimationFrame(frame); });
        frames.current = [null, null];
        setDisplay([first, last]);
      }
    }
    syncPreference();
    animate(0, 850, 180);
    animate(1, 1000, 310);
    preference.addEventListener('change', syncPreference);
    return () => {
      preference.removeEventListener('change', syncPreference);
      frames.current.forEach(frame => { if (frame !== null) cancelAnimationFrame(frame); });
    };
  }, [first, last, animate]);

  function replay(index, touch = false) {
    if (reduced.current) return;
    if (!touch && !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const now = performance.now();
    if (now - lastReplay.current[index] < 2600) return;
    lastReplay.current[index] = now;
    animate(index, 650);
  }

  return <h1 id={id} className="animated-name" aria-label={`${firstName} ${lastName}`}>
    {display.map((word, index) => <span key={index} className={`name-line${index === 1 ? ' name-line-gradient' : ''}`} aria-hidden="true" onPointerEnter={() => replay(index)} onPointerDown={event => { if (event.pointerType === 'touch') replay(index, true); }}>
      <span className="name-word">{word}</span>{index === 1 && <span className="name-cursor"/>}
    </span>)}
  </h1>;
}
