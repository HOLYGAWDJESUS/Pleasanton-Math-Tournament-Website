import { useState } from 'react';
import { FileText, Download } from 'lucide-react';
import { FadeInSection } from '../components/FadeInSection';

export function PastProblems() {
  const rounds = ['Sprint', 'Target', 'Team', 'Countdown'];
  const [selectedYear, setSelectedYear] = useState('2026');

  const getProblemLink = (round: string) => {
    switch(round) {
      case 'Sprint': return '/archived_problems/26_sprint_problem_set.pdf';
      case 'Target': return '/archived_problems/26_target_problem_set.pdf';
      case 'Team': return '/archived_problems/26_team_problem_set.pdf';
      case 'Countdown': return '/archived_problems/26_countdownround_problem_set.pdf';
      default: return '#';
    }
  };

  return (
    <div className="px-4 md:px-10 max-w-4xl mx-auto flex flex-col gap-12 pb-24">
       <header className="text-center space-y-4 pt-8">
           <h1 className="font-sans font-bold text-5xl text-primary-fixed-dim drop-shadow-sm">Past Problems</h1>
           <p className="font-sans text-lg text-outline-variant">Explore previous PMT problem sets and solutions by year.</p>
       </header>

       <FadeInSection className="flex justify-center">
          <div className="glass-panel p-1 rounded-full flex gap-1 items-center">
             {['2023','2024','2025','2026'].map(y => (
                <button 
                  key={y} 
                  onClick={() => setSelectedYear(y)}
                  className={`px-6 py-2 rounded-full font-mono font-medium text-sm transition-colors ${y === selectedYear ? 'bg-primary/20 text-primary-fixed-dim border border-primary/30 shadow-md' : 'text-outline-variant hover:text-white'}`}
                >
                  {y}
                </button>
             ))}
          </div>
       </FadeInSection>

       <FadeInSection className="glass-panel p-8 rounded-xl">
           <div className="overflow-x-auto">
              <table className="w-full text-left">
                  <thead>
                      <tr className="font-mono text-sm text-outline-variant border-b border-white/10">
                          <th className="font-normal uppercase tracking-wider py-4 pl-4">Round</th>
                          <th className="font-normal uppercase tracking-wider py-4 px-4 w-40">Problem Set</th>
                          <th className="font-normal uppercase tracking-wider py-4 pr-4 w-40 text-right">Solution Set</th>
                      </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                      {rounds.map(r => {
                          const hasProblems = selectedYear === '2026';
                          
                          return (
                          <tr key={r} className="hover:bg-white/5 transition-colors group">
                              <td className="py-5 pl-4 font-sans font-bold text-xl text-primary-fixed-dim">{r} Round</td>
                              <td className="py-5 px-4 w-40">
                                  {hasProblems ? (
                                     <a href={getProblemLink(r)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-lg hover:border-primary-fixed-dim/50 hover:text-primary-fixed-dim text-surface-variant whitespace-nowrap transition-colors">
                                         <FileText className="w-4 h-4" /> <span className="font-mono text-sm">Problems</span>
                                     </a>
                                  ) : (
                                     <button disabled className="flex items-center gap-2 px-4 py-2 glass-panel rounded-lg text-surface-variant/40 whitespace-nowrap cursor-not-allowed">
                                         <FileText className="w-4 h-4" /> <span className="font-mono text-sm">Problems</span>
                                     </button>
                                  )}
                              </td>
                              <td className="py-5 pr-4 w-40 text-right flex justify-end">
                                  <button disabled className="flex items-center gap-2 px-4 py-2 glass-panel rounded-lg text-surface-variant/40 whitespace-nowrap cursor-not-allowed">
                                      <Download className="w-4 h-4" /> <span className="font-mono text-sm">Solutions</span>
                                  </button>
                              </td>
                          </tr>
                          );
                      })}
                  </tbody>
              </table>
           </div>
           <div className="pt-8 flex justify-center">
             <span className="font-mono text-sm text-red-500 font-medium">*Will be added soon</span>
           </div>
       </FadeInSection>
    </div>
  );
}
