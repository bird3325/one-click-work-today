import React, { useState } from 'react';
import HomePage from './pages/index';
import JobsPage from './pages/Jobs';
import ProfilePage from './pages/Profile';
import NavigationMenu from './components/ui/navigation-menu';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'jobs':
        return <JobsPage />;
      case 'applications':
        return <div className="p-4">지원내역 페이지</div>;
      case 'notifications':
        return <div className="p-4">알림 페이지</div>;
      case 'profile':
        return <ProfilePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderContent()}
      <NavigationMenu activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default App;
