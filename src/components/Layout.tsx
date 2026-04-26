import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Search, Globe, ChevronDown, ChevronUp, ChevronRight, Package, Activity, Zap, Shield, Warehouse, BrainCircuit, Cloud, Layout as LayoutIcon, Smartphone, PenTool, Server, Database, Scan, Fingerprint, Cpu, ShieldCheck, Infinity, Info, Briefcase, Award, HelpCircle, Truck, Car, Hotel, Landmark, Pill, Scissors, GraduationCap, Factory, Droplets, BookOpen, FileText, Book, PlayCircle, Newspaper, Handshake, ShoppingBag, Users, User, ArrowRight, MessageCircle, ArrowLeft, LogOut } from 'lucide-react';
import { useState, useEffect, ReactNode, useRef } from 'react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { useAuth } from '../contexts/AuthContext';

const Logo = () => (
  <div className="flex items-center">
    <img 
      src="/RAPID.png" 
      alt="Rapid Logo" 
      className="h-8 w-auto object-contain"
      onError={(e) => {
        (e.target as HTMLImageElement).src = '/logo.svg';
      }}
    />
  </div>
);

const MegaMenuContainer = ({ children, activeMenu, menuName, onClose, maxWidth = "max-w-[1800px]", align = "center" }: { children: ReactNode, activeMenu: string | null, menuName: string, onClose: () => void, maxWidth?: string, align?: 'left' | 'center' | 'right' }) => {
  if (activeMenu !== menuName) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 15, scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
      className={cn(
        "absolute top-0 pt-3 z-50 w-full",
        align === 'center' && 'left-1/2 -translate-x-1/2',
        align === 'left' && 'left-4 lg:left-8 xl:left-12 2xl:left-16',
        align === 'right' && 'right-4 lg:right-8 xl:right-12 2xl:right-16',
        maxWidth
      )}
    >
      <div className="bg-[#0A101C]/95 backdrop-blur-3xl rounded-[32px] shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden p-8 md:p-12 relative">
  
        {children}
      </div>
    </motion.div>
  );
};

const MegaMenuItem = ({ icon: Icon, name, desc, path, isNew, onClose }: { icon: any, name: string, desc: string, path: string, isNew?: boolean, onClose: () => void, key?: any }) => (
  <Link 
    to={path}
    onClick={onClose}
    className="group flex items-start gap-5 p-4 -m-4 rounded-3xl hover:bg-white/5 transition-all duration-300"
  >
    <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:bg-blue-400 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
      <Icon className="w-5 h-5" />
    </div>
    <div className="flex-1">
      <div className="flex items-center gap-3 mb-1">
        <span className="font-extrabold text-[15px] text-white transition-colors tracking-tight">{name}</span>
        {isNew && (
          <span className="px-2 py-0.5 rounded-md bg-brand-primary/20 text-brand-primary text-[10px] font-extrabold uppercase tracking-widest leading-none">New</span>
        )}
      </div>
      <p className="text-sm text-slate-400 leading-relaxed font-medium group-hover:text-slate-300 transition-colors">{desc}</p>
    </div>
  </Link>
);

const ProductsMegaMenu = ({ activeMenu, onClose }: { activeMenu: string | null; onClose: () => void }) => {
  const items = [
    { name: 'Rapid ERP Core', desc: 'Enterprise Resource Planning for mid to large organizations.', path: '/services', icon: Database },
    { name: 'POS Solutions', desc: 'Cloud-native Point of Sale systems for modern retail.', path: '/services', icon: LayoutIcon },
    { name: 'Supply Chain Pro', desc: 'End-to-end logistics and inventory visibility.', path: '/services', icon: Warehouse },
    { name: 'Fintech Suite', desc: 'Secure financial management and automated reporting.', path: '/services', icon: ShieldCheck },
  ];

  return (
    <MegaMenuContainer activeMenu={activeMenu} menuName="Products" onClose={onClose} maxWidth="max-w-4xl" align="left">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {items.map((item, idx) => (
          <MegaMenuItem 
            key={idx} 
            name={item.name} 
            desc={item.desc} 
            path={item.path} 
            icon={item.icon} 
            onClose={onClose} 
          />
        ))}
      </div>
    </MegaMenuContainer>
  );
};

