const team = [
  {
    name: "Sivashankar S",
    role: "Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    expertise: "Crizz",
  },
  {
    name: "Rithesh S",
    role: "Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    expertise: "Raxen",
  },
  {
    name: "Jerin B S",
    role: "Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    expertise: "Solo Soul",
  },
  {
    name: "Subhikshaa S",
    role: "Managerial Lead",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    expertise: "Cupcake",
  },
  {
    name: "Swathi",
    role: "Content Writer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    expertise: "Swathi",
  },
  {
    name: "Shem Kumar",
    role: "Website Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    expertise: "100",
  },
  {
    name: "Sampathkumar",
    role: "Website Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    expertise: "StarBoy",
  },
  {
    name: "Harish D",
    role: "Public Relations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    expertise: "quivering",
  },
  {
    name: "Karan Balaji B S",
    role: "Public Relations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    expertise: "karanbalajibs",
  },
  {
    name: "Surya Sundaram",
    role: "Security Analyst",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    expertise: "surya",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="py-24 relative bg-gradient-to-br from-black to-gray-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-500 font-mono mb-4 animate-pulse">
            Our Team
          </h2>
          <p className="text-gray-400">
            Meet the experts leading our cybersecurity initiatives
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-black border border-green-500/20 p-6
                         hover:bg-green-500/5 transition-all duration-300 shadow-lg transform hover:-translate-y-2 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-6">
                  <div
                    className="absolute inset-0 rounded-full border-2 border-green-500/20 
                                group-hover:border-green-500 transition-colors animate-spin-slow"
                  />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-green-500 font-mono mb-2">
                  {member.name || "Name TBD"}
                </h3>
                <p className="text-white font-mono mb-2">{member.role}</p>
                {/* <p className="text-gray-400">{member.expertise}</p> */}
                {/* venuna un-comment pannikonga */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none z-[-1]">
        {/* Cybersecurity-themed floating animation */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-green-500 opacity-10 rounded-full blur-3xl animate-ping"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-500 opacity-10 rounded-full blur-3xl animate-ping delay-300"></div>
      </div>
    </section>
  );
}
