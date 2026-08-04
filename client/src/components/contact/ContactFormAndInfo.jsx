import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Loader2, AlertCircle } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { useSubmitContactMutation } from '../../store/apiSlice';

export default function ContactFormAndInfo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitContact, { isLoading }] = useSubmitContactMutation();
  const [statusMsg, setStatusMsg] = useState({ type: '', text: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMsg({ type: '', text: '' });

    try {
      await submitContact(formData).unwrap();
      setStatusMsg({ type: 'success', text: 'Thank you! Your message has been sent successfully.' });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      setStatusMsg({
        type: 'error',
        text: err?.data?.message || err.error || 'Something went wrong. Please try again later.'
      });
    }
  };

  return (
    <div className="px-6 lg:px-12 max-w-[1400px] mx-auto relative z-10 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

        {/* Column 1: Form Container */}
        <div className="flex flex-col h-full">
          <h2 className="text-2xl md:text-[28px] font-bold text-white mb-2 text-center">Send a Message</h2>
          <p className="text-gray-400 text-sm mb-6 text-center">Fill out the form and we'll get back to you shortly.</p>

          {/* Form Card */}
          <div className="bg-gradient-to-b from-[#111723]/90 to-[#080b11]/90 backdrop-blur-xl border border-brand-yellow/30 rounded-3xl p-8 shadow-[0_30px_60px_rgba(0,0,0,0.6),inset_0_2px_3px_rgba(255,255,255,0.08),inset_0_-3px_10px_rgba(0,0,0,0.5)] relative overflow-hidden flex-1 flex flex-col">
            {/* Ambient Top Glow */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent"></div>

            <form onSubmit={handleSubmit} className="space-y-4 relative z-10 flex-1 flex flex-col justify-between">

              {statusMsg.text && (
                <div className={`px-4 py-3 rounded-lg flex items-start gap-3 text-sm ${statusMsg.type === 'success'
                  ? 'bg-green-500/10 border border-green-500/50 text-green-500'
                  : 'bg-red-500/10 border border-red-500/50 text-red-500'
                  }`}>
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{statusMsg.text}</span>
                </div>
              )}

              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[12px] font-bold text-gray-300">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#05070a] border border-gray-800 text-white text-[13px] px-4 py-2.5 rounded-lg focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/50 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] placeholder:text-gray-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[12px] font-bold text-gray-300">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#05070a] border border-gray-800 text-white text-[13px] px-4 py-2.5 rounded-lg focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/50 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] placeholder:text-gray-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[12px] font-bold text-gray-300">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#05070a] border border-gray-800 text-white text-[13px] px-4 py-2.5 rounded-lg focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/50 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] placeholder:text-gray-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[12px] font-bold text-gray-300">Subject</label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#05070a] border border-gray-800 text-white text-[13px] px-4 py-2.5 rounded-lg focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/50 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] appearance-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234b5563'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
                  >
                    <option value="" disabled className="text-gray-600">Select a subject</option>
                    <option value="General Inquiry" className="text-white">General Inquiry</option>
                    <option value="Courses & Training" className="text-white">Courses & Training</option>
                    <option value="Consulting Services" className="text-white">Consulting Services</option>
                    <option value="Partnership" className="text-white">help us</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[12px] font-bold text-gray-300">Message</label>
                  <textarea
                    required
                    placeholder="Tell us how we can help you..."
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#05070a] border border-gray-800 text-white text-[13px] px-4 py-2.5 rounded-lg focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/50 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] placeholder:text-gray-600 resize-none"
                  ></textarea>
                </div>
              </div>

              <div className="pt-4 mt-auto">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-[#d99820] to-[#f4be47] hover:from-[#f4be47] hover:to-[#f4be47] text-black font-bold text-[14px] py-3.5 rounded-xl transition-all shadow-[0_5px_15px_rgba(248,180,23,0.3),inset_0_2px_4px_rgba(255,255,255,0.4)] hover:scale-[1.01] active:scale-[0.99] flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                  ) : (
                    <>Send Message <Send className="w-4 h-4" /></>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Column 2: Contact Info */}
        <div className="flex flex-col h-full">
          <h2 className="text-2xl md:text-[28px] font-bold text-white mb-2 text-center">Get In Touch</h2>
          <p className="text-gray-400 text-sm mb-6 text-center">We're here to help you choose the right path.</p>

          <div className="flex flex-col gap-4 flex-1">
            {/* Location */}
            <div className="bg-gradient-to-b from-[#111723]/90 to-[#080b11]/90 backdrop-blur-xl border border-brand-yellow/20 rounded-2xl p-6 shadow-[0_15px_30px_rgba(0,0,0,0.4),inset_0_2px_3px_rgba(255,255,255,0.05)] flex items-start gap-4 flex-1">
              <div className="w-12 h-12 rounded-xl bg-[#05070a] border border-gray-800 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] flex-shrink-0">
                <MapPin className="w-5 h-5 text-brand-yellow" />
              </div>
              <div>
                <h4 className="text-white font-bold text-[15px] mb-1">Visit Our Campus</h4>
                <p className="text-gray-400 text-[13px] leading-relaxed">housing complex, Plot No C31, Najafgarh Rd, Block C, Vipin Garden, Nawada, New Delhi, 110059, India</p>
              </div>
            </div>

            {/* Call */}
            <div className="bg-gradient-to-b from-[#111723]/90 to-[#080b11]/90 backdrop-blur-xl border border-brand-yellow/20 rounded-2xl p-6 shadow-[0_15px_30px_rgba(0,0,0,0.4),inset_0_2px_3px_rgba(255,255,255,0.05)] flex items-start gap-4 flex-1">
              <div className="w-12 h-12 rounded-xl bg-[#05070a] border border-gray-800 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] flex-shrink-0">
                <Phone className="w-5 h-5 text-brand-yellow" />
              </div>
              <div>
                <h4 className="text-white font-bold text-[15px] mb-1">Call Us</h4>
                <p className="text-brand-yellow font-semibold text-[14px] mb-0.5">+91 98765 43210</p>
                <p className="text-gray-500 text-[12px]">Mon - Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-gradient-to-b from-[#111723]/90 to-[#080b11]/90 backdrop-blur-xl border border-brand-yellow/20 rounded-2xl p-6 shadow-[0_15px_30px_rgba(0,0,0,0.4),inset_0_2px_3px_rgba(255,255,255,0.05)] flex items-start gap-4 flex-1">
              <div className="w-12 h-12 rounded-xl bg-[#05070a] border border-gray-800 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] flex-shrink-0">
                <Mail className="w-5 h-5 text-brand-yellow" />
              </div>
              <div>
                <h4 className="text-white font-bold text-[15px] mb-1">Email Us</h4>
                <p className="text-gray-300 text-[13px] mb-0.5 break-all">info@primeimpact.com</p>
                <p className="text-gray-500 text-[12px]">We respond within 24 hours</p>
              </div>
            </div>

            {/* Follow Us */}
            <div className="bg-gradient-to-b from-[#111723]/90 to-[#080b11]/90 backdrop-blur-xl border border-brand-yellow/20 rounded-2xl p-6 shadow-[0_15px_30px_rgba(0,0,0,0.4),inset_0_2px_3px_rgba(255,255,255,0.05)] flex-1 flex flex-col justify-center">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-white font-bold text-[14px] mb-1">Follow Us</h4>
                  <p className="text-gray-500 text-[10px]">Stay updated</p>
                </div>
                <div className="flex items-center gap-2 lg:gap-3">
                  <a href="#" aria-label="Facebook" className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-[0_5px_15px_rgba(24,119,242,0.4)] hover:scale-110 transition-transform">
                    <FaFacebook className="text-[#1877F2] w-4 h-4" />
                  </a>
                  <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-lg flex items-center justify-center shadow-[0_5px_15px_rgba(225,48,108,0.4)] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:scale-110 transition-transform">
                    <FaInstagram className="text-white w-4 h-4" />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-[0_5px_15px_rgba(10,102,194,0.4)] hover:scale-110 transition-transform">
                    <FaLinkedin className="text-[#0A66C2] w-4 h-4" />
                  </a>
                  <a href="#" aria-label="YouTube" className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-[0_5px_15px_rgba(255,0,0,0.4)] hover:scale-110 transition-transform">
                    <FaYoutube className="text-[#FF0000] w-[18px] h-[18px]" />
                  </a>
                  <a href="#" aria-label="WhatsApp" className="w-8 h-8 bg-[#25D366] rounded-lg flex items-center justify-center shadow-[0_5px_15px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform">
                    <FaWhatsapp className="text-white w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: Map & Office Hours */}
        <div className="flex flex-col h-full">
          <h2 className="text-2xl md:text-[28px] font-bold text-white mb-2 text-center">Visit Us</h2>
          <p className="text-gray-400 text-sm mb-6 text-center">Find our location and office hours below.</p>

          <div className="flex flex-col gap-4 flex-1">
            {/* Map */}
            <div className="flex-1 w-full min-h-[350px] bg-[#111723]/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-brand-yellow/20 shadow-[0_15px_30px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(0,0,0,0.6)] relative p-2 flex">
              <div className="w-full h-full rounded-xl overflow-hidden shadow-[inset_0_2px_10px_rgba(0,0,0,1)] flex-1">
                <iframe
                  src="https://maps.google.com/maps?q=Prime+Time+Research+Media+Private+Limited,+Dwarka+Sector+12,+New+Delhi&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Prime Impact Location"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Office Hours Card */}
            <div className="bg-gradient-to-b from-[#111723] to-[#0a0e17] border border-brand-yellow/30 rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-[#111317] border border-brand-yellow/30 flex items-center justify-center flex-shrink-0 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),0_0_10px_rgba(248,180,23,0.1)]">
                <Clock className="w-5 h-5 text-brand-yellow" />
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-gray-400 text-[11px] font-bold tracking-wider mb-0.5">Monday - Saturday</h4>
                    <p className="text-white font-bold text-[13px]">9:00 AM - 7:00 PM</p>
                  </div>
                  <span className="text-brand-yellow">+</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-gray-800/50">
                  <div>
                    <h4 className="text-gray-400 text-[11px] font-bold tracking-wider mb-0.5">Sunday</h4>
                    <p className="text-white font-bold text-[13px]">10:00 AM - 4:00 PM</p>
                  </div>
                  <span className="text-brand-yellow">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
