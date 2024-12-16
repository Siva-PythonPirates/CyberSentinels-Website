import { Shield, Code, Users, Calendar, Brain, Lock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Cyber Defense',
    description: 'Learn advanced security techniques and defense mechanisms.'
  },
  {
    icon: Code,
    title: 'Ethical Hacking',
    description: 'Practice ethical hacking in controlled environments.'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Join a community of like-minded security enthusiasts.'
  },
  {
    icon: Calendar,
    title: 'Events',
    description: 'Regular workshops, CTFs, and networking events.'
  },
  {
    icon: Brain,
    title: 'Learning',
    description: 'Access to learning resources and mentorship.'
  },
  {
    icon: Lock,
    title: 'Projects',
    description: 'Work on real-world security projects.'
  }
];

export default function Features() {
  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-green-500 font-mono mb-4">What We Offer</h2>
          <p className="text-gray-400">Comprehensive cybersecurity training and experiences</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border border-green-500/20 rounded-lg bg-black hover:bg-green-500/5 transition-colors"
            >
              <feature.icon className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2 font-mono">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}