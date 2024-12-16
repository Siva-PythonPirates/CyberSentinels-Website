import { useEffect, useState } from 'react';

interface CryptoTextProps {
  text: string;
  delay?: number;
  className?: string;
}

export default function CryptoText({ text, delay = 50, className = '' }: CryptoTextProps) {
  const [displayText, setDisplayText] = useState('');
  const characters = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  useEffect(() => {
    let currentIndex = 0;
    let scrambleInterval: NodeJS.Timeout;
    
    const revealText = () => {
      if (currentIndex <= text.length) {
        scrambleInterval = setInterval(() => {
          setDisplayText(prev => {
            const scrambled = prev.split('')
              .map((char, i) => 
                i >= currentIndex 
                  ? characters[Math.floor(Math.random() * characters.length)]
                  : char
              )
              .join('');
            return scrambled;
          });
        }, 50);

        setTimeout(() => {
          clearInterval(scrambleInterval);
          setDisplayText(text.slice(0, currentIndex) + 
                        (currentIndex < text.length ? '_' : ''));
          currentIndex++;
        }, delay);
      }
    };

    const timer = setInterval(revealText, delay);
    return () => {
      clearInterval(timer);
      clearInterval(scrambleInterval);
    };
  }, [text, delay]);

  return (
    <span className={`font-mono ${className}`}>
      {displayText}
    </span>
  );
}