import { motion } from 'motion/react';
import { Play, Search, Filter, Clock, PlayCircle } from 'lucide-react';
import NetworkBackground from '../components/NetworkBackground';

export default function VideoLibrary() {
  const videos = [
    {
      title: "Rapid ERP Core: Global Demo",
      duration: "15:42",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&w=800&q=80",
      category: "Demos",
      description: "A comprehensive look at our core ERP functionality across finance, HR, and supply chain modules."
    },
    {
      title: "The Future of Cloud Finance",
      duration: "45:00",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      category: "Webinars",
      description: "Expert panel discussing the shift towards automated, cloud-native financial reporting for enterprises."
    },
    {
      title: "Supply Chain Pro Deep Dive",
      duration: "24:18",
      thumbnail: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=800&q=80",
      category: "Technical",
      description: "How our predictive demand engine minimizes inventory carry costs with machine learning logic."
    },
    {
      title: "Scaling with Rapid's AI",
      duration: "12:05",
      thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      category: "Innovation",
      description: "Exploring the 'Sense' data center logic and how it powers hyper-relevant customer experiences."
    },
    {
      title: "Client Spotlight: TransWorld",
      duration: "08:30",
      thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      category: "Interviews",
      description: "Executives from TransWorld discuss their digital transformation journey with Rapid ERP."
    },
    {
      title: "POS Solutions Configuration",
      duration: "18:20",
      thumbnail: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80",
      category: "Training",
      description: "Setup and deployment guide for rapid offline/online retail configuration."
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
              Media Center
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
              Video Library
            </h1>
            <p className="text-xl text-slate-600 dark:text-white/80 leading-relaxed max-w-2xl mx-auto">
              Watch product demos, technical deep-dives, and executive interviews detailing the future of enterprise ERP.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-white/60 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search videos..." 
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-[#0A101C] border border-slate-100 dark:border-white/5 rounded-xl text-slate-900 dark:text-white outline-none focus:border-brand-primary transition-colors"
            />
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
            {["All", "Demos", "Webinars", "Technical", "Interviews"].map(cat => (
              <button key={cat} className="px-6 py-2 rounded-full border border-slate-200 dark:border-white/10 text-sm font-bold text-slate-600 dark:text-white/80 hover:text-slate-900 dark:text-white hover:border-brand-primary transition-all whitespace-nowrap">
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((vid, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 border border-slate-100 dark:border-white/5 shadow-2xl">
                <img 
                  src={vid.thumbnail} 
                  alt={vid.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-brand-primary/90 text-slate-900 dark:text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(40,168,224,0.5)]">
                    <Play className="w-6 h-6 fill-current" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-lg flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
                  <Clock className="w-3.5 h-3.5" />
                  {vid.duration}
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-brand-primary/90 rounded-lg text-[10px] uppercase font-black tracking-widest text-slate-900 dark:text-white shadow-lg">
                  {vid.category}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-primary transition-colors">{vid.title}</h3>
              <p className="text-slate-600 dark:text-white/80 text-sm leading-relaxed line-clamp-2">
                {vid.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
