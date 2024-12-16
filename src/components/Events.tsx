import { Calendar, MapPin, Users } from 'lucide-react';

const events = [
  {
    title: 'Capture The Flag Competition',
    date: '2024-04-15',
    time: '14:00',
    location: 'Virtual Event',
    type: 'Competition',
    description: 'Test your skills in our monthly CTF challenge.'
  },
  {
    title: 'Ethical Hacking Workshop',
    date: '2024-04-22',
    time: '16:00',
    location: 'Tech Lab 101',
    type: 'Workshop',
    description: 'Hands-on workshop on ethical hacking techniques.'
  },
  {
    title: 'Security Conference',
    date: '2024-05-01',
    time: '09:00',
    location: 'Main Auditorium',
    type: 'Conference',
    description: 'Annual cybersecurity conference with industry experts.'
  }
];

export default function Events() {
  return (
    <section id="events" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-green-500 font-mono mb-4">Upcoming Events</h2>
          <p className="text-gray-400">Join us in our upcoming activities and events</p>
        </div>

        <div className="grid gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="border border-green-500/20 rounded-lg p-6 bg-black 
                         hover:bg-green-500/5 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-white font-mono mb-2">{event.title}</h3>
                  <p className="text-gray-400 mb-4">{event.description}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 text-green-500 mr-2" />
                      {new Date(event.date).toLocaleDateString()} at {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 text-green-500 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-green-500 mr-2" />
                      {event.type}
                    </div>
                  </div>
                </div>
                
                <button className="px-6 py-2 bg-green-500 text-black rounded font-mono 
                                 hover:bg-green-400 transition-colors mt-4 md:mt-0">
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}