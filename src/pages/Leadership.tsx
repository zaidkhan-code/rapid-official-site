import { motion } from 'motion/react';
import { Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import NetworkBackground from '../components/NetworkBackground';

export default function Leadership() {
  const leaders = [
    {
      name: 'Sarah Jenkins',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      bio: 'Visionary leader with 20+ years of enterprise software scaling experience, directing the overarching strategy of Rapid ERP.',
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80',
      bio: 'Former principal architect at major tech firms, Michael drives the technical innovation and infrastructure blueprints of our solutions.',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Chief Operating Officer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
      bio: 'Operational mastermind ensuring global execution flawlessly maps to our strategic milestones and client delivery protocols.',
    },
    {
      name: 'David Nkrumah',
      role: 'VP of Global Operations',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      bio: 'Orchestrating our multi-national teams to establish local strongholds and deliver unparalleled regional support globally.',
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col bg-slate-50 dark:bg-[#061121] min-h-screen font-sans selection:bg-brand-primary/30 selection:text-slate-900 dark:text-white"
    >
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden flex items-center justify-center border-b border-slate-100 dark:border-white/5">
        <NetworkBackground />

        <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10 w-full text-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand-primary shadow-[0_0_10px_rgba(40,168,224,0.8)]"></span>
              Corporate Structure
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
              Our Leadership
            </h1>
            <p className="text-xl text-slate-600 dark:text-white/80 leading-relaxed max-w-2xl mx-auto">
              Meet the executive team driving the technological breakthroughs and global expansion of Rapid ERP.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white dark:bg-[#0A101C] border border-slate-100 dark:border-white/5 rounded-3xl overflow-hidden group hover:border-brand-primary/30 transition-all duration-300 shadow-xl"
            >
              <div className="h-72 overflow-hidden overflow-hidden relative">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
              </div>
              
              <div className="p-8 relative">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-brand-primary transition-colors">{leader.name}</h3>
                <p className="text-brand-primary font-bold text-sm tracking-wider uppercase mb-4">{leader.role}</p>
                <p className="text-slate-600 dark:text-white/80 text-sm leading-relaxed mb-6">
                  {leader.bio}
                </p>
                
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-white/80 hover:text-slate-900 dark:text-white hover:bg-brand-primary hover:border-brand-primary transition-all">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-white/80 hover:text-slate-900 dark:text-white hover:bg-brand-primary hover:border-brand-primary transition-all">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
