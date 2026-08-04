import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FeaturedArticle({ article }) {
  if (!article) return null;

  return (
    <div className="w-full relative rounded-2xl overflow-hidden group shadow-2xl border border-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={article.image || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-[#0a0e17]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e17] via-[#0a0e17]/60 to-transparent"></div>
      </div>

      <div className="relative z-10 p-8 sm:p-10 flex flex-col justify-end min-h-[500px] h-full">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></span>
          <span className="text-brand-yellow font-bold text-xs uppercase tracking-wider">Featured Article</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-brand-yellow transition-colors line-clamp-3">
          <Link to={`/blog/${article.slug}`}>
            {article.title}
          </Link>
        </h2>
        
        {/* Strip HTML tags from content for a brief description */}
        <p className="text-gray-300 mb-8 line-clamp-2 max-w-2xl leading-relaxed text-sm md:text-base">
          {article.content.replace(/<[^>]*>?/gm, '').substring(0, 150)}...
        </p>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 text-sm text-gray-400 font-medium mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-brand-yellow font-bold border border-gray-700">
              {article.author.charAt(0).toUpperCase()}
            </div>
            <span className="text-white">{article.author}</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-600"></div>
          <span>{new Date(article.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-600"></div>
          <span>{article.readTime}</span>
        </div>

        <Link
          to={`/blog/${article.slug}`}
          className="inline-flex w-fit bg-gradient-to-b from-[#fce484] to-[#d99820] hover:from-[#fdf1b6] hover:to-[#ebaa2e] text-black font-bold text-sm px-6 py-2.5 rounded-lg transition-all items-center gap-2 shadow-lg hover:scale-[1.02]"
        >
          Read More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
