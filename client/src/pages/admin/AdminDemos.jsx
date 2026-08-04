import React from 'react';
import { useGetDemosQuery, useUpdateDemoStatusMutation, useDeleteDemoMutation } from '../../store/apiSlice';
import { Loader2, Trash2, Calendar, Clock, BookOpen, Search } from 'lucide-react';

export default function AdminDemos() {
  const { data: demos, isLoading, error } = useGetDemosQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const [updateStatus] = useUpdateDemoStatusMutation();
  const [deleteDemo] = useDeleteDemoMutation();

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
        {error?.data?.message || 'Failed to load demo bookings'}
      </div>
    );
  }

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateStatus({ id, status: newStatus }).unwrap();
    } catch (err) {
      console.error('Failed to update status:', err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      try {
        await deleteDemo(id).unwrap();
      } catch (err) {
        alert(err?.data?.message || 'Failed to delete demo');
      }
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'Contacted':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'Completed':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Demo Bookings</h2>
          <p className="text-sm text-gray-400 mt-1">Manage and track student demo requests</p>
        </div>
        
        <div className="relative w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search bookings..."
            className="w-full sm:w-64 bg-gray-900 border border-gray-800 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-yellow/50 transition-colors"
          />
          <Search className="w-4 h-4 text-gray-500 absolute left-3 top-2.5" />
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-900/50 text-gray-400 border-b border-gray-800">
              <tr>
                <th className="py-4 px-6 font-medium">Student Details</th>
                <th className="py-4 px-6 font-medium">Course Interest</th>
                <th className="py-4 px-6 font-medium">Preferred Schedule</th>
                <th className="py-4 px-6 font-medium">Message</th>
                <th className="py-4 px-6 font-medium">Status</th>
                <th className="py-4 px-6 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/50">
              {demos?.length === 0 ? (
                <tr>
                  <td colSpan="6" className="py-8 text-center text-gray-500">
                    No demo bookings found.
                  </td>
                </tr>
              ) : (
                demos?.map((demo) => (
                  <tr key={demo._id} className="hover:bg-gray-800/20 transition-colors group">
                    <td className="py-4 px-6 align-top">
                      <div className="font-medium text-white mb-1">{demo.name}</div>
                      <div className="text-gray-400 text-[13px]">{demo.email}</div>
                      <div className="text-gray-500 text-[13px] mt-0.5">{demo.phone}</div>
                    </td>
                    <td className="py-4 px-6 align-top">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-brand-yellow shrink-0" />
                        <span className="text-gray-300 capitalize">
                          {demo.course.replace(/-/g, ' ')}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6 align-top">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-gray-400">
                          <Calendar className="w-3.5 h-3.5 shrink-0" />
                          <span className="text-[13px]">{demo.date ? new Date(demo.date).toLocaleDateString() : 'Not specified'}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Clock className="w-3.5 h-3.5 shrink-0" />
                          <span className="text-[13px]">{
                            demo.time === 'morning' ? 'Morning (10 AM - 12 PM)' :
                            demo.time === 'afternoon' ? 'Afternoon (2 PM - 4 PM)' :
                            demo.time === 'evening' ? 'Evening (6 PM - 8 PM)' : 
                            demo.time === 'anytime' ? 'Any Time' :
                            'Any Time'
                          }</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 align-top">
                      <p className="text-gray-400 text-[13px] max-w-xs line-clamp-3" title={demo.message}>
                        {demo.message || '-'}
                      </p>
                    </td>
                    <td className="py-4 px-6 align-top">
                      <select
                        value={demo.status}
                        onChange={(e) => handleStatusChange(demo._id, e.target.value)}
                        className={`text-[12px] font-medium px-2.5 py-1 rounded-full border focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-gray-900 focus:ring-brand-yellow/50 appearance-none cursor-pointer pr-6 relative ${getStatusColor(demo.status)}`}
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                          backgroundPosition: 'right 0.2rem center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: '1.5em 1.5em'
                        }}
                      >
                        <option value="Pending" className="bg-gray-900 text-white">Pending</option>
                        <option value="Contacted" className="bg-gray-900 text-white">Contacted</option>
                        <option value="Completed" className="bg-gray-900 text-white">Completed</option>
                      </select>
                    </td>
                    <td className="py-4 px-6 align-top text-right whitespace-nowrap">
                      <button
                        onClick={() => handleDelete(demo._id)}
                        disabled={demo.status !== 'Completed'}
                        className={`p-2 rounded-lg transition-colors border border-transparent ${
                          demo.status === 'Completed'
                            ? 'bg-gray-800 hover:bg-red-500/20 text-gray-400 hover:text-red-500 hover:border-red-500/30'
                            : 'bg-gray-800/50 text-gray-600 cursor-not-allowed'
                        }`}
                        title={demo.status === 'Completed' ? 'Delete Booking' : 'Only completed bookings can be deleted'}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
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
