import { useState } from 'react';
import { 
  ShoppingCart, Truck, Car, Hotel, Stethoscope, Briefcase, 
  Pill, GraduationCap, Factory, Droplet, CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import NetworkBackground from '../components/NetworkBackground';

export default function Industries() {
  const [activeIndustry, setActiveIndustry] = useState('Retail');

  const industriesList = [
    { id: 'Retail', icon: <ShoppingCart className="w-5 h-5" />, name: 'Retail' },
    { id: 'Distribution', icon: <Truck className="w-5 h-5" />, name: 'Distribution' },
    { id: 'Automotive', icon: <Car className="w-5 h-5" />, name: 'Automotive' },
    { id: 'Hospitality', icon: <Hotel className="w-5 h-5" />, name: 'Hospitality' },
    { id: 'Healthcare', icon: <Stethoscope className="w-5 h-5" />, name: 'Healthcare' },
    { id: 'Financial', icon: <Briefcase className="w-5 h-5" />, name: 'Financial' },
  ];

  const industryDetails = {
    'Retail': {
      title: 'Retail',
      description: 'Empowering Retailers with Advanced Software Solutions. In the competitive retail market, the key to success lies in offering seamless customer experiences and maintaining efficient business operations. Our Retail Management Software streamlines inventory, order management, sales, and customer data, empowering retailers to operate efficiently while enhancing customer satisfaction.',
      features: [
        'Inventory and Stock Management',
        'Point-of-Sale (POS) Integration',
        'Sales and Customer Analytics',
        'Loyalty and Rewards Program',
        'Multi-Store Management'
      ],
      benefits: [
        'Improved operational efficiency with real-time data.',
        'Enhanced customer experience through personalized engagement.',
        'Scalable solutions that grow with your business.'
      ],
      icon: <ShoppingCart className="w-12 h-12" />
    },
    'Distribution': {
      title: 'Distribution',
      description: 'Streamline your supply chain with our comprehensive Distribution ERP. We provide end-to-end visibility across your entire distribution network, enabling you to optimize inventory levels, reduce carrying costs, and improve order fulfillment rates. Our software is designed to handle complex logistics, warehouse management, and vendor relationships seamlessly.',
      features: [
        'Advanced Warehouse Management',
        'Route Optimization and Logistics',
        'Vendor and Supplier Portal',
        'Automated Order Processing',
        'Real-time Inventory Tracking'
      ],
      benefits: [
        'Reduce operational costs through optimized logistics.',
        'Minimize stockouts and overstock situations.',
        'Improve delivery times and customer satisfaction.'
      ],
      icon: <Truck className="w-12 h-12" />
    },
    'Automotive': {
      title: 'Automotive',
      description: 'Accelerate your automotive business with tailored software solutions. Whether you manage a dealership, a repair shop, or an auto parts store, our Automotive ERP provides the tools you need to manage inventory, schedule services, and build lasting customer relationships.',
      features: [
        'Vehicle and Parts Inventory Management',
        'Service Scheduling and Tracking',
        'Customer Relationship Management (CRM)',
        'Warranty and Claims Management',
        'Financial Reporting and Analytics'
      ],
      benefits: [
        'Streamline service operations and reduce wait times.',
        'Optimize parts inventory to reduce carrying costs.',
        'Enhance customer loyalty with personalized service.'
      ],
      icon: <Car className="w-12 h-12" />
    },
    'Hospitality': {
      title: 'Hospitality',
      description: 'Elevate guest experiences with our all-in-one Hospitality Management System. Designed for hotels, resorts, and restaurants, our software simplifies property management, booking, and guest services. By automating routine tasks, your staff can focus on what matters most.',
      features: [
        'Property Management System (PMS)',
        'Online Booking and Reservation Engine',
        'Housekeeping and Maintenance Tracking',
        'Point-of-Sale for Restaurants and Spas',
        'Guest Feedback and Review Management'
      ],
      benefits: [
        'Increase direct bookings and revenue.',
        'Improve staff efficiency and coordination.',
        'Deliver personalized guest experiences.'
      ],
      icon: <Hotel className="w-12 h-12" />
    },
    'Healthcare': {
      title: 'Healthcare',
      description: 'Transform patient care with our secure and compliant Healthcare ERP. Our solutions are designed to meet the unique challenges of hospitals, clinics, and pharmacies. From electronic health records (EHR) to billing and inventory management, we provide a unified platform.',
      features: [
        'Electronic Health Records (EHR) Integration',
        'Patient Scheduling and Registration',
        'Medical Billing and Claims Processing',
        'Pharmacy and Medical Supply Inventory',
        'Telemedicine and Patient Portal'
      ],
      benefits: [
        'Enhance patient care with accurate, accessible records.',
        'Reduce administrative burden and billing errors.',
        'Ensure compliance with healthcare regulations (HIPAA).'
      ],
      icon: <Stethoscope className="w-12 h-12" />
    },
    'Financial': {
      title: 'Financial',
      description: 'Navigate the complexities of the financial sector with our robust Financial ERP. Built for banks, investment firms, and accounting agencies, our software offers advanced tools for risk management, compliance, and financial reporting. Gain real-time visibility into your financial health.',
      features: [
        'General Ledger and Accounting',
        'Risk Management and Compliance Tracking',
        'Automated Financial Reporting',
        'Asset and Wealth Management',
        'Secure Payment Processing'
      ],
      benefits: [
        'Ensure strict compliance with financial regulations.',
        'Improve accuracy and speed of financial reporting.',
        'Mitigate risks with real-time monitoring and alerts.'
      ],
      icon: <Briefcase className="w-12 h-12" />
    }
  };

  const activeData = industryDetails[activeIndustry as keyof typeof industryDetails] || industryDetails['Retail'];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col bg-base-dark min-h-screen font-sans selection:bg-brand-primary/30 selection:text-white"
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden flex items-center justify-center">
        <NetworkBackground />

        <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10 w-full">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand-primary"></span>
              Vertical Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              Tailored software for complex industries.
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
              Discover how Rapid ERP transforms sector-specific challenges into sustainable growth strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 w-full relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3">Explore Domains</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Select an industry below.
          </h3>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Sidebar */}
          <div className="w-full lg:w-72 flex-shrink-0 bg-surface-light border border-white/5 rounded-3xl p-4 shadow-sm relative z-20 lg:sticky lg:top-32">
            <div className="flex flex-col space-y-1">
              {industriesList.map((ind) => {
                const isActive = activeIndustry === ind.id;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setActiveIndustry(ind.id)}
                    className={`flex items-center gap-3 px-4 py-4 rounded-2xl text-sm font-bold transition-all text-left relative ${
                      isActive 
                        ? 'text-brand-primary bg-brand-primary/10 shadow-sm ring-1 ring-brand-primary/40' 
                        : 'text-slate-400 hover:text-white hover:bg-surface-lighter'
                    }`}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="activeInd"
                        className="absolute inset-0 bg-brand-primary/10 rounded-2xl -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <div className={`${isActive ? 'text-brand-primary scale-110' : 'text-slate-400'} transition-transform`}>
                       {ind.icon}
                    </div>
                    {ind.name}
                  </button>
                )
              })}
            </div>
          </div>
          
          {/* Main Content Area */}
          <div className="flex-grow min-w-0 w-full relative z-10">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIndustry}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-surface-light rounded-3xl border border-white/5 p-8 lg:p-12 shadow-xl shadow-black/20"
              >
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-brand-primary/10 text-brand-primary rounded-2xl">
                    {activeData.icon}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">{activeData.title} <span className="text-slate-500 font-light hidden sm:inline-block">/</span> Software</h3>
                </div>
                
                <p className="text-lg text-slate-400 mb-12 leading-relaxed max-w-3xl">
                  {activeData.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="bg-surface-light rounded-3xl p-8 border border-white/5">
                    <h4 className="font-bold text-white mb-6 flex items-center gap-2">Key Capabilities</h4>
                    <ul className="space-y-4">
                      {activeData.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-semibold text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-brand-dark border border-white/5 rounded-3xl p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary/20 rounded-full blur-[60px]"></div>
                    <h4 className="font-bold text-white mb-6 flex items-center gap-2">Core Benefits</h4>
                    <ul className="space-y-4 relative z-10">
                      {activeData.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-slate-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-10 relative z-10">
                       <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-brand-primary transition-colors">
                          Schedule a Demo <ArrowRight className="w-4 h-4" />
                       </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Layer */}
      <section className="py-24 bg-transparent border-t border-white/5 relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Not seeing your industry?</h2>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              Our architecture is infinitely adaptable. Speak with our engineers to discover how we can forge a custom solution for your exact workflow.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-secondary transition-all shadow-lg hover:shadow-brand-primary/30">
               Contact Solutions Team <ArrowRight className="w-5 h-5"/>
            </Link>
        </div>
      </section>

    </motion.div>
  );
}
