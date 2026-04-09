import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce storefront built with React, Redux, and Tailwind CSS. Features include cart management, product filtering, and a responsive design.',
      image: 'https://picsum.photos/seed/ecommerce/800/600',
      tags: ['React', 'TypeScript', 'Tailwind'],
      links: { github: '#', live: '#' }
    },
    {
      title: 'Task Management App',
      description: 'A beautiful and intuitive task manager helping users organize their daily workflow. Includes drag-and-drop functionality and dark mode support.',
      image: 'https://picsum.photos/seed/taskapp/800/600',
      tags: ['React', 'Framer Motion', 'Zustand'],
      links: { github: '#', live: '#' }
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application pulling data from multiple APIs to provide accurate forecasts, interactive maps, and severe weather alerts.',
      image: 'https://picsum.photos/seed/weather/800/600',
      tags: ['Vue', 'D3.js', 'CSS Modules'],
      links: { github: '#', live: '#' }
    },
    {
      title: 'Financial Tracker',
      description: 'Personal finance dashboard for tracking expenses, setting budgets, and visualizing spending habits over time with interactive charts.',
      image: 'https://picsum.photos/seed/finance/800/600',
      tags: ['React', 'Recharts', 'Firebase'],
      links: { github: '#', live: '#' }
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
        <p className="text-lg text-slate-600 max-w-2xl">
          A selection of my recent work. I've built applications ranging from simple marketing sites to complex interactive dashboards.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition-all"
          >
            <div className="relative h-64 overflow-hidden bg-slate-100">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                <div className="flex gap-3 text-slate-500">
                  <a href={project.links.github} className="hover:text-slate-900 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.links.live} className="hover:text-slate-900 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <p className="text-slate-600 mb-6 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
