import { X, UploadCloud } from 'lucide-react';
import { motion } from 'motion/react';
import { useLocation, Link, Navigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import NetworkBackground from '../components/NetworkBackground';

export default function JobApplication() {
  const { state } = useLocation();
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Use a fallback or demo job if state isn't provided
  const job = state?.job || {
    title: 'SOFTWARE DEVELOPER',
    location: 'REMOTE, DUBAI'
  };

  const reqs = [
    "Proven work experience as a UI/UX Designer or similar role",
    "Portfolio of design projects",
    "Knowledge of wireframe tools (e.g. Wireframe.cc and InVision)",
    "Up-to-date knowledge of design software like Adobe Illustrator and Photoshop",
    "Team spirit; strong communication skills to collaborate with various stakeholders",
    "Good time-management skills",
    "BSc in Design, Computer Science or relevant field",
    "Designing graphic user interface elements, like menus, tabs and widgets",
  ];

  const roles = [
    "Illustrate design ideas using storyboards, process flows and sitemaps",
    "Build page navigation buttons and search fields",
    "Create original graphic designs (e.g. images, sketches and tables)",
    "Prepare and present rough drafts to internal teams and key stakeholders",
    "Identify and troubleshoot UX problems (e.g. responsiveness)",
    "Conduct layout adjustments based on user feedback",
    "Adhere to style standards on fonts, colors and images",
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative bg-slate-50 dark:bg-[#061121] min-h-screen pt-24 pb-24 font-sans"
    >
      <NetworkBackground />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Dark Theme Window Style Container */}
        <div className="bg-slate-50 dark:bg-[#061121] rounded-2xl shadow-2xl shadow-slate-200 dark:shadow-white/5 overflow-hidden border border-slate-100 dark:border-white/5 flex flex-col">
          
          {/* Header Bar */}
          <div className="bg-slate-50 dark:bg-[#061121] border-b border-slate-100 dark:border-white/5 px-6 py-6 flex justify-between items-center text-slate-900 dark:text-white relative">
            <div className="flex-1 text-center font-bold text-xl md:text-2xl tracking-wide">
              Rapid Looking for {job.title === 'SOFTWARE DEVELOPER' ? '.Net Developer' : job.title}
            </div>
            <Link to="/career" className="text-slate-600 dark:text-white/80 hover:text-brand-primary transition-colors absolute right-6">
              <X className="w-6 h-6" />
            </Link>
          </div>

          <div className="flex flex-col md:flex-row p-8 lg:p-12 gap-12 lg:gap-20">
            
            {/* Left Side: Requirements & Roles */}
            <div className="md:w-1/2 space-y-10">
               
               <div>
                 <div className="flex items-center gap-3 mb-6">
                   <div className="w-1.5 h-6 bg-brand-primary rounded-full"></div>
                   <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Required Specifications and Qualifications</h2>
                 </div>
                 <ul className="space-y-4">
                   {reqs.map((req, idx) => (
                     <li key={idx} className="flex relative pl-6 text-sm text-slate-700 dark:text-white/90 font-medium leading-relaxed">
                       <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
                       {req}
                     </li>
                   ))}
                 </ul>
               </div>

               <div>
                 <div className="flex items-center gap-3 mb-6">
                   <div className="w-1.5 h-6 bg-brand-primary rounded-full"></div>
                   <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Roles & Responsibilities</h2>
                 </div>
                 <ul className="space-y-4">
                   {roles.map((role, idx) => (
                     <li key={idx} className="flex relative pl-6 text-sm text-slate-700 dark:text-white/90 font-medium leading-relaxed">
                       <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
                       {role}
                     </li>
                   ))}
                 </ul>
               </div>

               <div className="pt-6 border-t border-slate-100 dark:border-white/5 text-sm font-medium text-slate-600 dark:text-white/80">
                  To apply for this position mail your updated CV to <a href="mailto:careers@rapidworld.com" className="font-bold text-slate-900 dark:text-white hover:text-brand-primary transition-colors">careers@rapidworld.com</a>
               </div>

            </div>

            {/* Right Side: Application Form Box */}
            <div className="md:w-1/2">
                <div className="bg-slate-50 dark:bg-[#061121] border rounded-2xl border-slate-100 dark:border-white/5 shadow-inner p-8 lg:p-10">
                   <div className="flex items-center gap-3 mb-8">
                     <div className="w-1.5 h-6 bg-brand-primary rounded-full"></div>
                     <h2 className="text-lg font-bold text-slate-900 dark:text-white">Fill the form to apply now</h2>
                   </div>

                   <form className="space-y-6">
                      <Input label="Full Name" placeholder="Full Name" />
                      <Input label="Email Address" type="email" placeholder="Email Address" />
                      <Input label="Phone Number" type="tel" placeholder="Phone Number" />
                      <Input label="Experience" placeholder="Experience" />
                      <Input label="Location" placeholder="Location" />

                      <div className="mb-8 pt-2">
                        <label className="block text-sm text-slate-600 dark:text-white/80 mb-4 ml-1 font-medium">Upload CV</label>
                        <div className="border border-dashed border-brand-primary/40 rounded-xl relative py-8 px-6 text-center hover:bg-brand-primary/5 transition-colors cursor-pointer group">
                           <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                           <div className="flex flex-col items-center justify-center gap-3 text-brand-primary text-sm font-semibold">
                              <UploadCloud className="w-8 h-8 opacity-80 group-hover:scale-110 transition-transform" />
                              <span>Drag and drop or click to upload</span>
                           </div>
                        </div>
                      </div>

                      <Button type="button" variant="primary" className="w-full uppercase tracking-wider shadow-xl shadow-brand-primary/20">
                         Submit Application
                      </Button>
                   </form>
                </div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}
