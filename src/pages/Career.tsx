import { ChevronDown, FileText, UploadCloud, CheckCircle2, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState, useEffect, ReactNode } from 'react';
import { Button } from '../components/ui/Button';
import NetworkBackground from '../components/NetworkBackground';

// Using exact icons or near equivalents for the Hiring Process
import { Settings, CheckSquare, Users, Handshake } from 'lucide-react';

const positions = [
  { id: '1', title: 'Senior .NET Developer', location: 'DUBAI, UAE (ONSITE)', vacancies: 2 },
  { id: '2', title: 'Frontend Engineer (React)', location: 'REMOTE', vacancies: 1 },
  { id: '3', title: 'ERP Solutions Architect', location: 'DUBAI, UAE (HYBRID)', vacancies: 1 },
  { id: '4', title: 'UI/UX Product Designer', location: 'REMOTE', vacancies: 1 },
  { id: '5', title: 'DevOps & Cloud Security', location: 'REMOTE', vacancies: 2 },
  { id: '6', title: 'Account Manager', location: 'DUBAI, UAE (ONSITE)', vacancies: 3 },
];

const hiringProcess = [
  { title: 'Technical Interview', desc: 'A retail management system is a platform that Integrated several functions modules including', icon: Settings, color: 'text-red-400', bg: 'bg-red-400/10' },
  { title: 'Practical Test', desc: 'A retail management system is a platform that Integrated several functions modules including', icon: CheckSquare, color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { title: 'Management Interview', desc: 'A retail management system is a platform that Integrated several functions modules including', icon: Users, color: 'text-amber-400', bg: 'bg-amber-400/10' },
  { title: 'Final Selection & Onboarding', desc: 'A retail management system is a platform that Integrated several functions modules including', icon: Handshake, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
];

const faqs = [
  { 
    question: 'How do I become a Partner?', 
    answer: 'To become a strategic partner, start by submitting an inquiry through our Contact page. Our ecosystem team will review your profile and reach out within 48 hours for a discovery call to discuss mutual growth opportunities.' 
  },
  { 
    question: 'What are the core requirements to apply?', 
    answer: 'We look for individuals with a strong technical foundation, a passion for enterprise-grade solutions, and high-growth mindset. Specific role requirements are listed under each opening position box above.' 
  },
  { 
    question: 'How long does the hiring process typically take?', 
    answer: 'Our standard hiring pipeline consists of four stages: Technical Interview, Practical Assessment, Management Review, and Final Selection. This typically spans 2-3 weeks from initial application to offer.' 
  },
  { 
    question: 'Do you offer remote work opportunities?', 
    answer: 'Yes, Rapid ERP supports a hybrid and remote-first culture for most technical roles. We have core team members operating globally, ensuring 24/7 support and continuous development cycles.' 
  },
  { 
    question: 'What benefits does Rapid provide?', 
    answer: 'We offer competitive packages including health insurance, performance-based bonuses, continuous learning stipends, and a modern, high-tech work environment designed for absolute focus and collaboration.' 
  },
];

const SectionTitle = ({ title, rightAction }: { title: string, rightAction?: ReactNode }) => (
  <div className="flex justify-between items-end mb-8">
    <div className="flex items-center gap-3">
      <div className="w-1.5 h-6 bg-brand-primary rounded-full"></div>
      <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-none">{title}</h2>
    </div>
    {rightAction}
  </div>
);

export default function Career() {
  const [openFaqs, setOpenFaqs] = useState<number[]>([3]); // Set 4th item open by default

  const toggleAllFaqs = () => {
    if (openFaqs.length > 0) {
      setOpenFaqs([]);
    } else {
      setOpenFaqs(faqs.map((_, i) => i));
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col bg-slate-100 dark:bg-[#060D1A] min-h-screen font-sans selection:bg-brand-primary/30 selection:text-slate-900 dark:text-white"
    >
      {/* Dark Theme Header */}
      <section className="relative pt-32 pb-48 lg:pt-40 lg:pb-56 overflow-hidden flex items-center justify-center">
        <NetworkBackground />

        <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10 w-full text-left">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">Career</h1>
            <p className="text-base lg:text-lg text-slate-700 dark:text-white/90 leading-relaxed font-medium">
              There are many variations of passag of Lorem Ipsum available, but the majority<br className="hidden md:block"/>
              have sufferedThere are many variations of passag of Lorem Ipsum available.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Opening Positions */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-32 z-20 pb-20">
        <SectionTitle title="Opening Position" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {positions.map((job) => (
            <motion.div 
              key={job.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-[#061121] rounded-2xl shadow-sm border border-slate-100 dark:border-white/5 flex flex-col hover:border-brand-primary/40 hover:shadow-lg hover:shadow-brand-primary/10 transition-all duration-300 group"
            >
              <div className="p-8 pb-10 flex flex-col items-start flex-grow">
                 <span className="text-[11px] font-bold tracking-widest text-slate-600 dark:text-white/80 mb-4">{job.location}</span>
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 group-hover:text-brand-primary transition-colors">{job.title}</h3>
                 <Link to={`/career/${job.id}`}>
                   <Button variant="outline" size="sm" className="text-[10px] border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-slate-900 dark:text-white">
                     APPLY NOW
                   </Button>
                 </Link>
              </div>
              <div className="border-t border-slate-100 dark:border-white/5 p-5 px-8 flex items-center">
                 <span className="text-[11px] font-bold tracking-widest text-slate-600 dark:text-white/80">VACANCIES <span className="text-slate-900 dark:text-white ml-3">{job.vacancies}</span></span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Hiring Process */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-28">
        <SectionTitle title="Hiring Process" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hiringProcess.map((step, idx) => (
            <motion.div 
               key={idx}
               initial={{ y: 20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="bg-slate-50 dark:bg-[#061121] p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-white/5 hover:border-brand-primary/40 hover:shadow-lg hover:shadow-brand-primary/10 transition-all duration-300 group"
            >
               <div className={`w-14 h-14 rounded-xl ${step.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                 <step.icon className={`w-7 h-7 ${step.color}`} strokeWidth={1.5} />
               </div>
               <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-3 group-hover:text-brand-primary transition-colors">{step.title}</h3>
               <p className="text-xs text-slate-600 dark:text-white/80 leading-relaxed font-medium">
                 {step.desc}
               </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 py-10 pb-32">
        <SectionTitle 
          title="FAQs" 
          rightAction={
            <button 
               onClick={toggleAllFaqs} 
               className="text-xs font-bold text-brand-primary hover:underline hover:text-brand-secondary transition-colors"
            >
              {openFaqs.length > 0 ? 'Close All' : 'Open All'}
            </button>
          } 
        />
        <div className="space-y-5">
           {faqs.map((faq, idx) => {
             const isOpen = openFaqs.includes(idx);
             return (
               <div 
                 key={idx} 
                 className={`w-full bg-slate-50 dark:bg-[#061121] rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-brand-primary shadow-sm shadow-brand-primary/10' : 'border-slate-100 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20'}`}
               >
                 <button 
                   onClick={() => {
                     if (isOpen) {
                       setOpenFaqs(openFaqs.filter(i => i !== idx));
                     } else {
                       setOpenFaqs([...openFaqs, idx]);
                     }
                   }}
                   className="w-full flex items-center justify-between p-6 text-left"
                 >
                   <span className={`text-sm lg:text-base font-bold transition-colors ${isOpen ? 'text-brand-primary' : 'text-slate-900 dark:text-white'}`}>
                     {faq.question}
                   </span>
                   {isOpen ? (
                     <ChevronUp className="w-5 h-5 text-brand-primary" />
                   ) : (
                     <ChevronDown className="w-5 h-5 text-slate-600 dark:text-white/80" />
                   )}
                 </button>
                 <AnimatePresence initial={false}>
                   {isOpen && (
                     <motion.div
                       key={`faq-content-${idx}`}
                       initial={{ height: 0, opacity: 0 }}
                       animate={{ height: "auto", opacity: 1 }}
                       exit={{ height: 0, opacity: 0 }}
                       transition={{ duration: 0.3, ease: "easeInOut" }}
                       className="overflow-hidden"
                     >
                       <div className="px-6 pb-6 text-sm font-medium leading-relaxed text-slate-600 dark:text-white/80">
                         <div className="pt-4 border-t border-slate-100 dark:border-white/5">{faq.answer}</div>
                       </div>
                     </motion.div>
                   )}
                 </AnimatePresence>
               </div>
             )
           })}
        </div>
      </section>

    </motion.div>
  );
}
