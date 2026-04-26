import { useState, useEffect } from 'react';
import { 
  CheckCircle2, ArrowRight, ChevronLeft, ChevronRight, Play, ExternalLink,
  Smartphone, Globe, Zap, Laptop, Palette, Brain, Wand2, BadgeCheck, Search, Monitor, Watch, Database, Fingerprint, Cpu, GitMerge, Network, BarChart3, Wifi, ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useSearchParams } from 'react-router-dom';
import { cn } from '../lib/utils';

// Maps each of our 12 services to its dedicated visual styling
const serviceVisuals: Record<string, any> = {
  'ERP Development': { id: 'ERP Development', label: 'ERP\nDevelopment', from: '#4ADE80', to: '#16A34A', icon: Database, img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80' },
  'Web Development': { id: 'Web Development', label: 'Web\nDevelopment', from: '#F97316', to: '#EF4444', icon: Laptop, img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80' },
  'App Development': { id: 'App Development', label: 'App\nDevelopment', from: '#4F46E5', to: '#3B82F6', icon: Smartphone, img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80' },
  'Biometric Solutions': { id: 'Biometric Solutions', label: 'Biometric\nSolutions', from: '#8B5CF6', to: '#6366F1', icon: Fingerprint, img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=400&q=80' },
  'IoT Solutions': { id: 'IoT Solutions', label: 'IoT\nSolutions', from: '#22C55E', to: '#10B981', icon: Cpu, img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80' },
  'AI & ML Solutions': { id: 'AI & ML Solutions', label: 'AI & ML\nSolutions', from: '#EC4899', to: '#E11D48', icon: Brain, img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=400&q=80' },
  'UI / UX Design': { id: 'UI / UX Design', label: 'UI / UX\nDesign', from: '#F59E0B', to: '#EA580C', icon: Palette, img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=400&q=80' },
  'DevOps': { id: 'DevOps', label: 'DevOps', from: '#06B6D4', to: '#0891B2', icon: GitMerge, img: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=400&q=80' },
  'Middleware Solutions': { id: 'Middleware Solutions', label: 'Middleware\nSolutions', from: '#A855F7', to: '#7E22CE', icon: Network, img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80' },
  'BigData Solutions': { id: 'BigData Solutions', label: 'BigData\nSolutions', from: '#EAB308', to: '#CA8A04', icon: BarChart3, img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80' },
  'RFID Solutions': { id: 'RFID Solutions', label: 'RFID\nSolutions', from: '#3B82F6', to: '#2563EB', icon: Wifi, img: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c8ddd3?auto=format&fit=crop&w=400&q=80' },
  'CyberSecurity': { id: 'CyberSecurity', label: 'Cyber\nSecurity', from: '#EF4444', to: '#991B1B', icon: ShieldCheck, img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=400&q=80' },
};

// Precisely maps 1 center blob and 11 orbiting blobs
const blobPositions = [
  { x: 0, y: 0, w: 320, h: 320, z: 50, shape: '45% 55% 65% 35% / 45% 45% 55% 55%', textClass: 'text-2xl sm:text-3xl', delay: 0 },
  { x: 260, y: -160, w: 260, h: 260, z: 30, shape: '60% 40% 30% 70% / 60% 30% 70% 40%', textClass: 'text-xl', delay: 0.5 },
  { x: -220, y: 180, w: 280, h: 280, z: 30, shape: '50% 50% 20% 80% / 25% 80% 20% 75%', textClass: 'text-xl', delay: 1 },
  { x: -250, y: -150, w: 240, h: 240, z: 30, shape: '40% 60% 70% 30% / 40% 50% 60% 50%', textClass: 'text-lg', delay: 0.2 },
  { x: 260, y: 190, w: 220, h: 220, z: 30, shape: '50% 50% 40% 60% / 60% 40% 50% 50%', textClass: 'text-lg', delay: 0.7 },
  { x: 50, y: -270, w: 200, h: 140, z: 20, shape: '60% 40% 70% 30% / 70% 70% 30% 30%', textClass: 'text-base', delay: 1.2 },
  { x: 30, y: 260, w: 200, h: 150, z: 40, shape: '40% 60% 40% 60% / 30% 70% 40% 60%', textClass: 'text-base', delay: 0.8 },
  { x: -400, y: -70, w: 180, h: 180, z: 20, shape: '70% 30% 50% 50% / 50% 50% 70% 30%', textClass: 'text-sm', delay: 0.4 },
  { x: -380, y: 110, w: 160, h: 160, z: 40, shape: '50%', textClass: 'text-sm', delay: 0.9 },
  { x: -370, y: 280, w: 160, h: 160, z: 20, shape: '40% 60% 50% 50% / 50% 50% 50% 50%', textClass: 'text-sm', delay: 1.1 },
  { x: 450, y: -80, w: 180, h: 140, z: 20, shape: '50% 50% 30% 70% / 40% 40% 60% 60%', textClass: 'text-sm', delay: 0.6 },
  { x: 440, y: 130, w: 160, h: 160, z: 20, shape: '50% 50% 60% 40% / 50% 50% 50% 50%', textClass: 'text-sm', delay: 1.3 },
];

export default function Services() {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') || 'ERP Development';
  const [activeService, setActiveService] = useState(initialService);
  const [activeSection, setActiveSection] = useState<'Overview' | 'Portfolio' | 'Videos'>('Overview');

  useEffect(() => {
    if (searchParams.get('service')) {
      setActiveService(searchParams.get('service') as string);
    }
  }, [searchParams]);

  // Reset to overview when switching services
  useEffect(() => {
    setActiveSection('Overview');
  }, [activeService]);

  const servicesList = [
    'ERP Development',
    'Web Development',
    'App Development',
    'Biometric Solutions',
    'IoT Solutions',
    'AI & ML Solutions',
    'UI / UX Design',
    'DevOps',
    'Middleware Solutions',
    'BigData Solutions',
    'RFID Solutions',
    'CyberSecurity'
  ];

  const serviceDetails = {
    'ERP Development': {
      title: 'ERP Development',
      description1: 'Streamline and integrate your business operations with custom ERP solutions built to fit your unique needs. We design and develop scalable Enterprise Resource Planning systems that unify processes, improve efficiency, and provide real-time visibility across your organization.',
      stats: [
        { value: '95%', label: 'Client Satisfaction Rate' },
        { value: '40%', label: 'Average Cost Savings' },
        { value: '99.9%', label: 'Uptime for Critical Systems' }
      ],
      description2: 'From finance and HR to supply chain and inventory, our ERP solutions help you manage everything from a single, powerful platform.',
      keyServices: [
        'Custom ERP Development',
        'ERP Integration & Migration',
        'Module Development (HR, Finance, Inventory, CRM)',
        'Cloud-based ERP Solutions',
        'ERP Maintenance & Support'
      ]
    },
    'Web Development': {
      title: 'Web Development',
      description1: 'Build a strong digital presence with modern, high-performing websites tailored to your business goals. We create responsive, secure, and user-friendly websites that deliver exceptional user experiences across all devices.',
      stats: [
        { value: '95%', label: 'Client Satisfaction Rate' },
        { value: '40%', label: 'Average Cost Savings' },
        { value: '99.9%', label: 'Uptime for Critical Systems' }
      ],
      description2: 'Whether you need a corporate website, e-commerce platform, or custom web application, we bring your vision to life with cutting-edge technologies.',
      keyServices: [
        'Custom Website Development',
        'E-commerce Development',
        'CMS Development (WordPress, Drupal)',
        'Web Application Development',
        'Website Maintenance & Optimization'
      ]
    },
    'App Development': {
      title: 'App Development',
      description1: 'Turn your ideas into powerful mobile applications that engage users and drive business growth. We develop high-quality, scalable apps for both Android and iOS platforms with a focus on performance and usability.',
      stats: [
        { value: '95%', label: 'Client Satisfaction Rate' },
        { value: '40%', label: 'Average Cost Savings' },
        { value: '99.9%', label: 'Uptime for Critical Systems' }
      ],
      description2: 'From concept to launch, we ensure your app delivers a seamless experience and meets your business objectives.',
      keyServices: [
        'Android & iOS App Development',
        'Cross-platform App Development (Flutter, React Native)',
        'UI/UX-Focused App Design',
        'App Testing & Quality Assurance',
        'App Maintenance & Upgrades'
      ]
    },
    'Biometric Solutions': {
      title: 'Biometric Solutions',
      description1: 'Secure and simplify identity verification with advanced biometric solutions. We provide reliable authentication systems using unique biological traits such as fingerprints, facial recognition, and iris scanning.',
      stats: [
        { value: '95%', label: 'Client Satisfaction Rate' },
        { value: '40%', label: 'Average Cost Savings' },
        { value: '99.9%', label: 'Uptime for Critical Systems' }
      ],
      description2: 'Our biometric solutions enhance security while improving user convenience across various applications.',
      keyServices: [
        'Fingerprint Recognition Systems',
        'Facial Recognition Solutions',
        'Iris & Retina Scanning',
        'Time & Attendance Systems',
        'Access Control & Identity Management'
      ]
    },
    'IoT Solutions': {
      title: 'IoT',
      description1: 'Connect, monitor, and control your devices with our end-to-end Internet of Things (IoT) solutions. We enable businesses to harness real-time data for smarter operations and improved efficiency.',
      stats: [
        { value: '95%', label: 'Client Satisfaction Rate' },
        { value: '40%', label: 'Average Cost Savings' },
        { value: '99.9%', label: 'Uptime for Critical Systems' }
      ],
      description2: 'From smart sensors to cloud integration, our IoT solutions are designed to streamline processes, reduce costs, and enhance visibility across your ecosystem.',
      keyServices: [
        'Smart Device Integration',
        'IoT Platform Development',
        'Real-time Monitoring & Analytics',
        'Industrial IoT (IIoT) Solutions',
        'Edge Computing & Automation'
      ]
    },
    'AI & ML Solutions': {
      title: 'AI & ML',
      description1: 'Transform your business with intelligent, data-driven solutions. We help you leverage Artificial Intelligence and Machine Learning to automate processes, uncover insights, and enhance decision-making.',
      stats: [
        { value: '95%', label: 'Client Satisfaction Rate' },
        { value: '40%', label: 'Average Cost Savings' },
        { value: '99.9%', label: 'Uptime for Critical Systems' }
      ],
      description2: 'Our AI & ML services include predictive analytics, natural language processing, computer vision, and custom model development tailored to your business needs. Whether you\'re looking to optimize operations or create innovative products, we deliver scalable and future-ready solutions.',
      keyServices: [
        'Predictive Analytics & Forecasting',
        'Natural Language Processing (NLP)',
        'Computer Vision Solutions',
        'AI Chatbots & Virtual Assistants',
        'Custom Machine Learning Models'
      ]
    },
    'UI / UX Design': {
      title: 'UI / UX Design',
      description1: 'Create meaningful and engaging digital experiences with our user-centric UI/UX design services. We focus on understanding user behavior to design intuitive, visually appealing interfaces that enhance usability and satisfaction.',
      stats: [
        { value: '95%', label: 'Client Satisfaction Rate' },
        { value: '40%', label: 'Average Cost Savings' },
        { value: '99.9%', label: 'Uptime for Critical Systems' }
      ],
      description2: 'Our designs not only look great but also improve conversion rates and user engagement.',
      keyServices: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Mobile & Web UI Design',
        'Usability Testing',
        'Interaction Design'
      ]
    },
    'DevOps': {
      title: 'DevOps',
      description1: 'Accelerate your software delivery with our DevOps expertise. We bridge the gap between development and operations to enable faster, more reliable releases.',
      stats: [
        { value: '95%', label: 'Client Satisfaction Rate' },
        { value: '40%', label: 'Average Cost Savings' },
        { value: '99.9%', label: 'Uptime for Critical Systems' }
      ],
      description2: 'Our DevOps solutions focus on automation, continuous integration, and scalable infrastructure, helping you improve efficiency and reduce time-to-market.',
      keyServices: [
        'CI/CD Pipeline Implementation',
        'Cloud Infrastructure Management',
        'Containerization (Docker, Kubernetes)',
        'Infrastructure as Code (IaC)',
        'Monitoring & Performance Optimization'
      ]
    },
    'Middleware Solutions': {
      title: 'Middleware Solutions',
      description1: 'Streamline communication between your applications and systems with our reliable middleware solutions. We help integrate diverse platforms, ensuring seamless data flow and improved system performance.',
      stats: [
        { value: '95%', label: 'Client Satisfaction Rate' },
        { value: '40%', label: 'Average Cost Savings' },
        { value: '99.9%', label: 'Uptime for Critical Systems' }
      ],
      description2: 'Our middleware services enable businesses to connect legacy systems with modern applications, enhancing scalability, flexibility, and efficiency across operations.',
      keyServices: [
        'Application Integration',
        'API Development & Management',
        'Enterprise Service Bus (ESB) Solutions',
        'Message Queuing & Event Streaming',
        'Legacy System Integration'
      ]
    },
    'BigData Solutions': {
      title: 'Big Data Solutions',
      description1: 'Unlock the power of your data with advanced big data solutions. We help you collect, process, and analyze massive datasets to gain actionable insights and drive smarter business decisions.',
      stats: [
        { value: '95%', label: 'Client Satisfaction Rate' },
        { value: '40%', label: 'Average Cost Savings' },
        { value: '99.9%', label: 'Uptime for Critical Systems' }
      ],
      description2: 'Our solutions are designed to handle high-volume, high-velocity, and high-variety data while ensuring performance, security, and scalability.',
      keyServices: [
        'Data Engineering & ETL Pipelines',
        'Data Warehousing & Data Lakes',
        'Real-time Data Processing',
        'Advanced Analytics & Visualization',
        'Big Data Platform Implementation (Hadoop, Spark)'
      ]
    },
    'RFID Solutions': {
      title: 'RFID Solutions',
      description1: 'Enhance tracking, security, and automation with our RFID (Radio Frequency Identification) solutions. We provide end-to-end systems for asset tracking, inventory management, and access control.',
      stats: [
        { value: '95%', label: 'Client Satisfaction Rate' },
        { value: '40%', label: 'Average Cost Savings' },
        { value: '99.9%', label: 'Uptime for Critical Systems' }
      ],
      description2: 'Our RFID solutions improve operational efficiency by delivering real-time visibility and reducing manual errors.',
      keyServices: [
        'RFID System Design & Implementation',
        'Asset & Inventory Tracking',
        'Access Control Systems',
        'Supply Chain Automation',
        'RFID Hardware Integration'
      ]
    },
    'CyberSecurity': {
      title: 'Cybersecurity',
      description1: 'Protect your digital assets with robust, proactive cybersecurity solutions. We help safeguard your systems, networks, and data from evolving threats and vulnerabilities.',
      stats: [
        { value: '95%', label: 'Client Satisfaction Rate' },
        { value: '40%', label: 'Average Cost Savings' },
        { value: '99.9%', label: 'Uptime for Critical Systems' }
      ],
      description2: 'Our approach combines advanced security technologies with industry best practices to ensure your business stays secure, compliant, and resilient.',
      keyServices: [
        'Network Security & Monitoring',
        'Vulnerability Assessment & Penetration Testing',
        'Data Protection & Encryption',
        'Identity & Access Management (IAM)',
        'Security Compliance & Risk Management'
      ]
    }
  };

  const activeData = serviceDetails[activeService as keyof typeof serviceDetails] || serviceDetails['ERP Development'];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col bg-[#060D1A] min-h-screen font-sans selection:bg-brand-primary/30 selection:text-white"
    >
      {/* Animated Organic Blob Hero Section */}
      <section className="relative w-full overflow-hidden pt-20 pb-20 sm:pt-28 sm:pb-32 border-b border-white/5">
        {/* Minimalist Grid & Glow Background */}
        <div className="absolute inset-0 z-0 bg-[#060D1A]">
          {/* Subtle dotted grid overlay mapping to layout */ }
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_30%,transparent_100%)]"></div>
          {/* Elegant top ambient glow completely different from the chaotic blurs */}
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
        </div>

        {/* Floating Abstract Blobs Container */}
        <div className="relative z-10 w-full max-w-[1800px] mx-auto h-[500px] sm:h-[600px] flex items-center justify-center">
          {/* Scaler for responsive viewing */}
          <div className="relative w-[1000px] h-[800px] flex items-center justify-center scale-[0.45] sm:scale-[0.6] md:scale-[0.8] lg:scale-[1] origin-center -mt-10 sm:-mt-0">
            {servicesList.map((serviceKey) => {
              const visualData = serviceVisuals[serviceKey];
              if (!visualData) return null;
              
              const isActive = activeService === serviceKey;
              const activeIndex = servicesList.indexOf(activeService as string) || 0;
              const rawIndex = servicesList.indexOf(serviceKey);
              
              // Map index 0 to Center (active), map remaining stably to 1-11
              let configIndex = 0;
              if (!isActive) {
                configIndex = rawIndex < activeIndex ? rawIndex + 1 : rawIndex;
              }
              const config = blobPositions[configIndex];
              const Icon = visualData.icon;

              return (
                <motion.div
                  key={serviceKey}
                  onClick={() => {
                    if (!isActive) {
                      setActiveService(serviceKey);
                    }
                  }}
                  layout
                  initial={false}
                  animate={{
                    left: `calc(50% + ${config.x - config.w / 2}px)`,
                    top: `calc(50% + ${config.y - config.h / 2}px)`,
                    width: `${config.w}px`,
                    height: `${config.h}px`,
                    borderRadius: config.shape,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 15,
                    mass: 0.8
                  }}
                  className={cn(
                    "absolute flex items-center justify-center p-6 text-center shadow-2xl overflow-hidden",
                    config.z,
                    isActive ? "cursor-default border border-white/20" : "cursor-pointer hover:scale-105 border border-white/5"
                  )}
                  style={{
                    background: `linear-gradient(135deg, ${visualData.from}, ${visualData.to})`,
                    boxShadow: isActive ? 'inset 0px -10px 30px rgba(0,0,0,0.2), 0 25px 50px rgba(0,0,0,0.4), 0 0 40px rgba(59,130,246,0.3)' : 'inset 0px -10px 20px rgba(0,0,0,0.15), 0 15px 30px rgba(0,0,0,0.3)'
                  }}
                >
                  {/* Bobbing Motion Container (kept independent of layout animation) */}
                  <motion.div
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    animate={{ y: [0, -10, 0], rotate: [0, 1, -1, 0] }}
                    transition={{
                      duration: 5 + config.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: config.delay
                    }}
                  >
                    {/* Background Overlay Image */}
                    <div 
                      className="absolute inset-0 opacity-20 mix-blend-overlay bg-cover bg-center pointer-events-none" 
                      style={{ backgroundImage: `url(${visualData.img})` }} 
                    />
                    
                    <Icon
                      className="absolute opacity-[0.15] text-white pointer-events-none transition-all duration-700"
                      style={{
                        width: isActive ? '140px' : '80px',
                        height: isActive ? '140px' : '80px',
                        left: isActive ? '90px' : '10px',
                        top: isActive ? '90px' : '10px',
                        transform: 'rotate(-10deg)'
                      }}
                    />
                  </motion.div>
                  
                  <span className={cn("relative z-10 text-white font-bold whitespace-pre-line drop-shadow-md transition-all duration-500", config.textClass)}>
                    {visualData.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 w-full w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 bg-transparent">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Sidebar */}
          <div className="w-full lg:w-[320px] flex-shrink-0 lg:pr-8 lg:border-r border-white/10">
            {/* Search Bar */}
            <div className="relative mb-8 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-brand-primary transition-colors duration-300" />
              <input 
                type="text" 
                placeholder="Find a service..." 
                className="w-full pl-11 pr-12 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-[14px] text-white focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary outline-none transition-all duration-300 placeholder:text-slate-500 hover:bg-white/10 hover:border-white/20 shadow-sm" 
              />
              <div className="absolute right-2.5 top-1/2 -translate-y-1/2 bg-[#1A2234] border border-white/10 rounded-xl p-1.5 shadow-sm hover:bg-[#232D45] cursor-pointer transition-colors">
                 <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
              </div>
            </div>

            {/* Service List */}
            <div className="flex flex-col gap-1.5 overflow-y-auto max-h-[700px] scrollbar-hide pb-10">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider px-4 mb-3">All Services</h4>
              {servicesList.map((service) => {
                const isActive = activeService === service;
                // Get the icon for the sidebar
                const visualData = serviceVisuals[service];
                const Icon = visualData ? visualData.icon : CheckCircle2;
                
                return (
                  <button
                    key={service}
                    onClick={() => setActiveService(service)}
                    className={cn(
                      "text-left px-4 py-3.5 rounded-xl text-[14px] transition-all relative group flex items-center gap-3 w-full",
                      isActive 
                        ? "text-brand-primary font-semibold bg-brand-primary/10 shadow-sm ring-1 ring-brand-primary/40" 
                        : "text-slate-400 font-medium hover:text-white hover:bg-[#111624]"
                    )}
                  >
                    {isActive && (
                      <motion.div 
                         layoutId="activeSidebarIndicator"
                         className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-7 bg-brand-primary rounded-r-md shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                         transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <Icon className={cn(
                      "w-4 h-4 transition-colors duration-300",
                      isActive ? "text-brand-primary" : "text-slate-500 group-hover:text-slate-300"
                    )} />
                    <span className="truncate">{service}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Main Content */}
          <div className="flex-1 min-w-0 lg:pl-6">
            {/* Top Navigation Tabs (Pills style) */}
            <div className="flex items-center gap-2 mb-10 overflow-x-auto scrollbar-hide pb-2">
              <button 
                onClick={() => setActiveSection('Overview')}
                className={cn(
                  "whitespace-nowrap px-6 py-2.5 rounded-full text-[14px] transition-all",
                  activeSection === 'Overview' 
                    ? "font-semibold bg-brand-primary text-white shadow-md shadow-brand-primary/20" 
                    : "font-medium bg-[#111624] text-slate-400 hover:bg-[#1A2234] hover:text-white border border-white/5"
                )}
              >
                Overview
              </button>
              <button 
                onClick={() => setActiveSection('Portfolio')}
                className={cn(
                  "whitespace-nowrap px-6 py-2.5 rounded-full text-[14px] transition-all",
                  activeSection === 'Portfolio' 
                    ? "font-semibold bg-brand-primary text-white shadow-md shadow-brand-primary/20" 
                    : "font-medium bg-[#111624] text-slate-400 hover:bg-[#1A2234] hover:text-white border border-white/5"
                )}
              >
                Portfolio
              </button>
              <button 
                onClick={() => setActiveSection('Videos')}
                className={cn(
                  "whitespace-nowrap px-6 py-2.5 rounded-full text-[14px] transition-all",
                  activeSection === 'Videos' 
                    ? "font-semibold bg-brand-primary text-white shadow-md shadow-brand-primary/20" 
                    : "font-medium bg-[#111624] text-slate-400 hover:bg-[#1A2234] hover:text-white border border-white/5"
                )}
              >
                Videos
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div 
                key={`${activeService}-${activeSection}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full relative min-h-[400px]"
              >
                {/* Center Watermark Logo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02] flex items-center justify-center z-0 w-full overflow-hidden">
                  <img src="/logo.png" alt="Watermark" className="w-[80%] max-w-[500px] object-contain invert" onError={(e) => { (e.target as HTMLImageElement).src = '/logo.svg'; }} />
                </div>
                
                <div className="relative z-10">
                  {/* Content Header (Consistent across all sections) */}
                  <div className="flex items-center gap-4 mb-8">
                     <div className="w-[4px] h-8 bg-brand-primary rounded-full"></div>
                     <h2 className="text-[32px] sm:text-[36px] font-bold text-white tracking-tight leading-tight">{activeData.title} {activeSection !== 'Overview' && <span className="text-slate-500 font-light">/ {activeSection}</span>}</h2>
                  </div>

                  {activeSection === 'Overview' && (
                  <div className="prose prose-slate max-w-none">
                    <p className="text-[16px] text-slate-400 leading-relaxed font-normal mb-10 max-w-[900px]">
                      {activeData.description1}
                    </p>

                    {/* Re-added Stats Section inline */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-8 py-10 px-4 sm:px-12 bg-[#111624] rounded-3xl border border-white/5 mb-10 shadow-lg shadow-black/20">
                      {activeData.stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center flex-1 text-center group">
                          <div className="text-[48px] sm:text-[56px] font-bold text-[#5AB2E8] mb-2 tracking-tighter leading-none group-hover:scale-105 transition-transform duration-300">
                             {stat.value}
                          </div>
                          <div className="text-[14px] font-medium text-slate-500 max-w-[150px]">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    <p className="text-[16px] text-slate-400 leading-relaxed font-normal mb-12 max-w-[900px]">
                      {activeData.description2}
                    </p>

                    <h3 className="text-[16px] font-bold text-white mb-4">Key Services:</h3>
                    <ul className="list-disc ml-6 space-y-2 mb-10 marker:text-white">
                      {activeData.keyServices.map((service, idx) => (
                        <li key={idx}>
                          <span className="text-[15px] text-slate-300 font-normal">{service}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-[16px] font-bold text-white mb-4">Key Benefits:</h3>
                    <ul className="list-disc ml-6 space-y-2 mb-10 marker:text-white">
                      <li><span className="text-[15px] text-slate-300 font-normal">Enhanced brand presence with modern UI/UX design</span></li>
                      <li><span className="text-[15px] text-slate-300 font-normal">High-performance solutions optimized for speed and SEO</span></li>
                      <li><span className="text-[15px] text-slate-300 font-normal">Mobile-first responsive design for all devices</span></li>
                      <li><span className="text-[15px] text-slate-300 font-normal">Scalable architecture for future business growth</span></li>
                      <li><span className="text-[15px] text-slate-300 font-normal">Secure and reliable infrastructure</span></li>
                      <li><span className="text-[15px] text-slate-300 font-normal">Improved conversion rates and user engagement</span></li>
                    </ul>

                    <h3 className="text-[16px] font-bold text-white mb-4">Technologies We Use:</h3>
                    <ul className="list-disc ml-6 space-y-2 mb-12 marker:text-white">
                      <li><span className="text-[15px] text-slate-300 font-normal">Frontend: React, Vue, Angular</span></li>
                      <li><span className="text-[15px] text-slate-300 font-normal">Backend: Node.js, Laravel, .NET, Python</span></li>
                      <li><span className="text-[15px] text-slate-300 font-normal">CMS: WordPress, Drupal</span></li>
                      <li><span className="text-[15px] text-slate-300 font-normal">Database: MySQL, MongoDB, PostgreSQL</span></li>
                      <li><span className="text-[15px] text-slate-300 font-normal">Cloud: AWS, Google Cloud, Azure</span></li>
                    </ul>
                  </div>
                )}

                {activeSection === 'Portfolio' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
                     <div className="group rounded-2xl overflow-hidden border border-white/5 bg-[#111624] shadow-sm hover:shadow-brand-primary/10 hover:border-brand-primary/30 transition-all duration-300">
                       <div className="h-56 overflow-hidden relative bg-[#0B1120]">
                         <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" alt="Portfolio 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <span className="text-white font-medium text-sm flex items-center gap-2">View Case Study <ArrowRight className="w-4 h-4"/></span>
                         </div>
                       </div>
                       <div className="p-6">
                          <h4 className="font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">Global Logistics Platform</h4>
                          <p className="text-sm text-slate-400 mb-5 line-clamp-2">A complete digital transformation of a legacy supply chain system, improving tracking accuracy by 99%.</p>
                          <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-brand-primary uppercase tracking-wider">
                            <span className="px-2.5 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-md">React</span>
                            <span className="px-2.5 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-md">Node.js</span>
                            <span className="px-2.5 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-md">AWS</span>
                          </div>
                       </div>
                     </div>

                     <div className="group rounded-2xl overflow-hidden border border-white/5 bg-[#111624] shadow-sm hover:shadow-brand-primary/10 hover:border-brand-primary/30 transition-all duration-300">
                       <div className="h-56 overflow-hidden relative bg-[#0B1120]">
                         <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" alt="Portfolio 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <span className="text-white font-medium text-sm flex items-center gap-2">View Case Study <ArrowRight className="w-4 h-4"/></span>
                         </div>
                       </div>
                       <div className="p-6">
                          <h4 className="font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">Enterprise Data Dashboard</h4>
                          <p className="text-sm text-slate-400 mb-5 line-clamp-2">Real-time analytics engine processing over 5M+ daily events for a major financial institution.</p>
                          <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-brand-primary uppercase tracking-wider">
                            <span className="px-2.5 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-md">Vue.js</span>
                            <span className="px-2.5 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-md">Python</span>
                            <span className="px-2.5 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-md">PostgreSQL</span>
                          </div>
                       </div>
                     </div>
                     
                     <div className="col-span-1 md:col-span-2 group rounded-2xl overflow-hidden border border-white/5 bg-[#111624] shadow-sm hover:shadow-brand-primary/10 hover:border-brand-primary/30 transition-all duration-300 mt-2">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-2/5 h-48 md:h-auto overflow-hidden relative bg-[#0B1120]">
                             <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=600&q=80" alt="Portfolio 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                          </div>
                          <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-center">
                              <h4 className="font-bold text-white mb-2 text-lg group-hover:text-brand-primary transition-colors">Healthcare Portal & Booking System</h4>
                              <p className="text-sm text-slate-400 mb-6">Fully compliant patient management ecosystem with telemedicine capabilities, reducing wait times.</p>
                              <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-brand-primary uppercase tracking-wider">
                                <span className="px-2.5 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-md">Angular</span>
                                <span className="px-2.5 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-md">.NET</span>
                                <span className="px-2.5 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-md">Azure Health</span>
                              </div>
                          </div>
                        </div>
                     </div>
                  </div>
                )}

                {activeSection === 'Videos' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
                     <div className="group">
                       <div className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-brand-primary/20 transition-all duration-300 border border-white/5 bg-[#111624] aspect-video">
                         <iframe 
                           className="absolute inset-0 w-full h-full"
                           src="https://www.youtube.com/embed/LXb3EKWsInQ?rel=0" 
                           title="Product Demo Video" 
                           frameBorder="0" 
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                           allowFullScreen
                         ></iframe>
                       </div>
                       <div className="mt-5 px-1">
                         <h4 className="font-bold text-white group-hover:text-brand-primary transition-colors text-lg">How we built the {activeData.title} system</h4>
                         <p className="text-[15px] text-slate-400 mt-2 line-clamp-2">A technical walkthrough and architecture deep-dive of our {activeData.title.toLowerCase()} implementation strategies.</p>
                       </div>
                     </div>

                     <div className="group">
                       <div className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-brand-primary/20 transition-all duration-300 border border-white/5 bg-[#111624] aspect-video">
                         <iframe 
                           className="absolute inset-0 w-full h-full"
                           src="https://www.youtube.com/embed/bON-KPiiNCk?rel=0" 
                           title="Client Success Story Video" 
                           frameBorder="0" 
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                           allowFullScreen
                         ></iframe>
                       </div>
                       <div className="mt-5 px-1">
                         <h4 className="font-bold text-white group-hover:text-brand-primary transition-colors text-lg">Client Success Story: {activeData.title}</h4>
                         <p className="text-[15px] text-slate-400 mt-2 line-clamp-2">Hear directly from our enterprise clients on how our {activeData.title.toLowerCase()} skyrocketed their growth.</p>
                       </div>
                     </div>
                  </div>
                )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
      
      {/* CTA Layer */}
      <section className="py-24 bg-transparent border-t border-white/5 relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to scale faster?</h2>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              Our engineering team is ready to architect the perfect solution for your enterprise. Let's discuss your technical requirements.
            </p>
            <div className="flex justify-center gap-4">
               <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-secondary transition-all shadow-lg shadow-brand-primary/30">
                  Book Architecture Session <ArrowRight className="w-5 h-5"/>
               </Link>
            </div>
        </div>
      </section>
    </motion.div>
  );
}