const SolutionsMegaMenu = ({ activeMenu, onClose }: { activeMenu: string | null; onClose: () => void }) => {
  const items = [
    { name: 'Enterprise Digitization', desc: 'Accelerate your digital journey with modern stacks.', path: '/services', icon: Zap },
    { name: 'Cloud Transformation', desc: 'Migrate and scale on secure cloud infrastructures.', path: '/services', icon: Cloud },
    { name: 'Supply Chain Optimization', desc: 'Streamline procurement to delivery workflows.', path: '/services', icon: Warehouse },
    { name: 'Financial Automation', desc: 'Automate accounting, payroll and compliance.', path: '/services', icon: ShieldCheck },
    { name: 'AI-Powered Analytics', desc: 'Predictive intelligence for better decision making.', path: '/services', icon: BrainCircuit, isNew: true },
    { name: 'Customer Experience', desc: 'Unified CRM and engagement across channels.', path: '/services', icon: Users },
    { name: 'Security & Compliance', desc: 'Robust data protection and global standards.', path: '/services', icon: Fingerprint },
    { name: 'IoT Integration', desc: 'Connect assets for real-time sensor monitoring.', path: '/services', icon: Cpu, isNew: true },
  ];

  return (
    <MegaMenuContainer activeMenu={activeMenu} menuName="Solutions" onClose={onClose} maxWidth="max-w-4xl" align="center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {items.map((item, idx) => (
          <MegaMenuItem 
            key={idx} 
            name={item.name} 
            desc={item.desc} 
            path={item.path} 
            icon={item.icon} 
            isNew={item.isNew} 
            onClose={onClose} 
          />
        ))}
      </div>
    </MegaMenuContainer>
  );
};

const ServicesMegaMenu = ({ activeMenu, onClose }: { activeMenu: string | null; onClose: () => void }) => {
  const serviceColumns = [
    [
      { name: 'ERP Development', desc: 'Streamline and integrate your business operations with custom ERP solutions built to fit your unique needs.', icon: Database, path: '/services' },
      { name: 'Web Development', desc: 'Build a strong digital presence with modern, high-performing websites tailored to your business goals.', icon: LayoutIcon, path: '/services' },
      { name: 'App Development', desc: 'Turn your ideas into powerful mobile applications that engage users and drive business growth.', icon: Smartphone, path: '/services' },
      { name: 'UI / UX Design', desc: 'Create meaningful and engaging digital experiences with our user-centric UI/UX design services.', icon: PenTool, path: '/services' },
    ],
    [
      { name: 'Middleware Solutions', desc: 'Streamline communication between your applications and systems with our reliable middleware solutions.', icon: Server, path: '/services' },
      { name: 'BigData Solutions', desc: 'Unlock the power of your data with advanced big data solutions.', icon: Activity, path: '/services' },
      { name: 'RFID Solutions', desc: 'Enhance tracking, security, and automation with our RFID solutions.', icon: Scan, path: '/services' },
      { name: 'Biometric Solutions', desc: 'Secure and simplify identity verification with advanced biometric solutions.', icon: Fingerprint, path: '/services' },
    ],
    [
      { name: 'AI & ML Solutions', desc: 'Transform your business with intelligent, data-driven solutions.', icon: BrainCircuit, path: '/services', isNew: true },
      { name: 'IoT Solutions', desc: 'Connect, monitor, and control your devices with our end-to-end IoT solutions.', icon: Cpu, path: '/services', isNew: true },
      { name: 'CyberSecurity', desc: 'Protect your digital assets with robust, proactive cybersecurity solutions.', icon: ShieldCheck, path: '/services', isNew: true },
      { name: 'DevOps', desc: 'Accelerate your software delivery with our DevOps expertise.', icon: Infinity, path: '/services', isNew: true },
    ]
  ];

  return (
    <MegaMenuContainer activeMenu={activeMenu} menuName="Services" onClose={onClose} maxWidth="max-w-6xl" align="center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
        {serviceColumns.map((col, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-10">
            {col.map((item, idx) => (
              <MegaMenuItem 
                key={idx} 
                name={item.name} 
                desc={item.desc} 
                path={item.path} 
                icon={item.icon} 
                isNew={item.isNew} 
                onClose={onClose} 
              />
            ))}
          </div>
        ))}
      </div>
    </MegaMenuContainer>
  );
};

