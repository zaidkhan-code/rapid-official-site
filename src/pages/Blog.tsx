import { Calendar, User, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import NetworkBackground from '../components/NetworkBackground';

export default function Blog() {
  const posts = [
    {
      id: 'the-future-of-erp',
      title: 'The Future of ERP: AI and Machine Learning Integration',
      excerpt: 'Discover how artificial intelligence and machine learning are revolutionizing enterprise resource planning systems, making them more predictive and automated.',
      category: 'Technology',
      date: 'Oct 15, 2023',
      author: 'Sarah Jenkins',
      image: 'https://picsum.photos/seed/tech1/800/600'
    },
    {
      id: '5-signs-your-business-needs-custom-software',
      title: '5 Signs Your Business Needs a Custom Software Solution',
      excerpt: 'Off-the-shelf software might not be enough for your growing business. Learn the key indicators that it\'s time to invest in custom development.',
      category: 'Business Strategy',
      date: 'Sep 28, 2023',
      author: 'Michael Chen',
      image: 'https://picsum.photos/seed/business1/800/600'
    },
    {
      id: 'securing-your-enterprise-data',
      title: 'Securing Your Enterprise Data in the Cloud Era',
      excerpt: 'As more businesses move their operations to the cloud, data security becomes paramount. Explore best practices for keeping your enterprise data safe.',
      category: 'Security',
      date: 'Sep 12, 2023',
      author: 'David Rodriguez',
      image: 'https://picsum.photos/seed/security1/800/600'
    },
    {
      id: 'how-retail-erp-transforms-cx',
      title: 'How Retail ERP Transforms Customer Experience',
      excerpt: 'Learn how modern retail ERP systems go beyond inventory management to deliver personalized and seamless experiences for your customers.',
      category: 'Retail',
      date: 'Aug 30, 2023',
      author: 'Emily Watson',
      image: 'https://picsum.photos/seed/retail1/800/600'
    },
    {
      id: 'role-of-iot-in-manufacturing',
      title: 'The Role of IoT in Manufacturing ERP',
      excerpt: 'Internet of Things (IoT) devices are providing real-time data to manufacturing ERPs, enabling predictive maintenance and optimized production lines.',
      category: 'Manufacturing',
      date: 'Aug 15, 2023',
      author: 'James Wilson',
      image: 'https://picsum.photos/seed/manufacturing1/800/600'
    },
    {
      id: 'navigating-digital-transformation',
      title: 'Navigating Digital Transformation: A Step-by-Step Guide',
      excerpt: 'Digital transformation can be daunting. Follow our comprehensive guide to ensure a smooth transition for your organization.',
      category: 'Digital Transformation',
      date: 'Jul 22, 2023',
      author: 'Sarah Jenkins',
      image: 'https://picsum.photos/seed/digital1/800/600'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col bg-slate-50 min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden flex items-center justify-center">
        <NetworkBackground />
        
        <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10 text-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand-primary"></span>
              Engineering Ideas
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              The Blueprint.
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Insights, technical deep-dives, and strategy from the engineers building the future of software infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-20 -mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <Link to={`/blog/${post.id}`} state={{ post }} key={post.id}>
              <motion.article 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border text-left border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 hover:border-brand-primary/30 transition-all group flex flex-col cursor-pointer h-full"
              >
                <div className="h-60 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-brand-primary shadow-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 mb-4 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {post.author}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-primary transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed font-medium flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="text-brand-primary font-bold text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all mt-auto">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <button className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 hover:shadow-md transition-all">
            Load More Articles
          </button>
        </div>
      </section>
    </motion.div>
  );
}
