import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import BookDemoPage from './pages/BookDemoPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import Placeholder from './pages/Placeholder';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import PlacementsPage from './pages/PlacementsPage';
import AboutPage from './pages/AboutPage';

import AdminLayout from './layouts/AdminLayout';
import AdminLogin from './pages/admin/AdminLogin';
import AdminRegister from './pages/admin/AdminRegister';
import AdminContacts from './pages/admin/AdminContacts';
import AdminDemos from './pages/admin/AdminDemos';
import AdminBlogs from './pages/admin/AdminBlogs';
import AdminWriteBlog from './pages/admin/AdminWriteBlog';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes with MainLayout */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/book-demo" element={<MainLayout><BookDemoPage /></MainLayout>} />
        <Route path="/courses" element={<MainLayout><CoursesPage /></MainLayout>} />
        <Route path="/courses/:slug" element={<MainLayout><CourseDetailPage /></MainLayout>} />
        <Route path="/placements" element={<MainLayout><PlacementsPage /></MainLayout>} />
        <Route path="/about" element={<MainLayout><AboutPage /></MainLayout>} />
        <Route path="/blog" element={<MainLayout><BlogPage /></MainLayout>} />
        <Route path="/blog/:slug" element={<MainLayout><BlogPostPage /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><ContactPage /></MainLayout>} />

        {/* Admin Auth Routes (No Layout) */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />

        {/* Admin Routes with AdminLayout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="contacts" element={<AdminContacts />} />
          <Route path="demos" element={<AdminDemos />} />
          <Route path="blogs">
            <Route index element={<AdminBlogs />} />
            <Route path="new" element={<AdminWriteBlog />} />
            <Route path="edit/:id" element={<AdminWriteBlog />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
