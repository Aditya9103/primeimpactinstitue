import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function LatestArticles({ articles, page, setPage, totalPages }) {
  if (!articles || articles.length === 0) return null;

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></span>
        <span className="text-brand-yellow font-bold text-xs uppercase tracking-wider">Latest Articles</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div key={article._id} className="group bg-[#0a0e17] rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] flex flex-col h-full">
            {/* Image container */}
            <div className="relative h-48 sm:h-56 overflow-hidden">
              {article.image ? (
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-gray-800"></div>
              )}
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] to-transparent opacity-80"></div>
              
              {/* Category Pill */}
              <div className="absolute top-4 left-4 bg-brand-yellow/90 backdrop-blur-sm text-black font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded">
                {article.category}
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-brand-yellow transition-colors line-clamp-2">
                <Link to={`/blog/${article.slug}`} className="focus:outline-none">
                  {article.title}
                </Link>
              </h3>
              
              <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-1">
                {article.content.replace(/<[^>]*>?/gm, '').substring(0, 150)}...
              </p>
              
              <div className="flex items-center gap-4 text-[12px] text-gray-500 font-medium mb-6">
                <span>{new Date(article.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                <div className="w-1 h-1 rounded-full bg-gray-700"></div>
                <span>{article.readTime}</span>
              </div>

              <Link 
                to={`/blog/${article.slug}`} 
                className="inline-flex items-center gap-2 text-brand-yellow font-bold text-sm hover:gap-3 transition-all"
              >
                Read More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-12">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-6 py-2 bg-gray-800 text-white font-bold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors shadow-lg"
          >
            Previous
          </button>
          
          <span className="text-brand-yellow font-bold text-sm bg-brand-yellow/10 px-4 py-2 rounded-lg border border-brand-yellow/20">
            Page {page} of {totalPages}
          </span>
          
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-6 py-2 bg-gray-800 text-white font-bold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors shadow-lg"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
