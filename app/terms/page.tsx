import Link from 'next/link';

export default function Terms() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-[#0a192f] text-gray-300">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-primary hover:underline mb-8 block">&larr; Back to Home</Link>
        <h1 className="text-4xl font-bold text-white mb-8">Terms and Conditions</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>Welcome to ClicknBuy Elektronics. By using our website and services, you agree to these terms.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Products and Services</h2>
            <p>We provide electronic components, custom PCB design, and industrial automation services. All specifications are subject to change without notice.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Orders and Payments</h2>
            <p>Orders are verified upon receipt. We reserve the right to cancel orders due to stock issues or pricing errors.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Custom Projects</h2>
            <p>Custom PCB and automation projects require a detailed consultation and may be subject to specific contracts and non-disclosure agreements.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Liability</h2>
            <p>ClicknBuy Elektronics is not liable for any damages resulting from the misuse of our components or products.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
