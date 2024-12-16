import { useEffect, useRef } from 'react';

export default function MatrixRain() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
    const container = containerRef.current;
    const width = window.innerWidth;
    const columns = Math.floor(width / 20);

    for (let i = 0; i < columns; i++) {
      const span = document.createElement('span');
      span.style.left = `${i * 20}px`;
      span.style.animationDelay = `${Math.random() * 3}s`;
      span.textContent = characters[Math.floor(Math.random() * characters.length)];
      container.appendChild(span);
    }

    const updateCharacters = setInterval(() => {
      const spans = container.getElementsByTagName('span');
      for (let span of spans) {
        span.textContent = characters[Math.floor(Math.random() * characters.length)];
      }
    }, 100);

    return () => clearInterval(updateCharacters);
  }, []);

  return <div ref={containerRef} className="matrix-rain" />;
}