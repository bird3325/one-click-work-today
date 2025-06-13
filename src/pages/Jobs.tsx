import React, { useState } from 'react';
import { Filter, MapPin, Clock, Star, Map } from 'lucide-react';

const JobsPage = () => {
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [filters, setFilters] = useState({
    category: '',
    location: '',
    hourlyRate: '',
    time: ''
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* 헤더 */}
      <header className="bg-white p-4 shadow-sm">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">일자리 찾기</h1>
          <div className="flex space-x-2">
            <button 
              onClick={() => setViewMode(viewMode === 'list' ? 'map' : 'list')}
              className="p-2 rounded-lg bg-gray-100"
            >
              <Map className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-lg bg-gray-100">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* 필터 바 */}
      <div className="bg-white p-4 border-b">
        <div className="flex space-x-2 overflow-x-auto">
          {['전체', '카페', '음식점', '매장', '배달', '청소', '기타'].map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-gray-100 text-sm font-medium whitespace-nowrap hover:bg-blue-100 hover:text-blue-600"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* 일자리 리스트 */}
      <div className="p-4 space-y-3">
        {[1, 2, 3, 4, 5].map((item) => (
          <JobListCard key={item} />
        ))}
      </div>
    </div>
  );
};

const JobListCard = () => (
  <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
    <div className="flex justify-between items-start mb-4">
      <div className="flex-1">
        <div className="flex items-center space-x-2 mb-2">
          <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-lg text-xs font-medium">
            카페
          </span>
          <span className="bg-green-100 text-green-600 px-2 py-1 rounded-lg text-xs font-medium">
            즉시가능
          </span>
        </div>
        <h3 className="font-bold text-lg mb-1">스타벅스 홀서빙</h3>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>강남구 역삼동</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>09:00-18:00</span>
          </div>
        </div>
      </div>
      <div className="text-right">
        <div className="text-2xl font-bold text-green-600">15,000원</div>
        <div className="text-sm text-gray-500">시급</div>
      </div>
    </div>

    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-500" />
          <span className="text-sm font-medium">4.8</span>
        </div>
        <span className="text-sm text-gray-500">도보 5분</span>
      </div>
      
      <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-lg active:scale-95 transition-transform shadow-lg">
        1초 지원
      </button>
    </div>
  </div>
);

export default JobsPage;
