
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-brand-black/90 backdrop-blur-md border-b border-brand-darkGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="headline-font text-2xl font-bold text-brand-blue tracking-tighter">
              REVENUE <span className="text-brand-white">HUNTERS</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-brand-white hover:text-brand-blue transition px-3 py-2 text-sm font-medium">Home</Link>
              <Link to="/pricing" className="text-brand-white hover:text-brand-blue transition px-3 py-2 text-sm font-medium">Pricing</Link>
              <Link to="/blog" className="text-brand-white hover:text-brand-blue transition px-3 py-2 text-sm font-medium">Blog</Link>
              <Link to="/contact" className="text-brand-white hover:text-brand-blue transition px-3 py-2 text-sm font-medium">Contact</Link>
              <Link to="/contact" className="bg-brand-red text-brand-white px-6 py-2 rounded-sm headline-font text-sm font-bold hover:bg-red-700 transition">
                CALL FOR DEMO
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-white hover:text-brand-blue focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-brand-black border-b border-brand-darkGray">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="text-brand-white block px-3 py-2 text-base font-medium">Home</Link>
            <Link to="/pricing" onClick={() => setIsOpen(false)} className="text-brand-white block px-3 py-2 text-base font-medium">Pricing</Link>
            <Link to="/blog" onClick={() => setIsOpen(false)} className="text-brand-white block px-3 py-2 text-base font-medium">Blog</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-brand-white block px-3 py-2 text-base font-medium">Contact</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-brand-red text-brand-white block px-3 py-2 text-center headline-font font-bold">
              CALL FOR DEMO
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
