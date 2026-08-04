import React from 'react';
import { Outlet, Navigate, Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LayoutDashboard, Users, BookOpen, MessageSquare, FileText, LogOut } from 'lucide-react';
import { useLogoutMutation, apiSlice } from '../store/apiSlice';
import { logout } from '../store/slices/authSlice';

export default function AdminLayout() {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [logoutApiCall] = useLogoutMutation();
  const location = useLocation();
  const navigate = useNavigate();

  if (!userInfo || userInfo.role !== 'admin') {
    return <Navigate to="/admin/login" replace />;
  }

  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      dispatch(apiSlice.util.resetApiState()); // Clear RTK Query cache
      navigate('/admin/login');
    } catch (err) {
      console.error(err);
    }
  };

  const menuItems = [
    { path: '/admin/dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { path: '/admin/contacts', icon: <MessageSquare size={20} />, label: 'Contact Inquiries' },
    { path: '/admin/demos', icon: <BookOpen size={20} />, label: 'Demo Bookings' },
    { path: '/admin/blogs', icon: <FileText size={20} />, label: 'Manage Blogs' },
  ];

  return (
    <div className="flex h-screen bg-[#04060a] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0a0e17] border-r border-gray-800 flex flex-col">
        <div className="h-20 flex items-center px-8 border-b border-gray-800">
          <Link to="/" className="text-xl font-black text-white tracking-tight flex items-center gap-1.5">
            <span className="text-brand-yellow">/</span>PRIME<span className="text-gray-500 font-medium">IMPACT</span>
          </Link>
        </div>
        
        <nav className="flex-1 py-8 px-4 flex flex-col gap-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                location.pathname.startsWith(item.path)
                  ? 'bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/20'
                  : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
              }`}
            >
              {item.icon}
              <span className="font-medium text-sm">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center gap-3 px-4 py-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow font-bold">
              {userInfo.email.charAt(0).toUpperCase()}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold truncate max-w-[120px]">{userInfo.email.split('@')[0]}</span>
              <span className="text-[10px] text-brand-yellow uppercase tracking-wider">Admin</span>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-red-500/10 text-red-500 hover:bg-red-500/20 rounded-lg transition-colors text-sm font-medium"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-transparent relative z-10 p-8">
        {/* Subtle background glow for main content area */}
        <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-brand-yellow/5 blur-[120px] rounded-full pointer-events-none"></div>
        <Outlet />
      </main>
    </div>
  );
}
