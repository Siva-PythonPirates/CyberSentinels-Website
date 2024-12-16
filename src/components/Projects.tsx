import { useState } from 'react';
import { Shield, AlertTriangle, Database } from 'lucide-react';

const projects = [
  {
    title: 'Network Defense Simulator',
    icon: Shield,
    description: 'Real-time network attack simulation and defense training platform.',
    tags: ['Network Security', 'Python', 'React'],
    status: 'Active'
  },
  {
    title: 'Vulnerability Scanner',
    icon: AlertTriangle,
    description: 'Custom vulnerability scanner for web applications.',
    tags: ['Web Security', 'Python', 'JavaScript'],
    status: 'In Development'
  },
  {
    title: 'Secure Database',
    icon: Database,
    description: 'Implementation of encryption and access control in databases.',
    tags: ['Database Security', 'SQL', 'Encryption'],
    status: 'Planning'
  }
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-green-500 font-mono mb-4">Active Projects</h2>
          <p className="text-gray-400">Current initiatives and research projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="p-6 border border-green-500/20 rounded-lg bg-black 
                             transform transition-all duration-300 
                             hover:scale-105 hover:bg-green-500/5">
                <project.icon className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2 font-mono">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-mono text-green-500 border border-green-500/20 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono text-green-500">{project.status}</span>
                  <button className="text-green-500 hover:text-green-400 font-mono text-sm">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}