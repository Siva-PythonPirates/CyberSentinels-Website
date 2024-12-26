import { Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="join" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-green-500 font-mono mb-4">Join Us</h2>
          <p className="text-gray-400">Become part of our cybersecurity community</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-black border border-green-500/20 rounded-lg p-8">
            <h3 className="text-xl font-bold text-white font-mono mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-green-500 mr-3" />
                <a href="mailto:cybersentinels@rajalakshmi.edu.in" className="text-gray-400">cybersentinels@rajalakshmi.edu.in</a>
              </div>
              <div className="flex items-center">
                <MessageSquare className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-400">Join our <a href='https://discord.gg/shFD9RDP' className='text-blue-600'>Discord</a> community</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-mono text-white mb-4">Meeting Schedule</h4>
              <p className="text-gray-400">Every Tuesday & Thursday</p>
              <p className="text-gray-400">5:00 PM - 7:00 PM</p>
              <p className="text-gray-400">Tech Building, Room 301</p>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-mono text-green-500 mb-2">Name</label>
              <input
                type="text"
                className="w-full bg-black border border-green-500/20 rounded px-4 py-2 text-white 
                         focus:outline-none focus:border-green-500 transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-sm font-mono text-green-500 mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-black border border-green-500/20 rounded px-4 py-2 text-white 
                         focus:outline-none focus:border-green-500 transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-sm font-mono text-green-500 mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full bg-black border border-green-500/20 rounded px-4 py-2 text-white 
                         focus:outline-none focus:border-green-500 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-black py-3 rounded font-mono 
                       hover:bg-green-400 transition-colors flex items-center justify-center"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}