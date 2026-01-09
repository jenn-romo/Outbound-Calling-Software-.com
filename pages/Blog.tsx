
import React from 'react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: "The Future of Outbound Calling Software: AI vs. Humans",
      excerpt: "Explore how AI outbound calling software is outperforming traditional SDR teams in lead qualification and appointment setting.",
      category: "AI Technology",
      date: "Oct 12, 2024"
    },
    {
      id: 2,
      title: "5 Secrets to Automated Outbound Calling Success",
      excerpt: "Learn how to optimize your outbound call automation scripts for maximum conversion and zero prospect friction.",
      category: "Strategy",
      date: "Oct 05, 2024"
    },
    {
      id: 3,
      title: "Why AI Cold Calling Software is the Death of the Boiler Room",
      excerpt: "Traditional call centers are failing. Discover why high-performance AI sales agents are the new standard for revenue growth.",
      category: "Industry News",
      date: "Sep 28, 2024"
    },
    {
      id: 4,
      title: "Integrating Your AI Phone Agent with Modern CRMs",
      excerpt: "A deep dive into how Revenue Hunters' outbound sales automation syncs with Salesforce, HubSpot, and Pipedrive.",
      category: "Engineering",
      date: "Sep 21, 2024"
    }
  ];

  return (
    <div className="bg-brand-black min-h-screen pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="headline-font text-4xl md:text-6xl font-bold mb-6 text-brand-white">
            REVENUE <span className="text-brand-blue">INSIGHTS</span>
          </h1>
          <p className="text-xl text-brand-lightGray max-w-3xl font-body">
            Expert analysis on <strong>outbound calling software</strong>, AI sales automation, and the future of cold calling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer border-b border-brand-darkGray pb-12">
              <div className="flex flex-col h-full">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-brand-blue headline-font text-xs font-bold tracking-widest">{post.category}</span>
                  <span className="text-brand-darkGray text-xs">•</span>
                  <span className="text-brand-lightGray text-xs">{post.date}</span>
                </div>
                <h2 className="headline-font text-2xl md:text-3xl font-bold text-brand-white mb-4 group-hover:text-brand-blue transition">
                  <Link to="/contact">{post.title}</Link>
                </h2>
                <p className="text-brand-lightGray font-body leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <Link to="/contact" className="inline-flex items-center text-brand-blue headline-font text-sm font-bold hover:text-brand-white transition">
                  READ FULL REPORT
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Featured Section */}
        <div className="mt-24 p-12 bg-brand-darkGray border border-brand-blue/20 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/3">
            <h3 className="headline-font text-3xl font-bold text-brand-white mb-4">WANT THE FULL OUTBOUND PLAYBOOK?</h3>
            <p className="text-brand-lightGray font-body mb-0">
              Download our comprehensive guide to scaling revenue with <strong>AI sales calling software</strong>. 
              Learn the exact scripts our AI agents use to book 20+ meetings per week.
            </p>
          </div>
          <div className="lg:w-1/3 w-full">
            <Link to="/contact" className="block w-full text-center bg-brand-blue text-brand-black py-4 headline-font font-bold hover:bg-brand-lightBlue transition">
              DOWNLOAD PLAYBOOK
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
