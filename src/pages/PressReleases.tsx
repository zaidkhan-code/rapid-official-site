import { motion } from 'motion/react';
import { Newspaper, ArrowRight, Calendar, MapPin, Share2 } from 'lucide-react';
import NetworkBackground from '../components/NetworkBackground';

export default function PressReleases() {
  const releases = [
    {
      date: "October 24, 2025",
      location: "DUBAI, UAE",
      title: "Rapid ERP Announces 'Sense' Data Center Expansion in MENA Region",
      summary: "Strategic investment of $250M to triple AI computing capacity and support thousands of new enterprise customers across the Middle East.",
      category: "Expansion"
    },
    {
      date: "September 12, 2025",
      location: "LONDON, UK",
      title: "Rapid Partners with Global Logistics Giants for AI-Led Supply Chain Standard",
      summary: "Unveiling a new industry benchmark for real-time tracking transparency and predictive demand modeling logic.",
      category: "Partnership"
    },
    {
      date: "August 05, 2025",
      location: "SINGAPORE",
      title: "Rapid POS Solutions Secures Major Retail Contract with UrbanStyle Group",
      summary: "Deployment of cloud-native POS systems across 500+ flagship locations to unify global inventory operations.",
      category: "Contract"
    },
    {
      date: "July 18, 2025",
      location: "NEW YORK, USA",
      title: "Rapid ERP Named 'Leader' in Enterprise Innovation by Analyst Report",
      summary: "Recognized for proprietary AI product suite and exceptional scaling capabilities within mid-to-large organizational structures.",
      category: "Award"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col bg-slate-200 dark:bg-[#040914] min-h-screen font-sans"
    >
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden flex items-center justify-center border-b border-slate-100 dark:border-white/5">
        <NetworkBackground />

        <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10 text-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand-primary shadow-[0_0_10px_rgba(40,168,224,0.8)]"></span>
              Corporate Press
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
              Press Releases
            </h1>
            <p className="text-xl text-slate-600 dark:text-white/80 leading-relaxed max-w-2xl mx-auto">
              Follow our latest official announcements, corporate milestones, and global market expansions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          {releases.map((release, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white dark:bg-[#0A101C] border border-slate-100 dark:border-white/5 rounded-3xl p-8 lg:p-12 hover:border-brand-primary/30 transition-all group relative"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-slate-500 dark:text-white/60 tracking-wider">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-brand-primary" />
                    {release.date}
                  </div>
                  <div className="flex items-center gap-2 uppercase">
                    <MapPin className="w-4 h-4 text-brand-primary" />
                    {release.location}
                  </div>
                </div>
                <div className="px-4 py-1.5 bg-slate-100 dark:bg-[#060D1A] rounded-full text-[10px] font-black uppercase tracking-widest text-brand-primary border border-brand-primary/20">
                  {release.category}
                </div>
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white mb-6 group-hover:text-brand-primary transition-colors leading-tight">
                {release.title}
              </h2>
              
              <p className="text-slate-600 dark:text-white/80 text-lg leading-relaxed mb-10 max-w-4xl">
                {release.summary}
              </p>
              
              <div className="flex items-center justify-between pt-8 border-t border-slate-100 dark:border-white/5">
                <button className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white hover:text-brand-primary transition-colors group/link">
                  Read Full Release <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </button>
                <button className="flex items-center gap-2 text-slate-500 dark:text-white/60 hover:text-slate-900 dark:text-white transition-colors">
                  <Share2 className="w-4 h-4" />
                  <span className="hidden sm:inline text-xs font-bold uppercase tracking-widest">Share</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <button className="px-10 py-4 rounded-xl font-bold bg-white dark:bg-[#0A101C] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-brand-primary hover:border-brand-primary transition-all shadow-xl">
                Load Architecture Archives
            </button>
        </div>
      </section>
    </motion.div>
  );
}
