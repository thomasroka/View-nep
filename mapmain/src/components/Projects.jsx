import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const techs = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/react.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/nodedotjs.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mongodb.svg' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/express.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/docker.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/git.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/javascript.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/python.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/java.svg' },
    { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/kubernetes.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/tailwindcss.svg' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/flutter.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/php.svg' },
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/laravel.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/figma.svg' },
    { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/vercel.svg' },
    { name: 'Bitbucket', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/bitbucket.svg' },
  ];

  return (
    <div className="tech-stack bg-white text-black py-10 px-5">
      <h2 className="text-5xl mb-20 font-bold text-purple-700 text-center mb-4">Tech Stack</h2>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            className="tech-item text-center p-6 bg-gray-200 rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-16 h-16 mx-auto mb-4 transition-all"
            />
            <h3 className="text-xl font-semibold">{tech.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
