import React, { useState } from 'react';
import { X } from 'lucide-react';

const characters = [
  {
    name: "Rama",
    title: "The Perfect Prince",
    image: "https://images.unsplash.com/photo-1630839437035-dac17da580d0?w=800",
    description: "Think of him as the OG superhero - before Marvel was even a thing. Rama's basically that guy who always does the right thing, even when it's super inconvenient. Like deleting TikTok because your parents said so, but on a much bigger scale 👑",
    details: "Eldest son of King Dasharatha, master archer, and embodiment of dharma. Married to Sita and exiled for 14 years. Basically had the longest camping trip ever, but with more demon-fighting.",
    powers: ["Divine Archery", "Perfect Leadership", "Unwavering Dharma"],
    funFacts: [
      "Never missed a target with his arrows",
      "Could control the elements",
      "Had an entire army of talking monkeys"
    ]
  },
  {
    name: "Sita",
    title: "Queen of Strength",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800",
    description: "Not your typical damsel in distress. Sita's more like that friend who aces all their classes while dealing with family drama and still manages to keep it together 💅",
    details: "Found in a furrow of the earth, chosen bride of Rama. Survived kidnapping, exile, and fire trials. Think of her as the original 'strong female character' - but way more authentic.",
    powers: ["Divine Protection", "Unbreakable Will", "Earth's Blessing"],
    funFacts: [
      "Could lift Shiva's bow as a child",
      "Literally emerged from the Earth",
      "Had a special connection with nature"
    ]
  },
  {
    name: "Hanuman",
    title: "The Ultimate Loyalist",
    image: "https://images.unsplash.com/photo-1582716401301-b2407dc7563d?w=800",
    description: "Imagine having a best friend who's literally a superhero monkey god. That's Hanuman - loyal, buff, can fly, and probably would've gone viral on Instagram with his temple gym workouts 🐒",
    details: "Son of the Wind God, devoted servant of Rama. Could lift mountains and leap across oceans. Basically had all the superpowers before they were cool.",
    powers: ["Super Strength", "Flight", "Size Manipulation"],
    funFacts: [
      "Tried to eat the sun as a baby",
      "Carried an entire mountain",
      "Is immortal and still alive today"
    ]
  },
  {
    name: "Ravana",
    title: "The Complex Antagonist",
    image: "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?w=800",
    description: "That super smart kid who went wrong somewhere. Had 10 heads (talk about multitasking goals), but let his ego get the best of him. Classic 'villain origin story' material 😈",
    details: "King of Lanka, scholar, musician, and warrior. Proof that having too many browser tabs open (or heads) doesn't always mean you're making good decisions.",
    powers: ["Immortality", "Divine Weapons", "Vast Knowledge"],
    funFacts: [
      "Was an excellent Veena player",
      "Wrote books on astrology",
      "Could control celestial bodies"
    ]
  }
];

const CharacterCard = ({ character, onClick }) => (
  <div 
    className="glass rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer"
    onClick={onClick}
  >
    <div className="h-64 relative">
      <img 
        src={character.image} 
        alt={character.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-0 p-6">
        <h3 className="text-2xl font-bold mb-2">{character.name}</h3>
        <p className="text-purple-400">{character.title}</p>
      </div>
    </div>
    <div className="p-6">
      <p className="text-white/80">{character.description}</p>
    </div>
  </div>
);

const CharacterModal = ({ character, onClose }) => (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center p-4 z-50">
    <div className="glass rounded-xl max-w-4xl w-full p-8 relative max-h-[90vh] overflow-y-auto">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
      >
        <X size={24} />
      </button>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img 
            src={character.image} 
            alt={character.name}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h2 className="text-3xl font-bold mb-2">{character.name}</h2>
          <p className="text-purple-400 mb-4">{character.title}</p>
          <p className="text-white/80 mb-6">{character.details}</p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-3">Powers & Abilities ⚡</h3>
            <ul className="space-y-2">
              {character.powers.map((power, index) => (
                <li key={index} className="flex items-center gap-2 text-white/80">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  {power}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Fun Facts 💫</h3>
            <ul className="space-y-2">
              {character.funFacts.map((fact, index) => (
                <li key={index} className="flex items-center gap-2 text-white/80">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Characters = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <div className="min-h-screen bg-black pt-24 px-4 pb-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8">
          Meet the Squad ✨
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {characters.map((character) => (
            <CharacterCard 
              key={character.name}
              character={character}
              onClick={() => setSelectedCharacter(character)}
            />
          ))}
        </div>
      </div>

      {selectedCharacter && (
        <CharacterModal 
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  );
};

export default Characters;