import { useEffect, useRef } from 'react';

export default function LockAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx!) return;

    canvas.width = 100;
    canvas.height = 100;

    const particles: { x: number; y: number; targetX: number; targetY: number }[] = [];
    const lockShape = [
      // Lock body
      [45, 40, 55, 40],
      [40, 40, 40, 70],
      [60, 40, 60, 70],
      [40, 70, 60, 70],
      // Lock shackle
      [35, 40, 35, 25],
      [35, 25, 65, 25],
      [65, 25, 65, 40]
    ];

    // Create particles for each point in the lock
    lockShape.forEach(line => {
      particles.push(
        { x: Math.random() * canvas.width, y: Math.random() * canvas.height, targetX: line[0], targetY: line[1] },
        { x: Math.random() * canvas.width, y: Math.random() * canvas.height, targetX: line[2], targetY: line[3] }
      );
    });

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      ctx!.strokeStyle = '#22c55e';
      ctx!.lineWidth = 2;

      // Update and draw particles
      particles.forEach((particle, i) => {
        particle.x += (particle.targetX - particle.x) * 0.1;
        particle.y += (particle.targetY - particle.y) * 0.1;

        if (i % 2 === 0) {
          ctx!!.beginPath();
          ctx!.moveTo(particle.x, particle.y);
          ctx!.lineTo(particles[i + 1].x, particles[i + 1].y);
          ctx!.stroke();
        }

        ctx!.beginPath();
        ctx!.arc(particle.x, particle.y, 1, 0, Math.PI * 2);
        ctx!.fillStyle = '#22c55e';
        ctx!.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-[100px] h-[100px]"
    />
  );
}