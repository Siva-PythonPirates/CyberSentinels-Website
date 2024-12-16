import { useEffect, useRef, useState } from 'react';
import { Fingerprint } from 'lucide-react';
import CryptoText from './CryptoText';

export default function LoadingScreen() {
  const [scanProgress, setScanProgress] = useState(0);
  const [scanComplete, setScanComplete] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx!) return;

    canvas.width = 200;
    canvas.height = 200;
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 80;

    function drawScanningCircle(progress: number) {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      
      // Draw outer circle
      ctx!.beginPath();
      ctx!.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx!.strokeStyle = 'rgba(74, 222, 128, 0.2)';
      ctx!.lineWidth = 2;
      ctx!.stroke();

      // Draw progress arc
      ctx!.beginPath();
      ctx!.arc(centerX, centerY, radius, -Math.PI / 2, (-Math.PI / 2) + (Math.PI * 2 * progress));
      ctx!.strokeStyle = '#22c55e';
      ctx!.lineWidth = 4;
      ctx!.stroke();

      // Draw scanning line
      if (progress < 1) {
        ctx!.beginPath();
        ctx!.moveTo(centerX - radius, centerY);
        ctx!.lineTo(centerX + radius, centerY);
        ctx!.strokeStyle = 'rgba(74, 222, 128, 0.5)';
        ctx!.lineWidth = 2;
        ctx!.stroke();
      }
    }

    let progress = 0;
    const animate = () => {
      if (progress < 1) {
        progress += 0.009;
        setScanProgress(progress);
        drawScanningCircle(progress);
        requestAnimationFrame(animate);
      } else {
        setScanComplete(true);
        setShowMessage(true);
      }
    };

    animate();
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          <canvas
            ref={canvasRef}
            className="w-[200px] h-[200px]"
          />
          <Fingerprint 
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       w-24 h-24 text-green-500 transition-opacity duration-500
                       ${scanComplete ? 'opacity-100' : 'opacity-50'}`}
          />
        </div>

        <div className="space-y-4">
          <div className="font-mono text-green-500">
            {showMessage ? (
              <CryptoText text="Access Granted" />
            ) : (
              <CryptoText text="Scanning..." />
            )}
          </div>
          
          <div className="font-mono text-sm text-gray-500">
            {Math.round(scanProgress * 100)}% Complete
          </div>
        </div>
      </div>
    </div>
  );
}