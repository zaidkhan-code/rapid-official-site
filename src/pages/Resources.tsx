import { motion } from 'motion/react';
import { 
  BookOpen, FileText, Book, PlayCircle, ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import NetworkBackground from '../components/NetworkBackground';

export default function Resources() {
  const resourceCategories = [
    {
      title: 'Blogs & Insights',
      description: 'The latest thoughts on ERP, AI, Cloud, and deep enterprise technology logic from our lead engineering teams and architects.',
      icon: <BookOpen className="w-10 h-10 text-brand-primary" />,
      link: '/blog',
      metrics: '300+ Articles',
      gradient: 'from-blue-500/10 to-transparent'
    },
    {
      title: 'Case Studies',
      description: 'Real-world deployment scenarios measuring the precise impacts of our enterprise solutions on heavy-duty operations globally.',
      icon: <FileText className="w-10 h-10 text-brand-primary" />,
      link: '/services', // we can just map to services portfolio logic for now
      metrics: '50+ Case Studies',
      gradient: 'from-emerald-500/10 to-transparent'
    },
    {
      title: 'Whitepapers & e-Books',
      description: 'Deep dives and extensive literature exploring the mathematics, infrastructure, and financial ROI behind large-scale digital transformation.',
      icon: <Book className="w-10 h-10 text-brand-primary" />,
      link: '/blog',
      metrics: '25+ Whitepapers',
      gradient: 'from-purple-500/10 to-transparent'
    },
    {
      title: 'Video Library',
      description: 'Visual breakdowns, system demos, and executive interviews discussing the architecture scaling modern businesses today.',
      icon: <PlayCircle className="w-10 h-10 text-brand-primary" />,
      link: '/services',
      metrics: '100+ Videos',
      gradient: 'from-orange-500/10 to-transparent'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col bg-brand-dark min-h-screen font-sans"
    >
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden flex items-center justify-center border-b border-white/5">
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
              Knowledge Base
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              Resources & Insights
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Explore our comprehensive library of technical literature, case studies, and engineering blogs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {resourceCategories.map((cat, idx) => (
            <motion.div 
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link to={cat.link} className="block group">
                <div className="bg-brand-dark/50 border border-white/5 p-10 rounded-3xl relative overflow-hidden transition-all duration-300 hover:border-brand-primary/30 hover:bg-white/[0.02] shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] h-full flex flex-col">
                  {/* Decorative background gradient */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${cat.gradient} blur-[50px] rounded-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <div className="p-4 bg-surface-light border border-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                      {cat.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500 border border-white/10 px-3 py-1.5 rounded-full">
                      {cat.metrics}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-brand-primary transition-colors">
                    {cat.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed mb-10 flex-grow relative z-10">
                    {cat.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm font-bold text-brand-primary group-hover:translate-x-2 transition-transform duration-300 relative z-10 mt-auto">
                    Browse Collection <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-transparent border-t border-white/5 relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need specific literature?</h2>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              If you require a specific architectural whitepaper or security audit report, please reach out to our compliance and technical documentation teams.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 btn border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg">
               Request Documents <ArrowRight className="w-5 h-5"/>
            </Link>
        </div>
      </section>

    </motion.div>
  );
}
