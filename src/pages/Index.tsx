import React, { useState } from 'react';
import { MapPin, Clock, Star, Zap, Users } from 'lucide-react';

const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* 헤더 */}
      <header className="bg-white shadow-sm p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">오늘일</h1>
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 rounded-full bg-gray-100"
        >
          🌙
        </button>
      </header>

      {/* 즉시 매칭 버튼 섹션 */}
      <section className="p-6 space-y-4">
        <div className="grid grid-cols-1 gap-4">
          {/* 즉시 출근 버튼 */}
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-lg active:scale-95 transition-transform">
            <div className="flex items-center justify-center space-x-3">
              <Zap className="w-8 h-8" />
              <div className="text-left">
                <div className="text-xl font-bold">즉시 출근</div>
                <div className="text-blue-100 text-sm">지금 바로 일할 수 있어요</div>
              </div>
            </div>
          </button>

          {/* 지금 구인 버튼 */}
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-lg active:scale-95 transition-transform">
            <div className="flex items-center justify-center space-x-3">
              <Users className="w-8 h-8" />
              <div className="text-left">
                <div className="text-xl font-bold">지금 인력 구인</div>
                <div className="text-orange-100 text-sm">즉시 인력이 필요해요</div>
              </div>
            </div>
          </button>
        </div>
      </section>

      {/* 내 주변 일자리 */}
      <section className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">내 주변 일자리</h2>
          <button className="text-blue-600 text-sm font-medium">지도보기</button>
        </div>
        
        <div className="space-y-3">
          {[1, 2, 3].map((item) => (
            <JobCard key={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

const JobCard = () => (
  <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
    <div className="flex justify-between items-start mb-3">
      <div>
        <h3 className="font-bold text-lg">카페 홀서빙</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>강남구 · 도보 5분</span>
        </div>
      </div>
      <div className="text-right">
        <div className="text-xl font-bold text-green-600">15,000원</div>
        <div className="text-sm text-gray-500">시급</div>
      </div>
    </div>
    
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4 text-sm text-gray-600">
        <div className="flex items-center space-x-1">
          <Clock className="w-4 h-4" />
          <span>09:00-18:00</span>
        </div>
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-500" />
          <span>4.8</span>
        </div>
      </div>
      
      <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium active:scale-95 transition-transform">
        1초 지원
      </button>
    </div>
  </div>
);

export default HomePage;