const IndustriesMegaMenu = ({ activeMenu, onClose }: { activeMenu: string | null; onClose: () => void }) => {
  const industries = [
    { name: 'Retail', desc: 'Omnichannel commerce and inventory.', icon: ShoppingBag, path: '/industries' },
    { name: 'Logistics', desc: '3PL and fleet management systems.', icon: Package, path: '/industries' },
    { name: 'Hospitality', desc: 'Hotel and property management.', icon: Hotel, path: '/industries' },
    { name: 'Manufacturing', desc: 'Industry 4.0 production cycles.', icon: Factory, path: '/industries' },
    { name: 'Healthcare', desc: 'Patient records and clinical ops.', icon: Activity, path: '/industries' },
    { name: 'Financial', desc: 'Core banking and automated finance.', icon: Landmark, path: '/industries' },
    { name: 'Automotive', desc: 'DMS and manufacturing control.', icon: Car, path: '/industries' },
    { name: 'Oil and Gas', desc: 'Upstream automation and safety.', icon: Droplets, path: '/industries' },
    { name: 'Pharmaceutical', desc: 'Compliance and batch tracking.', icon: Pill, path: '/industries' },
    { name: 'Education', desc: 'Campus and learning management.', icon: GraduationCap, path: '/industries' },
    { name: 'Garment', desc: 'Textile and apparel manufacturing.', icon: Scissors, path: '/industries' },
    { name: 'Insurance', desc: 'Premium and claims automation.', icon: ShieldCheck, path: '/industries' },
  ];

  return (
    <MegaMenuContainer activeMenu={activeMenu} menuName="Industries" onClose={onClose} maxWidth="max-w-4xl" align="center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {industries.map((item, idx) => (
          <MegaMenuItem 
            key={idx} 
            name={item.name} 
            desc={item.desc} 
            path={item.path} 
            icon={item.icon} 
            onClose={onClose} 
          />
        ))}
      </div>
    </MegaMenuContainer>
  );
};

const ResourcesMegaMenu = ({ activeMenu, onClose }: { activeMenu: string | null; onClose: () => void }) => {
  const items = [
    { name: 'Blogs', desc: 'Latest insights and industry updates.', icon: BookOpen, path: '/about' },
    { name: 'Case Studies', desc: 'Real-world success stories.', icon: FileText, path: '/about' },
    { name: 'e-Book', desc: 'Downloadable deep-dives.', icon: Book, path: '/about' },
    { name: 'Video Library', desc: 'Watch and learn our platforms.', icon: PlayCircle, path: '/about' },
    { name: 'Press Releases', desc: 'Latest official company announcements.', icon: Newspaper, path: '/about' },
    { name: 'FAQs', desc: 'Commonly asked questions.', icon: HelpCircle, path: '/about' },
  ];

  return (
    <MegaMenuContainer activeMenu={activeMenu} menuName="Resources" onClose={onClose} maxWidth="max-w-md" align="right">
      <div className="grid grid-cols-1 gap-y-10">
        {items.map((item, idx) => (
          <MegaMenuItem 
            key={idx} 
            name={item.name} 
            desc={item.desc} 
            path={item.path} 
            icon={item.icon} 
            onClose={onClose} 
          />
        ))}
      </div>
    </MegaMenuContainer>
  );
};

