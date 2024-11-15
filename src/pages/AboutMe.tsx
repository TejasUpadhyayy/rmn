import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-black pt-24 px-4 pb-12">
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img 
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400" 
              alt="Creator"
              className="w-32 h-32 rounded-full object-cover"
            />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Bridging Ancient Wisdom with Modern Tech
              </h1>
              <p className="text-white/80 text-lg">
                Digital storyteller, mythology enthusiast, and full-stack developer on a mission to make 
                ancient epics accessible to the next generation.
              </p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="glass rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">The Vision 🚀</h2>
            <p className="text-white/80">
              As a developer who grew up between two worlds - the rich tapestry of ancient stories and 
              the fast-paced digital age - I saw an opportunity to create something unique. This project 
              bridges that gap, making timeless wisdom relevant for today's audience.
            </p>
          </div>
          <div className="glass rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">The Approach 💡</h2>
            <p className="text-white/80">
              By combining modern web technologies with engaging storytelling, we're making the Ramayana 
              accessible without losing its profound meaning. It's about finding that sweet spot between 
              entertainment and education.
            </p>
          </div>
        </div>

        <div className="glass rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Tech Stack & Development Journey</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold">Frontend</h3>
              <ul className="text-white/80 space-y-1">
                <li>• React with TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Framer Motion</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold">Design</h3>
              <ul className="text-white/80 space-y-1">
                <li>• Figma</li>
                <li>• Custom Illustrations</li>
                <li>• Responsive Design</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold">Development</h3>
              <ul className="text-white/80 space-y-1">
                <li>• Vite</li>
                <li>• Git Version Control</li>
                <li>• CI/CD Pipeline</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/60">
            Made with 💜 and a lot of ☕ | © 2024 Ramayana Project
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;