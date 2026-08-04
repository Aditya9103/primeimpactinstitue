import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGetBlogsQuery, useDeleteBlogMutation } from '../../store/apiSlice';
import { Loader2, Trash2, Edit, Plus, FileText, Search, Eye } from 'lucide-react';

export default function AdminBlogs() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const { data: blogsResponse, isLoading, error } = useGetBlogsQuery({ search: searchQuery, limit: 50 }, {
    refetchOnMountOrArgChange: true,
  });
  const [deleteBlog] = useDeleteBlogMutation();
  const navigate = useNavigate();

  const blogs = blogsResponse?.data || [];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-brand-yellow" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-lg">
        {error?.data?.message || 'Failed to load blogs'}
      </div>
    );
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      try {
        await deleteBlog(id).unwrap();
      } catch (err) {
        alert(err?.data?.message || 'Failed to delete blog');
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Manage Blogs</h2>
          <p className="text-sm text-gray-400 mt-1">Create, edit, and manage your blog articles</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-900 border border-gray-800 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-yellow/50 transition-colors"
            />
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-2.5" />
          </div>
          <Link
            to="/admin/blogs/new"
            className="flex justify-center items-center gap-2 px-4 py-2 bg-brand-yellow text-black font-bold rounded-lg hover:bg-brand-yellow/90 transition-colors text-sm"
          >
            <Plus className="w-4 h-4" />
            Write Blog
          </Link>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-900/50 text-gray-400 border-b border-gray-800">
              <tr>
                <th className="py-4 px-6 font-medium">Article</th>
                <th className="py-4 px-6 font-medium">Category</th>
                <th className="py-4 px-6 font-medium">Status</th>
                <th className="py-4 px-6 font-medium">Views</th>
                <th className="py-4 px-6 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/50">
              {blogs.length === 0 ? (
                <tr>
                  <td colSpan="5" className="py-8 text-center text-gray-500">
                    No blogs found. Click "Write Blog" to create one.
                  </td>
                </tr>
              ) : (
                blogs.map((blog) => (
                  <tr key={blog._id} className="hover:bg-gray-800/20 transition-colors group">
                    <td className="py-4 px-6 align-top">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-lg bg-gray-800 overflow-hidden shrink-0">
                          {blog.image ? (
                            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-500">
                              <FileText className="w-5 h-5" />
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="font-medium text-white mb-1 line-clamp-1">{blog.title}</div>
                          <div className="text-gray-400 text-[12px]">By {blog.author} • {new Date(blog.createdAt).toLocaleDateString()}</div>
                          <div className="flex gap-2 mt-1">
                            {blog.isFeatured && <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/20">Featured</span>}
                            {blog.isTrending && <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-purple-500/10 text-purple-400 border border-purple-500/20">Trending</span>}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 align-top">
                      <span className="text-gray-300">{blog.category}</span>
                    </td>
                    <td className="py-4 px-6 align-top">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-[12px] font-medium border ${
                        blog.status === 'Published' 
                          ? 'bg-green-500/10 text-green-500 border-green-500/20' 
                          : 'bg-gray-500/10 text-gray-400 border-gray-500/20'
                      }`}>
                        {blog.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 align-top text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5" />
                        {blog.views}
                      </div>
                    </td>
                    <td className="py-4 px-6 align-top text-right whitespace-nowrap">
                      <div className="flex justify-end gap-2">
                        <Link
                          to={`/admin/blogs/edit/${blog._id}`}
                          className="p-2 bg-gray-800/50 hover:bg-gray-700 text-gray-400 hover:text-white rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => handleDelete(blog._id)}
                          className="p-2 bg-gray-800/50 hover:bg-red-500/20 text-gray-400 hover:text-red-500 rounded-lg transition-colors border border-transparent hover:border-red-500/30"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
