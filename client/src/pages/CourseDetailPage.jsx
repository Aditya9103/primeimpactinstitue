import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { coursesDetailData } from '../data/coursesDetailData';

// Modular Components
import CourseDetailHero from '../components/courseDetail/CourseDetailHero';
import CourseStatsRow from '../components/courseDetail/CourseStatsRow';
import CourseAbout from '../components/courseDetail/CourseAbout';
import CourseCurriculum from '../components/courseDetail/CourseCurriculum';
import CourseTools from '../components/courseDetail/CourseTools';
import CourseInstructors from '../components/courseDetail/CourseInstructors';
import CourseSuccessStories from '../components/courseDetail/CourseSuccessStories';
import CourseSidebar from '../components/courseDetail/CourseSidebar';

export default function CourseDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Fetch course from dummy data based on slug. If not found, use a fallback or 404.
    const foundCourse = coursesDetailData[slug];
    
    if (foundCourse) {
      setCourse(foundCourse);
    } else {
      navigate('/courses'); // fallback redirect
    }
  }, [slug, navigate]);

  if (!course) return null;

  return (
    <div className="bg-transparent min-h-screen relative pt-24 pb-12">
      <div className="px-6 lg:px-12 max-w-[1400px] mx-auto relative z-10 w-full flex flex-col">
        
        {/* Top Hero Section */}
        <CourseDetailHero course={course} />

        {/* Full-width Stats Row */}
        <CourseStatsRow stats={course.statsRow} />

        {/* Main Content (Full Width) */}
        <div className="flex flex-col w-full">
          <CourseAbout about={course.about} />
          <CourseCurriculum curriculum={course.curriculum} />
          <CourseTools tools={course.tools} />
          <CourseInstructors instructors={course.instructors} />
          <CourseSuccessStories testimonials={course.testimonials} />
        </div>
        
      </div>
    </div>
  );
}
