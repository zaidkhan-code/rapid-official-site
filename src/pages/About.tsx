import { motion } from 'motion/react';
import { Award, Trophy, Medal, Star, Crown, ShieldCheck } from 'lucide-react';
import { cn } from '../lib/utils';
import { useEffect, ReactNode } from 'react';
import NetworkBackground from '../components/NetworkBackground';

// Reusable Section Header with vertical bar
const SectionHeader = ({ title }: { title: string }) => (
  <div className="flex items-center gap-4 mb-10">
    <div className="w-[4px] h-8 bg-brand-primary rounded-full"></div>
    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{title}</h2>
  </div>
);

// Reusable Grid layout for Logo Cards
const LogoGrid = ({ children }: { children: ReactNode }) => (
  <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
    {children}
  </div>
);

// Reusable Card for Logos
const LogoCard = ({ children }: { children: ReactNode }) => (
  <div className="bg-surface-light border border-white/5 rounded-2xl p-6 sm:p-8 flex items-center justify-center hover:border-brand-primary/40 hover:bg-surface-lighter transition-all duration-300 shadow-xl shadow-black/20 group min-h-[140px]">
    <div className="group-hover:scale-110 transition-transform duration-500 flex items-center justify-center w-full h-full">
      {children}
    </div>
  </div>
);

