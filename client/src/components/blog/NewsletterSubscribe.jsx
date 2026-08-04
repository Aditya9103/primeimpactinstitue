import React, { useState } from 'react';
import { Mail, Loader2, AlertCircle } from 'lucide-react';
import { useSubscribeNewsletterMutation } from '../../store/apiSlice';

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState('');
  const [statusMsg, setStatusMsg] = useState({ type: '', text: '' });
  const [subscribe, { isLoading }] = useSubscribeNewsletterMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setStatusMsg({ type: '', text: '' });
    try {
      await subscribe({ email }).unwrap();
      setStatusMsg({ type: 'success', text: 'Thanks for subscribing!' });
      setEmail('');
    } catch (err) {
      setStatusMsg({ 
        type: 'error', 
        text: err?.data?.message || 'Failed to subscribe. Please try again.' 
      });
    }
  };

  return (
    <div className="w-full bg-[#0a0e17] rounded-2xl border border-gray-800 p-8 lg:p-12 mt-16 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-64 h-64 bg-brand-yellow/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6 max-w-xl text-center lg:text-left">
          <div className="hidden sm:flex w-16 h-16 shrink-0 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 items-center justify-center">
            <Mail className="w-8 h-8 text-brand-yellow" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Stay Ahead with Expert Insights</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Subscribe to our newsletter and get the latest digital marketing tips, trends, and updates straight to your inbox.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-auto flex-1 max-w-md">
          {statusMsg.text && (
            <div className={`mb-3 px-4 py-2 rounded-lg flex items-center justify-center lg:justify-start gap-2 text-sm ${
              statusMsg.type === 'success' 
                ? 'bg-green-500/10 border border-green-500/50 text-green-500' 
                : 'bg-red-500/10 border border-red-500/50 text-red-500'
            }`}>
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{statusMsg.text}</span>
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 bg-gray-900 border border-gray-700/80 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/50 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-gradient-to-b from-[#fce484] to-[#d99820] hover:from-[#fdf1b6] hover:to-[#ebaa2e] text-black font-bold text-sm px-8 py-3 rounded-lg transition-all shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap flex justify-center items-center"
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
