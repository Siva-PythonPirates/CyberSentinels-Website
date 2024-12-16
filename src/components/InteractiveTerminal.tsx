import { useState, useRef, useEffect } from 'react';
import { Terminal } from 'lucide-react';
import { commands } from '../utils/terminalCommands';
import LockAnimation from './LockAnimation';

interface TerminalLine {
  content: string;
  type: 'input' | 'output' | 'system';
}

export default function InteractiveTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { content: 'Welcome to Cyber Sentinels Terminal', type: 'system' },
    { content: 'Type "help" to see available commands', type: 'system' }
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [currentPath, setCurrentPath] = useState(['home']);
  const [showLock, setShowLock] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  useEffect(() => {
    setTimeout(() => setShowLock(false), 3000);
  }, []);

  const handleCommand = (input: string) => {
    const args = input.trim().split(' ');
    const commandName = args[0].toLowerCase();
    const command = commands.find(cmd => cmd.name === commandName);

    if (command) {
      const output = command.execute(args.slice(1), currentPath);
      if (commandName === 'clear') {
        setLines([]);
      } else {
        setLines(prev => [
          ...prev,
          { content: `$ ${input}`, type: 'input' },
          { content: output, type: 'output' }
        ]);
      }
    } else {
      setLines(prev => [
        ...prev,
        { content: `$ ${input}`, type: 'input' },
        { content: `Command not found: ${commandName}`, type: 'output' }
      ]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(currentInput);
      setCurrentInput('');
    }
  };

  return (
    <div className="w-full h-96 rounded-lg bg-black border border-green-500/20 p-6 relative overflow-hidden">
      {showLock && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/90 z-10">
          <LockAnimation />
        </div>
      )}
      
      <Terminal className="w-12 h-12 text-green-500 mb-4" />
      
      <div 
        ref={terminalRef}
        className="h-[calc(100%-4rem)] overflow-y-auto font-mono text-green-500 text-sm"
      >
        {lines.map((line, index) => (
          <div 
            key={index} 
            className={`mb-1 ${
              line.type === 'system' ? 'text-yellow-500' :
              line.type === 'input' ? 'text-green-500' : 'text-gray-400'
            }`}
          >
            {line.content}
          </div>
        ))}
        
        <div className="flex">
          <span className="text-green-500">$&nbsp;</span>
          <input
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-green-500"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}