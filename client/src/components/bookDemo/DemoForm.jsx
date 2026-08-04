import React, { useState } from 'react';
import { User, Mail, ChevronDown, Calendar, Clock, ArrowRight, ShieldCheck, Loader2, AlertCircle } from 'lucide-react';
import { useBookDemoMutation } from '../../store/apiSlice';

export default function DemoForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    date: '',
    time: '',
    message: ''
  });

  const [bookDemo, { isLoading }] = useBookDemoMutation();
  const [statusMsg, setStatusMsg] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMsg({ type: '', text: '' });

    try {
      await bookDemo(formData).unwrap();
      setStatusMsg({ type: 'success', text: 'Thank you! Your demo request has been submitted successfully.' });
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        date: '',
        time: '',
        message: ''
      });
    } catch (err) {
      setStatusMsg({
        type: 'error',
        text: err?.data?.message || err.error || 'Something went wrong. Please try again later.'
      });
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#111723] to-[#080b11] border border-brand-yellow/30 rounded-2xl p-5 lg:p-6 shadow-[0_30px_60px_rgba(0,0,0,0.6),inset_0_2px_3px_rgba(255,255,255,0.08),inset_0_-3px_10px_rgba(0,0,0,0.5)] relative overflow-hidden">
      {/* Form Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="relative z-10">
        <div className="text-center mb-4">
          <h3 className="text-2xl text-white font-bold mb-1 tracking-tight">Reserve Your Spot Now</h3>
          <p className="text-gray-300 text-[13px]">Fill in your details and our team will connect with you shortly.</p>
        </div>

        {statusMsg.text && (
          <div className={`mb-4 px-4 py-3 rounded-lg flex items-start gap-3 text-sm ${
            statusMsg.type === 'success' 
              ? 'bg-green-500/10 border border-green-500/50 text-green-500' 
              : 'bg-red-500/10 border border-red-500/50 text-red-500'
          }`}>
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <span>{statusMsg.text}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Full Name */}
            <div>
              <label className="block text-white text-[13px] font-semibold mb-2">Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full bg-[#0a0e17] border border-gray-700/80 rounded-lg px-4 py-2 text-[14px] text-white placeholder-gray-400 focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/50 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.4),0_1px_1px_rgba(255,255,255,0.05)]"
                />
                <User className="absolute right-4 top-3 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-white text-[13px] font-semibold mb-2">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full bg-[#0a0e17] border border-gray-700/80 rounded-lg px-4 py-2 text-[14px] text-white placeholder-gray-400 focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/50 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.4),0_1px_1px_rgba(255,255,255,0.05)]"
                />
                <Mail className="absolute right-4 top-3 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-white text-[13px] font-semibold mb-2">Phone Number</label>
              <div className="flex bg-[#0a0e17] border border-gray-700/80 rounded-lg overflow-hidden focus-within:border-brand-yellow/50 focus-within:ring-1 focus-within:ring-brand-yellow/50 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.4),0_1px_1px_rgba(255,255,255,0.05)]">
                <div className="flex items-center gap-1.5 px-3 border-r border-gray-700/80 bg-transparent">
                  <span className="text-[13px]">🇮🇳</span>
                  <span className="text-gray-300 text-[13px]">+91</span>
                  <ChevronDown className="w-3 h-3 text-gray-500" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full bg-transparent px-4 py-2 text-[14px] text-white placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Course of Interest */}
            <div>
              <label className="block text-white text-[13px] font-semibold mb-2">Course of Interest</label>
              <div className="relative">
                <select
                  name="course"
                  required
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full bg-[#0a0e17] border border-gray-700/80 rounded-lg px-4 py-2 text-[14px] text-white focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/50 transition-all appearance-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.4),0_1px_1px_rgba(255,255,255,0.05)]"
                >
                  <option value="" disabled>Select a course</option>
                  <option value="digital-marketing-master">Digital Marketing Master Course</option>
                  <option value="seo-specialist">SEO Specialist Course</option>
                  <option value="social-media-marketing">Social Media Marketing Course</option>
                  <option value="google-ads">Google Ads Certification</option>
                </select>
                <ChevronDown className="absolute right-4 top-3 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>
            </div>

            {/* Preferred Date */}
            <div>
              <label className="block text-white text-[13px] font-semibold mb-2">Preferred Date (Optional)</label>
              <div className="relative">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-[#0a0e17] border border-gray-700/80 rounded-lg px-4 py-2 text-[14px] text-white focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/50 transition-all [color-scheme:dark] shadow-[inset_0_2px_4px_rgba(0,0,0,0.4),0_1px_1px_rgba(255,255,255,0.05)]"
                />
                <Calendar className="absolute right-4 top-3 w-4 h-4 text-gray-500 pointer-events-none opacity-0" />
              </div>
            </div>

            {/* Preferred Time */}
            <div>
              <label className="block text-white text-[13px] font-semibold mb-2">Preferred Time (Optional)</label>
              <div className="relative">
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full bg-[#0a0e17] border border-gray-700/80 rounded-lg px-4 py-2 text-[14px] text-white focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/50 transition-all appearance-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.4),0_1px_1px_rgba(255,255,255,0.05)]"
                >
                  <option value="" disabled>Select a time</option>
                  <option value="anytime">Any Time</option>
                  <option value="morning">Morning (10 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (2 PM - 4 PM)</option>
                  <option value="evening">Evening (6 PM - 8 PM)</option>
                </select>
                <Clock className="absolute right-4 top-3 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Textarea */}
          <div>
            <label className="block text-white text-[13px] font-semibold mb-2">Anything specific you'd like to learn?</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="2"
              placeholder="Let us know your goals or questions..."
              className="w-full bg-[#0a0e17] border border-gray-700/80 rounded-lg px-4 py-2 text-[14px] text-white placeholder-gray-400 focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/50 transition-all resize-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.4),0_1px_1px_rgba(255,255,255,0.05)]"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-b from-[#fce484] to-[#d99820] hover:from-[#fdf1b6] hover:to-[#ebaa2e] text-black font-bold text-[15px] py-2.5 rounded-lg transition-all flex justify-center items-center gap-2 shadow-[0_10px_25px_rgba(248,180,23,0.4),inset_0_2px_2px_rgba(255,255,255,0.8),inset_0_-3px_5px_rgba(0,0,0,0.3)] border border-[#fce484] hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <><Loader2 className="w-4 h-4 animate-spin" /> Booking...</>
            ) : (
              <>Book My Free Demo Class <ArrowRight className="w-4 h-4" /></>
            )}
          </button>

          {/* Privacy Text */}
          <div className="flex items-center justify-center gap-2 text-gray-500 text-[12px] mt-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>We respect your privacy. Your information is safe with us.</span>
          </div>

        </form>
      </div>
    </div>
  );
}
