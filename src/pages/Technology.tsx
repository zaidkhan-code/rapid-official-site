import { motion } from 'motion/react';
import { useEffect, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import NetworkBackground from '../components/NetworkBackground';
import { 
  ArrowRight, 
  Database, 
  Layout as LayoutIcon, 
  Smartphone, 
  Fingerprint, 
  Scan, 
  Cpu
} from 'lucide-react';

const ExpertiseCard = ({ title, desc, icon: Icon, color }: { title: string, desc: string, icon: any, color: string, key?: number | string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-surface-light border border-white/5 rounded-2xl p-6 md:p-8 flex items-start gap-6 hover:shadow-lg hover:shadow-brand-primary/10 hover:border-brand-primary/40 transition-all duration-300 group"
  >
    <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-opacity-10 bg-white/5 group-hover:bg-opacity-20 transition-all ${color}`}>
       <Icon className="w-7 h-7" />
    </div>
    <div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">{title}</h3>
      <p className="text-sm font-medium leading-relaxed text-slate-400">{desc}</p>
    </div>
  </motion.div>
);

const TechGroup = ({ title, technologies }: { title: string, technologies: { name: string, icon: ReactNode }[] }) => (
  <div className="mb-20">
    <div className="mb-8">
      <h3 className="inline-block text-2xl font-bold text-white border-b-2 border-brand-primary pb-2 mb-4">{title}</h3>
      <p className="text-slate-400 text-sm font-medium">Reinvent the look and feel of web applications using JavaScript technologies along with HTML CSS improve aesthetics and enhance the digital experience.</p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {technologies.map((tech, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-surface-light border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4 hover:border-brand-primary/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/10 transition-all"
        >
          <div className="h-12 flex items-center justify-center grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
             {tech.icon}
          </div>
          <span className="text-xs font-bold text-slate-300 tracking-wide">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

export default function Technology() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const expertiseData = [
    { title: "ERP Development", desc: "Reinvent the look and feel of web applications using JavaScript technologies along with HTML CSS improve aesthetics", icon: Database, color: "text-blue-500" },
    { title: "Web Development", desc: "Reinvent the look and feel of web applications using JavaScript technologies along with HTML CSS improve aesthetics", icon: LayoutIcon, color: "text-purple-500" },
    { title: "App Development", desc: "Reinvent the look and feel of web applications using JavaScript technologies along with HTML CSS improve aesthetics", icon: Smartphone, color: "text-amber-500" },
    { title: "Biometric Solutions", desc: "Reinvent the look and feel of web applications using JavaScript technologies along with HTML CSS improve aesthetics", icon: Fingerprint, color: "text-emerald-500" },
    { title: "RFID Solution", desc: "Reinvent the look and feel of web applications using JavaScript technologies along with HTML CSS improve aesthetics", icon: Scan, color: "text-rose-500" },
    { title: "IoT Solution", desc: "Reinvent the look and feel of web applications using JavaScript technologies along with HTML CSS improve aesthetics", icon: Cpu, color: "text-cyan-500" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col bg-base-dark min-h-screen font-sans selection:bg-brand-primary/30 selection:text-white"
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 lg:pt-40 lg:pb-40 overflow-hidden flex items-center justify-center">
        <NetworkBackground />
        
        <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10 w-full text-left">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Technology</h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              There are many variations of passag of Lorem Ipsum available, but the majority<br className="hidden md:block"/>
              have sufferedThere are many variations of passag of Lorem Ipsum available.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 lg:py-28 relative">
        <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
          <div className="flex justify-between items-end mb-10 border-b border-white/10 pb-4">
             <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">Our Expertise</h2>
             <Link to="/products" className="text-brand-primary font-bold text-sm flex items-center gap-1 hover:text-brand-secondary transition-colors">
                Explore Products <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {expertiseData.map((exp, i) => (
              <ExpertiseCard key={i} title={exp.title} desc={exp.desc} icon={exp.icon} color={exp.color} />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Catalog */}
      <section className="py-12 pb-32 relative">
        <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
          <TechGroup title="Design" technologies={[
            { name: "Photoshop", icon: <div className="bg-[#001E36] text-[#31A8FF] border border-[#31A8FF] p-2 text-2xl font-bold rounded-md font-sans leading-none">Ps</div> },
            { name: "Illustrator", icon: <div className="bg-[#260000] text-[#FF9A00] border border-[#FF9A00] p-2 text-2xl font-bold rounded-md font-sans leading-none">Ai</div> },
            { name: "Figma", icon: <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#F24E1E] via-[#A259FF] to-[#1ABCFE]">Figma</span> },
            { name: "XD", icon: <div className="bg-[#2E001F] text-[#FF61F6] border border-[#FF61F6] p-2 text-2xl font-bold rounded-md font-sans leading-none">Xd</div> },
            { name: "Sketch", icon: <span className="text-4xl font-bold text-[#FDB300]">Sketch</span> }
          ]} />

          <TechGroup title="Frontend" technologies={[
            { name: "Angular JS", icon: <span className="text-4xl font-bold text-[#DD0031]">A</span> },
            { name: "React JS", icon: <span className="text-4xl font-bold text-[#61DAFB]">React</span> },
            { name: "Vue JS", icon: <span className="text-4xl font-bold text-[#42B883]">V</span> },
            { name: "Express JS", icon: <span className="text-3xl font-bold text-slate-300">ex</span> },
            { name: "Next JS", icon: <span className="text-3xl font-black text-white">N.</span> }
          ]} />

          <TechGroup title="Backend" technologies={[
            { name: ".Net", icon: <span className="text-3xl font-bold text-[#512BD4]">.NET</span> },
            { name: "Java", icon: <span className="text-3xl font-bold text-[#f89820]">Java</span> },
            { name: "Node JS", icon: <span className="text-3xl font-bold text-[#339933]">Node</span> },
            { name: "PHP", icon: <div className="bg-[#777BB4] text-white px-3 py-1 rounded-full text-xl font-black italic">php</div> },
            { name: "Next JS", icon: <span className="text-3xl font-black text-white">N.</span> }
          ]} />

          <TechGroup title="Mobile" technologies={[
            { name: "Flutter", icon: <span className="text-3xl font-bold text-[#02569B]">Flutter</span> },
            { name: "React Native", icon: <span className="text-4xl font-bold text-[#61DAFB]">React</span> },
            { name: "Android", icon: <span className="text-3xl font-bold text-[#3DDC84]">Android</span> },
            { name: "Apple", icon: <span className="text-3xl font-bold text-slate-300"></span> },
            { name: "Xamarin", icon: <span className="text-3xl font-bold text-[#3498DB]">X</span> }
          ]} />

          <TechGroup title="Databases" technologies={[
            { name: "MS SQL Server", icon: <span className="text-2xl font-bold text-[#CC292B]">SQL Server</span> },
            { name: "Oracle", icon: <span className="text-2xl font-black text-[#F80000]">ORACLE</span> },
            { name: "MySQL", icon: <span className="text-3xl font-bold text-[#4479A1]">MySQL</span> },
            { name: "PostgreSQL", icon: <span className="text-3xl font-bold text-[#336791]">Postgre</span> },
            { name: "MongoDB", icon: <span className="text-3xl font-bold text-[#47A248]">Mongo</span> }
          ]} />

          <TechGroup title="Cloud & DevOps" technologies={[
            { name: "Amazon Web Services", icon: <span className="text-3xl font-bold text-[#FF9900]">AWS</span> },
            { name: "Azure", icon: <span className="text-3xl font-bold text-[#0089D6]">Azure</span> },
            { name: "Google Cloud", icon: <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] to-[#EA4335]">GCP</span> },
            { name: "Docker", icon: <span className="text-3xl font-bold text-[#2496ED]">Docker</span> },
            { name: "Kubernetes", icon: <span className="text-3xl font-bold text-[#326CE5]">K8s</span> }
          ]} />

          <TechGroup title="Testing" technologies={[
            { name: "Selenium", icon: <span className="text-3xl font-bold text-[#43B02A]">Se</span> },
            { name: "Apache JMeter", icon: <span className="text-3xl font-bold text-[#D22128]">JMeter</span> },
            { name: "Jira", icon: <span className="text-3xl font-bold text-[#0052CC]">Jira</span> },
            { name: "Postman", icon: <span className="text-3xl font-bold text-[#FF6C37]">Postman</span> },
            { name: "BrowserStack", icon: <span className="text-3xl font-bold text-[#09BCEB]">Browser</span> }
          ]} />

          <TechGroup title="Others" technologies={[
            { name: "SharePoint", icon: <span className="text-3xl font-bold text-[#0078D4]">SharePoint</span> },
            { name: "Power BI", icon: <span className="text-3xl font-bold text-[#F2C811]">Power BI</span> },
            { name: "Kafka", icon: <span className="text-3xl font-bold text-white">Kafka</span> },
            { name: "Memcached", icon: <span className="text-3xl font-bold text-[#EA4335]">Memcached</span> },
            { name: "Elasticsearch", icon: <span className="text-3xl font-bold text-[#005571]">Elastic</span> }
          ]} />

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 relative overflow-hidden bg-brand-primary">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.1] mix-blend-overlay"></div>
        <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to build your custom application solution?</h2>
              <p className="text-white/80 font-medium text-lg">Send us your requirements on <span className="text-white font-bold">Info@gotorapid.com</span> or call <span className="text-white font-bold">+971 56 71 38 911</span></p>
           </div>
           <button className="bg-white text-brand-primary px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:shadow-xl hover:scale-105 transition-all">
              Request Proposal <ArrowRight className="w-4 h-4" />
           </button>
        </div>
      </section>

    </motion.div>
  );
}
