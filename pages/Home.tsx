
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-brand-black text-brand-white">
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-32 overflow-hidden border-b border-brand-darkGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="headline-font text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
              OUTBOUND CALLING SOFTWARE THAT <span className="text-brand-blue">BOOKS MEETINGS</span> AUTOMATICALLY
            </h1>
            <p className="text-xl md:text-2xl text-brand-lightGray mb-10 max-w-3xl mx-auto font-body">
              Revenue Hunters provides AI-powered <strong>outbound calling software</strong> that makes real sales calls, qualifies leads, and books appointments—without hiring SDRs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="bg-brand-red text-white px-10 py-4 headline-font text-lg font-bold hover:bg-red-700 transition transform hover:-translate-y-1">
                CALL FOR DEMO
              </Link>
              <Link to="/pricing" className="bg-brand-darkGray text-white px-10 py-4 headline-font text-lg font-bold hover:bg-brand-navy transition border border-brand-blue transform hover:-translate-y-1">
                SEE PRICING
              </Link>
              <Link to="/contact" className="bg-brand-blue text-brand-black px-10 py-4 headline-font text-lg font-bold hover:bg-brand-lightBlue transition transform hover:-translate-y-1">
                GET MORE REVENUE
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue blur-[150px] rounded-full"></div>
        </div>
      </section>

      {/* PROBLEM AWARENESS */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="headline-font text-3xl md:text-5xl font-bold text-center mb-16">
            WHY <span className="text-brand-red">OUTBOUND CALLING</span> IS BROKEN
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Manual dialing wastes hours", desc: "Your team spends 70% of their day listening to ringtones and voicemails instead of talking to prospects." },
              { title: "SDRs burn out and quit", desc: "The average SDR tenure is only 14 months. Hiring and training is a revolving door that kills growth." },
              { title: "Overseas centers underperform", desc: "Low-quality call centers frustrate prospects and damage your brand reputation before the first meeting." },
              { title: "Missed follow-ups kill deals", desc: "Leads go cold in minutes. Without instant outbound call automation, you lose to faster competitors." }
            ].map((card, idx) => (
              <div key={idx} className="bg-brand-darkGray p-8 border border-brand-darkGray hover:border-brand-blue transition group">
                <div className="text-brand-red mb-4 text-3xl font-bold">0{idx + 1}</div>
                <h3 className="headline-font text-lg font-bold mb-4 group-hover:text-brand-blue transition">{card.title}</h3>
                <p className="text-brand-lightGray text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION INTRO */}
      <section className="py-24 bg-brand-darkGray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="headline-font text-3xl md:text-5xl font-bold mb-8">
                INTRODUCING THE <span className="text-brand-blue">REVENUE HUNTER</span> SYSTEM
              </h2>
              <p className="text-brand-lightGray mb-8 text-lg">
                Stop relying on inconsistent humans for your outbound sales. Our <strong>automated outbound calling</strong> platform uses proprietary <strong>AI phone agent</strong> technology to scale your outreach infinitely.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "AI-powered outbound calls",
                  "Cold calling automation",
                  "Objection handling",
                  "Appointment booking",
                  "CRM + calendar sync",
                  "Call summaries + analytics"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-brand-white">
                    <svg className="h-5 w-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 w-full">
              {/* Terminal UI Mock */}
              <div className="bg-black rounded-lg overflow-hidden border border-brand-blue shadow-2xl shadow-brand-blue/20">
                <div className="bg-brand-darkGray px-4 py-2 flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-xs text-brand-lightGray font-mono ml-4">REVENUE_HUNTERS_OS v2.4</span>
                </div>
                <div className="p-6 font-mono text-sm space-y-3 min-h-[300px]">
                  <p className="text-brand-blue">/revenue-hunters --init --target_list=vips_march</p>
                  <p className="text-green-400">[SYSTEM] AI Agent Assigned: Hunter_Agent_09</p>
                  <p className="text-brand-white">[SYSTEM] Call Placed: +1 (555) 012-3456</p>
                  <div className="pl-4 border-l border-brand-darkGray text-brand-lightGray italic">
                    <p>"Hello, this is Chris from Revenue Hunters..."</p>
                    <p>"...Yes, I understand pricing is a concern, however..."</p>
                  </div>
                  <p className="text-yellow-400">[SUCCESS] Objection Handled: Price Resistance</p>
                  <p className="text-green-400 font-bold">[SUCCESS] Lead Qualified: High Intent</p>
                  <p className="text-brand-blue animate-pulse">[ACTION] Meeting Booked: Calendar Sync Complete</p>
                  <p className="text-brand-white cursor-blink">_</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXECUTION PLAN */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="headline-font text-3xl md:text-4xl font-bold text-center mb-16">DEPLOYMENT PIPELINE</h2>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-12 md:space-y-0 relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-brand-darkGray hidden md:block -z-10"></div>
            {[
              { step: "Audit", desc: "Analyze current lead flows and scripts." },
              { step: "Build Logic", desc: "Construct custom AI objection paths." },
              { step: "Connect", desc: "API integration with your CRM & Voip." },
              { step: "Test", desc: "Simulated calls and feedback loops." },
              { step: "Go Live", desc: "AI agents start making outbound calls." },
              { step: "Optimize", desc: "Continuous model refinement based on ROI." }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center px-4 relative bg-brand-black">
                <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-brand-black font-bold mb-4">
                  {idx + 1}
                </div>
                <h4 className="headline-font font-bold mb-2 text-brand-white">{item.step}</h4>
                <p className="text-xs text-brand-lightGray max-w-[120px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-24 bg-brand-black border-t border-brand-darkGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-font text-3xl md:text-5xl font-bold mb-8">READY TO DOMINATE YOUR MARKET?</h2>
          <p className="text-xl text-brand-lightGray mb-12 max-w-2xl mx-auto">
            Join the elite companies using <strong>AI sales calling software</strong> to hunt revenue 24/7/365.
          </p>
          <Link to="/contact" className="bg-brand-red text-white px-12 py-6 headline-font text-2xl font-bold hover:scale-105 transition-transform inline-block shadow-xl shadow-brand-red/20">
            SECURE YOUR AI AGENT NOW
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
