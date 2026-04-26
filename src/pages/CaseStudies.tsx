import { motion } from 'motion/react';
import { FileText, ArrowRight, ExternalLink, Activity, Target, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import NetworkBackground from '../components/NetworkBackground';
import { Button } from '../components/ui/Button';

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Global Logistics Optimization",
      client: "TransWorld Freight Co.",
      impact: "40% reduction in lead time",
      tag: "Supply Chain",
      description: "How TransWorld leveraged Supply Chain Pro to unify their multi-national warehouse network and achieve zero-latency tracking.",
      icon: <Activity className="w-6 h-6" />,
      color: "text-blue-400"
    },
    {
      title: "Fintech Compliance at Scale",
      client: "MetroBank Digital",
      impact: "Zero audit failures over 24 months",
      tag: "Financial Automation",
      description: "Implementing Rapid's Fintech Suite to automate multi-currency reconciliation and real-time tax compliance for a top-tier digital bank.",
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "text-emerald-400"
    },
    {
      title: "Retail Digitization Transformation",
      client: "UrbanStyle Retailers",
      impact: "150% Increase in Online Conversion",
      tag: "POS Solutions",
      description: "A complete overhaul of 200+ physical stores with POS Solutions, bridging the gap between in-store inventory and global e-commerce snapshots.",
      icon: <Target className="w-6 h-6" />,
      color: "text-purple-400"
    },
    {
      title: "Legacy Infrastructure Migration",
      client: "Legacy Industrial Group",
      impact: "99.99% Uptime Achieved",
      tag: "Cloud Transformation",
      description: "Migrating 30 years of legacy data to a secure multi-cloud environment without a single second of operational downtime.",
      icon: <ExternalLink className="w-6 h-6" />,
      color: "text-orange-400"
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
              Success Stories
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Real-world impacts of Rapid ERP solutions across global enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, idx) => (
            <motion.div 
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-surface-dark border border-white/5 rounded-3xl p-10 hover:border-brand-primary/30 transition-all group relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <div className={`p-4 bg-white/5 rounded-2xl ${study.color}`}>
                  {study.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500 border border-white/10 px-3 py-1.5 rounded-full">
                  {study.tag}
                </span>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">{study.title}</h2>
              <p className="text-brand-primary/80 font-semibold mb-4">{study.client}</p>
              
              <div className="mb-6 py-4 border-y border-white/5">
                <p className="text-white font-bold text-lg">{study.impact}</p>
              </div>
              
              <p className="text-slate-400 leading-relaxed mb-8">
                {study.description}
              </p>
              
              <Button variant="outline" className="w-full py-6 rounded-2xl group/btn">
                Read Full Study <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
