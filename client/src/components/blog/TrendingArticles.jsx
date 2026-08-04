import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function TrendingArticles({ articles }) {
  if (!articles || articles.length === 0) return null;

  return (
    <div className="w-full flex flex-col h-full">
      <div className="flex items-center gap-2 mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></span>
        <span className="text-brand-yellow font-bold text-xs uppercase tracking-wider">Trending Articles</span>
      </div>

      <div className="flex flex-col gap-4 flex-grow">
        {articles.slice(0, 4).map((article) => (
          <Link 
            key={article._id} 
            to={`/blog/${article.slug}`} 
            className="group flex gap-4 items-center p-3 rounded-xl border border-gray-800 bg-[#0a0e17] hover:bg-[#111317] hover:border-gray-700 transition-all shadow-sm"
          >
            {/* Small Thumbnail */}
            <div className="w-24 h-[72px] shrink-0 rounded-lg overflow-hidden bg-gray-800 relative">
              {article.image ? (
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full bg-gray-800"></div>
              )}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-bold text-sm leading-snug mb-2 group-hover:text-brand-yellow transition-colors line-clamp-2">
                {article.title}
              </h3>
              <div className="flex items-center gap-2 text-[11px] text-gray-500 font-medium">
                <span>{new Date(article.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                <div className="w-1 h-1 rounded-full bg-gray-700"></div>
                <span>{article.readTime}</span>
              </div>
            </div>

            {/* Icon */}
            <div className="mt-1">
              <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-brand-yellow transition-colors" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
