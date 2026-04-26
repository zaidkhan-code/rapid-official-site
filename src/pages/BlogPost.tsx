import { Calendar, User, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { useLocation, Link, Navigate, useParams } from 'react-router-dom';

export default function BlogPost() {
  const { state } = useLocation();
  const { id } = useParams();

  // If accessed directly without state, we might typically fetch data here.
  // For this prototype, we'll assume state.post is passed via Link.
  if (!state || !state.post) {
    return <Navigate to="/blog" replace />;
  }

  const { post } = state;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col bg-brand-dark min-h-screen pb-24"
    >
      {/* Dynamic Hero */}
      <div className="relative h-[50vh] min-h-[400px] w-full mt-20 lg:mt-24">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        
        <div className="absolute top-8 left-4 sm:left-8 z-20">
          <Link to="/blog" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-5xl mx-auto xl:left-1/2 xl:-translate-x-1/2">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-primary/30 bg-brand-primary/20 backdrop-blur-md text-brand-primary text-xs font-bold mb-6 tracking-wide uppercase">
              {post.category}
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight max-w-4xl tracking-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-sm font-semibold text-slate-300">
              <span className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg backdrop-blur-md"><Calendar className="w-4 h-4 text-brand-primary" /> {post.date}</span>
              <span className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg backdrop-blur-md"><User className="w-4 h-4 text-emerald-400" /> {post.author}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 bg-surface-dark rounded-3xl p-8 md:p-16 lg:p-20 shadow-2xl shadow-black/20 border border-white/5 -mt-10 relative z-20">
        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-brand-primary">
          <p className="text-2xl text-slate-200 mb-10 leading-relaxed font-semibold">
            {post.excerpt}
          </p>
          
          <p className="text-slate-400 mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>

          <p className="text-slate-400 mb-8 leading-relaxed">
            In our experience, software architecture plays a crucial role in enabling or restricting scale. By opting for a modular, microservices-driven approach, organizations can iterate faster and deliver functionality with less friction. However, this comes with its own set of trade-offs regarding operational complexity.
          </p>
          
          <h3 className="text-3xl font-extrabold text-white mt-16 mb-8">The Impact on Business Overview</h3>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          
          <blockquote className="border-l-4 border-brand-primary pl-6 my-12 italic text-slate-100 text-2xl font-medium py-2">
            "The integration of these new technologies is not just an upgrade; it's a fundamental shift in how we approach enterprise software."
          </blockquote>
          
          <h3 className="text-3xl font-extrabold text-white mt-16 mb-8">Looking Ahead</h3>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
