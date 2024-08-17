"use client"
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Code, Brain, Smartphone, Lightbulb } from 'lucide-react';
import NavBar from './components/NavBar';


const NuktaLabLanding = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-blue-300 min-h-screen font-sans">
      <div className="fixed inset-0 bg-[url('/home_bg.webp')] bg-cover opacity-10 z-0"></div>
      <div className="relative z-10">
        <NavBar/>

        <main>
          <section className="h-screen flex items-center justify-center relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8 }}
              className="text-center z-10"
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Welcome to NuktaLab
              </h1>
              <p className="text-2xl md:text-3xl mb-10 text-blue-300">Precision in Every Dot. Innovation in Every Line.</p>
              <a href="#about" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full 
                transition duration-300 shadow-neon-blue hover:shadow-neon-blue-intense">
                Engage Systems
              </a>
            </motion.div>
            <motion.div style={{ y: y1, opacity }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-[20rem] font-bold text-blue-500 opacity-5 blur-sm">نُقْطَة</div>
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 pointer-events-none"></div>
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="absolute bottom-10 text-blue-400"
            >
              <ChevronDown size={40} />
            </motion.div>
          </section>

          <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
              <h2 className="text-5xl font-bold mb-12 text-center text-blue-400">About NuktaLab</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-800 bg-opacity-50 backdrop-blur-md p-8 rounded-2xl shadow-neon-blue"
                >
                  <h3 className="text-3xl font-semibold mb-4 text-blue-400">Who We Are</h3>
                  <p className="text-lg mb-4">
                    NuktaLab is a cutting-edge software research and development company at the forefront of technological innovation. We specialize in creating bespoke software solutions that address complex challenges across various industries.
                  </p>
                  <p className="text-lg mb-4">
                    Our team of expert developers, researchers, and innovators work tirelessly to push the boundaries of what&apos;s possible in software development, artificial intelligence, and user experience design.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gray-800 bg-opacity-50 backdrop-blur-md p-8 rounded-2xl shadow-neon-blue"
                >
                  <h3 className="text-3xl font-semibold mb-4 text-blue-400">Our Approach</h3>
                  <p className="text-lg mb-4">
                    At NuktaLab, we believe in the power of precision and user-centric design. Our approach combines cutting-edge technology with a deep understanding of user needs to create solutions that are not just functional, but transformative.
                  </p>
                  <p className="text-lg mb-4">
                    We employ a meticulous, iterative process that ensures every &apos;nukta&apos; (dot) of our software is purposeful and contributes to an exceptional user experience. By focusing on the details while keeping the big picture in mind, we deliver solutions that are both innovative and practical.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

        

          <section id="services" className="py-20 relative">
            <div className="container mx-auto px-6">
              <h2 className="text-5xl font-bold mb-12 text-center text-blue-400">Our Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: <Code size={48} />, title: "Custom Software", desc: "Tailored solutions for your needs" },
                  { icon: <Brain size={48} />, title: "AI & Machine Learning", desc: "Intelligent systems for the future" },
                  { icon: <Smartphone size={48} />, title: "Mobile & Web Apps", desc: "User-friendly applications" },
                  { icon: <Lightbulb size={48} />, title: "Consulting", desc: "Expert advice for your business" },
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800 bg-opacity-30 backdrop-blur-md p-8 rounded-2xl text-center 
                      hover:shadow-neon-blue hover:bg-opacity-50 transition duration-300
                      transform hover:-translate-y-2"
                  >
                    <div className="mb-6 text-blue-400">{service.icon}</div>
                    <h3 className="text-2xl font-semibold mb-4 text-blue-300">{service.title}</h3>
                    <p className="text-lg">{service.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="py-20 relative">
            <div className="container mx-auto px-6">
              <h2 className="text-5xl font-bold mb-12 text-center text-blue-400">Contact Us</h2>
              <form className="max-w-2xl mx-auto bg-gray-800 bg-opacity-50 backdrop-blur-md p-8 rounded-2xl shadow-neon-blue">
                {['Name', 'Email', 'Message'].map((field, index) => (
                  <div key={index} className="mb-6">
                    <label htmlFor={field.toLowerCase()} className="block mb-2 text-lg text-blue-300">{field}</label>
                    {field === 'Message' ? (
                      <textarea
                        id={field.toLowerCase()}
                        rows={4}
                        className="w-full px-4 py-2 bg-gray-700 bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-blue-100"
                      ></textarea>
                    ) : (
                      <input
                        type={field === 'Email' ? 'email' : 'text'}
                        id={field.toLowerCase()}
                        className="w-full px-4 py-2 bg-gray-700 bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-blue-100"
                      />
                    )}
                  </div>
                ))}
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 shadow-neon-blue hover:shadow-neon-blue-intense">
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </main>

        <footer className="bg-gray-900 bg-opacity-70 backdrop-blur-md py-8">
          <div className="container mx-auto px-6 text-center">
            <p className="text-blue-300">&copy; 2024 NuktaLab. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default NuktaLabLanding;