export default function About() {
  // Ensure scroll is at the top when navigating here
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lorem1 = "Retail Management Software provides you with exceptional capabilities that will simplify the way you manage all critical aspects of your business Retail Management Software provides you with exceptional capabilities that will simplify the way you manage all critical aspects of your businessRetail Management Software provides you with exceptional capabilities that will simplify the way you manage";
  const lorem2 = "all critical aspects of your businessRetail Management Software provides you with exceptional capabilities that will simplify the way you manage all critical aspects of your businessRetail Management Software provides you with exceptional capabilities that will simplify the way you manage all critical aspects of your business";

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col bg-base-dark min-h-screen font-sans selection:bg-brand-primary/30 selection:text-white"
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden flex items-center justify-center">
        <NetworkBackground />

        <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10 w-full">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">About Us</h1>
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              There are many variations of passag of Lorem Ipsum available, but the majority<br className="hidden md:block"/>
              have sufferedThere are many variations of passag of Lorem Ipsum available.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are / What We Do */}
      <section className="py-20 lg:py-28 relative border-b border-white/5">
        <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            {/* Who We Are */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-white mb-8">Who We Are</h2>
              <p className="text-[15px] leading-relaxed text-slate-400 font-medium">
                {lorem1}
              </p>
              <p className="text-[15px] leading-relaxed text-slate-400 font-medium mt-6">
                {lorem2}
              </p>
            </motion.div>

            {/* What We Do */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-white mb-8">What We Do</h2>
              <p className="text-[15px] leading-relaxed text-slate-400 font-medium">
                {lorem1}
              </p>
              <p className="text-[15px] leading-relaxed text-slate-400 font-medium mt-6">
                {lorem2}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="pt-20 pb-12 relative">
        <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
          <SectionHeader title="Awards" />
          <LogoGrid>
            <LogoCard><Trophy className="w-16 h-16 text-[#F59E0B]" /></LogoCard>
            <LogoCard><Award className="w-16 h-16 text-[#D97706]" /></LogoCard>
            <LogoCard>
               <div className="flex flex-col items-center">
                 <ShieldCheck className="w-14 h-14 text-[#10B981] mb-2" />
                 <span className="text-[10px] font-bold text-slate-300 tracking-widest text-center uppercase">Top 100<br/>Software</span>
               </div>
            </LogoCard>
            <LogoCard>
               <div className="flex flex-col items-center">
                 <Medal className="w-14 h-14 text-[#3B82F6] mb-2" />
                 <span className="text-[10px] font-bold text-slate-300 tracking-widest text-center uppercase">Best IT<br/>Services</span>
               </div>
            </LogoCard>
            <LogoCard><Star className="w-16 h-16 text-[#FBBF24]" /></LogoCard>
          </LogoGrid>
        </div>
      </section>

      {/* Membership */}
      <section className="py-12 relative">
        <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
          <SectionHeader title="Membership" />
          <LogoGrid>
            <LogoCard>
               <div className="flex flex-col items-center">
                  <span className="text-2xl sm:text-3xl font-black text-slate-200 tracking-tight">BASIS</span>
               </div>
            </LogoCard>
            <LogoCard>
               <div className="flex flex-col items-center gap-1">
                  <div className="flex gap-1 justify-center w-full">
                     <div className="w-4 h-6 border-[3px] border-rose-500 rounded-sm skew-x-[-10deg]"></div>
                     <div className="w-4 h-6 border-[3px] border-green-500 rounded-sm skew-x-[-10deg]"></div>
                  </div>
                  <span className="text-xl font-black text-slate-200 tracking-tighter">BCS</span>
               </div>
            </LogoCard>
            <LogoCard>
               <span className="text-2xl sm:text-3xl font-bold text-blue-500 italic lowercase tracking-tight">e-Cab</span>
            </LogoCard>
            <LogoCard>
               <span className="text-xl sm:text-2xl font-bold tracking-widest text-[#FF7A00]">BACCO</span>
            </LogoCard>
            <LogoCard>
               <div className="flex flex-col items-center gap-1">
                  <Crown className="w-8 h-8 text-emerald-600 mb-1" />
                  <span className="text-xl font-bold text-emerald-600 tracking-widest">DCCI</span>
               </div>
            </LogoCard>
          </LogoGrid>
        </div>
      </section>

      {/* Mission / Vision Split Section */}
      <section className="py-16 my-12 relative w-full">
        {/* Full width split backgrounds */}
        <div className="absolute inset-0 flex flex-col md:flex-row w-full h-full z-0 pointer-events-none">
          <div className="w-full md:w-1/2 h-full bg-[#1e140d]/80 border-r border-white/5"></div>
          <div className="w-full md:w-1/2 h-full bg-[#0a1a14]/80"></div>
        </div>

        <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-12 md:gap-0">
              <div className="py-10 md:py-16 md:pr-16 lg:pr-24">
                 <SectionHeader title="Our Mission" />
                 <p className="text-[15px] leading-relaxed text-slate-400 font-medium">
                    Retail Management Software provides you with exceptional capabilities that will simplify the way you manage all critical aspects of your businessRetail Management Software provides you with exceptional capabilities that will simplify. Retail Management Software provides you with exceptional capabilities that will simplify.
                 </p>
              </div>
              <div className="py-10 md:py-16 md:pl-16 lg:pl-24">
                 <SectionHeader title="Our Vision" />
                 <p className="text-[15px] leading-relaxed text-slate-400 font-medium">
                    Retail Management Software provides you with exceptional capabilities that will simplify the way you manage all critical aspects of your businessRetail Management Software provides you with exceptional capabilities that will simplify. Retail Management Software provides you with exceptional capabilities that will simplify.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 relative">
        <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
          <SectionHeader title="Certifications" />
          <LogoGrid>
             <LogoCard>
               <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border-[3px] border-red-500 mb-2 flex items-center justify-center">
                     <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                  </div>
                  <span className="text-[11px] font-bold text-red-500 tracking-wider">NBR</span>
               </div>
             </LogoCard>
             <LogoCard>
                <div className="border-[4px] border-blue-500 rounded-full w-20 h-20 flex items-center justify-center">
                   <div className="flex flex-col items-center">
                     <span className="text-sm font-black text-blue-500 leading-none">ISO</span>
                     <span className="text-[8px] font-bold text-blue-500 mt-1">9001:2015</span>
                   </div>
                </div>
             </LogoCard>
             <LogoCard>
                <div className="border-[2px] border-slate-500 py-3 px-4 text-center flex flex-col items-center">
                  <Crown className="w-7 h-7 text-slate-400 mb-2" />
                  <span className="text-xs font-black text-slate-300 tracking-tighter">UKAS</span>
                </div>
             </LogoCard>
             <LogoCard>
               <span className="text-3xl font-black text-sky-500 italic tracking-tighter">CMMI</span>
             </LogoCard>
             <LogoCard>
               <div className="flex flex-col items-center gap-1">
                  <Crown className="w-8 h-8 text-[#B48B44] mb-1" />
                  <span className="text-xl font-bold text-[#B48B44] tracking-widest">DCCI</span>
               </div>
             </LogoCard>
          </LogoGrid>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-12 pb-32 relative">
        <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
          <SectionHeader title="Technology Partners" />
          <LogoGrid>
             {/* Google */}
             <LogoCard>
               <span className="text-[28px] sm:text-[32px] font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05] relative">
                  G<span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span>
               </span>
             </LogoCard>
             {/* Microsoft */}
             <LogoCard>
               <span className="text-xl sm:text-2xl font-semibold text-slate-200 flex items-center gap-3">
                  <div className="grid grid-cols-2 gap-[3px]">
                     <div className="w-[10px] h-[10px] bg-[#F25022]"/>
                     <div className="w-[10px] h-[10px] bg-[#7FBA00]"/>
                     <div className="w-[10px] h-[10px] bg-[#00A4EF]"/>
                     <div className="w-[10px] h-[10px] bg-[#FFB900]"/>
                  </div>
                  Microsoft
               </span>
             </LogoCard>
             {/* PHP */}
             <LogoCard>
               <div className="bg-[#787CB5] text-surface-light px-5 py-2.5 rounded-full text-2xl font-bold italic tracking-wider leading-none">
                  php
               </div>
             </LogoCard>
             {/* Oracle */}
             <LogoCard>
               <span className="text-2xl sm:text-3xl font-black text-[#F80000] tracking-wider font-sans">
                  ORACLE
               </span>
             </LogoCard>
             {/* Cisco */}
             <LogoCard>
               <div className="flex flex-col items-center text-[#049FD9] gap-1">
                  <div className="flex items-end justify-center gap-1.5 mb-1 h-8">
                     <div className="w-1.5 h-3 bg-[#049FD9] rounded-t-sm"></div>
                     <div className="w-1.5 h-6 bg-[#049FD9] rounded-t-sm"></div>
                     <div className="w-1.5 h-8 bg-[#049FD9] rounded-t-sm"></div>
                     <div className="w-1.5 h-4 bg-[#049FD9] rounded-t-sm"></div>
                     <div className="w-1.5 h-6 bg-[#049FD9] rounded-t-sm"></div>
                     <div className="w-1.5 h-3 bg-[#049FD9] rounded-t-sm"></div>
                  </div>
                  <span className="text-[13px] font-black tracking-[0.2em]">CISCO</span>
               </div>
             </LogoCard>
          </LogoGrid>
        </div>
      </section>

    </motion.div>
  );
}
