import { useState } from 'react';
import { 
  Cloud, Zap, Warehouse, ShieldCheck, 
  CheckCircle2, ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import NetworkBackground from '../components/NetworkBackground';

export default function Solutions() {
  const [activeSolution, setActiveSolution] = useState('Enterprise Digitization');

  const solutionsList = [
    { id: 'Enterprise Digitization', icon: <Zap className="w-5 h-5" />, name: 'Enterprise Digitization' },
    { id: 'Cloud Transformation', icon: <Cloud className="w-5 h-5" />, name: 'Cloud Transformation' },
    { id: 'Supply Chain Optimization', icon: <Warehouse className="w-5 h-5" />, name: 'Supply Chain Optimization' },
    { id: 'Financial Automation', icon: <ShieldCheck className="w-5 h-5" />, name: 'Financial Automation' },
  ];

  const solutionDetails = {
    'Enterprise Digitization': {
      title: 'Enterprise Digitization',
      description: 'Accelerate your digital journey with modern stacks. We transition legacy operations into sleek, agile, and data-driven digital environments. Break free from paper constraints and historical technical debt.',
      features: [
        'Paperless Office Strategies',
        'Legacy System Modernization',
        'Digital Twin Modeling',
        'Process Automation Engines',
        'IoT Floor Integrations'
      ],
      benefits: [
        'Multiply workforce efficiency via digital acceleration.',
        'Drastically lower resource and printing overheads.',
        'Future-proof your operational foundation.'
      ],
      icon: <Zap className="w-12 h-12" />
    },
    'Cloud Transformation': {
      title: 'Cloud Transformation',
      description: 'Migrate and scale on secure cloud infrastructures. We architect hybrid, multi-cloud, or full-cloud paradigms offering unprecedented scalability, disaster recovery, and geographical redundancy.',
      features: [
        'Zero-downtime Migration Orchestration',
        'Cloud-native Microservices Architecture',
        'Multi-Cloud Load Balancing',
        'Disaster Recovery as a Service (DRaaS)',
        'Serverless Compute Optimization'
      ],
      benefits: [
        'Shift from heavy CapEx to agile OpEx models.',
        'Achieve 99.99% uptime with global redundancy.',
        'Scale computing resources in milliseconds.'
      ],
      icon: <Cloud className="w-12 h-12" />
    },
    'Supply Chain Optimization': {
      title: 'Supply Chain Optimization',
      description: 'Streamline procurement to delivery workflows. We build interconnected, transparent supply matrices allowing real-time tracking, predictive demand modeling, and minimized bottlenecks across the globe.',
      features: [
        'End-to-End Tracking Ledgers',
        'Supplier Performance Matrix',
        'AI Demand Forecasting',
        'Automated Restocking Protocols',
        'Dynamic Freight Routing'
      ],
      benefits: [
        'Enhance capital liquidity by lowering holding inventory.',
        'Radically decrease lead times globally.',
        'Isolate and repair supply bottlenecks instantly.'
      ],
      icon: <Warehouse className="w-12 h-12" />
    },
    'Financial Automation': {
      title: 'Financial Automation',
      description: 'Automate accounting, payroll, and compliance reporting. We implement rigorous financial engines that audit, process, and report monetary data automatically, neutralizing human error.',
      features: [
        'AI-driven Receipt OCR',
        'Automated Payroll Disbursal',
        'Continuous Ledger Auditing',
        'Multi-Currency Handling',
        'Tax API Integrations'
      ],
      benefits: [
        'Eliminate costly human input errors.',
        'Maintain perpetual audit-readiness natively.',
        'Execute complex payroll operations globally in minutes.'
      ],
      icon: <ShieldCheck className="w-12 h-12" />
    }
  };

  const activeData = solutionDetails[activeSolution as keyof typeof solutionDetails] || solutionDetails['Enterprise Digitization'];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col bg-brand-dark min-h-screen font-sans selection:bg-brand-primary/30 selection:text-white"
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
              <span className="flex h-2 w-2 rounded-full bg-brand-primary border border-brand-primary shadow-[0_0_10px_rgba(40,168,224,0.8)]"></span>
              Business Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              Solutions that scale
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              We design holistic architectures that solve your deepest technical constraints and unlock new verticals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 w-full relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="w-full lg:w-72 flex-shrink-0 bg-brand-dark/50 border border-white/5 rounded-3xl p-4 shadow-sm relative z-20 lg:sticky lg:top-32 backdrop-blur-xl">
            <div className="flex flex-col space-y-1">
              {solutionsList.map((sol) => {
                const isActive = activeSolution === sol.id;
                return (
                  <button
                    key={sol.id}
                    onClick={() => setActiveSolution(sol.id)}
                    className={`flex items-center gap-3 px-4 py-4 rounded-2xl text-sm font-bold transition-all text-left relative ${
                      isActive 
                        ? 'text-brand-primary bg-brand-primary/10 shadow-sm ring-1 ring-brand-primary/40' 
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="activeSol"
                        className="absolute inset-0 bg-brand-primary/10 rounded-2xl -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <div className={`${isActive ? 'text-brand-primary scale-110' : 'text-slate-400'} transition-transform`}>
                       {sol.icon}
                    </div>
                    {sol.name}
                  </button>
                )
              })}
            </div>
          </div>
          
          <div className="flex-grow min-w-0 w-full relative z-10">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeSolution}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-brand-dark/40 backdrop-blur-xl rounded-3xl border border-white/5 p-8 lg:p-12 shadow-xl shadow-black/20"
              >
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-brand-primary/10 text-brand-primary rounded-2xl shadow-[0_0_20px_rgba(40,168,224,0.15)]">
                    {activeData.icon}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">{activeData.title}</h3>
                </div>
                
                <p className="text-lg text-slate-400 mb-12 leading-relaxed max-w-3xl">
                  {activeData.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="bg-surface-light rounded-3xl p-8 border border-white/5 shadow-inner">
                    <h4 className="font-bold text-white mb-6 flex items-center gap-2">Methodology</h4>
                    <ul className="space-y-4">
                      {activeData.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-semibold text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-brand-dark border border-white/5 rounded-3xl p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary/10 rounded-full blur-[60px]"></div>
                    <h4 className="font-bold text-white mb-6 flex items-center gap-2">Outcomes</h4>
                    <ul className="space-y-4 relative z-10">
                      {activeData.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-primary/70 flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-slate-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-10 relative z-10">
                       <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-brand-primary transition-colors">
                          Learn More <ArrowRight className="w-4 h-4" />
                       </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="py-24 bg-transparent border-t border-white/5 relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Talk to an Architect</h2>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              Our architects design scalable, performant ecosystems. Consult with us today to accelerate your vision.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 btn border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg">
               Book Consultation <ArrowRight className="w-5 h-5"/>
            </Link>
        </div>
      </section>
    </motion.div>
  );
}
