"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import NavBar from '../components/NavBar';

interface Item {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Item[] = [
  {
    id: 1,
    title: "AI-Powered Health Diagnostics",
    description: "An advanced machine learning system for early disease detection using multi-modal data analysis. This project combines cutting-edge AI techniques with medical expertise to create a tool that can identify potential health issues before they become severe.",
    image: "/api/placeholder/800/600",
    tags: ["AI", "Healthcare", "Machine Learning"]
  },
  {
    id: 2,
    title: "Quantum-Inspired Optimization Algorithm",
    description: "A novel approach to solving complex optimization problems inspired by quantum computing principles. This research explores how quantum concepts can be applied to classical computing to achieve significant speedups in optimization tasks.",
    image: "/api/placeholder/800/600",
    tags: ["Quantum Computing", "Optimization", "Algorithms"]
  },
  // Add more projects as needed
];

const researchTopics: Item[] = [
  {
    id: 1,
    title: "Explainable AI in Critical Systems",
    description: "Investigating methods to make AI decision-making processes more transparent and interpretable, especially in high-stakes environments like healthcare and finance.",
    image: "/api/placeholder/800/600",
    tags: ["Explainable AI", "Ethics", "Machine Learning"]
  },
  {
    id: 2,
    title: "Sustainable Computing Architectures",
    description: "Exploring new hardware and software designs that significantly reduce the energy consumption of computing systems without compromising on performance.",
    image: "/api/placeholder/800/600",
    tags: ["Green Computing", "Hardware Design", "Energy Efficiency"]
  },
  // Add more research topics as needed
];

interface CustomBadgeProps {
  children: React.ReactNode;
}

const CustomBadge: React.FC<CustomBadgeProps> = ({ children }) => (
  <span className="inline-block bg-blue-600 text-white text-sm px-2 py-1 rounded-full mr-2 mb-2">
    {children}
  </span>
);

interface CardProps {
  item: Item;
  onClick: (item: Item) => void;
}

const Card: React.FC<CardProps> = ({ item, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gray-800 bg-opacity-50 backdrop-blur-md p-6 rounded-xl cursor-pointer"
    onClick={() => onClick(item)}
  >
    <h3 className="text-2xl font-semibold mb-4 text-blue-300">{item.title}</h3>
    <div className="mb-4">
      {item.tags.map((tag, index) => (
        <CustomBadge key={index}>{tag}</CustomBadge>
      ))}
    </div>
    <p className="text-blue-100 line-clamp-3">{item.description}</p>
  </motion.div>
);

interface ModalProps {
  item: Item;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ item, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
  >
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      className="bg-gray-800 p-8 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
    >
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-3xl font-bold text-blue-300">{item.title}</h2>
        <button onClick={onClose} className="text-blue-300 hover:text-blue-100">
          <X size={24} />
        </button>
      </div>
      <img src={item.image} alt={item.title} className="w-full h-64 object-cover rounded-lg mb-4" />
      <p className="text-blue-100 mb-4">{item.description}</p>
      <div className="flex flex-wrap">
        {item.tags.map((tag, index) => (
          <CustomBadge key={index}>{tag}</CustomBadge>
        ))}
      </div>
    </motion.div>
  </motion.div>
);

interface SectionProps {
  title: string;
  items: Item[];
  onClick: (item: Item) => void;
}

const Section: React.FC<SectionProps> = ({ title, items, onClick }) => (
  <div className="mb-16">
    <h2 className="text-4xl font-bold mb-8 text-center text-blue-400">{title}</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <Card key={item.id} item={item} onClick={onClick} />
      ))}
    </div>
  </div>
);

const ProjectsAndResearch: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  return (
    <>
    <NavBar />
    <section id="projects-research" className="py-20 relative">
    <div className='mt-20'/>

          <div className="container mx-auto px-6">
              <h1 className="text-5xl font-bold mb-16 text-center text-blue-400">Projects & Research</h1>

              <div className="mb-16">
                  <h2 className="text-3xl font-semibold mb-4 text-blue-300">Our Approach</h2>
                  <p className="text-lg text-blue-100 mb-4">
                      At NuktaLab, we approach each project and research initiative with a blend of innovation, precision, and user-centricity. Our process involves:
                  </p>
                  <ul className="list-disc list-inside text-blue-100">
                      <li>Thorough problem analysis and requirement gathering</li>
                      <li>Iterative design and development with continuous feedback</li>
                      <li>Integration of cutting-edge technologies and methodologies</li>
                      <li>Rigorous testing and quality assurance</li>
                      <li>Ongoing support and refinement post-deployment</li>
                  </ul>
              </div>

              <Section title="Projects" items={projects} onClick={setSelectedItem} />
              <Section title="Research" items={researchTopics} onClick={setSelectedItem} />

              <AnimatePresence>
                  {selectedItem && (
                      <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
                  )}
              </AnimatePresence>
          </div>
      </section></>
  );
};

export default ProjectsAndResearch;