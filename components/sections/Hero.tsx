'use client';

import { motion } from 'framer-motion';
import Scene from '../canvas/Scene';
import CircuitBoard from '../canvas/Model';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col md:flex-row items-center justify-between overflow-hidden pt-16">
      
      {/* Text Content */}
      <div className="w-full md:w-1/2 px-6 md:px-12 z-10 flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-mono mb-4 block">Next-Gen Electronics</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
             Your Hub for <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
               DIY Innovation
             </span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg">
            From high-performance industrial automation to custom hobbyist PCBs. 
            ClicknBuy Elektronics bridges the gap between imagination and reality.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link href="#products" className="px-8 py-4 bg-primary/10 border border-primary text-primary hover:bg-primary/20 transition-all rounded font-bold flex items-center gap-2 group">
              Explore Products 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#contact" className="px-8 py-4 bg-transparent border border-gray-600 text-gray-300 hover:border-gray-400 transition-all rounded font-bold">
              Start a Project
            </Link>
          </div>
        </motion.div>
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 md:static w-full md:w-1/2 h-full z-0 opacity-40 md:opacity-100">
        <Scene className="w-full h-full">
           <CircuitBoard rotation={[0.4, 0, 0]} />
        </Scene>
      </div>

    </section>
  );
};

export default Hero;
