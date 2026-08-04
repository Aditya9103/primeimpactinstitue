import React from 'react';
import { Clock, Star, ArrowRight } from 'lucide-react';
import { SiGoogleads, SiGoogle, SiGoogleanalytics } from 'react-icons/si';
import { FaBullhorn, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiTrendingUp } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

export default function PopularCourses() {
  const navigate = useNavigate();

  const courses = [
    {
      id: "digital-marketing-master-course",
      title: "Digital Marketing\nMaster Course",
      icon: (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Subtle grid background */}
          <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTEyIDIwYThfOCA4IDAgMSAwIDAtMTYgOF84IDggMCAwIDAgMCAxNnoiLz48cGF0aCBkPSJNMTEuOSAxMmMtMi44IDAtNC45LTIuMi00LjktNW05LjggMGMwIDIuOC0yLjIgNS00LjkgNW0wIDBjLTIuOCAwLTQuOSAyLjEtNC45IDR2NG05LjggLTR2NG0tNC45LTZjMi44IDAgNC45LTIuMSA0LjktNCIvPjwvc3ZnPg==')] bg-repeat bg-[length:40px_40px] mix-blend-overlay"></div>

          {/* Megaphone SVG approximation */}
          <svg className="w-24 h-24 drop-shadow-[0_10px_15px_rgba(168,85,247,0.4)] z-10 -rotate-12" viewBox="0 0 100 100" fill="none">
            {/* Handle */}
            <path d="M40 60 L45 80 L55 80 L50 60 Z" fill="#6b21a8" />
            {/* Main body */}
            <path d="M20 40 L70 20 L75 60 L20 50 Z" fill="#f8b417" />
            {/* Front purple ring */}
            <ellipse cx="20" cy="45" rx="5" ry="15" fill="#6b21a8" />
            {/* Back purple ring */}
            <ellipse cx="72" cy="40" rx="8" ry="22" fill="#6b21a8" />
            <ellipse cx="72" cy="40" rx="5" ry="18" fill="#581c87" />
            {/* Sound waves */}
            <path d="M10 35 Q5 45 10 55" stroke="#f8b417" strokeWidth="3" strokeLinecap="round" />
            <path d="M2 30 Q-5 45 2 60" stroke="#f8b417" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      ),
      color: "from-[#3b0764]/80 to-[#0a0e17]",
      tag: "MOST POPULAR",
      duration: "3-6 Months",
      level: "Beginner to Advanced",
      rating: "4.9 (1200+)",
    },
    {
      id: "seo-specialist-course",
      title: "SEO Specialist\nCourse",
      icon: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative z-10 w-28 h-28 flex items-center justify-center drop-shadow-[0_10px_15px_rgba(20,184,166,0.3)]">

            {/* Floating Bubble 1 */}
            <div className="absolute top-1 left-1 w-10 h-10 rounded-full bg-white/5 border border-[#2dd4bf]/30 backdrop-blur-md flex items-center justify-center shadow-lg animate-[bounce_4s_ease-in-out_infinite]">
              <SiGoogle className="text-[#2dd4bf] w-5 h-5 opacity-80" />
            </div>

            {/* Floating Bubble 2 */}
            <div className="absolute bottom-2 right-1 w-11 h-11 rounded-full bg-white/5 border border-[#2dd4bf]/30 backdrop-blur-md flex items-center justify-center shadow-lg animate-[bounce_5s_ease-in-out_infinite_0.5s]">
              <SiGoogleanalytics className="text-[#2dd4bf] w-5 h-5 opacity-80" />
            </div>

            {/* Main Center Badge */}
            <div className="absolute inset-0 m-auto w-[72px] h-[72px] bg-gradient-to-br from-[#0f2c29] to-[#042f2e] rounded-full border-[2px] border-[#2dd4bf] flex items-center justify-center shadow-[0_0_25px_rgba(45,212,191,0.4)] z-20">
              <span className="text-white font-extrabold text-[22px] tracking-wider">SEO</span>
            </div>

          </div>
        </div>
      ),
      color: "from-[#042f2e]/90 to-[#0a0e17]",
      duration: "2-4 Months",
      level: "Beginner to Advanced",
      rating: "4.8 (980+)",
    },
    {
      id: "social-media-marketing-course",
      title: "Social Media Marketing\nCourse",
      icon: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="grid grid-cols-3 gap-3 drop-shadow-[0_10px_15px_rgba(29,78,216,0.3)] z-10">
            
            {/* Facebook */}
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-[0_5px_15px_rgba(24,119,242,0.4)] hover:scale-105 transition-transform">
              <FaFacebook className="text-[#1877F2] w-8 h-8" />
            </div>

            {/* Instagram */}
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-[0_5px_15px_rgba(225,48,108,0.4)] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:scale-105 transition-transform">
              <FaInstagram className="text-white w-7 h-7" />
            </div>

            {/* LinkedIn */}
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-[0_5px_15px_rgba(10,102,194,0.4)] hover:scale-105 transition-transform">
              <FaLinkedin className="text-[#0A66C2] w-7 h-7" />
            </div>

            {/* Twitter/X */}
            <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.5)] border border-gray-700 hover:scale-105 transition-transform">
              <FaXTwitter className="text-white w-6 h-6" />
            </div>

            {/* WhatsApp */}
            <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center shadow-[0_5px_15px_rgba(37,211,102,0.4)] hover:scale-105 transition-transform">
              <FaWhatsapp className="text-white w-7 h-7" />
            </div>

            {/* YouTube */}
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-[0_5px_15px_rgba(255,0,0,0.4)] hover:scale-105 transition-transform">
              <FaYoutube className="text-[#FF0000] w-8 h-8" />
            </div>

          </div>
        </div>
      ),
      color: "from-[#1e3a8a]/80 to-[#0a0e17]",
      duration: "2-3 Months",
      level: "Beginner",
      rating: "4.7 (840+)",
    },
    {
      id: "google-ads-certification-course",
      title: "Google Ads Certification\nCourse",
      icon: (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Wavy line background */}
          <div className="absolute inset-0 opacity-40">
            <svg viewBox="0 0 100 50" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0,40 Q15,10 30,30 T60,20 T90,35 T100,10" fill="none" stroke="#f8b417" strokeWidth="0.5" />
              <path d="M0,35 Q20,50 40,25 T75,15 T100,25" fill="none" stroke="#f8b417" strokeWidth="0.2" />
            </svg>
          </div>
          {/* Google Ads Logo */}
          <div className="relative z-10 w-24 h-24 flex items-center justify-center drop-shadow-[0_15px_25px_rgba(248,180,23,0.3)]">
            <SiGoogleads className="w-20 h-20 text-brand-yellow drop-shadow-md" />
          </div>
        </div>
      ),
      color: "from-[#452a00]/80 to-[#0a0e17]",
      duration: "2-3 Months",
      level: "Beginner to Advanced",
      rating: "4.8 (520+)",
    }
  ];

  return (
    <div className="py-12 px-6 lg:px-12 max-w-[1400px] mx-auto bg-transparent relative z-10">

      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-brand-yellow text-xs font-bold mb-3 tracking-widest uppercase">
            <div className="w-2 h-2 bg-brand-yellow rounded-full shadow-[0_0_8px_rgba(248,180,23,0.8)]"></div>
            OUR POPULAR COURSES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-md text-white leading-tight">Choose Your Path to Success</h2>
          <p className="text-gray-200 drop-shadow-sm max-w-md text-[15px] leading-relaxed">From basics to advanced strategies, we have the perfect course for you to build a successful career.</p>
        </div>
        <button 
          onClick={() => navigate('/courses')}
          className="border border-gray-700 hover:border-brand-yellow hover:text-brand-yellow px-6 py-3 rounded-full transition-colors text-sm font-semibold flex items-center gap-2 text-white"
        >
          Explore All Courses <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      {/*Popular courses card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, i) => (
          <div 
            key={i} 
            onClick={() => navigate(`/courses/${course.id}`)}
            className="relative bg-[#0a0e17] rounded-2xl overflow-hidden border border-[#ffffff0a] shadow-[inset_0_2px_3px_rgba(255,255,255,0.1),inset_0_-2px_3px_rgba(0,0,0,0.5),0_20px_40px_rgba(0,0,0,0.6)] hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
          >

            {/* Top Gradient Background */}
            <div className={`absolute top-0 left-0 right-0 h-40 bg-gradient-to-b ${course.color} opacity-80`}></div>

            {/* Content Container */}
            <div className="relative z-10 p-5 pb-6 flex flex-col h-full">

              {/* Badge */}
              <div className="h-6 mb-2">
                {course.tag && (
                  <span className="bg-brand-yellow text-black text-[10px] font-bold px-3 py-1 rounded-full shadow-sm tracking-wide">
                    {course.tag}
                  </span>
                )}
              </div>

              {/* 3D Icon Area */}
              <div className="h-32 mb-6 flex items-center justify-center">
                {course.icon}
              </div>

              {/* Text Info */}
              <div className="flex-1 flex flex-col justify-end">
                <h3 className="font-bold text-white text-[16px] leading-tight mb-5 whitespace-pre-line">
                  {course.title}
                </h3>

                <div className="flex items-center text-[11px] text-gray-300 mb-4 gap-2">
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {course.duration}</span>
                  <span className="text-gray-600">|</span>
                  <span>{course.level}</span>
                </div>

                <div className="flex items-center gap-1.5 text-brand-yellow mb-5">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-bold text-white text-[13px]">{course.rating.split(' ')[0]}</span>
                  <span className="text-gray-300 text-[11px]">{course.rating.split(' ')[1]}</span>
                </div>
              </div>

              {/* Footer / CTA */}
              <div className="border-t border-gray-800 pt-4 flex items-center justify-between">
                <span className="text-brand-yellow group-hover:text-yellow-400 transition-colors flex items-center gap-2 text-[13px] font-bold tracking-wide">
                  Explore Course <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
