import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-tertiary border-t border-white/10 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">ClicknBuy Elektronics</h3>
            <p className="text-gray-400 text-sm">
              Your hub for DIY innovation, industrial automation, and custom electronic solutions. 
              Empowering creators and industries alike.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="#products" className="hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={18} className="text-primary" />
                <span>123 Tech Park, Innovation Street, Electronics City</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary" />
                <span>contact@clicknbuy.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ClicknBuy Elektronics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
