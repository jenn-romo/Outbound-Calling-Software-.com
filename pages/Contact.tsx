
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-brand-black min-h-screen py-20 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="headline-font text-4xl md:text-6xl font-bold text-brand-white mb-8">
          HIRE YOUR FIRST <span className="text-brand-blue">AI HUNTER</span>
        </h1>
        <p className="text-xl text-brand-lightGray mb-12 leading-relaxed max-w-3xl mx-auto">
          Stop letting leads go cold. Our <strong>outbound calling software</strong> can be live in your business in as little as 48 hours. 
          Contact our team directly via the channels below to see how <strong>AI outbound calling</strong> transforms your pipeline.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="flex flex-col items-center p-8 bg-brand-darkGray border border-brand-darkGray hover:border-brand-blue transition group">
            <div className="w-16 h-16 bg-brand-black flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <h4 className="headline-font font-bold text-brand-white mb-2">LIVE DEMO LINE</h4>
            <a href="tel:5612643614" className="text-brand-blue text-xl font-bold hover:text-brand-lightBlue transition">(561) 264-3614</a>
          </div>

          <div className="flex flex-col items-center p-8 bg-brand-darkGray border border-brand-darkGray hover:border-brand-blue transition group">
            <div className="w-16 h-16 bg-brand-black flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h4 className="headline-font font-bold text-brand-white mb-2">EMAIL US</h4>
            <a href="mailto:sales@revenuehunters.com" className="text-brand-blue text-xl font-bold hover:text-brand-lightBlue transition">sales@revenuehunters.com</a>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-brand-lightGray headline-font text-sm tracking-widest uppercase mb-4">Available 24/7/365</p>
          <div className="h-1 w-20 bg-brand-blue mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
