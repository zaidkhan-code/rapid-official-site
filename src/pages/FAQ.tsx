import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Search, HelpCircle, MessageSquare, Phone } from 'lucide-react';
import NetworkBackground from '../components/NetworkBackground';
import { Link } from 'react-router-dom';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What differentiates Rapid ERP from traditional solutions?",
      answer: "Rapid ERP is built on a modern, cloud-native architecture that prioritizes zero-latency data flow and enterprise AI integration. Unlike legacy systems, we offer modular scalability, allowing you to deploy only what you need while maintaining a unified data snapshot globally."
    },
    {
      question: "How long does a typical implementation take?",
      answer: "While implementation varies based on organizational complexity, our 'Rapid Blueprint' protocol typically allows mid-sized enterprises to go live in 3-6 months. We utilize automated migration scripts to minimize downtime during the transition."
    },
    {
      question: "Can Rapid ERP integrate with our existing third-party software?",
      answer: "Yes. Rapid is designed with an API-first philosophy. We offer native integrations for popular payment gateways, logistics carriers, and CRM platforms, plus a robust RESTful API for custom proprietary connections."
    },
    {
      question: "What level of support do you provide post-deployment?",
      answer: "We offer tiered support models, ranging from 24/7 dedicated engineering teams for global enterprises to business-hours support for growing organizations. All clients gain access to our extensive Knowledge Base and training academy."
    },
    {
      question: "Is my data secure in the cloud?",
      answer: "Security is our highest priority. We utilize banking-grade encryption (AES-256), multi-factor authentication, and continuous security monitoring. Our infrastructure is compliant with GDPR, SOC2 Type II, and PCI-DSS standards."
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
              Support Center
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Find instant answers to common queries regarding our platform, implementations, and security.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className={`bg-surface-dark border transition-all duration-300 rounded-[32px] overflow-hidden ${openIndex === idx ? 'border-brand-primary/50 shadow-[0_20px_40px_rgba(40,168,224,0.1)]' : 'border-white/5 shadow-xl hover:border-white/20'}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-8 text-left"
                >
                  <span className={`text-xl font-bold transition-colors ${openIndex === idx ? 'text-brand-primary' : 'text-white'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all ${openIndex === idx ? 'bg-brand-primary text-white rotate-180' : 'bg-white/5 text-slate-500'}`}>
                    {openIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-8 text-slate-400 leading-relaxed text-lg border-t border-white/5 pt-6">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-24 grid sm:grid-cols-3 gap-8">
            <div className="bg-surface-dark border border-white/5 p-8 rounded-3xl text-center flex flex-col items-center">
                <HelpCircle className="w-10 h-10 text-brand-primary mb-4" />
                <h3 className="font-bold text-white mb-2">Knowledge Base</h3>
                <p className="text-sm text-slate-500 mb-4">Explore technical docs</p>
                <Link to="/resources" className="text-brand-primary font-bold text-sm hover:underline">Explore</Link>
            </div>
            <div className="bg-surface-dark border border-white/5 p-8 rounded-3xl text-center flex flex-col items-center">
                <MessageSquare className="w-10 h-10 text-brand-primary mb-4" />
                <h3 className="font-bold text-white mb-2">Live Chat</h3>
                <p className="text-sm text-slate-500 mb-4">Talk to an expert</p>
                <button className="text-brand-primary font-bold text-sm hover:underline">Launch Chat</button>
            </div>
            <div className="bg-surface-dark border border-white/5 p-8 rounded-3xl text-center flex flex-col items-center">
                <Phone className="w-10 h-10 text-brand-primary mb-4" />
                <h3 className="font-bold text-white mb-2">Call Support</h3>
                <p className="text-sm text-slate-500 mb-4">+1 (800) RAPID-ERP</p>
                <Link to="/contact" className="text-brand-primary font-bold text-sm hover:underline">Contact Sales</Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
