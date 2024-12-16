const team = [
  {
    name: 'Sivashankar S',
    role: 'Founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
    expertise: 'Fill in Team.tsx file'
  },
  {
    name: 'Rithesh',
    role: 'Founder',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
    expertise: 'Fill in Team.tsx file'
  },
  {
    name: 'Jerin',
    role: 'Founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
    expertise: 'Fill in Team.tsx file'
  },
  {
    name: 'Dr. Sarah Chen',
    role: 'Faculty Advisor',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200',
    expertise: 'Fill in Team.tsx file'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Club President',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
    expertise: 'Fill in Team.tsx file'
  },
  {
    name: 'Aisha Patel',
    role: 'Technical Lead',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
    expertise: 'Fill in Team.tsx file'
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-green-500 font-mono mb-4">Our Team</h2>
          <p className="text-gray-400">Meet the experts leading our cybersecurity initiatives</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-black border border-green-500/20 p-6
                         hover:bg-green-500/5 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-6">
                  <div className="absolute inset-0 rounded-full border-2 border-green-500/20 
                                group-hover:border-green-500 transition-colors" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-white font-mono mb-2">{member.name}</h3>
                <p className="text-green-500 font-mono mb-2">{member.role}</p>
                <p className="text-gray-400">{member.expertise}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}