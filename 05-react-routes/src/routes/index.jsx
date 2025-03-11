// src/routes/AppRoutes.jsx
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/dashboard/Profile";
import Setting from "../pages/dashboard/Setting";
import Fans from "../pages/dashboard/profile/Fans";
import Follow from "../pages/dashboard/profile/Follow";
import Login from "../pages/Login";
import Book from "../pages/Book";
import BlogDetails from "../components/BlogDetails";
import BlogList from "../components/BlogList";
import Layout from "../components/Layout";

const AppRoutes = ({ user, onLogin }) => {
  return (
    <Routes>
      {/* 登录页面，不带导航栏 */}
      <Route path="/login" element={<Login onLogin={onLogin} />} />

      {/* 其他页面，带导航栏 */}
      <Route path="/" element={<Layout user={user} />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book/:bookId" element={<Book bookId="123" />} />
        <Route path="/blog/:blogIndex" element={<BlogDetails />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Navigate to="profile" />} />
          <Route path="profile" element={<Profile />}>
            <Route path="fans" element={<Fans />} />
            <Route path="follow" element={<Follow />} />
          </Route>
          <Route path="setting" element={<Setting />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