const CompanyMegaMenu = ({ activeMenu, onClose }: { activeMenu: string | null; onClose: () => void }) => {
  const items = [
    { name: 'About Us', desc: 'Our vision and global journey.', icon: Info, path: '/about' },
    { name: 'Contact', desc: 'Get in touch with our experts.', icon: Mail, path: '/contact' },
    { name: 'Careers', desc: 'Join our world-class team.', icon: Briefcase, path: '/career' },
    { name: 'Leadership', desc: 'The visionaries behind Rapid.', icon: Users, path: '/about' },
    { name: 'Partners', desc: 'Our global strategic ecosystem.', icon: Handshake, path: '/about' },
    { name: 'FAQs', desc: 'Find quick answers to common queries.', icon: HelpCircle, path: '/about' },
  ];

  return (
    <MegaMenuContainer activeMenu={activeMenu} menuName="Company" onClose={onClose} maxWidth="max-w-md" align="right">
      <div className="grid grid-cols-1 gap-y-10">
        {items.map((item, idx) => (
          <MegaMenuItem 
            key={idx} 
            name={item.name} 
            desc={item.desc} 
            path={item.path} 
            icon={item.icon} 
            onClose={onClose} 
          />
        ))}
      </div>
    </MegaMenuContainer>
  );
};

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [authView, setAuthView] = useState<'menu' | 'erp-signin' | 'erp-register' | 'erp-account'>('menu');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  
  const { user, login, logout, register } = useAuth();
  
  useEffect(() => {
    if (user && isUserMenuOpen && authView !== 'erp-account') {
      setAuthView('erp-account');
    }
  }, [user, isUserMenuOpen, authView]);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      login(email, 'User');
      closeUserModal();
    }
  };

  const handleRegister = () => {
    if (email && password && name) {
      register(name, email);
      closeUserModal();
    }
  };

  const closeLangModal = () => {
    setIsLangOpen(false);
    setTimeout(() => setSelectedRegion(null), 300);
  };

  const closeUserModal = () => {
    setIsUserMenuOpen(false);
    setTimeout(() => {
      setAuthView(user ? 'erp-account' : 'menu');
      setEmail('');
      setPassword('');
      setName('');
    }, 300);
  };

  const regionData: Record<string, string[]> = {
    'Americas': ['English (US)', 'Español (Latinoamérica)', 'Português (Brasil)', 'Français (Canada)'],
    'Europe': ['English (UK)', 'Deutsch', 'Français', 'Español', 'Italiano'],
    'Middle East and Africa': ['العربية', 'English', 'Français'],
    'Asia Pacific': ['English (Australia)', '中文 (简体)', '日本語', '한국어', 'हिन्दी']
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveMenu(null);
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', path: '#', hasItems: true },
    { name: 'Solutions', path: '#', hasItems: true },
    { name: 'Services', path: '/services', hasItems: true },
    { name: 'Industries', path: '/industries', hasItems: true },
    { name: 'Resources', path: '#', hasItems: true },
    { name: 'Company', path: '/about', hasItems: true },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-slate-50 selection:bg-brand-primary/20 selection:text-brand-primary">
      {/* Navbar */}
      <header 
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          scrolled 
            ? "bg-brand-dark/95 backdrop-blur-md py-4 shadow-xl border-b border-brand-primary/10" 
            : "bg-brand-dark py-6 border-b border-transparent"
        )}
      >
        {/* Subtle Header Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent"></div>
        <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center" onMouseEnter={() => setActiveMenu(null)}>
              <Link to="/" className="flex items-center">
                <Logo />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative h-full flex items-center"
                >
                  <button
                    onClick={() => setActiveMenu(activeMenu === link.name ? null : link.name)}
                
                    className={cn(
                      "px-4 py-2 text-[14px] font-bold flex items-center cursor-pointer gap-1 transition-all duration-200",
                      activeMenu === link.name ? "text-brand-primary" : "text-white/80 hover:text-white"
                    )}
                  >
                    {link.name}
                    <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200 opacity-50", activeMenu === link.name && "rotate-180 opacity-100")} />
                  </button>
                </div>
              ))}
            </nav>
            
            <div className="hidden lg:flex items-center gap-6" onMouseEnter={() => setActiveMenu(null)}>
              <div className="flex items-center">
                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 200, opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      className="overflow-hidden flex items-center"
                    >
                      <input 
                        type="text" 
                        placeholder="Search..."
                        className="bg-transparent border-b border-brand-primary/40 focus:border-brand-primary text-white text-sm outline-none w-full px-2 py-1 transition-colors"
                        autoFocus
                      />
                      <button 
                        onClick={() => setIsSearchOpen(false)}
                        className="text-white/40 hover:text-white ml-1"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
                {!isSearchOpen && (
                  <button 
                    onClick={() => setIsSearchOpen(true)}
                    className="text-white/80 hover:text-white p-2"
                  >
                    <Search className="w-5 h-5" strokeWidth={2.5} />
                  </button>
                )}
              </div>
              
              <div>
                <button 
                  onClick={() => { setIsLangOpen(true); setIsUserMenuOpen(false); setIsSearchOpen(false); }}
                  className={cn("text-white/80 hover:text-white p-2 transition-colors", isLangOpen && "text-white")}
                >
                  <Globe className="w-5 h-5" strokeWidth={2.5} />
                </button>
              </div>

              <div>
                <button 
                  onClick={() => { setIsUserMenuOpen(true); setIsLangOpen(false); setIsSearchOpen(false); }}
                  className={cn("text-white/80 hover:text-white p-2 transition-colors", isUserMenuOpen && "text-white")}
                >
                  <User className="w-5 h-5" strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-brand-primary focus:outline-none p-2"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu Overlay */}
        <AnimatePresence>
          <div className="absolute top-full left-0 w-full flex justify-center">
            <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative" onMouseLeave={() => setActiveMenu(null)}>
              <ProductsMegaMenu activeMenu={activeMenu} onClose={() => setActiveMenu(null)} />
              <SolutionsMegaMenu activeMenu={activeMenu} onClose={() => setActiveMenu(null)} />
              <ServicesMegaMenu activeMenu={activeMenu} onClose={() => setActiveMenu(null)} />
              <IndustriesMegaMenu activeMenu={activeMenu} onClose={() => setActiveMenu(null)} />
              <ResourcesMegaMenu activeMenu={activeMenu} onClose={() => setActiveMenu(null)} />
              <CompanyMegaMenu activeMenu={activeMenu} onClose={() => setActiveMenu(null)} />
            </div>
          </div>
        </AnimatePresence>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-brand-dark shadow-2xl overflow-hidden absolute w-full left-0 border-t border-white/5"
            >
              <div className="px-6 py-8 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-xl text-lg font-bold transition-colors",
                      location.pathname === link.path ? "text-brand-primary" : "text-white/60"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-6">
                  <button className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-colors">
                    <Fingerprint className="w-6 h-6 text-brand-primary" />
                    <span>Client Login</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20 lg:pt-20 min-h-screen">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#111624] text-slate-300 py-16 border-t border-brand-primary/10">
        <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Column 1: Logo & Info */}
            <div className="lg:pr-4">
              <div className="mb-6 inline-block">
                <Logo />
              </div>
              <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                Rapid ERP, our software stands as a symbol of precision, quality, and trust for all your enterprise needs.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-sm font-bold text-white">
                  <span className="mr-1">Follow us :</span>
                  <div className="flex gap-2">
                    <a href="#" className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all"><Facebook className="w-3.5 h-3.5" /></a>
                    <a href="#" className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all"><Instagram className="w-3.5 h-3.5" /></a>
                    <a href="#" className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all"><Twitter className="w-3.5 h-3.5" /></a>
                  </div>
                </div>
                {/* Decorative Underline */}
                <div className="w-32 h-0.5 bg-gradient-to-r from-brand-primary to-transparent opacity-50"></div>
              </div>
                  
              <div className="flex items-center gap-4 mt-5">
                <Link to="/contact">
                  <Button variant="primary" size="sm" className="bg-[#43C5F0] hover:bg-[#32b4df] border-none flex items-center gap-2 group">
                    Contact Us
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a 
                  href="https://wa.me/97141234567" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                  title="Chat on WhatsApp"
                >
                  <Button variant="whatsapp" size="icon" className="w-10 h-10">
                    <MessageCircle size={20} fill="white" className="transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
            
            {/* Column 2: Quick Links */}
            <div>
              <div className="mb-6">
                <h3 className="text-white font-bold tracking-wider uppercase text-[13px] inline-block pb-2 border-b-2 border-brand-primary">
                  QUICK LINKS
                </h3>
              </div>
              <ul className="space-y-3 font-medium text-slate-400 text-sm">
                <li className="flex items-center gap-2 group"><ChevronRight className="w-3.5 h-3.5 text-brand-primary transition-transform group-hover:translate-x-1" /><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="flex items-center gap-2 group"><ChevronRight className="w-3.5 h-3.5 text-brand-primary transition-transform group-hover:translate-x-1" /><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li className="flex items-center gap-2 group"><ChevronRight className="w-3.5 h-3.5 text-brand-primary transition-transform group-hover:translate-x-1" /><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li className="flex items-center gap-2 group"><ChevronRight className="w-3.5 h-3.5 text-brand-primary transition-transform group-hover:translate-x-1" /><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
                <li className="flex items-center gap-2 group"><ChevronRight className="w-3.5 h-3.5 text-brand-primary transition-transform group-hover:translate-x-1" /><Link to="/brands" className="hover:text-white transition-colors">Brands</Link></li>
                <li className="flex items-center gap-2 group"><ChevronRight className="w-3.5 h-3.5 text-brand-primary transition-transform group-hover:translate-x-1" /><Link to="/contact" className="hover:text-white transition-colors">Book Appointment</Link></li>
                <li className="flex items-center gap-2 group"><ChevronRight className="w-3.5 h-3.5 text-brand-primary transition-transform group-hover:translate-x-1" /><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Column 3: Opening Hours & Support */}
            <div>
              <div className="mb-6">
                <h3 className="text-white font-bold tracking-wider uppercase text-[13px] inline-block pb-2 border-b-2 border-brand-primary">
                  OPENING HOURS
                </h3>
              </div>
              <ul className="space-y-3 font-medium text-slate-400 text-sm mb-8">
                <li>Monday-Friday 8:00 am-6:00 pm</li>
                <li>Break : 1:00 pm-2:00 pm</li>
                <li>Sunday : Closed</li>
              </ul>

              <div className="mb-6">
                <h3 className="text-white font-bold tracking-wider uppercase text-[13px] inline-block pb-2 border-b-2 border-brand-primary">
                  SUPPORT
                </h3>
              </div>
              <ul className="space-y-3 font-medium text-slate-400 text-sm">
                <li className="flex items-center gap-2 group"><ChevronRight className="w-3.5 h-3.5 text-brand-primary transition-transform group-hover:translate-x-1" /><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li className="flex items-center gap-2 group"><ChevronRight className="w-3.5 h-3.5 text-brand-primary transition-transform group-hover:translate-x-1" /><Link to="/terms" className="hover:text-white transition-colors">Terms & Condition</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div>
              <div className="mb-6">
                <h3 className="text-white font-bold tracking-wider uppercase text-[13px] inline-block pb-2 border-b-2 border-brand-primary">
                  CONTACT INFO
                </h3>
              </div>
              <ul className="space-y-6 text-slate-400 font-medium text-sm">
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">123 Tech Boulevard,<br/>Innovation District, CA 94043</span>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <span>+1 (555) 123-4567</span>
                    <span>+1 (555) 987-6543</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <span>info@rapid-erp.com</span>
                    <span>support@rapid-erp.com</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-sm font-medium text-slate-500 italic">&copy; {new Date().getFullYear()} <span className="text-brand-primary font-bold">Rapid ERP</span>. All rights reserved.</div>
          
            </div>
            
            <div className="flex gap-6 text-[11px] font-black uppercase tracking-widest text-slate-600">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* --- Language Modal --- */}
      <AnimatePresence>
        {isLangOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" style={{ pointerEvents: 'auto' }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLangModal}
              className="absolute inset-0 bg-[#030812]/90 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-md bg-[#0A101C] border border-white/10 rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              <div className="px-6 py-5 border-b border-white/5 flex justify-between items-center bg-white/5">
                <div className="flex items-center gap-3">
                  {selectedRegion && (
                    <button onClick={() => setSelectedRegion(null)} className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors">
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                  )}
                  <span className="font-bold text-white text-lg tracking-wide flex items-center gap-2">
                    <Globe className="w-5 h-5 text-brand-primary" />
                    {selectedRegion ? selectedRegion : 'Select your region'}
                  </span>
                </div>
                <button onClick={closeLangModal} className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col p-3 min-h-[250px] max-h-[60vh] overflow-y-auto custom-scrollbar">
                <AnimatePresence mode="wait">
                  {!selectedRegion ? (
                    <motion.div
                      key="regions"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex flex-col"
                    >
                      {Object.keys(regionData).map((region, i) => (
                        <button 
                          key={i} 
                          onClick={() => setSelectedRegion(region)}
                          className="flex items-center justify-between w-full px-5 py-4 text-left text-[15px] text-slate-300 font-bold hover:bg-brand-primary/10 hover:text-brand-primary rounded-2xl transition-all group border border-transparent hover:border-brand-primary/20"
                        >
                          {region}
                          <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                        </button>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="languages"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex flex-col gap-1"
                    >
                      {regionData[selectedRegion].map((lang, i) => (
                        <button 
                          key={i} 
                          onClick={closeLangModal}
                          className="flex items-center justify-between w-full px-5 py-3 text-left text-[15px] text-slate-300 font-medium hover:bg-brand-primary/10 hover:text-white rounded-xl transition-all group"
                        >
                          {lang}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="px-6 py-5 bg-[#060D1A] border-t border-white/5 text-center">
                <span className="text-[13px] font-medium text-slate-500">
                  {selectedRegion ? 'Select your language to continue.' : 'Choose your country to view localized content.'}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- User/Login Modal --- */}
      <AnimatePresence>
        {isUserMenuOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" style={{ pointerEvents: 'auto' }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeUserModal}
              className="absolute inset-0 bg-[#030812]/90 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-sm bg-[#0A101C] border border-white/10 rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              <div className="px-6 py-5 border-b border-white/5 flex justify-between items-center bg-white/5">
                <div className="flex items-center gap-3">
                  {authView !== 'menu' && (
                    <button onClick={() => setAuthView('menu')} className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors">
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                  )}
                  <span className="font-bold text-white text-lg tracking-wide flex items-center gap-2">
                    <User className="w-5 h-5 text-brand-primary" />
                    {authView === 'menu' ? 'Account Access' : authView === 'erp-signin' ? 'Sign In' : 'Create Account'}
                  </span>
                </div>
                <button onClick={closeUserModal} className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                <AnimatePresence mode="wait">
                  {authView === 'menu' && (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      {/* Cloud Account section */}
                      <div>
                        <span className="block text-[11px] font-black text-slate-500 mb-4 uppercase tracking-widest pl-1">Cloud Account</span>
                        <div className="flex flex-col gap-3">
                          <Button variant="outline" className="w-full justify-center py-6 text-[15px] border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white">
                            Sign in to Cloud
                          </Button>
                          <Button variant="ghost" className="w-full justify-center text-slate-400 hover:text-white">
                            Sign Up for Free Tier
                          </Button>
                        </div>
                      </div>
                      
                      <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                      
                      {/* Rapid ERP Account section */}
                      <div>
                        <span className="block text-[11px] font-black text-slate-500 mb-4 uppercase tracking-widest pl-1">Rapid ERP Account</span>
                        <div className="flex flex-col gap-3">
                          <Button onClick={() => setAuthView('erp-signin')} variant="primary" className="w-full justify-center shadow-[0_0_20px_rgba(35,168,224,0.3)] hover:shadow-[0_0_30px_rgba(35,168,224,0.5)] py-6 text-[15px]">
                            Sign In
                          </Button>
                          <Button onClick={() => setAuthView('erp-register')} variant="outline" className="w-full justify-center py-6 text-[15px] border-white/10 hover:border-white/20 bg-transparent hover:bg-white/5 text-white">
                            Create an Account
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {authView === 'erp-signin' && (
                    <motion.div
                      key="signin"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-6"
                    >
                      <div className="space-y-4">
                        <Input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                      </div>
                      <Button variant="primary" className="w-full justify-center py-6 text-[15px]" onClick={handleLogin}>
                        Sign In Securely
                      </Button>
                      <div className="text-center">
                        <button className="text-[13px] text-brand-primary hover:text-white transition-colors">Forgot your password?</button>
                      </div>
                    </motion.div>
                  )}

                  {authView === 'erp-register' && (
                    <motion.div
                      key="register"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-6"
                    >
                      <div className="space-y-4">
                        <Input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                        <Input type="email" placeholder="Work Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                      </div>
                      <Button variant="primary" className="w-full justify-center py-6 text-[15px]" onClick={handleRegister}>
                        Create Account
                      </Button>
                      <div className="text-center">
                        <span className="text-[13px] text-slate-500">By creating an account, you agree to our <button className="text-brand-primary hover:text-white">Terms</button>.</span>
                      </div>
                    </motion.div>
                  )}

                  {authView === 'erp-account' && user && (
                    <motion.div
                      key="account"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="space-y-6 text-center"
                    >
                      <div className="w-20 h-20 bg-brand-primary/20 rounded-full mx-auto flex items-center justify-center border border-brand-primary/30 shadow-inner">
                        <span className="text-2xl text-brand-primary font-bold">{user.name.charAt(0).toUpperCase()}</span>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{user.name}</h3>
                        <p className="text-slate-400 text-sm">{user.email}</p>
                      </div>
                      
                      <div className="h-[1px] bg-white/5 my-6"></div>
                      
                      <div className="flex flex-col gap-3">
                        <Button variant="outline" className="w-full justify-center py-4 bg-white/5 border-white/10 hover:bg-white/10 text-white" onClick={() => { closeUserModal(); navigate('/dashboard'); }}>
                          Go to Dashboard
                        </Button>
                        <Button variant="ghost" className="w-full justify-center py-4 text-red-400 hover:text-red-300 hover:bg-red-500/10" onClick={() => { logout(); closeUserModal(); }}>
                          <LogOut className="w-4 h-4 mr-2" />
                          Sign Out
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
