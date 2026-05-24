import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FadeInSection } from '../components/FadeInSection';
import pmtProblems from '../problems/pmt_problem_list.json';
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';
import { ChevronDown, FunctionSquare, ChevronLeft, ChevronRight, HelpCircle, School, Globe, Calculator, Eye, ArrowRight, Timer, Crosshair, Users, Mic, Zap, Info, Brain, Handshake, Trophy, Calendar, FileText, BarChart2, Star, CheckSquare, Wrench, Trash2, CalendarCheck, Image as ImageIcon, RefreshCw } from 'lucide-react';
import { FourierWidget } from '../components/FourierWidget';

import img1 from '../images/gallery-1.jpg';
import img2 from '../images/gallery-2.jpg';
import img3 from '../images/gallery-3.jpg';
import img4 from '../images/gallery-4.jpg';
import img5 from '../images/gallery-5.jpg';
import img6 from '../images/gallery-6.jpg';
import img7 from '../images/gallery-7.jpg';
import img8 from '../images/gallery-8.jpg';

import joinImg1 from '../images/galleryJ-1.jpg';
import joinImg2 from '../images/galleryJ-2.jpg';
import joinImg3 from '../images/galleryJ-3.jpg';
import joinImg4 from '../images/galleryJ-4.jpg';
import joinImg5 from '../images/galleryJ-5.jpg';
import joinImg6 from '../images/galleryJ-6.jpg';
import joinImg7 from '../images/galleryJ-7.jpg';
import joinImg8 from '../images/galleryJ-8.jpg';

import aopsLogo from '../sponsors/AOPS.png';
import janeStreetLogo from '../sponsors/Jane_Street.png';
import wolframLogo from '../sponsors/Wolfram_Alpha.png';
import joinImg9 from '../images/galleryJ-9.jpg';
import joinImg10 from '../images/galleryJ-10.jpg';

