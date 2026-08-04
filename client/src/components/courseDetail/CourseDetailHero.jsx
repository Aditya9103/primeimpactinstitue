import React from 'react';
import { ChevronRight, Clock, Briefcase, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CourseDetailHero({ course }) {
  const IconMap = {
    Clock: Clock,
    Briefcase: Briefcase,
    Award: Award,
    Users: Users
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16 mb-16">
      
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col text-left">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link to="/" className="hover:text-brand-yellow transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/courses" className="hover:text-brand-yellow transition-colors">Courses</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white truncate max-w-[200px]">{course.title.replace('\n', ' ')}</span>
        </div>

        {/* Tag */}
        <div className="inline-flex self-start items-center gap-2 bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/20 px-3 py-1 rounded-full text-xs font-bold mb-6 tracking-widest uppercase shadow-[0_0_15px_rgba(248,180,23,0.15)]">
          <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full animate-pulse"></span>
          {course.tag}
        </div>
        
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 leading-[1.1] whitespace-pre-line">
          {course.title.split('\n').map((line, index) => (
             <React.Fragment key={index}>
               {index === 1 ? <span className="text-brand-yellow">{line}</span> : line}
               {index === 0 && <br />}
             </React.Fragment>
          ))}
        </h1>
        
        <p className="text-white font-medium text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
          {course.description}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 mb-10">
          {course.heroStats.map((stat, idx) => {
             const IconComponent = IconMap[stat.icon];
             return (
               <div key={idx} className="flex flex-col gap-1.5">
                 <div className="flex items-center gap-2 text-brand-yellow mb-1">
                   {IconComponent && <IconComponent className="w-4 h-4" />}
                   <span className="text-[11px] font-bold tracking-wider uppercase">{stat.label}</span>
                 </div>
                 <span className="text-white font-medium text-sm">{stat.value}</span>
               </div>
             );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex items-center justify-center gap-2 bg-brand-yellow text-black font-bold py-3.5 px-8 rounded hover:bg-yellow-400 transition-colors shadow-[0_0_20px_rgba(248,180,23,0.3)]">
            Book Free Demo Class
          </button>
          <button className="flex items-center justify-center gap-2 bg-transparent border border-gray-700 text-white font-bold py-3.5 px-8 rounded hover:bg-gray-800 transition-colors">
            Download Syllabus
          </button>
        </div>
      </div>

      {/* Right Content - Hero Image */}
      <div className="w-full md:w-1/2 relative flex justify-center md:justify-end">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-80 h-64 md:h-80 bg-brand-yellow/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
        <img 
          src={course.image}
          alt={course.title}
          className="relative z-10 w-full max-w-[500px] lg:max-w-[600px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }}
        />
      </div>
    </div>
  );
}
