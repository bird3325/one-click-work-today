import React, { useState } from 'react';
import { Settings, Star, Clock, DollarSign, Shield, Moon, Sun, Type } from 'lucide-react';

const ProfilePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState('medium');

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* 헤더 */}
      <header className="bg-white p-4 shadow-sm">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">마이페이지</h1>
          <button className="p-2 rounded-lg bg-gray-100">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* 프로필 정보 */}
      <div className="bg-white p-6 m-4 rounded-2xl shadow-sm">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xl font-bold">김</span>
          </div>
          <div>
            <h2 className="text-xl font-bold">김일용</h2>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium">4.9 신뢰지수</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">23</div>
            <div className="text-sm text-gray-600">완료한 일</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">156시간</div>
            <div className="text-sm text-gray-600">총 근무시간</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-600">98%</div>
            <div className="text-sm text-gray-600">출근율</div>
          </div>
        </div>
      </div>

      {/* 접근성 설정 */}
      <div className="bg-white p-6 m-4 rounded-2xl shadow-sm">
        <h3 className="text-lg font-bold mb-4">접근성 설정</h3>
        
        <div className="space-y-4">
          {/* 다크모드 */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              <span className="font-medium">다크모드</span>
            </div>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`w-12 h-6 rounded-full transition-colors ${
                isDarkMode ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                isDarkMode ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>

          {/* 글씨 크기 */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Type className="w-5 h-5" />
              <span className="font-medium">글씨 크기</span>
            </div>
            <select 
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
              className="px-3 py-1 rounded-lg border border-gray-300"
            >
              <option value="small">작게</option>
              <option value="medium">보통</option>
              <option value="large">크게</option>
              <option value="xlarge">매우 크게</option>
            </select>
          </div>
        </div>
      </div>

      {/* 메뉴 */}
      <div className="bg-white p-6 m-4 rounded-2xl shadow-sm">
        <div className="space-y-4">
          {[
            { icon: Clock, label: '근무 이력', color: 'text-blue-600' },
            { icon: DollarSign, label: '급여 정산 내역', color: 'text-green-600' },
            { icon: Shield, label: '신뢰 보증금 관리', color: 'text-orange-600' },
            { icon: Star, label: '받은 후기', color: 'text-yellow-600' }
          ].map(({ icon: Icon, label, color }) => (
            <button key={label} className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
              <div className="flex items-center space-x-3">
                <Icon className={`w-5 h-5 ${color}`} />
                <span className="font-medium">{label}</span>
              </div>
              <span className="text-gray-400">›</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
