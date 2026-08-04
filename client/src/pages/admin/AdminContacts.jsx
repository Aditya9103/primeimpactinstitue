import React, { useState } from 'react';
import { useGetContactsQuery, useUpdateContactStatusMutation, useDeleteContactMutation } from '../../store/apiSlice';
import { Mail, Phone, Calendar, Trash2, Search, Inbox, ChevronDown } from 'lucide-react';

export default function AdminContacts() {
  const { data: contacts, isLoading, error } = useGetContactsQuery();
  const [updateStatus] = useUpdateContactStatusMutation();
  const [deleteContact] = useDeleteContactMutation();

  const [searchTerm, setSearchTerm] = useState('');

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-yellow"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-lg">
        Error loading contacts. Please try again.
      </div>
    );
  }

  const filteredContacts = contacts?.filter(contact => 
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateStatus({ id, status: newStatus }).unwrap();
    } catch (err) {
      console.error('Failed to update status:', err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this inquiry?')) {
      try {
        await deleteContact(id).unwrap();
      } catch (err) {
        console.error('Failed to delete:', err);
      }
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'New': return 'bg-brand-yellow/20 text-brand-yellow border-brand-yellow/30';
      case 'Read': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Replied': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Resolved': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-800 text-gray-400 border-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Contact Inquiries</h1>
          <p className="text-gray-400 text-sm mt-1">Manage and respond to messages from your website.</p>
        </div>

        {/* Search */}
        <div className="relative max-w-sm w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search inquiries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-800 rounded-lg bg-[#0a0e17] text-gray-300 placeholder-gray-500 focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/50 sm:text-sm transition-colors"
          />
        </div>
      </div>

      <div className="bg-[#111317]/80 backdrop-blur-xl border border-gray-800 rounded-2xl overflow-hidden shadow-lg">
        {filteredContacts?.length === 0 ? (
          <div className="p-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-gray-800/50 rounded-full flex items-center justify-center mb-4">
              <Inbox className="w-8 h-8 text-gray-500" />
            </div>
            <h3 className="text-lg font-medium text-white mb-1">No Inquiries Found</h3>
            <p className="text-gray-400 text-sm">There are no contact inquiries matching your search.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-800 bg-gray-900/50">
                  <th className="py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">Name / Contact</th>
                  <th className="py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">Subject & Message</th>
                  <th className="py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/50">
                {filteredContacts?.map((contact) => (
                  <tr 
                    key={contact._id} 
                    className={`group transition-colors hover:bg-gray-800/20 ${contact.status === 'New' ? 'bg-brand-yellow/5' : ''}`}
                  >
                    <td className="py-4 px-6 align-top">
                      <div className="relative inline-block">
                        <select
                          value={contact.status}
                          onChange={(e) => handleStatusChange(contact._id, e.target.value)}
                          className={`appearance-none cursor-pointer pl-3 pr-8 py-1 rounded-full text-xs font-bold border transition-colors focus:outline-none focus:ring-1 focus:ring-brand-yellow/50 ${getStatusColor(contact.status)}`}
                        >
                          <option value="New" className="bg-[#0a0e17] text-white">New</option>
                          <option value="Read" className="bg-[#0a0e17] text-white">Read</option>
                          <option value="Replied" className="bg-[#0a0e17] text-white">Replied</option>
                          <option value="Resolved" className="bg-[#0a0e17] text-white">Resolved</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-current opacity-70">
                          <ChevronDown className="w-3 h-3" />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 align-top">
                      <div className="font-medium text-white mb-1">{contact.name}</div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
                        <Mail className="w-3 h-3" />
                        <a href={`mailto:${contact.email}`} className="hover:text-brand-yellow transition-colors">{contact.email}</a>
                      </div>
                      {contact.phone && (
                        <div className="flex items-center gap-1.5 text-xs text-gray-400">
                          <Phone className="w-3 h-3" />
                          <a href={`tel:${contact.phone}`} className="hover:text-brand-yellow transition-colors">{contact.phone}</a>
                        </div>
                      )}
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-2">
                        <Calendar className="w-3 h-3" />
                        {new Date(contact.createdAt).toLocaleDateString('en-US', {
                          month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'
                        })}
                      </div>
                    </td>
                    <td className="py-4 px-6 align-top max-w-md">
                      <div className="font-semibold text-gray-200 text-sm mb-1">{contact.subject}</div>
                      <div className="text-gray-400 text-sm bg-gray-900/50 p-3 rounded-lg border border-gray-800 whitespace-pre-wrap">
                        {contact.message}
                      </div>
                    </td>
                    <td className="py-4 px-6 align-top text-right space-x-2 whitespace-nowrap">
                      <button
                        onClick={() => handleDelete(contact._id)}
                        disabled={contact.status !== 'Resolved'}
                        className={`p-2 rounded-lg transition-colors border border-transparent ${
                          contact.status === 'Resolved'
                            ? 'bg-gray-800 hover:bg-red-500/20 text-gray-400 hover:text-red-500 hover:border-red-500/30'
                            : 'bg-gray-800/50 text-gray-600 cursor-not-allowed'
                        }`}
                        title={contact.status === 'Resolved' ? 'Delete Inquiry' : 'Only resolved inquiries can be deleted'}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