export function Home() {
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const galleryImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8
  ];

  const [currentJoinGalleryIndex, setCurrentJoinGalleryIndex] = useState(0);
  const joinGalleryImages = [
    joinImg1,
    joinImg2,
    joinImg3,
    joinImg4,
    joinImg5,
    joinImg6,
    joinImg7,
    joinImg8,
    joinImg9,
    joinImg10
  ];

  const handleNextImage = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrevImage = () => {
    setCurrentGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleNextJoinImage = () => {
    setCurrentJoinGalleryIndex((prev) => (prev + 1) % joinGalleryImages.length);
  };

  const handlePrevJoinImage = () => {
    setCurrentJoinGalleryIndex((prev) => (prev - 1 + joinGalleryImages.length) % joinGalleryImages.length);
  };

  const getRandomProblem = () => {
    const randomIndex = Math.floor(Math.random() * pmtProblems.length);
    return pmtProblems[randomIndex];
  };

  const [currentProblem, setCurrentProblem] = useState(getRandomProblem);
  const [userAnswer, setUserAnswer] = useState('');
  const [answerStatus, setAnswerStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');

  const handleTestAnswer = () => {
    if (!userAnswer.trim()) return;
    if (userAnswer.trim().toLowerCase() === currentProblem.answer.toLowerCase()) {
      setAnswerStatus('correct');
    } else {
      setAnswerStatus('incorrect');
    }
  };

  const handleGenerateNewProblem = () => {
    setCurrentProblem(getRandomProblem());
    setUserAnswer('');
    setAnswerStatus('idle');
  };

  return (
    <div className="px-4 md:px-10 max-w-7xl mx-auto flex flex-col gap-12 md:gap-16">
      {/* Hero Section */}
      <FadeInSection className="flex flex-col items-center justify-center text-center mt-8 md:mt-12 mb-0 relative z-10 w-full">
        <FourierWidget className="w-full max-w-[60rem] h-[250px] md:h-[350px] mb-0 md:-mt-8" />
        
        <h1 className="font-sans font-bold text-[1.8rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] tracking-tight whitespace-nowrap text-inverse-primary mb-4 max-w-none drop-shadow-lg">
          Pleasanton <span className="text-red-300">Math</span> <span className="text-green-300">Tournament</span>
        </h1>
        <p className="font-sans text-lg text-surface-variant max-w-2xl mb-8">
          A welcoming, challenging math competition for students in 8th grade and below.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdsQx42Ub-TbnNINqzC06cVhh_Q2krulX-gdMjwTvYXTW2wXA/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 bg-inverse-primary text-on-primary-container font-mono font-medium rounded-lg hover:bg-primary-fixed transition-colors shadow-[0_0_20px_rgba(148,204,255,0.2)]">
            Register Interest
          </a>
          <a href="#format" className="inline-flex items-center justify-center px-8 py-3 glass-panel text-inverse-primary font-mono font-medium rounded-lg hover:bg-white/5 transition-colors">
            Explore Format
          </a>
        </div>
        <p className="font-mono text-sm text-outline flex items-center gap-1">
          <Info className="w-4 h-4" /> Registration details coming soon.
        </p>
        <div className="flex flex-col items-center gap-2 mt-12 animate-bounce cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
          <span className="font-mono text-[10px] text-white uppercase tracking-[0.2em]">See More</span>
          <ChevronDown className="w-6 h-6 text-white font-light" />
        </div>
      </FadeInSection>

      {/* What is PMT? */}
      <FadeInSection id="about" className="scroll-mt-32">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-[45%] flex flex-col gap-3">
            <div className="relative aspect-[4/3] glass-panel rounded-xl overflow-hidden flex items-center justify-center group bg-[#1c2128]">
              {/* Image Layer */}
              {galleryImages.map((src, idx) => (
                <img 
                  key={idx}
                  src={src} 
                  alt={`PMT Event ${idx + 1}`} 
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 z-10 ${
                    idx === currentGalleryIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
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
                <span className="font-sans text-[10px] text-surface-variant opacity-40">
                  Upload <span className="font-mono bg-black/20 p-0.5 rounded">{galleryImages[currentGalleryIndex]}</span> to public/
                </span>
              </div>
              
              {/* Controls */}
              <button onClick={handlePrevImage} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity z-20 backdrop-blur-sm">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={handleNextImage} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity z-20 backdrop-blur-sm">
                <ChevronRight className="w-6 h-6" />
              </button>
              
              {/* Dots */}
              <div className="absolute bottom-4 flex gap-2 z-20">
                {galleryImages.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentGalleryIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      idx === currentGalleryIndex ? 'bg-inverse-primary scale-110' : 'bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[55%] flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <HelpCircle className="text-inverse-primary w-8 h-8" />
              <h2 className="font-sans font-bold text-3xl text-white">What is PMT?</h2>
            </div>
            <div className="flex flex-col gap-4 text-surface-variant font-sans text-lg">
              <p>The Pleasanton Math Tournament is a local math competition for students in 8th grade and below. Hosted by the Hart MATHCOUNTS Club, PMT gives students a welcoming but challenging opportunity to experience contest math through rounds inspired by MATHCOUNTS and other major math tournaments.</p>
              <p>Students from any city or school may participate, and the event is designed to be competitive, organized, and fun for both new and experienced problem solvers.</p>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="flex items-center gap-2 px-4 py-2 glass-panel rounded-full text-secondary-fixed font-mono text-sm border-secondary-fixed/30"><School className="w-5 h-5" /> 8th grade and below</span>
              <span className="flex items-center gap-2 px-4 py-2 glass-panel rounded-full text-inverse-primary font-mono text-sm border-inverse-primary/30"><Globe className="w-5 h-5" /> Open to all schools</span>
              <span className="flex items-center gap-2 px-4 py-2 glass-panel rounded-full text-tertiary-fixed-dim font-mono text-sm border-tertiary-fixed-dim/30"><Calculator className="w-5 h-5" /> MATHCOUNTS-style format</span>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Try Past Problem */}
      <FadeInSection className="scroll-mt-32">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-[30%] flex flex-col gap-6">
             <h2 className="font-sans font-bold text-3xl text-white">Try a Past Problem</h2>
             <p className="font-sans text-surface-variant">Practice with archived PMT-style questions.</p>
             
             <div className="flex flex-col gap-3">
               <input 
                 type="text" 
                 value={userAnswer}
                 onChange={(e) => {
                   setUserAnswer(e.target.value);
                   setAnswerStatus('idle');
                 }}
                 placeholder="Type your answer here..."
                 className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-mono focus:outline-none focus:border-inverse-primary"
                 onKeyDown={(e) => {
                   if (e.key === 'Enter') handleTestAnswer();
                 }}
               />
               <button onClick={handleTestAnswer} className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-inverse-primary text-on-primary-container font-mono font-medium rounded-lg hover:bg-primary-fixed transition-all">
                  <CheckSquare className="w-5 h-5" /> Test Answer
               </button>
             </div>
             
             <div className="flex items-center gap-2 sm:gap-4 flex-wrap sm:flex-nowrap">
               <button onClick={handleGenerateNewProblem} className="flex items-center gap-1.5 px-2 py-1.5 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors border border-white/10 shrink-0" aria-label="Generate new problem" title="Generate New Problem">
                 <RefreshCw className="w-4 h-4 text-inverse-primary" />
                 <span className="font-mono text-xs text-inverse-primary font-medium whitespace-nowrap">New Problem</span>
               </button>
               <Link to="/problems" className="flex items-center text-inverse-primary font-mono text-xs sm:text-sm hover:underline whitespace-nowrap">Try more problems <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" /></Link>
             </div>

             {answerStatus !== 'idle' && (
               <div className={`mt-2 p-4 rounded-lg flex flex-col gap-1 items-center justify-center font-mono text-sm text-center border ${
                 answerStatus === 'correct' ? 'bg-green-500/10 border-green-500/30 text-green-400' : 'bg-red-500/10 border-red-500/30 text-red-400'
               }`}>
                 <span>
                    <strong>{userAnswer}</strong> {answerStatus === 'correct' ? 'is correct!' : 'is incorrect.'}
                 </span>
                 <span>The correct answer is: <strong>{currentProblem.answer}</strong></span>
               </div>
             )}
          </div>
          <div className="w-full lg:w-[70%] glass-panel rounded-xl p-8 md:p-12 relative overflow-hidden min-h-[320px]">
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#94ccff_1px,transparent_1px)] bg-[size:20px_20px]" />
             <div className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-8">
                   <span className="px-3 py-1 bg-inverse-primary/10 text-inverse-primary font-mono text-xs rounded-full border border-inverse-primary/20">{currentProblem.round} Round</span>
                   <span className={`px-3 py-1 font-mono text-xs rounded-full border ${currentProblem.difficulty === 'easy' ? 'bg-green-500/10 text-green-400 border-green-500/20' : currentProblem.difficulty === 'medium' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'} capitalize`}>Difficulty: {currentProblem.difficulty}</span>
                </div>
                <h3 className="font-sans font-bold text-2xl text-white mb-4">Problem {currentProblem.number}</h3>
                <div className="font-sans text-lg text-surface-variant leading-relaxed">
                  <Latex>{currentProblem.latex}</Latex>
                </div>
             </div>
          </div>
        </div>
      </FadeInSection>

      {/* Format Sections */}
      <FadeInSection id="format" className="scroll-mt-32">
         <div className="flex items-center gap-3 mb-8">
            <Timer className="text-inverse-primary w-8 h-8" />
            <h2 className="font-sans font-bold text-3xl text-white">Tournament Format</h2>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Sprint', desc: 'Speed and accuracy focused. 30 questions in 40 minutes.', icon: Timer, color: 'text-inverse-primary font-bold' },
              { title: 'Target', desc: 'Problem-solving depth. 4 pairs of questions, 6 minutes per pair.', icon: Crosshair, color: 'text-secondary-fixed' },
              { title: 'Team', desc: 'Collaborative effort. 10 difficult problems to be solved in 20 minutes.', icon: Users, color: 'text-purple-300' },
              { title: 'Countdown', desc: 'Fast-paced head-to-head oral. For fun, no effect on official rankings.', icon: Mic, color: 'text-yellow-200' },
              { title: 'Guts', desc: 'High-energy, fast-paced team round with live scoring updates.', icon: Zap, color: 'text-tertiary-container' },
              { title: 'Learn More', desc: 'A more comprehensive guide to PMT Tournament Format', icon: Info, color: 'text-white' },
            ].map(f => (
              <div key={f.title} className="glass-panel p-8 rounded-xl glass-card-hover flex flex-col h-full group cursor-pointer">
                 <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-white/5 mb-6 ${f.color}`}><f.icon className="w-6 h-6" /></div>
                 <h3 className="font-sans font-bold text-xl text-white mb-2">{f.title}</h3>
                 <p className="font-sans text-surface-variant mt-auto">{f.desc}</p>
              </div>
            ))}
         </div>
      </FadeInSection>
      
      {/* Details Box */}
      <FadeInSection className="scroll-mt-32">
         <div className="glass-panel rounded-xl p-8 border border-white/10 relative overflow-hidden">
            <Calendar className="absolute -right-8 -top-8 w-48 h-48 opacity-10 text-inverse-primary" />
            <h2 className="font-sans font-bold text-3xl text-white mb-8 relative z-10">Event Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
               {Object.entries({
                 'Date': 'January [TBD]',
                 'Location': 'Hart Middle School',
                 'Eligibility': '8th grade and below',
                 'Registration': <span className="text-inverse-primary">Google Form coming soon</span>,
                 'Fee': '[TBD]'
               }).map(([k, v]) => (
                 <div key={k}>
                   <div className="font-mono text-sm text-surface-variant uppercase tracking-widest mb-1">{k}</div>
                   <div className="font-sans text-lg text-white">{v}</div>
                 </div>
               ))}
            </div>
         </div>
      </FadeInSection>

      {/* Volunteer */}
      <FadeInSection id="volunteer" className="scroll-mt-32">
         <div className="glass-panel rounded-xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center border border-white/10">
             <div className="flex-1">
                 <div className="flex items-center gap-3 mb-6"><Handshake className="text-inverse-primary w-8 h-8" /><h2 className="font-sans font-bold text-3xl text-white">Join Our Team</h2></div>
                 <p className="font-sans text-lg text-surface-variant mb-8">We are looking for dedicated high school students and community members to help make PMT a success.</p>
                 <div className="flex flex-wrap gap-3 mb-8">
                    {['Check-in','Proctoring','Grading Support','Setup','Cleanup','Event-day Help'].map(t => (
                      <span key={t} className="px-4 py-2 glass-panel rounded-full text-white font-mono text-sm">{t}</span>
                    ))}
                 </div>
                 <div className="flex items-center gap-4">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdsQx42Ub-TbnNINqzC06cVhh_Q2krulX-gdMjwTvYXTW2wXA/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-inverse-primary text-black font-mono font-medium rounded-lg hover:bg-primary-fixed transition-colors">Volunteer Interest Form</a>
                 </div>
             </div>
             <div className="w-full lg:w-80 aspect-square glass-panel rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden group bg-[#1c2128]">
                {/* Image Layer */}
                {joinGalleryImages.map((src, idx) => (
                  <img 
                    key={idx}
                    src={src} 
                    alt={`PMT Volunteer ${idx + 1}`} 
                    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 z-10 ${
                      idx === currentJoinGalleryIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
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
                <button onClick={handlePrevJoinImage} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity z-20 backdrop-blur-sm">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={handleNextJoinImage} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity z-20 backdrop-blur-sm">
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                {/* Dots */}
                <div className="absolute bottom-4 flex gap-1 z-20 overflow-x-auto w-full justify-center px-4">
                  {joinGalleryImages.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setCurrentJoinGalleryIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 flex-shrink-0 ${
                        idx === currentJoinGalleryIndex ? 'bg-inverse-primary scale-110' : 'bg-white/40 hover:bg-white/70'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
             </div>
         </div>
      </FadeInSection>

      {/* Past Problems & Results */}
      <FadeInSection className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: FileText, title: 'Past Problems', color: 'group-hover:text-inverse-primary', to: '/problems' },
          { icon: BarChart2, title: 'Results / Winners', color: 'group-hover:text-secondary-fixed', to: '/results' },
          { icon: Trophy, title: 'Countdown Recognition', color: 'group-hover:text-tertiary-fixed-dim', to: '/results' },
        ].map(item => (
          <Link to={item.to} key={item.title} className="glass-panel p-6 rounded-xl flex justify-between items-center glass-card-hover group">
             <div className="flex items-center gap-4">
                 <div className={`p-3 bg-white/5 rounded-lg text-surface-variant transition-colors ${item.color}`}><item.icon /></div>
                 <span className="font-sans font-bold text-xl text-white">{item.title}</span>
             </div>
             <ArrowRight className={`text-surface-variant transition-colors ${item.color}`} />
          </Link>
        ))}
      </FadeInSection>

      {/* CTA Section */}
      <FadeInSection className="text-center flex flex-col items-center justify-center glass-panel rounded-xl p-12 border border-inverse-primary/20">
         <h2 className="font-sans font-bold text-4xl text-inverse-primary mb-4">Ready to join PMT?</h2>
         <p className="font-sans text-lg text-surface-variant max-w-xl mb-8">Prepare to challenge yourself, meet fellow math enthusiasts, and experience an exciting competition.</p>
         <div className="flex gap-4">
            <button className="px-8 py-3 bg-inverse-primary text-black font-mono font-medium rounded-lg shadow-[0_0_20px_rgba(148,204,255,0.2)]">Stay Updated</button>
            <a href="#format" className="px-8 py-3 bg-white/5 text-inverse-primary font-mono font-medium rounded-lg border border-white/10 hover:bg-white/10">View Format</a>
         </div>
      </FadeInSection>

      {/* Sponsors Section */}
      <FadeInSection className="flex flex-col items-center justify-center pt-8 pb-12 w-full">
        <h3 className="font-sans font-bold text-2xl text-blue-300 mb-8 uppercase tracking-widest drop-shadow-sm">Our Sponsors</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-8">
          <img src={aopsLogo} alt="Art of Problem Solving" className="h-16 md:h-24 object-contain border-2 border-white p-2 rounded-lg bg-white" />
          <img src={janeStreetLogo} alt="Jane Street" className="h-16 md:h-24 object-contain border-2 border-white p-2 rounded-lg bg-white" />
          <img src={wolframLogo} alt="Wolfram Alpha" className="h-16 md:h-24 object-contain border-2 border-white p-2 rounded-lg bg-white" />
        </div>
        <div className="flex items-center gap-2 font-mono text-sm sm:text-base text-surface-variant">
          <span>Interested in sponsoring PMT 2027?</span>
          <a href="mailto:hartmathcounts1@gmail.com" className="flex items-center gap-1 text-primary-fixed-dim hover:text-blue-300 hover:underline transition-colors font-medium">
            Click here <ArrowRight className="w-4 h-4 ml-0.5" />
          </a>
        </div>
      </FadeInSection>

    </div>
  );
}
