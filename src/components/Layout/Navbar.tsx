import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import Button from '@/components/ui/Button';
import Avatar from '@/components/ui/Avatar';
import { Cog6ToothIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
              <span className="text-xl font-bold text-blue-600">محادثات</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/settings">
              <Button variant="secondary" size="sm">
                <Cog6ToothIcon className="h-5 w-5" />
              </Button>
            </Link>
            
            <Link to="/profile">
              <Avatar
                src={user?.avatar}
                alt={user?.name}
                size="sm"
                fallback={user?.name}
              />
            </Link>

            <Button
              variant="outline"
              size="sm"
              onClick={logout}
            >
              <ArrowRightOnRectangleIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;