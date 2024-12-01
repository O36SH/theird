import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Navbar from './Navbar';
import BottomNav from './BottomNav';
import Home from '../../pages/Home';
import Friends from '../../pages/Friends';
import Chats from '../../pages/Chats';
import Rooms from '../../pages/Rooms';
import Posts from '../../pages/Posts';
import Profile from '../../pages/Profile';
import Settings from '../../pages/Settings';

const AppLayout: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-gray-100 pb-16">
      {isHomePage && <Navbar />}
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
      <BottomNav />
    </div>
  );
};

export default AppLayout;