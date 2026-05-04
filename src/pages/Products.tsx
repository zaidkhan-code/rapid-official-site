import { useState } from 'react';
import { 
  Database, Layout as LayoutIcon, Warehouse, ShieldCheck, 
  CheckCircle2, ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import NetworkBackground from '../components/NetworkBackground';

export default function Products() {
  const [activeProduct, setActiveProduct] = useState('Rapid ERP Core');

  const productsList = [
    { id: 'Rapid ERP Core', icon: <Database className="w-5 h-5" />, name: 'Rapid ERP Core' },
    { id: 'POS Solutions', icon: <LayoutIcon className="w-5 h-5" />, name: 'POS Solutions' },
    { id: 'Supply Chain Pro', icon: <Warehouse className="w-5 h-5" />, name: 'Supply Chain Pro' },
    { id: 'Fintech Suite', icon: <ShieldCheck className="w-5 h-5" />, name: 'Fintech Suite' },
  ];

  const productDetails = {
    'Rapid ERP Core': {
      title: 'Rapid ERP Core',
      description: 'Enterprise Resource Planning designed for mid to large organizations. Our core platform provides a unified view of your entire business, from robust financial modules to advanced HR mechanisms, streamlining workflows globally.',
      features: [
        'Centralized Financial Management',
        'Human Resources & Payroll',
        'Real-time Analytics Dashboard',
        'Custom Workflow Automation',
        'API-first Integration Architecture'
      ],
      benefits: [
        'Eliminate data silos through unified architecture.',
        'Accelerate executive decision-making with live insights.',
        'Ensure regulatory compliance effortlessly.'
      ],
      icon: <Database className="w-12 h-12" />
    },
    'POS Solutions': {
      title: 'POS Solutions',
      description: 'Cloud-native Point of Sale systems tailored for modern retail and hospitality. Provide lightning-fast checkout experiences, manage inventory locally or globally, and unlock omni-channel sales potential seamlessly.',
      features: [
        'Cloud-synced Transactions',
        'Offline Mode Capabilities',
        'Omni-channel Customer Profiles',
        'Dynamic Pricing & Discounts',
        'Hardware Agnostic Compatibility'
      ],
      benefits: [
        'Prevent lost sales with robust offline capabilities.',
        'Unify the online and in-store customer journey.',
        'Reduce cashier training time dramatically.'
      ],
      icon: <LayoutIcon className="w-12 h-12" />
    },
    'Supply Chain Pro': {
      title: 'Supply Chain Pro',
      description: 'End-to-end logistics and inventory visibility. Master your supply chain from procurement to final delivery, reducing carrying costs and ensuring optimum stock levels across your entire network.',
      features: [
        'Intelligent Demand Forecasting',
        'Multi-warehouse Topology Support',
        'Automated Procurement Planning',
        'Vendor Performance Analytics',
        'Route Optimization Hub'
      ],
      benefits: [
        'Avoid stockouts with precise predictive modeling.',
        'Optimize warehouse footprints for maximum yield.',
        'Strengthen negotiations via vendor metrics.'
      ],
      icon: <Warehouse className="w-12 h-12" />
    },
    'Fintech Suite': {
      title: 'Fintech Suite',
      description: 'Secure financial management and automated reporting built for the modern digital era. Engineered with banking-grade security to manage vast transactional flow securely and compliant.',
      features: [
        'Automated General Ledger',
        'Crypto & Fiat Reconciliation',
        'Tax Automation & Filing Ready',
        'Pci-DSS Grade Invoicing',
        'Dynamic Risk Assessment'
      ],
      benefits: [
        'Close books in days, not weeks.',
        'Reduce exposure to financial anomalies.',
        'Scale monetary operations globally seamlessly.'
      ],
      icon: <ShieldCheck className="w-12 h-12" />
    }
  };

  const activeData = productDetails[activeProduct as keyof typeof productDetails] || productDetails['Rapid ERP Core'];

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
              <span className="flex h-2 w-2 rounded-full bg-brand-primary border border-brand-primary shadow-[0_0_10px_rgba(40,168,224,0.8)]"></span>
              Core Products
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
              Our Products
            </h1>
            <p className="text-xl text-slate-600 dark:text-white/80 leading-relaxed">
              Explore the core products that power the world's most innovative enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 w-full relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="w-full lg:w-72 flex-shrink-0 bg-slate-50 dark:bg-[#061121]/50 border border-slate-100 dark:border-white/5 rounded-3xl p-4 shadow-sm relative z-20 lg:sticky lg:top-32 backdrop-blur-xl">
            <div className="flex flex-col space-y-1">
              {productsList.map((prod) => {
                const isActive = activeProduct === prod.id;
                return (
                  <button
                    key={prod.id}
                    onClick={() => setActiveProduct(prod.id)}
                    className={`flex items-center gap-3 px-4 py-4 rounded-2xl text-sm font-bold transition-all text-left relative ${
                      isActive 
                        ? 'text-brand-primary bg-brand-primary/10 shadow-sm ring-1 ring-brand-primary/40' 
                        : 'text-slate-600 dark:text-white/80 hover:text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="activeProd"
                        className="absolute inset-0 bg-brand-primary/10 rounded-2xl -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <div className={`${isActive ? 'text-brand-primary scale-110' : 'text-slate-600 dark:text-white/80'} transition-transform`}>
                       {prod.icon}
                    </div>
                    {prod.name}
                  </button>
                )
              })}
            </div>
          </div>
          
          <div className="flex-grow min-w-0 w-full relative z-10">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeProduct}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-50 dark:bg-[#061121]/40 backdrop-blur-xl rounded-3xl border border-slate-100 dark:border-white/5 p-8 lg:p-12 shadow-xl shadow-black/20"
              >
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-brand-primary/10 text-brand-primary rounded-2xl shadow-[0_0_20px_rgba(40,168,224,0.15)]">
                    {activeData.icon}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">{activeData.title}</h3>
                </div>
                
                <p className="text-lg text-slate-600 dark:text-white/80 mb-12 leading-relaxed max-w-3xl">
                  {activeData.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="bg-slate-50 dark:bg-[#061121] rounded-3xl p-8 border border-slate-100 dark:border-white/5 shadow-inner">
                    <h4 className="font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">Core Features</h4>
                    <ul className="space-y-4">
                      {activeData.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-semibold text-slate-700 dark:text-white/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-[#061121] border border-slate-100 dark:border-white/5 rounded-3xl p-8 text-slate-900 dark:text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary/10 rounded-full blur-[60px]"></div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">Business Value</h4>
                    <ul className="space-y-4 relative z-10">
                      {activeData.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-primary/70 flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-slate-700 dark:text-white/90">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-10 relative z-10">
                       <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white hover:text-brand-primary transition-colors">
                          Explore More <ArrowRight className="w-4 h-4" />
                       </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="py-24 bg-transparent border-t border-slate-100 dark:border-white/5 relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Need a custom implementation?</h2>
            <p className="text-lg text-slate-600 dark:text-white/80 mb-8 max-w-2xl mx-auto">
              We specialize in tailoring our core stack to your precise operational needs. Let's draft your blueprints.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 btn border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-slate-900 dark:text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg">
               Consult with Sales <ArrowRight className="w-5 h-5"/>
            </Link>
        </div>
      </section>
    </motion.div>
  );
}
