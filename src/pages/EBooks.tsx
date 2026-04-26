import { motion } from 'motion/react';
import { Book, Download, ArrowRight, Layers, Cpu, Globe } from 'lucide-react';
import NetworkBackground from '../components/NetworkBackground';
import { Button } from '../components/ui/Button';

export default function EBooks() {
  const ebooks = [
    {
      title: "The Future of Enterprise AI",
      category: "Whitepaper",
      pages: "45 Pages",
      description: "A deep dive into how generative and predictive AI are reshaping ERP architectures in the coming decade.",
      icon: <Cpu className="w-10 h-10 text-brand-primary" />,
      gradient: "from-blue-500/10 to-transparent"
    },
    {
      title: "Supply Chain Resilience 2025",
      category: "e-Book",
      pages: "120 Pages",
      description: "Strategies for building anti-fragile supply chains that thrive amidst global uncertainty and geopolitical shifts.",
      icon: <Layers className="w-10 h-10 text-brand-primary" />,
      gradient: "from-purple-500/10 to-transparent"
    },
    {
      title: "Global Compliance Guide",
      category: "Technical Report",
      pages: "30 Pages",
      description: "Navigating the complex landscape of international data laws, tax regulations, and fiscal reporting standards.",
      icon: <Globe className="w-10 h-10 text-brand-primary" />,
      gradient: "from-emerald-500/10 to-transparent"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col bg-base-darker min-h-screen font-sans"
    >
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden flex items-center justify-center border-b border-white/5">
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
              Downloads
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              Whitepapers & e-Books
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Deep-dive literature covering the architecture and strategy behind modern enterprise transformation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {ebooks.map((book, idx) => (
            <motion.div 
              key={book.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-surface-dark border border-white/5 rounded-[40px] p-10 flex flex-col justify-between hover:border-brand-primary/30 transition-all group overflow-hidden relative shadow-2xl"
            >
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${book.gradient} blur-[50px] rounded-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="p-5 bg-white/5 rounded-3xl group-hover:scale-110 transition-transform duration-500">
                    {book.icon}
                  </div>
                  <span className="text-xs font-bold text-slate-500 border border-white/10 px-3 py-1.5 rounded-full uppercase tracking-widest">
                    {book.pages}
                  </span>
                </div>
                
                <p className="text-brand-primary font-bold text-sm tracking-widest uppercase mb-2">{book.category}</p>
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors">{book.title}</h2>
                <p className="text-slate-400 leading-relaxed mb-10">
                  {book.description}
                </p>
              </div>
              
              <div className="relative z-10 flex flex-col gap-4">
                <Button variant="primary" className="w-full py-4 rounded-2xl flex items-center justify-center gap-2 group-hover:shadow-[0_10px_30px_rgba(40,168,224,0.3)] transition-all">
                  Download PDF <Download className="w-4 h-4" />
                </Button>
                <button className="text-slate-500 hover:text-white text-sm font-bold transition-colors flex items-center justify-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
