import React from 'react';

const locations = [
  {
    name: "Ayodhya",
    description: "The ultimate rich kid neighborhood. Imagine Dubai, but make it ancient and way more spiritual. This is where Rama grew up, living that prince life before his epic adventure began 🏰",
    image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800",
    facts: "Capital of the Kosala kingdom, literally means 'unconquerable'. Think of it as the ancient equivalent of that one friend's house where everyone wants to hang out."
  },
  {
    name: "Lanka",
    description: "Ravana's private island that puts modern billionaire retreats to shame. Golden buildings, perfect weather, and security tighter than Apple's privacy settings 🌴",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800",
    facts: "A golden city surrounded by the ocean, protected by powerful rakshasas. Had better tech than Silicon Valley - we're talking flying chariots and magical defenses."
  },
  {
    name: "Panchavati",
    description: "The OG glamping spot where Rama, Sita, and Lakshmana spent their forest years. Like a peaceful Airbnb but with occasional demon attacks 🏕️",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
    facts: "Located near modern-day Nashik, this was the spot where most of the drama went down. Think of it as the main stage for the epic's biggest plot twists."
  }
];

const Locations = () => {
  return (
    <div className="min-h-screen bg-black pt-24 px-4 pb-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8">
          Epic Locations Check 📍
        </h1>

        <div className="space-y-12">
          {locations.map((location) => (
            <div key={location.name} className="glass rounded-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={location.image} 
                    alt={location.name}
                    className="w-full h-72 md:h-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-1/2">
                  <h2 className="text-2xl font-bold mb-4">{location.name}</h2>
                  <p className="text-white/80 mb-4">{location.description}</p>
                  <div className="glass p-4 rounded-lg">
                    <p className="text-sm text-white/60">{location.facts}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;