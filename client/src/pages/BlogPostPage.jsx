import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetBlogBySlugQuery } from '../store/apiSlice';
import { Loader2, ArrowLeft, Calendar, Clock, User } from 'lucide-react';

export default function BlogPostPage() {
  const { slug } = useParams();
  const { data: response, isLoading, error } = useGetBlogBySlugQuery(slug);
  
  const blog = response?.data;

  return (
    <div className="min-h-screen bg-[#04060a] flex flex-col font-sans">
      <main className="flex-grow pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-brand-yellow font-bold text-sm mb-8 hover:-translate-x-1 transition-transform"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          {isLoading ? (
            <div className="flex justify-center items-center py-32">
              <Loader2 className="w-12 h-12 animate-spin text-brand-yellow" />
            </div>
          ) : error || !blog ? (
            <div className="text-center py-32 bg-[#0a0e17] rounded-2xl border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">Blog Post Not Found</h2>
              <p className="text-gray-400 mb-8">The article you're looking for doesn't exist or has been removed.</p>
              <Link to="/blog" className="px-6 py-2 bg-brand-yellow text-black font-bold rounded-lg hover:bg-brand-yellow/90 transition-colors">
                Return to Blog
              </Link>
            </div>
          ) : (
            <article className="bg-[#0a0e17] rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
              {/* Header Image */}
              {blog.image && (
                <div className="w-full h-[400px] relative">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] to-transparent"></div>
                  
                  {blog.category && (
                    <div className="absolute top-6 left-6 bg-brand-yellow/90 backdrop-blur-sm text-black font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded">
                      {blog.category}
                    </div>
                  )}
                </div>
              )}

              <div className="p-8 lg:p-12 relative">
                {!blog.image && blog.category && (
                  <div className="inline-block bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded mb-6">
                    {blog.category}
                  </div>
                )}
                
                <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                  {blog.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 font-medium mb-10 pb-10 border-b border-gray-800">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-brand-yellow" />
                    <span className="text-gray-300">{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-brand-yellow" />
                    <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-yellow" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <div 
                  className="prose prose-invert prose-lg max-w-none text-white prose-p:text-white prose-li:text-white prose-headings:text-white prose-headings:font-black prose-a:text-brand-yellow hover:prose-a:text-[#d99820] prose-strong:text-white prose-img:rounded-xl prose-img:border prose-img:border-gray-800 leading-relaxed tracking-wide"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                ></div>

                {/* Tags */}
                {blog.tags && blog.tags.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-gray-400 font-medium text-sm">Tags:</span>
                      {blog.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-900 border border-gray-700 text-gray-300 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          )}
        </div>
      </main>
    </div>
  );
}
