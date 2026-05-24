import { useState } from 'react';
import { Lightbulb, PersonStanding, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { FadeInSection } from '../components/FadeInSection';

import aboutImg1 from '../images/galleryA-1.jpg';
import aboutImg2 from '../images/galleryA-2.jpg';
import aboutImg3 from '../images/galleryA-3.jpg';
import aboutImg4 from '../images/galleryA-4.jpg';

const officers = [
  { name: 'Vatsal Srivastava', role: 'President', desc: 'N/A', img: 'VS' },
  { name: 'Shulin Lu', role: 'Vice-President', desc: 'N/A', img: 'SL' },
  { name: 'Isha Ramakrishna', role: 'Vice-President', desc: 'N/A', img: 'IR' },
  { name: 'Arnav Kumar', role: 'Secretary', desc: 'N/A', img: 'AK' },
  { name: 'Taiba Hanif', role: 'Treasurer', desc: 'N/A', img: 'TH' },
  { name: 'Ashwin Ganapathi', role: 'Junior Officer', desc: 'N/A', img: 'AG' },
  { name: 'Shreyas Reddy', role: 'Vice lead', desc: 'N/A', img: 'SR' }
];

const placeholderPerson = { name: 'Name', role: 'Role', desc: 'Statement', img: 'NA' };
const writers = Array(4).fill(placeholderPerson);
const volunteers = Array(4).fill(placeholderPerson);
const alumni = Array(4).fill(placeholderPerson);

function PersonCard({ person, accentType = 'officers' }: { person?: typeof officers[0], accentType?: 'officers' | 'writers' | 'volunteers' | 'alumni' }) {
  const accents = {
    officers: { text: 'text-blue-300', hoverBorder: 'group-hover:border-blue-300', groupHoverBorder: 'hover:border-blue-300/50', borderDim: 'border-blue-300/30' },
    writers: { text: 'text-red-300', hoverBorder: 'group-hover:border-red-300', groupHoverBorder: 'hover:border-red-300/50', borderDim: 'border-red-300/30' },
    volunteers: { text: 'text-green-300', hoverBorder: 'group-hover:border-green-300', groupHoverBorder: 'hover:border-green-300/50', borderDim: 'border-green-300/30' },
    alumni: { text: 'text-yellow-300', hoverBorder: 'group-hover:border-yellow-300', groupHoverBorder: 'hover:border-yellow-300/50', borderDim: 'border-yellow-300/30' },
  };

  const accent = accents[accentType];
  const p = person || { name: 'Name', role: 'Role', desc: 'Statement', img: 'NA' };

  return (
    <div className={`glass-panel rounded-xl p-6 flex flex-col items-center text-center hover:bg-white/5 transition-all duration-300 group ${accent.groupHoverBorder} cursor-default overflow-hidden h-fit self-start`}>
      <div className={`w-24 h-24 rounded-full border-2 shrink-0 ${accent.borderDim} ${accent.hoverBorder} transition-colors duration-300 bg-black/50 flex items-center justify-center font-mono font-bold text-2xl ${accent.text} mb-4`}>
          {p.img === 'NA' ? <PersonStanding className="w-8 h-8 opacity-60" /> : p.img}
      </div>
      <div className="w-full flex flex-col items-center">
        <h4 className="font-sans font-bold text-xl text-white">{p.name}</h4>
        <p className={`font-mono text-xs ${accent.text} mt-1`}>{p.role}</p>
      </div>
      
      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-in-out w-full">
        <div className="overflow-hidden">
          <p className="font-sans text-sm text-surface-variant pt-4 pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">{p.desc}</p>
        </div>
      </div>
    </div>
  );
}

export function About() {
  const [currentAboutGalleryIndex, setCurrentAboutGalleryIndex] = useState(0);
  const aboutGalleryImages = [
    aboutImg1,
    aboutImg2,
    aboutImg3,
    aboutImg4
  ];

  const handleNextAboutImage = () => {
    setCurrentAboutGalleryIndex((prev) => (prev + 1) % aboutGalleryImages.length);
  };

  const handlePrevAboutImage = () => {
    setCurrentAboutGalleryIndex((prev) => (prev - 1 + aboutGalleryImages.length) % aboutGalleryImages.length);
  };

  return (
    <div className="px-4 md:px-10 max-w-7xl mx-auto flex flex-col gap-16 pb-24">
       <FadeInSection className="text-center pt-8">
            <h1 className="font-sans font-bold text-5xl text-primary-fixed-dim mb-4">About Us</h1>
            <p className="font-sans text-lg text-surface-variant max-w-2xl mx-auto">Meet the students and organizers behind the Pleasanton Math Tournament.</p>
       </FadeInSection>

       <FadeInSection className="w-full aspect-video glass-panel rounded-xl flex items-center justify-center relative overflow-hidden group bg-[#1c2128]">
           {/* Image Layer */}
           {aboutGalleryImages.map((src, idx) => (
             <img 
               key={idx}
               src={src} 
               alt={`PMT About ${idx + 1}`} 
               className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 z-10 ${
                 idx === currentAboutGalleryIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
               }`}
               onError={(e) => {
                 (e.target as HTMLImageElement).style.opacity = '0';
               }}
             />
           ))}

           {/* Fallback Layer */}
           <div className="absolute inset-0 z-0 flex flex-col items-center justify-center gap-2 px-6 text-center select-none">
             <ImageIcon className="w-12 h-12 text-inverse-primary opacity-30 mx-auto" />
             <span className="font-mono text-xs text-surface-variant uppercase tracking-widest opacity-50 mt-2">
               Missing Image
             </span>
           </div>

           {/* Controls */}
           <button onClick={handlePrevAboutImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity z-20 backdrop-blur-sm">
             <ChevronLeft className="w-8 h-8" />
           </button>
           <button onClick={handleNextAboutImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity z-20 backdrop-blur-sm">
             <ChevronRight className="w-8 h-8" />
           </button>

           {/* Dots */}
           <div className="absolute bottom-6 flex gap-2 z-20 overflow-x-auto w-full justify-center px-4">
             {aboutGalleryImages.map((_, idx) => (
               <button 
                 key={idx}
                 onClick={() => setCurrentAboutGalleryIndex(idx)}
                 className={`w-3 h-3 rounded-full transition-all duration-300 flex-shrink-0 ${
                   idx === currentAboutGalleryIndex ? 'bg-inverse-primary scale-110' : 'bg-white/40 hover:bg-white/70'
                 }`}
                 aria-label={`Go to slide ${idx + 1}`}
               />
             ))}
           </div>
       </FadeInSection>

       <FadeInSection className="max-w-3xl mx-auto text-center space-y-6">
           <h2 className="font-sans font-bold text-3xl text-white">Our Mission</h2>
           <p className="font-sans text-lg text-surface-variant leading-relaxed">
             The Pleasanton Math Tournament is dedicated to fostering a deep appreciation for mathematics among middle and high school students. We believe that competitive problem solving is not just about finding the right answer, but about developing analytical thinking, creativity, and resilience.
           </p>
       </FadeInSection>

       <FadeInSection className="w-full">
           <div className="glass-panel p-8 md:p-12 rounded-xl border border-tertiary-container/20 flex flex-col items-center gap-6 text-center">
               <Lightbulb className="w-10 h-10 text-tertiary-container" />
               <blockquote className="font-sans italic text-2xl text-white max-w-4xl leading-tight">
                  "To inspire the next generation of logical thinkers by providing accessible, challenging, and engaging mathematical competitions that transcend standard curriculum."
               </blockquote>
           </div>
       </FadeInSection>

       {/* Rosters */}
       <FadeInSection className="space-y-6">
           <h3 className="font-sans font-bold text-2xl text-white border-b border-white/10 pb-4">Officers</h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
               {officers.map((officer, idx) => (
                   <PersonCard key={idx} person={officer} accentType="officers" />
               ))}
           </div>
       </FadeInSection>

       <FadeInSection className="space-y-6">
           <h3 className="font-sans font-bold text-2xl text-white border-b border-white/10 pb-4">Problem Writers</h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
               {writers.map((writer, idx) => (
                   <PersonCard key={idx} person={writer} accentType="writers" />
               ))}
           </div>
       </FadeInSection>

       <FadeInSection className="space-y-6">
           <h3 className="font-sans font-bold text-2xl text-white border-b border-white/10 pb-4">Volunteers</h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
               {volunteers.map((volunteer, idx) => (
                   <PersonCard key={idx} person={volunteer} accentType="volunteers" />
               ))}
           </div>
       </FadeInSection>

       <FadeInSection className="space-y-6">
           <h3 className="font-sans font-bold text-2xl text-white border-b border-white/10 pb-4">Alumni</h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
               {alumni.map((alumnus, idx) => (
                   <PersonCard key={idx} person={alumnus} accentType="alumni" />
               ))}
           </div>
       </FadeInSection>

       <FadeInSection className="pt-16 flex flex-col sm:flex-row justify-center items-center gap-6" id="volunteer">
           <a href="https://docs.google.com/forms/d/e/1FAIpQLSeR8jGt8MHttf8V11yIblG_cgfvT1gz6w9ppTC44VHa42kstw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-inverse-primary text-black font-mono font-medium rounded-full hover:bg-primary-fixed">Become a Problem Writer</a>
           <a href="https://docs.google.com/forms/d/e/1FAIpQLSdsQx42Ub-TbnNINqzC06cVhh_Q2krulX-gdMjwTvYXTW2wXA/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="px-8 py-3 glass-panel text-inverse-primary font-mono font-medium rounded-full border-inverse-primary hover:bg-inverse-primary/10">Become a Volunteer</a>
       </FadeInSection>

    </div>
  );
}
