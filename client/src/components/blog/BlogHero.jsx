import React from 'react';
import { Search } from 'lucide-react';

export default function BlogHero({ searchQuery, setSearchQuery, activeCategory, setActiveCategory }) {
  const categories = [
    'All Articles',
    'Digital Marketing',
    'SEO',
    'Social Media',
    'Google Ads',
    'Content Marketing',
    'Branding',
    'Career Tips'
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Search is handled by the state in the parent
  };

  return (
    <section className="relative z-10 w-full border-b border-gray-800 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-yellow/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="px-6 lg:px-12 max-w-[1400px] mx-auto pt-15 pb-12 relative z-10 w-full min-h-[400px] flex flex-col justify-center">

        {/* Laptop Image on the Right (Absolutely Positioned like ContactHero) */}
        <div className="absolute top-1/2 -translate-y-[70%] right-0 md:right-4 lg:right-12 w-full md:w-[60%] h-[400px] md:h-[600px] hidden sm:flex items-center justify-end pointer-events-none opacity-30 md:opacity-100 z-0">
          <div className="absolute top-1/2 left-1/2 md:left-[60%] -translate-x-1/2 -translate-y-1/2 w-64 md:w-80 h-64 md:h-80 bg-brand-yellow/15 blur-[100px] md:blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
          <img
            src="/bloghero.png"
            alt="Laptop showing blog"
            className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(248,180,23,0.15)] pointer-events-auto"
          />
        </div>

        {/* Left Text content */}
        <div className="text-left relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-6 bg-[#111317]/80 backdrop-blur-sm border border-brand-yellow/20 px-3 py-1.5 rounded-md shadow-[0_0_15px_rgba(248,180,23,0.05)] self-start">
            <div className="w-2 h-2 rotate-45 bg-brand-yellow shadow-[0_0_8px_rgba(248,180,23,0.8)] animate-pulse"></div>
            <span className="text-brand-yellow font-bold text-[10px] tracking-[0.15em] uppercase">
              Blog & Insights
            </span>
          </div>

          <h1 className="text-[38px] md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] mb-6 tracking-tight text-white drop-shadow-md">
            Insights That Inspire. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fce484] to-[#d99820] drop-shadow-[0_0_15px_rgba(248,180,23,0.2)]">
              Knowledge That Drives.
            </span>
          </h1>

          <p className=" text-[16px] md:text-[18px] max-w-lg leading-relaxed mb-10 drop-shadow-md font-semibold">
            Explore expert insights, industry trends, and practical tips on digital marketing to help you learn, grow, and stay ahead.
          </p>

          <form onSubmit={handleSearch} className="relative w-full flex group shadow-[0_10px_30px_rgba(0,0,0,0.5)] rounded-lg overflow-hidden mb-10">
            <input
              type="text"
              placeholder="Search articles, topics, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0a0e17] border-y border-l border-gray-700/80 rounded-l-lg px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/50 focus:z-10 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]"
            />
            <button
              type="submit"
              className="bg-gradient-to-b from-[#fce484] to-[#d99820] hover:from-[#fdf1b6] hover:to-[#ebaa2e] text-black px-6 flex items-center justify-center transition-colors border-y border-r border-[#d99820]"
            >
              <Search className="w-5 h-5 font-bold" />
            </button>
          </form>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-start gap-3 relative z-20 mt-12 w-full">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${activeCategory === category
                ? 'bg-gradient-to-b from-[#fce484] to-[#d99820] text-black border-[#d99820] shadow-[0_4px_15px_rgba(248,180,23,0.3)]'
                : 'bg-[#0a0e17] text-gray-400 border-gray-800 hover:border-gray-600 hover:text-white backdrop-blur-sm'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
