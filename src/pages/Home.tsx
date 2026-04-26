import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, Globe, Building2, Users, CheckCircle, CheckCircle2, Smile, 
  Languages, Settings, ArrowUpCircle, Link as LinkIcon,
  ShoppingCart, Truck, Car, Stethoscope, Pill, Hotel, Utensils,
  GraduationCap, Factory, Droplet, ArrowRight, Activity, Zap, Shield, ChevronRight, Star, Cpu, Server, Network, Layers, BarChart3, LineChart, PieChart,
  MessageCircle, Shirt, Package, Database, FileText, ChevronDown, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../components/ui/Button';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeFaqCategory, setActiveFaqCategory] = useState('All');

  const allFaqs = [
    { q: 'What is Rapid ERP and what do you do?', a: 'Rapid ERP is a leading enterprise technology company with over 20 years of experience. We design and deliver end-to-end software solutions and operational systems for global industries. Serving retail, healthcare, and finance, our flagship product automates the entire ecosystem from supply chain management to multi-channel distribution.', category: 'About Rapid ERP' },
    { q: 'How long has Rapid been in business?', a: 'We have been empowering businesses for over two decades with scalable digital solutions.', category: 'About Rapid ERP' },
    { q: 'What kind of support is available?', a: 'We offer 24/7 global support with dedicated technical account managers for Enterprise plans.', category: 'Implementation & Support' },
    { q: 'How does the AI Platform integrate?', a: 'Our AI Platform integrates seamlessly via secure API gateways, providing predictive intelligence and real-time analytics across your existing data structure without disruption.', category: 'AI Platform' },
    { q: 'Are your products customizable?', a: 'Yes, our modular architecture means you can add, remove, and customize products and tools to fit your specific operational needs.', category: 'Products & Tools' },
    { q: 'Do you offer solutions for specific industries?', a: 'Rapid ERP caters to vertical-specific needs for manufacturing, retail, finance, and hospitality with custom-tailored workflows and compliance standards.', category: 'Industries & Solutions' },
  ];

  const filteredFaqs = activeFaqCategory === 'All' ? allFaqs : allFaqs.filter(f => f.category === activeFaqCategory);

  const stats = [
    { value: '5,000+', label: 'Global Businesses' },
    { value: '25M+', label: 'Reports Processed' },
    { value: 'AES-256', label: 'Military-Grade Encryption' },
    { value: '99.99%', label: 'Infrastructure Uptime' }
  ];

  const whyChooseUs = [
    { icon: <Languages className="w-6 h-6 text-brand-primary" />, title: 'Bilingual Core', description: 'Native support for multiple languages ensures seamless operations globally.' },
    { icon: <Settings className="w-6 h-6 text-brand-primary" />, title: 'Highly Customizable', description: 'Fully adaptable architecture to meet the strict demands of your distinct workflows.' },
    { icon: <ArrowUpCircle className="w-6 h-6 text-brand-primary" />, title: 'Effortlessly Upgradable', description: 'Continuous deployment of cloud-native upgrades keeping you ahead of the curve.' },
    { icon: <LinkIcon className="w-6 h-6 text-brand-primary" />, title: 'API Integration', description: 'Unified data layers seamlessly sync with external vendors and legacy infrastructures.' }
  ];

  const industries = [
    { icon: <ShoppingCart />, title: 'Retail' },
    { icon: <Truck />, title: 'Distribution' },
    { icon: <Car />, title: 'Automotive' },
    { icon: <Hotel />, title: 'Hospitality' },
    { icon: <LineChart />, title: 'Financial' },
    { icon: <Stethoscope />, title: 'Healthcare' },
    { icon: <Pill />, title: 'Pharmaceutical' },
    { icon: <Shirt />, title: 'Garment' },
    { icon: <GraduationCap />, title: 'Education' },
    { icon: <Factory />, title: 'Manufacturing' },
    { icon: <Package />, title: 'Logistics' },
    { icon: <Droplet />, title: 'Oil and Gas' }
  ];

  const testimonials = [
    { name: 'Sophia Anderson', role: 'CEO at TechGlobal', text: 'Rapid\'s ERP system is phenomenal. The localized support and data agility transformed our disparate international offices into a unified operational hub.' },
    { name: 'Rafid Hasan', role: 'Operations Manager', text: 'We cut our monthly reconciliation process from 3 days to literally hours. The real-time visibility across our supply chain is an absolute game-changer.' },
    { name: 'David Chen', role: 'CFO at Apex', text: 'The ROI was realized in just six months. The comprehensive dashboards give our board unprecedented insight into our financial pulse.' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="flex flex-col bg-[#050C1A] font-sans selection:bg-brand-primary/30 selection:text-white min-h-screen"
    >
      {/* Hyper-Clean Elegance Hero */}
      <section className="relative min-h-screen pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden flex items-center justify-center">
         {/* Minimalist Grid & Glow Background */}
        <div className="absolute inset-0 z-0 bg-[#060D1A]">
          {/* Subtle dotted grid overlay mapping to layout */ }
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_30%,transparent_100%)]"></div>
          {/* Elegant top ambient glow completely different from the chaotic blurs */}
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
        </div>
        
        <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Hand Text: Premium, Clear, High-Contrast */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(35,168,224,0.1)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-primary shadow-[0_0_8px_brand-primary]"></span>
                </span>
                Rapid OS Core 3.0 Released
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
                Transforming Ideas into <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-emerald-400">Scalable Digital Solutions.</span>
              </h1>
              
              <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl font-medium">
                We deliver AI-powered, secure, and scalable IT solutions including Web, Mobile, ERP, and Cloud services to help businesses grow and innovate.
              </p>
              
              <div className="flex flex-wrap gap-4 items-center">
                <Link to="/contact">
                  <Button variant="secondary" className="gap-2">
                    Get Started <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline">
                    Book a Demo
                  </Button>
                </Link>
               
              </div>

              {/* Added Bullets */}
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                {[
                  "No Credit Card Required",
                  "Instant Access",
                  "Easy Upgrade"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-2.5 group">
                    <div className="w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-semibold text-gray-400 group-hover:text-white transition-colors duration-300">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Hand UI Composition: Completely separate from the old 3D image. Pure Glassmorphic Tailwind UI Composition. */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative h-[650px] w-full hidden lg:block"
            >
              {/* Panel 1 (Back Right) - Sales Chart */}
              <motion.div 
                animate={{y: [-10, 10, -10]}} 
                transition={{duration: 7, ease: "easeInOut", repeat: Infinity}} 
                className="absolute right-0 top-12 w-[85%] bg-[#080D1A]/90 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.4)] p-8 z-10"
              >
                <div className="flex justify-between items-center mb-10">
                  <div>
                    <div className="text-slate-400 text-sm font-semibold mb-1 uppercase tracking-wider">Global Revenue</div>
                    <div className="text-white text-3xl font-black tracking-tight font-mono">$1,459,203.00</div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center border border-brand-primary/20">
                    <BarChart3 className="w-6 h-6 text-brand-primary" />
                  </div>
                </div>
                <div className="flex items-end gap-3 h-40">
                  {[40, 70, 45, 90, 65, 85, 110, 75, 45, 80].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-brand-primary/20 via-brand-primary/10 to-transparent border border-b-0 border-brand-primary/20 rounded-t-lg relative hover:from-brand-primary/40 transition-colors" style={{ height: `${Math.min(h, 100)}%` }}>
                      {h > 80 && <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-primary rounded-full shadow-[0_0_12px_#00AEEF]"></div>}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Panel 2 (Front Left) - User Sessions / Activity */}
              <motion.div 
                animate={{y: [10, -10, 10]}} 
                transition={{duration: 6, ease: "easeInOut", repeat: Infinity}} 
                className="absolute left-[-5%] top-[280px] w-[60%] bg-[#0B1221]/95 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.6)] p-8 z-20"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                    <Users className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Active Nodes</div>
                    <div className="text-emerald-400 text-xs font-bold tracking-widest flex items-center gap-1.5 uppercase mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Live Region Synced
                    </div>
                  </div>
                </div>
                <div className="space-y-5">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#111A2D] border border-white/5 flex items-center justify-center text-xs font-bold text-slate-500">0{i+1}</div>
                      <div className="flex-1">
                        <div className="w-full h-2.5 bg-[#111A2D] rounded-full mb-2 overflow-hidden border border-white/5">
                           <div className="h-full bg-slate-600 rounded-full" style={{width: `${Math.max(40, 100 - i * 20)}%`}}></div>
                        </div>
                        <div className="w-1/2 h-2.5 bg-[#111A2D] rounded-full border border-white/5"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Panel 3 (Bottom Right) - System Server Notification */}
              <motion.div 
                animate={{y: [0, 8, 0]}} 
                transition={{duration: 5, ease: "easeInOut", repeat: Infinity}} 
                className="absolute right-10 bottom-[-10px] w-[50%] bg-brand-primary/10 backdrop-blur-2xl border border-brand-primary/20 rounded-2xl shadow-[0_20px_50px_rgba(0,174,239,0.15)] p-6 z-30"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center">
                      <Layers className="w-6 h-6 text-brand-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="text-white font-bold text-base">Cluster Sync</div>
                    <div className="text-slate-300 text-sm font-medium">Auto-scaling enabled</div>
                  </div>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full border border-white/5 overflow-hidden">
                  <div className="w-[70%] h-full bg-brand-primary rounded-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/40 animate-[translateX_2s_infinite]"></div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floating Trust & Stats Bar */}
      <section className="relative z-20 -mt-20 w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
          <div className="bg-[#111827]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 lg:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex flex-wrap justify-between items-center gap-8 gap-y-10">
           {stats.map((stat, idx) => (
             <div key={idx} className="flex-1 min-w-[200px] text-center md:text-left">
               <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight drop-shadow-lg">{stat.value}</div>
               <div className="text-xs font-bold text-brand-primary uppercase tracking-widest">{stat.label}</div>
             </div>
           ))}
         </div>
      </section>

      {/* AI Network Banner */}
      <section className="relative py-24 mx-4 lg:mx-8 xl:mx-12 2xl:mx-16 mt-24 max-w-[1800px] 2xl:mx-auto bg-[#040914] rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
        {/* Intricate network background */}
        <div className="absolute inset-0 z-0 bg-[#040914]"></div>
        <div className="absolute inset-0 z-0 opacity-60" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'150\' height=\'150\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 30 L90 70 M90 70 L140 40 M90 70 L110 130 M30 30 L50 110 M50 110 L110 130 M110 130 L140 40 M110 130 L160 170 M90 190 L50 110 M-20 60 L30 30 M140 40 L180 10 M170 110 L110 130\' stroke=\'%23ffffff\' stroke-width=\'0.5\' opacity=\'0.15\' /%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2.5\' fill=\'%23ffffff\' opacity=\'0.3\'/%3E%3Ccircle cx=\'90\' cy=\'70\' r=\'2\' fill=\'%23ffffff\' opacity=\'0.2\'/%3E%3Ccircle cx=\'140\' cy=\'40\' r=\'3\' fill=\'%23ffffff\' opacity=\'0.4\'/%3E%3Ccircle cx=\'50\' cy=\'110\' r=\'2.5\' fill=\'%23ffffff\' opacity=\'0.3\'/%3E%3Ccircle cx=\'110\' cy=\'130\' r=\'2\' fill=\'%23ffffff\' opacity=\'0.2\'/%3E%3C/svg%3E")', backgroundSize: '150px 150px' }}></div>
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'250\' height=\'250\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M50 50 L120 90 M120 90 L200 60 M120 90 L160 180 M50 50 L80 160 M80 160 L160 180 M160 180 L200 60 M-30 80 L50 50 M200 60 L240 20 M220 150 L160 180\' stroke=\'%23ffffff\' stroke-width=\'0.5\' opacity=\'0.15\' /%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'3\' fill=\'%23ffffff\' opacity=\'0.3\'/%3E%3Ccircle cx=\'120\' cy=\'90\' r=\'2.5\' fill=\'%23ffffff\' opacity=\'0.2\'/%3E%3Ccircle cx=\'200\' cy=\'60\' r=\'3.5\' fill=\'%23ffffff\' opacity=\'0.4\'/%3E%3Ccircle cx=\'80\' cy=\'160\' r=\'3\' fill=\'%23ffffff\' opacity=\'0.3\'/%3E%3Ccircle cx=\'160\' cy=\'180\' r=\'2.5\' fill=\'%23ffffff\' opacity=\'0.2\'/%3E%3C/svg%3E")', backgroundSize: '250px 250px' }}></div>
        
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[60%] z-0 bg-gradient-to-r from-[#040914] via-[#040914]/90 to-transparent"></div>

        <div className="relative z-10 max-w-4xl px-8 lg:px-16 text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight max-w-2xl">
            Artificial Intelligence Bringing You Closer to Customers
          </h2>
          <p className="text-slate-300 text-sm md:text-base font-medium mb-10 leading-relaxed max-w-2xl">
            Unlock growth opportunities with AI-driven travel software that enhances customer engagement, boosts direct sales, and fosters loyalty through hyper-relevant experiences. Powered by Rapid's proprietary 'Sense' data center, our AI product suite delivers cutting-edge solutions for tangible results.
          </p>
          <Button variant="primary" className="px-8 py-3 text-sm font-bold shadow-[0_0_20px_rgba(35,168,224,0.3)] hover:shadow-[0_0_30px_rgba(35,168,224,0.5)] transition-all rounded-full border-0">
            Explore
          </Button>
        </div>
      </section>

      {/* Core Features - Ultra Clean Architecture */}
      <section className="py-32 w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative">
          <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
          <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-2xl mb-6 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
             <Cpu className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4">Enterprise Architecture</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Designed for teams that <br className="hidden md:block" />
            demand <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">absolute power.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {whyChooseUs.map((item, idx) => (
            <motion.div 
              whileHover={{ y: -8 }}
              key={idx} 
              className="bg-[#0B1221] border border-white/5 hover:border-brand-primary/30 rounded-3xl p-8 relative overflow-hidden group transition-all duration-300 shadow-xl"
            >
              {/* Subtle top inner glow */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="w-14 h-14 bg-brand-primary/5 rounded-2xl flex items-center justify-center mb-8 border border-brand-primary/10 group-hover:bg-brand-primary/20 group-hover:scale-110 transition-all duration-300">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4 tracking-wide">{item.title}</h4>
              <p className="text-slate-400 leading-relaxed text-sm font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enterprise Suite Solutions */}
      <section className="py-24 bg-[#0A101C] relative border-t border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-brand-primary/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">Enterprise <span className="font-bold">suite solutions</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-4xl font-medium">
              Enhance operational efficiencies, alleviate staff burnout, and provide a cohesive user experience with solutions that enable teams to document and access critical enterprise data, streamline workflows, and support data safety.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Core operational record', icon: <Database className="w-6 h-6 text-brand-primary" /> },
              { title: 'Communications and alerts', icon: <Activity className="w-6 h-6 text-brand-primary" /> },
              { title: 'Device connectivity', icon: <Network className="w-6 h-6 text-brand-primary" /> },
              { title: 'Documentation management', icon: <FileText className="w-6 h-6 text-brand-primary" /> },
              { title: 'Global health & compliance', icon: <BarChart3 className="w-6 h-6 text-brand-primary" /> },
              { title: 'Virtual care and observation', icon: <Layers className="w-6 h-6 text-brand-primary" /> }
            ].map((sol, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 px-5 py-4 rounded-xl flex items-center justify-between cursor-pointer hover:bg-white/10 hover:border-brand-primary/40 transition-all duration-300 group shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-[#111A2D] p-2.5 rounded-lg border border-white/5 group-hover:scale-110 transition-transform">
                    {sol.icon}
                  </div>
                  <span className="text-white font-bold tracking-wide text-[15px]">{sol.title}</span>
                </div>
                <ChevronDown className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Work - Advanced Side-by-Side Layout */}
      <section className="py-32 relative border-t border-white/5 bg-[#030812] overflow-hidden">
        {/* Immersive background elements */}
        <div className="absolute left-[-10%] top-1/2 w-[800px] h-[800px] bg-brand-primary/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
        
        <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left Portion: Heading and Context */}
            <div className="lg:col-span-4 space-y-8 sticky top-32">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-8 bg-brand-primary rounded-full"></div>
                  <h2 className="text-brand-primary font-bold tracking-[0.2em] uppercase text-xs">Industries We Work</h2>
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight">
                  Helping Businesses <br />
                  <span className="text-slate-500">By Popular Industry area</span>
                </h3>
              </div>
              
              <p className="text-lg text-slate-400 font-medium leading-relaxed max-w-sm">
                Our suite of intelligent ERP modules are purpose-built to solve the unique operational complexities of diverse vertical markets.
              </p>
              
              <div className="pt-4">
                <Link to="/industries">
                  <Button variant="outline" className="group gap-3">
                    View All Industries
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Portion: Seamless Industry Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {industries.map((industry, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="aspect-square bg-[#0A101C] rounded-[24px] border border-white/5 hover:border-brand-primary/30 hover:bg-brand-primary/[0.03] transition-all duration-300 p-6 flex flex-col items-center justify-center text-center group shadow-2xl"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[#0F172A] border border-white/5 flex items-center justify-center text-brand-primary group-hover:text-white group-hover:bg-brand-primary transition-all duration-500 mb-5 relative">
                      {/* Inner glow for icon box */}
                      <div className="absolute inset-0 rounded-2xl bg-brand-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative z-10 scale-110">
                        {industry.icon}
                      </div>
                    </div>
                    <h4 className="text-[15px] font-extrabold text-slate-200 group-hover:text-white transition-colors tracking-wide">
                      {industry.title}
                    </h4>
                    
                    {/* Subtle bottom indicator */}
                    <div className="mt-4 w-6 h-1 bg-white/5 rounded-full group-hover:w-12 group-hover:bg-brand-primary transition-all duration-300"></div>
                  </motion.div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Our Partnership Logo Grid */}
      <section className="py-32 relative bg-[#060D1A] overflow-hidden border-y border-white/5">
        <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Portion: Text */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-6">
                <Settings className="w-4 h-4 text-[#E63946]" />
                <span className="text-[#E63946] text-xs font-bold uppercase tracking-widest">PARTNERSHIP</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Our Partnership</h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
                We work with the world's leading brands to bring you certified service and genuine integrations for every solution we deliver.
              </p>
            </div>

            {/* Right Portion: Logo Grid with Internal Borders */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-[1px] bg-white/10 p-[1px] rounded-2xl overflow-hidden shadow-2xl">
                {[
                  { name: 'Ferrari' },
                  { name: 'Lamborghini' },
                  { name: 'BMW' },
                  { name: 'Bentley' },
                  { name: 'Mercedes-Benz' },
                  { name: 'MINI' },
                  { name: 'Porsche' },
                  { name: 'Audi' },
                  { name: 'Volkswagen' }
                ].map((brand, i) => (
                  <div key={i} className="bg-[#0A101C] aspect-[4/3] flex flex-col items-center justify-center p-6 group hover:bg-white/5 transition-colors">
                    {/* Placeholder for actual logo - using stylized typography for tech/car vibes */}
                    <div className="w-14 h-14 mb-4 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:text-brand-primary group-hover:border-brand-primary/50 transition-colors">
                      <Star className="w-6 h-6" />
                    </div>
                    <span className="text-white text-sm font-semibold tracking-wide">
                      {brand.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Highly Polished Dark Testimonials */}
      <section className="py-32 overflow-hidden relative bg-[#040914]">
        <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 text-center mb-20 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 text-white rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-white/10 shadow-lg">
             <Star className="w-3.5 h-3.5 fill-brand-primary text-brand-primary" /> Client Success
          </div>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Loved by industry leaders</h3>
        </div>

        {/* Seamless edge fading */}
        <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-[#040914] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-[#040914] to-transparent z-20 pointer-events-none"></div>

        <div className="flex gap-8 px-8 animate-[scroll_50s_linear_infinite] w-max hover:[animation-play-state:paused]">
            {/* Duplicated for infinite scroll effect */}
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <div key={idx} className="w-[450px] flex-shrink-0 bg-[#0A101C] border border-white/5 p-12 rounded-3xl hover:border-white/20 transition-colors shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-[40px] group-hover:bg-brand-primary/10 transition-colors"></div>
                <div className="text-white/10 mb-8 group-hover:text-white/20 transition-colors absolute top-10 right-10">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L16.411 14.596H11.205V3H21V11.233L18.435 21H14.017ZM3.811 21L6.205 14.596H1V3H10.795V11.233L8.23 21H3.811Z"/>
                  </svg>
                </div>
                <p className="text-lg text-slate-300 leading-relaxed font-medium mb-12 relative z-10 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-5 relative z-10">
                  <div className="w-16 h-16 bg-[#111A2D] rounded-full overflow-hidden border-2 border-white/10 group-hover:border-brand-primary/50 transition-colors">
                     <img src={`https://picsum.photos/seed/${testimonial.name.replace(' ', '')}/100`} alt={testimonial.name} className="w-full h-full object-cover filter contrast-125" />
                  </div>
                  <div>
                    <div className="font-bold text-white tracking-wide text-lg">{testimonial.name}</div>
                    <div className="text-sm text-slate-500 font-medium tracking-wide mt-1">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Dynamic Pricing */}
      <section className="py-32 relative bg-[#060D1A] overflow-hidden border-t border-white/5">
        <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-brand-primary/20">
             Transparent Value
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Choose Right Plan</h2>
          <p className="text-slate-400 text-lg mb-16 font-medium">Simple & straightforward options with no hidden fees.</p>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 text-left max-w-[1400px] mx-auto">
            {/* Basic Plan */}
            <div className="bg-[#0A101C] border border-white/5 p-10 rounded-[32px] relative overflow-hidden group hover:border-brand-primary/20 transition-all duration-300 shadow-xl">
              <div className="font-extrabold text-white text-2xl mb-2 tracking-wide">Basic</div>
              <div className="text-slate-400 text-sm mb-8 font-medium">A simple start for everyone</div>
              <div className="mb-10 min-h-[80px]">
                <span className="text-5xl font-extrabold text-white tracking-tight">$0</span>
                <span className="text-slate-500 font-bold tracking-wide">/month</span>
              </div>
              <div className="space-y-5 mb-10">
                {['Up to 5 users', 'Basic support', '10GB storage'].map((f, i) => (
                   <div key={i} className="flex items-start gap-4 text-slate-300 text-[15px] font-semibold"><CheckCircle className="w-5 h-5 text-brand-primary/80 shrink-0 mt-0.5" /> <span>{f}</span></div>
                ))}
              </div>
              <Button variant="outline" className="w-full justify-center">Get Started</Button>
            </div>

            {/* Standard Plan */}
            <div className="bg-[#0A101C] border border-white/5 p-10 rounded-[32px] relative overflow-hidden group hover:border-brand-primary/20 transition-all duration-300 shadow-xl">
              <div className="font-extrabold text-white text-2xl mb-2 tracking-wide">Standard</div>
              <div className="text-slate-400 text-sm mb-8 font-medium">For small businesses</div>
              <div className="mb-10 min-h-[80px]">
                <span className="text-5xl font-extrabold text-white tracking-tight">$99</span>
                <span className="text-slate-500 font-bold tracking-wide">/month</span>
              </div>
              <div className="space-y-5 mb-10">
                {['Up to 50 users', 'Priority support', '100GB storage', 'Standard analytics'].map((f, i) => (
                   <div key={i} className="flex items-start gap-4 text-slate-300 text-[15px] font-semibold"><CheckCircle className="w-5 h-5 text-brand-primary/80 shrink-0 mt-0.5" /> <span>{f}</span></div>
                ))}
              </div>
              <Button variant="outline" className="w-full justify-center border-brand-primary/50 text-brand-primary hover:bg-brand-primary/10 hover:border-brand-primary">Free Selection</Button>
            </div>

            {/* Premium Plan (Highlighted) */}
            <div className="bg-gradient-to-b from-brand-primary/10 to-[#0A101C] border border-brand-primary/40 p-10 rounded-[32px] relative overflow-hidden transform xl:-translate-y-4 shadow-[0_30px_80px_rgba(35,168,224,0.15)] ring-1 ring-brand-primary/50">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-primary to-emerald-400"></div>
              <div className="font-extrabold text-white text-2xl mb-2 flex justify-between items-center tracking-wide">
                Premium <span className="bg-brand-primary text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-black">Most Popular</span>
              </div>
              <div className="text-slate-300 text-sm mb-8 font-medium">For growing enterprises</div>
              <div className="mb-10 min-h-[80px]">
                <span className="text-5xl font-extrabold text-white tracking-tight">$299</span>
                <span className="text-slate-400 font-bold tracking-wide">/month</span>
              </div>
              <div className="space-y-5 mb-10">
                {['Unlimited users', '24/7 dedicated support', '1TB storage', 'Advanced integrations', 'Custom reporting'].map((f, i) => (
                   <div key={i} className="flex items-start gap-4 text-white text-[15px] font-semibold"><CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" /> <span>{f}</span></div>
                ))}
              </div>
              <Button variant="primary" className="w-full justify-center shadow-[0_0_20px_rgba(35,168,224,0.3)] hover:shadow-[0_0_30px_rgba(35,168,224,0.5)]">Start Free Trial</Button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-[#0A101C] border border-white/5 p-10 rounded-[32px] relative overflow-hidden group hover:border-brand-primary/20 transition-all duration-300 shadow-xl">
              <div className="font-extrabold text-white text-2xl mb-2 tracking-wide">Enterprise</div>
              <div className="text-slate-400 text-sm mb-8 font-medium">For global corporations</div>
              <div className="mb-10 min-h-[80px] flex items-center">
                <span className="text-4xl font-extrabold text-white tracking-tight">Custom</span>
              </div>
              <div className="space-y-5 mb-10">
                {['Unlimited everything', 'Dedicated success manager', 'On-premise option', 'SLA guarantees', 'Custom SSO'].map((f, i) => (
                   <div key={i} className="flex items-start gap-4 text-slate-300 text-[15px] font-semibold"><CheckCircle className="w-5 h-5 text-brand-primary/80 shrink-0 mt-0.5" /> <span>{f}</span></div>
                ))}
              </div>
              <Button variant="outline" className="w-full justify-center">Contact Sales</Button>
            </div>
          </div>

          {/* Full Feature Comparison Table */}
          <div className="mt-32 max-w-[1400px] mx-auto text-left">
            <h3 className="text-3xl font-bold text-white mb-10 text-center tracking-tight">Full Feature Comparison</h3>
            <div className="overflow-x-auto rounded-3xl border border-white/10 bg-[#0A101C] shadow-2xl pb-4">
              <table className="w-full min-w-[900px] text-left border-collapse">
                <thead>
                  <tr>
                    <th className="py-6 px-8 border-b border-white/10 bg-[#0A101C]/50 w-[40%]">
                      <div className="text-slate-400 font-bold uppercase tracking-widest text-xs">Feature</div>
                    </th>
                    <th className="py-6 px-6 border-b border-white/10 bg-[#0A101C]/50 text-center">
                      <div className="text-white font-bold text-lg">Basic</div>
                    </th>
                    <th className="py-6 px-6 border-b border-white/10 bg-[#0A101C]/50 text-center relative">
                      <div className="text-white font-bold text-lg">Standard</div>
                    </th>
                    <th className="py-6 px-6 border-b border-brand-primary/30 bg-brand-primary/5 text-center relative whitespace-nowrap">
                      <div className="text-brand-primary font-bold text-lg">Premium</div>
                    </th>
                    <th className="py-6 px-6 border-b border-white/10 bg-[#0A101C]/50 text-center">
                      <div className="text-white font-bold text-lg">Enterprise</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Category 1 */}
                  <tr>
                    <td colSpan={5} className="py-4 px-8 border-b border-white/5 bg-white/[0.02]">
                      <div className="flex items-center gap-3">
                        <div className="w-1 h-6 bg-brand-primary rounded-full"></div>
                        <h4 className="text-white font-bold text-lg tracking-wide">Core Functionality</h4>
                      </div>
                    </td>
                  </tr>
                  {[
                    { name: 'Core Cloud ERP Modules', b: 'Unlimited', s: 'Unlimited', p: 'Unlimited', e: 'Unlimited' },
                    { name: 'Financial Management & Accounting', b: 'Up to 5', s: 'Unlimited', p: 'Unlimited', e: 'Unlimited' },
                    { name: 'Basic Automated Workflows', b: true, s: true, p: true, e: true },
                    { name: 'Advanced AI Powered Automations', b: false, s: true, p: true, e: true },
                    { name: 'Data export into CSV or PDF', b: true, s: true, p: true, e: true },
                    { name: 'Real-time Analytics Dashboard', b: true, s: true, p: true, e: true },
                  ].map((row, i) => (
                    <tr key={`t1-${i}`} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="py-5 px-8 text-slate-300 font-medium text-[15px] border-b border-white/5 group-hover:text-white transition-colors">{row.name}</td>
                      <td className="py-5 px-6 text-center border-b border-white/5 text-slate-400 font-semibold">{typeof row.b === 'boolean' ? (row.b ? <CheckCircle className="w-5 h-5 text-emerald-400 mx-auto" /> : <X className="w-5 h-5 text-slate-600 mx-auto" />) : row.b}</td>
                      <td className="py-5 px-6 text-center border-b border-white/5 text-slate-400 font-semibold">{typeof row.s === 'boolean' ? (row.s ? <CheckCircle className="w-5 h-5 text-emerald-400 mx-auto" /> : <X className="w-5 h-5 text-slate-600 mx-auto" />) : row.s}</td>
                      <td className="py-5 px-6 text-center border-b border-brand-primary/10 bg-brand-primary/5 text-brand-primary font-semibold">{typeof row.p === 'boolean' ? (row.p ? <CheckCircle className="w-5 h-5 text-brand-primary mx-auto" /> : <X className="w-5 h-5 text-slate-600 mx-auto" />) : row.p}</td>
                      <td className="py-5 px-6 text-center border-b border-white/5 text-slate-400 font-semibold">{typeof row.e === 'boolean' ? (row.e ? <CheckCircle className="w-5 h-5 text-emerald-400 mx-auto" /> : <X className="w-5 h-5 text-slate-600 mx-auto" />) : row.e}</td>
                    </tr>
                  ))}
                  
                  {/* Category 2 */}
                  <tr>
                    <td colSpan={5} className="py-4 px-8 border-b border-white/5 bg-white/[0.02]">
                      <div className="flex items-center gap-3">
                        <div className="w-1 h-6 bg-emerald-400 rounded-full"></div>
                        <h4 className="text-white font-bold text-lg tracking-wide">Administration & Security</h4>
                      </div>
                    </td>
                  </tr>
                  {[
                    { name: 'Admin Control Panel', b: true, s: true, p: true, e: true },
                    { name: 'Role-Based Access Control', b: true, s: true, p: true, e: true },
                    { name: 'Advanced Audit Logs', b: false, s: true, p: true, e: true },
                    { name: 'Custom Domain Mapping', b: false, s: false, p: true, e: true },
                    { name: 'SSO (Single Sign-On)', b: false, s: false, p: false, e: true },
                    { name: 'HIPAA & SOC2 Compliance', b: false, s: false, p: false, e: true },
                  ].map((row, i) => (
                    <tr key={`t2-${i}`} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="py-5 px-8 text-slate-300 font-medium text-[15px] border-b border-white/5 group-hover:text-white transition-colors">{row.name}</td>
                      <td className="py-5 px-6 text-center border-b border-white/5">{row.b ? <CheckCircle className="w-5 h-5 text-emerald-400 mx-auto" /> : <X className="w-5 h-5 text-slate-600 mx-auto" />}</td>
                      <td className="py-5 px-6 text-center border-b border-white/5">{row.s ? <CheckCircle className="w-5 h-5 text-emerald-400 mx-auto" /> : <X className="w-5 h-5 text-slate-600 mx-auto" />}</td>
                      <td className="py-5 px-6 text-center border-b border-brand-primary/10 bg-brand-primary/5">{row.p ? <CheckCircle className="w-5 h-5 text-brand-primary mx-auto" /> : <X className="w-5 h-5 text-slate-600 mx-auto" />}</td>
                      <td className="py-5 px-6 text-center border-b border-white/5">{row.e ? <CheckCircle className="w-5 h-5 text-emerald-400 mx-auto" /> : <X className="w-5 h-5 text-slate-600 mx-auto" />}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Categorized FAQ Section */}
      <section className="py-24 bg-[#040914] relative overflow-hidden border-t border-white/5">
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-[1800px] mx-auto md:py-10 py-6 px-4 lg:px-8 xl:px-12 2xl:px-16 flex flex-col lg:flex-row gap-16 items-start relative z-10">
          <div className="lg:w-1/3 w-full rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(35,168,224,0.1)] border border-brand-primary/10 shrink-0  group">
            <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay pointer-events-none"></div>
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000" alt="Consulting" className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="lg:w-2/3 w-full">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-slate-400 text-lg mb-10 font-medium">Browse questions by topic or select a category below</p>
            
            <div className="flex flex-wrap gap-3 mb-12">
              {['All', 'About Rapid ERP', 'AI Platform', 'Products & Tools', 'Industries & Solutions', 'Implementation & Support'].map((cat, i) => (
                <button 
                  key={i} 
                  onClick={() => { setActiveFaqCategory(cat); setOpenFaq(null); }}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                    activeFaqCategory === cat 
                      ? 'bg-brand-primary border-brand-primary text-white shadow-[0_0_20px_rgba(35,168,224,0.3)]' 
                      : 'bg-white/5 border-white/10 text-slate-300 hover:border-brand-primary/50 hover:text-brand-primary bg-backdrop-blur-md'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="space-y-4 mb-12">
              {filteredFaqs.map((faq, i) => (
                <div key={i} className="bg-[#0A101C] border border-white/5 rounded-2xl hover:border-brand-primary/30 transition-colors group overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full py-6 px-8 text-left flex justify-between items-center focus:outline-none"
                  >
                    <span className="text-white font-bold text-lg group-hover:text-brand-primary transition-colors">{faq.q}</span>
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors flex-shrink-0 ml-4 ${
                      openFaq === i 
                        ? 'border-brand-primary bg-brand-primary/10' 
                        : 'border-white/10 group-hover:border-brand-primary/50 group-hover:bg-brand-primary/5'
                    }`}>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openFaq === i ? 'text-brand-primary rotate-180' : 'text-slate-400 group-hover:text-brand-primary'}`} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <div className="px-8 pb-8 pt-0 text-slate-400 leading-relaxed text-[15px] font-medium max-w-4xl">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              {filteredFaqs.length === 0 && (
                 <div className="py-12 text-center text-slate-500 font-medium">No questions found for this category.</div>
              )}
            </div>

            {/* AI Search Input */}
            <div className="relative max-w-4xl">
              <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-2 font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-400 text-sm tracking-widest uppercase pointer-events-none">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-brand-primary to-purple-400 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#050C1A]"></div>
                </div>
                AI
              </div>
              <input type="text" placeholder="Ask me anything..." className="w-full pl-24 pr-8 py-5 rounded-full border border-white/10 bg-[#0A101C]/80 focus:bg-[#0A101C] focus:border-brand-primary/50 outline-none text-white placeholder:text-slate-500 font-medium shadow-[0_10px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_50px_rgba(35,168,224,0.1)] transition-all text-lg backdrop-blur-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Powered CTA Banner */}
      <section className="py-24 bg-[#050C1A] relative px-4 lg:px-8 xl:px-12 2xl:px-16 w-full max-w-[1800px] mx-auto">
        <div className="bg-gradient-to-r from-[#0E3A82] to-[#8042B8] rounded-[40px] p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-2xl border border-white/10">
          
          <div className="md:w-[55%] z-10 text-left mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-10 leading-[1.1] tracking-tight">
              Tech-Powered Success Awaits. Empower Your Digital Journey.
            </h2>
            <Button variant="outline" className="bg-white hover:bg-slate-50 text-[#050C1A] border-transparent font-bold px-10 py-5 rounded-[20px] shadow-xl flex items-center justify-center gap-3 hover:-translate-y-1 transition-all duration-300 text-lg w-max">
              Schedule a Call <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="md:w-[45%] relative z-10 flex justify-center md:justify-end">
             {/* Using an unsplash image for the person with a laptop */}
             <div className="relative">
               <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full scale-110"></div>
               <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" alt="Professional with laptop" className="w-[400px] h-[400px] object-cover rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.4)] ring-8 ring-white/10 relative z-10" />
             </div>
          </div>
        </div>
      </section>

    </motion.div>
  );
}
