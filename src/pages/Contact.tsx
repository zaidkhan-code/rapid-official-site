import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Select } from '../components/ui/Select';
import NetworkBackground from '../components/NetworkBackground';

// Reusable styling components for the form
const FormField = ({ label, type = "text", placeholder, isTextarea = false, isSelect = false }: { label: string, type?: string, placeholder?: string, isTextarea?: boolean, isSelect?: boolean }) => {
  return (
    <div className="relative group">
      {isTextarea ? (
        <Textarea 
          placeholder={label} 
        />
      ) : isSelect ? (
        <Select defaultValue="">
          <option value="" disabled hidden>{label}</option>
          <option value="erp">ERP Solutions</option>
          <option value="web">Web Development</option>
          <option value="cloud">Cloud Integration</option>
          <option value="other">Other Inquiry</option>
        </Select>
      ) : (
        <Input 
          type={type} 
          placeholder={label} 
        />
      )}
    </div>
  );
};

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col bg-base-dark min-h-screen font-sans selection:bg-brand-primary/30 selection:text-white"
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-48 lg:pt-40 lg:pb-56 overflow-hidden flex items-center justify-center">
        <NetworkBackground />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left w-full">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Contact Us</h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              There are many variations of passag of Lorem Ipsum available, but the majority<br className="hidden md:block"/>
              have sufferedThere are many variations of passag of Lorem Ipsum available.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Card Section */}
      <section className="relative -mt-32 pb-24 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-surface-light border border-white/5 shadow-2xl shadow-black/50 rounded-3xl overflow-hidden flex flex-col md:flex-row">
                
                {/* Left Side: Contact Info */}
                <div className="md:w-5/12 p-10 lg:p-14 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-center">
                    <div className="space-y-12">
                        {/* Phone */}
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 bg-[#23A8E0] rounded-[10px] flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-brand-primary/20">
                                <Phone className="w-5 h-5 fill-current" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-400 text-sm mb-1">Phone</h3>
                                <p className="text-white font-semibold tracking-wide">
                                    +971 56 71 38 911
                                </p>
                            </div>
                        </div>
                        
                        {/* Email */}
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 bg-[#23A8E0] rounded-[10px] flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-brand-primary/20">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-400 text-sm mb-1">E-mail</h3>
                                <p className="text-white font-semibold tracking-wide">
                                    info@gotorapid.com
                                </p>
                            </div>
                        </div>
                        
                        {/* Location */}
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 bg-[#23A8E0] rounded-[10px] flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-brand-primary/20">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-400 text-sm mb-1">Location</h3>
                                <p className="text-white font-semibold tracking-wide">
                                    Dubai Tower, Dubai, UAE
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="md:w-7/12 p-10 lg:p-14 bg-surface-lighter">
                    <form className="space-y-8">
                        <FormField label="Name" />
                        <FormField label="Select what you are looking for" isSelect />
                        <FormField label="Company Name" />
                        <FormField label="Phone Number" />
                        <FormField label="Country" />
                        <FormField label="Message" isTextarea />
                        
                        <div className="pt-4">
                           <Button type="button" variant="primary" className="w-full h-14 bg-[#23A8E0] hover:bg-[#1f96c9] border-none text-[15px] uppercase tracking-widest shadow-xl shadow-[#23A8E0]/20">
                               SUBMIT
                           </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-32 w-full">
         <div className="w-full h-[500px] relative overflow-hidden bg-surface-light border-t border-b border-white/5 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
             {/* Instead of a complex embed that might fail or show bright light theme maps, CSS filtered iframe to enforce dark mode look of Dubai */}
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.09793132714!2d55.20015570220689!3d25.074127110992383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1714413809051!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(100%) hue-rotate(180deg) brightness(85%) contrast(110%)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Dubai Map"
             ></iframe>
         </div>
      </section>
    </motion.div>
  );
}
