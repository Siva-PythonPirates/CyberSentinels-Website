import { Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';

interface TerminalLine {
  text: string;
  isCommand?: boolean;
  className?: string;
  scramble?: boolean;
}

export default function TerminalDisplay() {
  const [currentLine, setCurrentLine] = useState(0);
  const [scrambledText, setScrambledText] = useState('');
  
  const lines: TerminalLine[] = [
    { text: "$ initiating_security_protocol", scramble: true },
    { text: "[SYSTEM] Analyzing threat vectors...", className: "mt-2" },
    { text: "> Firewall::STATUS = ACTIVE", isCommand: true, className: "mt-2" },
    { text: "> Encryption::LEVEL = MAXIMUM", isCommand: true },
    { text: "> IDS::MODE = AGGRESSIVE", isCommand: true },
    { text: "> VPN::TUNNEL = ESTABLISHED", isCommand: true },
    { text: "[ALERT] Perimeter secured", className: "mt-2 text-yellow-500" },
    { text: "$ deploying_countermeasures", scramble: true, className: "mt-2" },
    { text: "System ready for engagement_", isCommand: true, className: "mt-4 animate-pulse" }
  ];

  useEffect(() => {
    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    let scrambleInterval: NodeJS.Timeout;

    const showNextLine = () => {
      if (currentLine < lines.length - 1) {
        if (lines[currentLine].scramble) {
          scrambleInterval = setInterval(() => {
            const scrambled = Array(lines[currentLine].text.length)
              .fill(0)
              .map(() => chars[Math.floor(Math.random() * chars.length)])
              .join('');
            setScrambledText(scrambled);
          }, 50);

          setTimeout(() => {
            clearInterval(scrambleInterval);
            setScrambledText('');
            setCurrentLine(prev => prev + 1);
          }, 1000);
        } else {
          setTimeout(() => {
            setCurrentLine(prev => prev + 1);
          }, 500);
        }
      }
    };

    showNextLine();

    return () => clearInterval(scrambleInterval);
  }, [currentLine]);

  return (
    <div className="w-full h-96 rounded-lg bg-black border border-green-500/20 p-6 relative overflow-hidden">
      <Terminal className="w-12 h-12 text-green-500 mb-4" />
      <div className="font-mono text-green-500 text-sm">
        {lines.slice(0, currentLine + 1).map((line, index) => (
          <p key={index} className={line.className}>
            {line.isCommand ? '> ' : ''}
            {line.scramble && index === currentLine ? scrambledText : line.text}
          </p>
        ))}
      </div>
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-scan" />
      </div>
    </div>
  );
}