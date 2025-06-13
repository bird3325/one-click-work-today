import React from 'react';
import { Home, Search, FileText, Bell, User } from 'lucide-react';

interface NavigationMenuProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'home', icon: Home, label: '홈' },
    { id: 'jobs', icon: Search, label: '일자리찾기' },
    { id: 'applications', icon: FileText, label: '지원내역' },
    { id: 'notifications', icon: Bell, label: '알림' },
    { id: 'profile', icon: User, label: '마이페이지' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 safe-area-pb">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
              activeTab === id 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Icon className="w-6 h-6" />
            <span className="text-xs font-medium">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavigationMenu;
