import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-[#0a192f] text-gray-300">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-primary hover:underline mb-8 block">&larr; Back to Home</Link>
        
        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <h1 className="text-4xl font-bold text-white mb-2">Contact Us</h1>
            <p className="text-gray-400 mb-8 text-sm">Last updated on 15-01-2026</p>
            
            <p className="mb-8 text-lg">You may contact us using the information below:</p>
            
            <div className="space-y-6">
                <div>
                    <h2 className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-1">Registered Address</h2>
                    <div className="flex items-start space-x-3">
                        <MapPin className="text-primary shrink-0 mt-1" size={20} />
                        <p className="text-white">11-31/1, SANJAY GANDHI NAGAR SHAPUR NAGAR, Hyderabad, Telangana, PIN: 500055</p>
                    </div>
                </div>

                <div>
                    <h2 className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-1">Operational Address</h2>
                    <div className="flex items-start space-x-3">
                        <MapPin className="text-primary shrink-0 mt-1" size={20} />
                        <p className="text-white">11-31/1, SANJAY GANDHI NAGAR SHAPUR NAGAR, Hyderabad, Telangana, PIN: 500055</p>
                    </div>
                </div>

                <div>
                    <h2 className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-1">Telephone No</h2>
                    <div className="flex items-center space-x-3">
                        <Phone className="text-primary shrink-0" size={20} />
                        <p className="text-white">6305108669</p>
                    </div>
                </div>

                <div>
                    <h2 className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-1">E-Mail ID</h2>
                    <div className="flex items-center space-x-3">
                        <Mail className="text-primary shrink-0" size={20} />
                        <p className="text-white">clicknbuyelektronics@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}
