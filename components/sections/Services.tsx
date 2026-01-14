'use client';

import { motion } from 'framer-motion';
import { PenTool, Settings, Layers } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-20 block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Expert Services</h2>
              <p className="text-gray-400 mb-8">
                Beyond components, we offer end-to-end engineering services. 
                Whether you need a custom PCB design or a full-scale industrial automation setup, 
                our team of engineers is ready to help.
              </p>
              
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                   <div className="p-2 bg-blue-500/10 rounded text-blue-400"><PenTool size={24} /></div>
                   <div>
                     <h4 className="text-xl font-bold text-white">PCB Design & Layout</h4>
                     <p className="text-sm text-gray-500">Schematic capture to final Gerber file generation.</p>
                   </div>
                </li>
                <li className="flex items-start space-x-4">
                   <div className="p-2 bg-purple-500/10 rounded text-purple-400"><Settings size={24} /></div>
                   <div>
                     <h4 className="text-xl font-bold text-white">Automation Consulting</h4>
                     <p className="text-sm text-gray-500">PLC programming and system integration.</p>
                   </div>
                </li>
                <li className="flex items-start space-x-4">
                   <div className="p-2 bg-green-500/10 rounded text-green-400"><Layers size={24} /></div>
                   <div>
                     <h4 className="text-xl font-bold text-white">3D Prototyping</h4>
                     <p className="text-sm text-gray-500">Rapid prototyping with industrial-grade materials.</p>
                   </div>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative h-[400px] bg-gradient-to-br from-primary/20 via-transparent to-blue-500/20 rounded-2xl border border-white/10 flex items-center justify-center"
            >
               {/* Decorative Abstract visual */}
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
               <div className="text-center">
                  <span className="text-6xl font-bold text-white/10 select-none">SERVICES</span>
               </div>
            </motion.div>
         </div>
      </div>
    </section>
  );
};

export default Services;
