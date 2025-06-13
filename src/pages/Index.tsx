
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Star, Users, Search, Bell, User, Home, Briefcase, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const nearbyJobs = [
    {
      id: 1,
      title: "카페 홀서빙",
      hourlyPay: 12000,
      location: "강남구 역삼동",
      distance: "0.5km",
      startTime: "09:00",
      endTime: "18:00",
      rating: 4.8,
      company: "스타벅스"
    },
    {
      id: 2,
      title: "물류창고 정리",
      hourlyPay: 15000,
      location: "송파구 가락동",
      distance: "1.2km",
      startTime: "14:00",
      endTime: "22:00",
      rating: 4.5,
      company: "쿠팡물류센터"
    },
    {
      id: 3,
      title: "행사장 설치",
      hourlyPay: 18000,
      location: "서초구 서초동",
      distance: "2.1km",
      startTime: "08:00",
      endTime: "17:00",
      rating: 4.9,
      company: "이벤트코리아"
    }
  ];

  const navigationItems = [
    { id: "home", label: "홈", icon: Home },
    { id: "jobs", label: "일자리찾기", icon: Search },
    { id: "applications", label: "지원내역", icon: FileText },
    { id: "notifications", label: "알림", icon: Bell },
    { id: "profile", label: "마이페이지", icon: User }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">오늘일</h1>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">강남구 역삼동</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 p-6">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">
              지금 바로 일할 수 있어요!
            </h2>
            
            {/* Main CTA Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Button 
                size="lg" 
                className="h-16 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-lg"
              >
                <div className="flex flex-col items-center gap-1">
                  <Briefcase className="h-6 w-6" />
                  <span>즉시 출근</span>
                </div>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="h-16 border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-bold text-lg shadow-lg"
              >
                <div className="flex flex-col items-center gap-1">
                  <Users className="h-6 w-6" />
                  <span>지금 인력 구인</span>
                </div>
              </Button>
            </div>
          </div>
        </section>

        {/* Nearby Jobs Section */}
        <section className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">내 주변 일자리</h3>
            <Button variant="ghost" size="sm" className="text-blue-600">
              지도로 보기
            </Button>
          </div>

          <div className="space-y-3">
            {nearbyJobs.map((job) => (
              <Card key={job.id} className="p-4 shadow-sm border hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  {/* Job Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg">{job.title}</h4>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-blue-600 text-lg">
                        시급 {job.hourlyPay.toLocaleString()}원
                      </p>
                    </div>
                  </div>

                  {/* Job Details */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>{job.distance}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{job.startTime} - {job.endTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{job.rating}</span>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold">
                    1초 지원하기
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
        <div className="grid grid-cols-5 h-16">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 transition-colors",
                  isActive 
                    ? "text-blue-600 bg-blue-50" 
                    : "text-muted-foreground hover:text-gray-700"
                )}
              >
                <IconComponent className="h-5 w-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Index;
