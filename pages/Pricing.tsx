
import React from 'react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Inbound Receptionist",
      price: "997",
      target: "SMEs & Solo Founders",
      features: [
        "24/7 Inbound Answering",
        "Lead Qualification",
        "CRM Integration",
        "Basic Objection Handling",
        "1 AI Agent Instance"
      ],
      color: "brand-darkGray",
      cta: "GET STARTED"
    },
    {
      name: "Inbound Sales Rep",
      price: "1,897",
      target: "Growth Phase Startups",
      features: [
        "Everything in Receptionist",
        "Advanced Sales Psychology",
        "Dynamic Calendar Booking",
        "Transfer to Live Human",
        "Unlimited Calls",
        "3 AI Agent Instances"
      ],
      color: "brand-navy",
      cta: "SCALE NOW",
      popular: true
    },
    {
      name: "Outbound Sales Hunter",
      price: "3,997",
      target: "Aggressive Enterprise Teams",
      features: [
        "Everything in Sales Rep",
        "Active Outbound Hunting",
        "Advanced Cold Call AI",
        "Lead List Scraping Tools",
        "Custom Script Logic",
        "Unlimited AI Agent Instances"
      ],
      color: "brand-blue",
      cta: "START HUNTING",
      textBlack: true
    }
  ];

  return (
    <div className="bg-brand-black min-h-screen pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="headline-font text-4xl md:text-6xl font-bold mb-6 text-brand-white">
            PRICING THAT <span className="text-brand-blue">SCALES REVENUE</span>
          </h1>
          <p className="text-xl text-brand-lightGray max-w-3xl mx-auto">
            High-performance <strong>outbound calling software</strong> that pays for itself. Replace expensive SDR teams with reliable <strong>AI outbound calling</strong> at a fraction of the cost.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative bg-brand-darkGray border-2 ${plan.popular ? 'border-brand-blue' : 'border-brand-darkGray'} p-8 flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-brand-blue text-brand-black headline-font text-xs font-bold px-4 py-1 -translate-y-1/2">
                  MOST POPULAR
                </div>
              )}
              <h3 className="headline-font text-2xl font-bold text-brand-white mb-2">{plan.name}</h3>
              <p className="text-brand-blue text-sm font-bold mb-6 uppercase tracking-widest">{plan.target}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-brand-white">${plan.price}</span>
                <span className="text-brand-lightGray">/mo</span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start space-x-3 text-sm text-brand-lightGray">
                    <svg className="h-5 w-5 text-brand-blue mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                to="/contact" 
                className={`w-full py-4 headline-font text-center font-bold transition ${
                  plan.textBlack ? 'bg-brand-blue text-brand-black hover:bg-brand-lightBlue' : 'bg-brand-navy text-brand-white hover:bg-brand-blue'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-brand-darkGray/50 p-12 border border-brand-darkGray text-center">
          <h2 className="headline-font text-3xl font-bold text-brand-white mb-6 uppercase">CUSTOM ENTERPRISE DEPLOYMENT</h2>
          <p className="text-brand-lightGray mb-8 max-w-2xl mx-auto">
            Need high-volume <strong>outbound lead qualification software</strong> for millions of records? We build custom clusters of AI agents for the world's largest sales organizations.
          </p>
          <Link to="/contact" className="text-brand-blue headline-font font-bold underline hover:text-brand-white transition">
            TALK TO AN ARCHITECT →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
