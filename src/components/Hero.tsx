import { Shield, Terminal, Lock } from 'lucide-react';
import InteractiveTerminal from './InteractiveTerminal';
import MatrixRain from './MatrixRain';
import CryptoText from './CryptoText';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black flex items-center overflow-hidden">
      <MatrixRain />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="w-8 h-8 text-green-500 animate-pulse" />
              <Terminal className="w-8 h-8 text-green-500 animate-pulse" />
              <Lock className="w-8 h-8 text-green-500 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-mono">
              <span className="text-white digital-distortion" data-text="CYBER">CYBER</span>
              <br />
              <span className="text-green-500 neon-glow animate-glitch">SENTINELS</span>
            </h1>
            <div className="text-gray-400 text-lg mb-8">
              <CryptoText 
                text="Defending the digital frontier through knowledge, innovation, and collaboration."
                className="block mb-2"
              />
              <CryptoText 
                text="Join our elite team of cybersecurity enthusiasts."
                delay={70}
              />
            </div>
            <div className="flex space-x-4">
              <button className="cyber-scan bg-green-500 text-black px-8 py-3 rounded-md font-mono hover:bg-green-400 transition-colors">
                Join Now
              </button>
              <button className="border border-green-500 text-green-500 px-8 py-3 rounded-md font-mono hover:bg-green-500/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative cyber-scan">
              <InteractiveTerminal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}