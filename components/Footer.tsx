
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black border-t border-brand-darkGray py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="headline-font text-xl font-bold text-brand-blue mb-4">REVENUE HUNTERS</h3>
            <p className="text-brand-lightGray max-w-md leading-relaxed">
              Revenue Hunters is the world's most advanced <strong>outbound calling software</strong> platform. 
              Our AI sales agents handle cold calling automation, objection handling, and appointment booking so you can focus on closing deals.
            </p>
          </div>
          <div>
            <h4 className="headline-font text-sm font-bold text-brand-white mb-4">SOLUTIONS</h4>
            <ul className="space-y-2 text-sm text-brand-lightGray">
              <li><Link to="/blog" className="hover:text-brand-blue">AI Outbound Calling Blog</Link></li>
              <li><Link to="/" className="hover:text-brand-blue">Automated Outbound Calling</Link></li>
              <li><Link to="/" className="hover:text-brand-blue">AI Cold Calling Software</Link></li>
              <li><Link to="/" className="hover:text-brand-blue">Outbound Call Automation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="headline-font text-sm font-bold text-brand-white mb-4">COMPANY</h4>
            <ul className="space-y-2 text-sm text-brand-lightGray">
              <li><Link to="/" className="hover:text-brand-blue">Home</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-blue">Pricing</Link></li>
              <li><Link to="/blog" className="hover:text-brand-blue">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-brand-blue">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-brand-darkGray pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-lightGray">
          <p>&copy; {new Date().getFullYear()} Revenue Hunters. All rights reserved. Outbound Calling Software Specialists.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span>Built by Revenue Hunters Engineering</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
