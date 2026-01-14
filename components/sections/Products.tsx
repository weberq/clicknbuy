'use client';

import { motion } from 'framer-motion';
import { Cpu, Server, CircuitBoard, Box, ShieldCheck } from 'lucide-react';

const products = [
  { id: 1, name: 'Raspberry Pi & Accessories', icon: <Cpu className="text-primary" size={32} />, desc: 'Latest boards, camera modules, and kits.' },
  { id: 2, name: 'Arduino & Microcontrollers', icon: <CircuitBoard className="text-primary" size={32} />, desc: 'Uno, Nano, Mega, and compatible shields.' },
  { id: 3, name: 'Custom PCBs', icon: <Server className="text-primary" size={32} />, desc: 'High-quality fabrication and assembly.' },
  { id: 4, name: '3D Printed Cases', icon: <Box className="text-primary" size={32} />, desc: 'Custom enclosures for your projects.' },
  { id: 5, name: 'Industrial Integration', icon: <ShieldCheck className="text-primary" size={32} />, desc: 'Robust solutions for factory automation.' },
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Product Categories</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">Everything you need for your next innovation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group cursor-pointer"
            >
              <div className="mb-6 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                {product.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
              <p className="text-gray-400">{product.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
