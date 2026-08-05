import React from 'react';
import { 
  Users, 
  FileText, 
  MessageSquare, 
  CalendarDays,
  ArrowRight,
  TrendingUp,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  useGetBlogsQuery, 
  useGetContactsQuery, 
  useGetDemosQuery 
} from '../../store/apiSlice';


const StatCard = ({ title, value, icon: Icon, color, linkTo, loading }) => (
  <div className="bg-[#0a0e17] border border-gray-800 rounded-xl p-6 flex flex-col justify-between">
    <div className="flex justify-between items-start mb-4">
      <div>
        <p className="text-gray-400 text-sm font-medium mb-1">{title}</p>
        {loading ? (
          <div className="h-8 w-16 bg-gray-800 animate-pulse rounded mt-1"></div>
        ) : (
          <h3 className="text-3xl font-bold text-white">{value}</h3>
        )}
      </div>
      <div className={`p-3 rounded-lg ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
    </div>
    <Link 
      to={linkTo} 
      className="text-sm text-brand-yellow hover:text-white transition-colors flex items-center gap-1 mt-2 w-max"
    >
      View Details <ArrowRight className="w-3 h-3" />
    </Link>
  </div>
);

export default function AdminDashboard() {
  const { data: blogsData, isLoading: loadingBlogs } = useGetBlogsQuery();
  const { data: contactsData, isLoading: loadingContacts } = useGetContactsQuery();
  const { data: demosData, isLoading: loadingDemos } = useGetDemosQuery();

  const totalBlogs = blogsData?.total || 0;
  
  const totalContacts = contactsData?.length || 0;
  const pendingContacts = contactsData?.filter(c => c.status === 'New' || c.status === 'Pending').length || 0;
  
  const totalDemos = demosData?.length || 0;
  const pendingDemos = demosData?.filter(d => d.status === 'Pending' || d.status === 'Scheduled').length || 0;

  const recentContacts = contactsData ? [...contactsData].slice(0, 5) : [];
  const recentDemos = demosData ? [...demosData].slice(0, 5) : [];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Dashboard Overview</h1>
        <p className="text-gray-400">Welcome to the PrimeImpact Admin Panel. Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Total Blogs" 
          value={totalBlogs} 
          icon={FileText} 
          color="bg-blue-500/20" 
          linkTo="/admin/blogs"
          loading={loadingBlogs}
        />
        <StatCard 
          title="Total Inquiries" 
          value={totalContacts} 
          icon={MessageSquare} 
          color="bg-purple-500/20" 
          linkTo="/admin/contacts"
          loading={loadingContacts}
        />
        <StatCard 
          title="Pending Inquiries" 
          value={pendingContacts} 
          icon={Clock} 
          color="bg-orange-500/20" 
          linkTo="/admin/contacts"
          loading={loadingContacts}
        />
        <StatCard 
          title="Demo Requests" 
          value={totalDemos} 
          icon={CalendarDays} 
          color="bg-green-500/20" 
          linkTo="/admin/demos"
          loading={loadingDemos}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Contacts Table */}
        <div className="bg-[#0a0e17] border border-gray-800 rounded-xl overflow-hidden">
          <div className="p-6 border-b border-gray-800 flex justify-between items-center">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-brand-yellow" /> Recent Inquiries
            </h3>
            <Link to="/admin/contacts" className="text-sm text-gray-400 hover:text-white transition-colors">
              View All
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#111723] text-gray-400 text-xs uppercase tracking-wider">
                  <th className="px-6 py-4 font-medium">Name</th>
                  <th className="px-6 py-4 font-medium">Subject</th>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-800">
                {loadingContacts ? (
                  <tr><td colSpan="4" className="px-6 py-8 text-center text-gray-500">Loading...</td></tr>
                ) : recentContacts.length === 0 ? (
                  <tr><td colSpan="4" className="px-6 py-8 text-center text-gray-500">No inquiries found.</td></tr>
                ) : (
                  recentContacts.map((contact) => (
                    <tr key={contact._id} className="hover:bg-[#111723] transition-colors">
                      <td className="px-6 py-4 text-white">{contact.name}</td>
                      <td className="px-6 py-4 text-gray-300 truncate max-w-[150px]">{contact.subject}</td>
                      <td className="px-6 py-4 text-gray-400">{new Date(contact.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 text-[10px] font-bold uppercase rounded-full tracking-wider
                          ${contact.status === 'New' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 
                            contact.status === 'Pending' ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' : 
                            'bg-green-500/10 text-green-400 border border-green-500/20'}`}
                        >
                          {contact.status || 'New'}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Demos Table */}
        <div className="bg-[#0a0e17] border border-gray-800 rounded-xl overflow-hidden">
          <div className="p-6 border-b border-gray-800 flex justify-between items-center">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-brand-yellow" /> Recent Demo Requests
            </h3>
            <Link to="/admin/demos" className="text-sm text-gray-400 hover:text-white transition-colors">
              View All
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#111723] text-gray-400 text-xs uppercase tracking-wider">
                  <th className="px-6 py-4 font-medium">Name</th>
                  <th className="px-6 py-4 font-medium">Course</th>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-800">
                {loadingDemos ? (
                  <tr><td colSpan="4" className="px-6 py-8 text-center text-gray-500">Loading...</td></tr>
                ) : recentDemos.length === 0 ? (
                  <tr><td colSpan="4" className="px-6 py-8 text-center text-gray-500">No demo requests found.</td></tr>
                ) : (
                  recentDemos.map((demo) => (
                    <tr key={demo._id} className="hover:bg-[#111723] transition-colors">
                      <td className="px-6 py-4 text-white">{demo.name}</td>
                      <td className="px-6 py-4 text-gray-300 truncate max-w-[150px]">{demo.course}</td>
                      <td className="px-6 py-4 text-gray-400">{new Date(demo.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 text-[10px] font-bold uppercase rounded-full tracking-wider
                          ${demo.status === 'Pending' ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' : 
                            demo.status === 'Scheduled' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 
                            demo.status === 'Completed' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                            'bg-red-500/10 text-red-400 border border-red-500/20'}`}
                        >
                          {demo.status || 'Pending'}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
