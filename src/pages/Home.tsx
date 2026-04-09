import { motion } from 'motion/react';
import { ArrowRight, Terminal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-8"
        >
          <Terminal size={14} />
          <span>Frontend Developer</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl font-bold text-slate-900 tracking-tight mb-6"
        >
          Building digital products, brands, and experience.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          A passionate frontend developer specializing in building exceptional digital experiences. Currently focused on building accessible, human-centered products.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={() => navigate('/projects')}
            className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
          >
            View Projects
            <ArrowRight size={18} />
          </button>
          <button 
            onClick={() => navigate('/contact')}
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-900 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 transition-colors"
          >
            Contact Me
          </button>
        </motion.div>
      </div>
    </div>
  );
}
