import { motion } from 'motion/react';
import { Handshake, Globe, Zap, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react';
import NetworkBackground from '../components/NetworkBackground';
import { Link } from 'react-router-dom';

export default function Partners() {
  const partnerTiers = [
    {
      title: "Strategic Alliances",
      description: "Global infrastructure and cloud providers who enable the backbone of our 'Sense' data center logic.",
      icon: <Globe className="w-8 h-8 text-brand-primary" />,
      partners: ["AWS", "Microsoft Azure", "Google Cloud", "IBM Cloud"]
    },
    {
      title: "Technology Partners",
      description: "Specialized software providers whose technology is deeply integrated into our API-first ecosystem.",
      icon: <Zap className="w-8 h-8 text-brand-primary" />,
      partners: ["Stripe", "Salesforce", "ServiceNow", "Snowflake"]
    },
    {
      title: "Certified Implementers",
      description: "Expert consultancy firms trained in our 'Rapid Blueprint' protocol to ensure flawless deployments.",
      icon: <ShieldCheck className="w-8 h-8 text-brand-primary" />,
      partners: ["Accenture", "Deloitte", "KPMG", "EY"]
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
              Global Ecosystem
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
              Our Partners
            </h1>
            <p className="text-xl text-slate-600 dark:text-white/80 leading-relaxed max-w-2xl mx-auto">
              Join a world-class network of innovators, implementers, and infrastructure giants shaping the future of ERP.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {partnerTiers.map((tier, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white dark:bg-[#0A101C] border border-slate-100 dark:border-white/5 rounded-[40px] p-10 hover:border-brand-primary/30 transition-all group flex flex-col h-full shadow-2xl"
            >
              <div className="p-5 bg-slate-100 dark:bg-[#060D1A] rounded-3xl w-fit group-hover:scale-110 transition-transform duration-500 mb-8">
                {tier.icon}
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-brand-primary transition-colors leading-tight">
                {tier.title}
              </h2>
              
              <p className="text-slate-600 dark:text-white/80 leading-relaxed mb-10 flex-grow">
                {tier.description}
              </p>
              
              <div className="space-y-4 pt-8 border-t border-slate-100 dark:border-white/5">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-white/60 mb-4">Featured Partners</p>
                <div className="flex flex-wrap gap-3">
                  {tier.partners.map(p => (
                    <span key={p} className="px-4 py-2 bg-slate-100 dark:bg-[#060D1A] border border-slate-100 dark:border-white/5 rounded-full text-xs font-bold text-slate-700 dark:text-white/90">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-[#0A101C] relative border-y border-slate-100 dark:border-white/5 overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-8 border-l-4 border-brand-primary pl-8">
              Become a Rapid Partner Today
            </h2>
            <p className="text-xl text-slate-600 dark:text-white/80 mb-10 leading-relaxed">
              Unlock new revenue streams, gain exclusive engineering access, and empower your clients with the world's most agile ERP architecture.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="px-8 py-4 bg-brand-primary text-white rounded-xl font-bold hover:shadow-[0_10px_30px_rgba(40,168,224,0.4)] transition-all">
                Apply for Partnership
              </button>
              <Link to="/contact" className="px-8 py-4 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl font-bold hover:bg-slate-100 dark:hover:bg-white/5 transition-all flex items-center gap-2">
                Consult with Ecosystem Team <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-6 w-full">
            <div className="bg-slate-100 dark:bg-[#060D1A] border border-slate-100 dark:border-white/5 p-8 rounded-3xl flex flex-col items-center text-center group hover:bg-brand-primary/5 transition-all">
                <Handshake className="w-10 h-10 text-brand-primary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Referral Program</h4>
                <p className="text-xs text-slate-500 dark:text-white/60">Earn incentives for high-impact leads.</p>
            </div>
            <div className="bg-slate-100 dark:bg-[#060D1A] border border-slate-100 dark:border-white/5 p-8 rounded-3xl flex flex-col items-center text-center group hover:bg-brand-primary/5 transition-all">
                <Zap className="w-10 h-10 text-brand-primary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Reseller Network</h4>
                <p className="text-xs text-slate-500 dark:text-white/60">Provide localized sales and delivery.</p>
            </div>
            <div className="bg-slate-100 dark:bg-[#060D1A] border border-slate-100 dark:border-white/5 p-8 rounded-3xl flex flex-col items-center text-center group hover:bg-brand-primary/5 transition-all">
                <ShieldCheck className="w-10 h-10 text-brand-primary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Service Partner</h4>
                <p className="text-xs text-slate-500 dark:text-white/60">Deploy and maintain Rapid solutions.</p>
            </div>
            <div className="bg-slate-100 dark:bg-[#060D1A] border border-slate-100 dark:border-white/5 p-8 rounded-3xl flex flex-col items-center text-center group hover:bg-brand-primary/5 transition-all">
                <MessageSquare className="w-10 h-10 text-brand-primary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Partner Portal</h4>
                <p className="text-xs text-slate-500 dark:text-white/60">Access exclusive technical literature.</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
