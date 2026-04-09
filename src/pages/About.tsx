import { motion } from 'motion/react';
import { Code, Layout, Smartphone, Zap } from 'lucide-react';

export default function About() {
  const skills = [
    { icon: <Layout size={24} />, title: 'Frontend Development', desc: 'React, Vue, TypeScript, Tailwind CSS' },
    { icon: <Smartphone size={24} />, title: 'Responsive Design', desc: 'Mobile-first approach, fluid typography' },
    { icon: <Zap size={24} />, title: 'Performance', desc: 'Web Vitals optimization, lazy loading' },
    { icon: <Code size={24} />, title: 'Clean Code', desc: 'SOLID principles, modular architecture' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">About Me</h2>
        <div className="prose prose-lg text-slate-600 max-w-none mb-16">
          <p className="mb-4">
            Hello! I'm a frontend developer based in the digital world. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
          </p>
          <p>
            Shortly after graduating from university, I joined the engineering team at an awesome agency where I work on a wide variety of interesting and meaningful projects on a daily basis.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold text-slate-900 mb-8">What I Do</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-sm transition-shadow"
            >
              <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded-xl flex items-center justify-center mb-4">
                {skill.icon}
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">{skill.title}</h4>
              <p className="text-slate-600">{skill.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
