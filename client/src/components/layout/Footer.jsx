import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, ArrowRight, MapPin, Mail } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#05080f] pt-16 border-t border-gray-800/50 relative z-10">
      <div className="max-w-7xl mx-auto px-8 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-yellow to-yellow-600 flex items-center justify-center font-bold text-brand-dark">
              P
            </div>
            <div>
              <h1 className="font-bold text-lg leading-none tracking-tight">PRIME IMPACT</h1>
            </div>
          </div>
          <p className="text-sm text-text-secondary mb-6 leading-relaxed">
            We transform students into digital marketing experts with real-world exposure and placement support.
          </p>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-[0_5px_15px_rgba(24,119,242,0.4)] hover:scale-110 transition-transform">
              <FaFacebook className="text-[#1877F2] w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-xl flex items-center justify-center shadow-[0_5px_15px_rgba(225,48,108,0.4)] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:scale-110 transition-transform">
              <FaInstagram className="text-white w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-[0_5px_15px_rgba(10,102,194,0.4)] hover:scale-110 transition-transform">
              <FaLinkedin className="text-[#0A66C2] w-5 h-5" />
            </a>
            <a href="#" aria-label="YouTube" className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-[0_5px_15px_rgba(255,0,0,0.4)] hover:scale-110 transition-transform">
              <FaYoutube className="text-[#FF0000] w-6 h-6" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm text-text-secondary">
            {[
              { name: 'Home', path: '/' },
              { name: 'Courses', path: '/courses' },
              { name: 'Placements', path: '#' },
              { name: 'About Us', path: '/about' },
              { name: 'Blog', path: '/blog' },
              { name: 'Contact', path: '/contact' }
            ].map(link => (
              <li key={link.name}>
                <Link to={link.path} className="hover:text-text-primary transition-colors">{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Popular Courses</h4>
          <ul className="space-y-3 text-sm text-text-secondary">
            <li><Link to="/courses/digital-marketing-master-course" className="hover:text-text-primary transition-colors">Digital Marketing Master Course</Link></li>
            <li><Link to="/courses/seo-specialist-course" className="hover:text-text-primary transition-colors">SEO Specialist Course</Link></li>
            <li><Link to="/courses/social-media-marketing-course" className="hover:text-text-primary transition-colors">Social Media Marketing Course</Link></li>
            <li><Link to="/courses/google-ads-certification-course" className="hover:text-text-primary transition-colors">Google Ads Certification</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm text-text-secondary">
            <li className="flex items-start gap-3">
              <span className="text-brand-yellow mt-1"><MapPin className="w-4 h-4" /></span>
              <span>housing complex, Plot No C31, Najafgarh Rd, Block C, Vipin Garden, Nawada, New Delhi, 110059, India</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-brand-yellow"><Phone className="w-4 h-4" /></span>
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-brand-yellow"><Mail className="w-4 h-4" /></span>
              <span>info@primeimpact.com</span>
            </li>
          </ul>

          <div className="mt-8">
            <h5 className="font-bold text-sm mb-3">Newsletter</h5>
            <div className="flex">
              <input type="email" placeholder="Enter your email" className="bg-brand-card border border-gray-700 rounded-l-md px-4 py-2 w-full text-sm focus:outline-none focus:border-brand-yellow" />
              <button className="bg-brand-yellow text-brand-dark px-4 py-2 rounded-r-md font-bold hover:bg-brand-yellow-hover">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800/50 py-6 text-center text-xs text-text-secondary flex flex-col md:flex-row justify-between max-w-7xl mx-auto px-8">
        <p>© 2026 Prime Impact Digital Marketing Institute. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-text-primary">Privacy Policy</a>
          <a href="#" className="hover:text-text-primary">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
