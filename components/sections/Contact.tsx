'use client';

import { motion } from 'framer-motion';
import { Send, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', type: 'General Inquiry', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate and submit logic here
    alert('Thank you! We will contact you shortly.');
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
             <div>
                <h2 className="text-4xl font-bold text-white mb-6">Let's Innovate Together</h2>
                <p className="text-gray-400 mb-8">
                   Have a project in mind? We'd love to hear from you. 
                   Fill out the form or reach out directly.
                </p>
                
                <div className="space-y-6">
                   <div className="flex items-center space-x-4 text-gray-300">
                      <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary">
                         <Phone size={24} />
                      </div>
                      <div>
                         <p className="text-sm text-gray-500">Phone</p>
                         <p className="font-bold">+91 98765 43210</p>
                      </div>
                   </div>
                   
                   <div className="flex items-center space-x-4 text-gray-300">
                      <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary">
                         <MapPin size={24} />
                      </div>
                      <div>
                         <p className="text-sm text-gray-500">Location</p>
                         <p className="font-bold">Electronics City, Bangalore</p>
                      </div>
                   </div>
                </div>
             </div>
             
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="glass p-8 rounded-2xl"
             >
                <form onSubmit={handleSubmit} className="space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-sm text-gray-400">Name</label>
                         <input 
                           type="text" 
                           className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors"
                           placeholder="Your Name"
                           value={formState.name}
                           onChange={e => setFormState({...formState, name: e.target.value})}
                           required
                         />
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm text-gray-400">Email</label>
                         <input 
                           type="email" 
                           className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors"
                           placeholder="john@example.com"
                           value={formState.email}
                           onChange={e => setFormState({...formState, email: e.target.value})}
                           required
                         />
                      </div>
                   </div>
                   
                   <div className="space-y-2">
                      <label className="text-sm text-gray-400">Project Type</label>
                      <select 
                         className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors [&>option]:bg-secondary"
                         value={formState.type}
                         onChange={e => setFormState({...formState, type: e.target.value})}
                      >
                         <option>General Inquiry</option>
                         <option>Custom PCB Design</option>
                         <option>Industrial Automation</option>
                         <option>3D Printing Service</option>
                         <option>Bulk Order</option>
                      </select>
                   </div>
                   
                   <div className="space-y-2">
                      <label className="text-sm text-gray-400">Message</label>
                      <textarea 
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white h-32 focus:border-primary focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your project..."
                        value={formState.message}
                        onChange={e => setFormState({...formState, message: e.target.value})}
                        required
                      ></textarea>
                   </div>
                   
                   <button 
                     type="submit" 
                     className="w-full bg-primary hover:bg-primary/90 text-secondary font-bold py-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                   >
                      <span>Send Message</span>
                      <Send size={20} />
                   </button>
                </form>
             </motion.div>
          </div>
       </div>
    </section>
  );
};

export default Contact;
