import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Star, Users, Search, Bell, User, Home, Briefcase, FileText, Filter, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const navigate = useNavigate();

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
      company: "스타벅스",
      isLiked: false,
      urgent: true
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
      company: "쿠팡물류센터",
      isLiked: true,
      urgent: false
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
      company: "이벤트코리아",
      isLiked: false,
      urgent: true
    }
  ];

  const navigationItems = [
    { id: "home", label: "홈", icon: Home, path: "/" },
    { id: "jobs", label: "일자리찾기", icon: Search, path: "/jobs" },
    { id: "applications", label: "지원내역", icon: FileText, path: "/applications" },
    { id: "notifications", label: "알림", icon: Bell, path: "/notifications" },
    { id: "profile", label: "마이페이지", icon: User, path: "/profile" }
  ];

  const handleApply = (jobId: number) => {
    console.log(`Applied to job ${jobId}`);
    // 실제 지원 로직이 여기에 들어갑니다
  };

  const handleInstantWork = () => {
    console.log("Instant work clicked");
    navigate("/jobs");
  };

  const handlePostJob = () => {
    console.log("Post job clicked");
    // 구인 등록 로직이 여기에 들어갑니다
  };

  const handleNavigation = (item: typeof navigationItems[0]) => {
    setActiveTab(item.id);
    navigate(item.path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex flex-col">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b px-6 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-sm">오</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              오늘일
            </h1>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">강남구 역삼동</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-20 max-w-md mx-auto w-full">
        {/* Hero Section */}
        <section className="p-6">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-gray-900">
                안녕하세요! 👋
              </h2>
              <p className="text-gray-600">
                지금 바로 일할 수 있어요
              </p>
            </div>
            
            {/* Main CTA Buttons */}
            <div className="grid grid-cols-1 gap-4">
              <Button 
                onClick={handleInstantWork}
                size="lg" 
                className="h-20 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg shadow-xl brutal-button border-0 rounded-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-bold">즉시 출근</div>
                    <div className="text-sm opacity-90">지금 바로 일하기</div>
                  </div>
                </div>
              </Button>
              
              <Button 
                onClick={handlePostJob}
                size="lg" 
                variant="outline"
                className="h-20 border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-bold text-lg shadow-xl brutal-button rounded-2xl bg-white"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-bold">지금 인력 구인</div>
                    <div className="text-sm opacity-80">필요한 인력 찾기</div>
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="px-6 pb-6">
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white rounded-2xl p-4 text-center shadow-sm border">
              <div className="text-2xl font-bold text-blue-600">127</div>
              <div className="text-xs text-gray-600">오늘의 일자리</div>
            </div>
            <div className="bg-white rounded-2xl p-4 text-center shadow-sm border">
              <div className="text-2xl font-bold text-green-600">89%</div>
              <div className="text-xs text-gray-600">매칭 성공률</div>
            </div>
            <div className="bg-white rounded-2xl p-4 text-center shadow-sm border">
              <div className="text-2xl font-bold text-orange-600">15분</div>
              <div className="text-xs text-gray-600">평균 매칭 시간</div>
            </div>
          </div>
        </section>

        {/* Nearby Jobs Section */}
        <section className="px-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900">내 주변 일자리</h3>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50 rounded-xl">
                <Filter className="h-4 w-4 mr-1" />
                필터
              </Button>
              <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50 rounded-xl">
                지도
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {nearbyJobs.map((job) => (
              <Card key={job.id} className="overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border-0 rounded-2xl bg-white">
                <CardContent className="p-0">
                  <div className="p-5 space-y-4">
                    {/* Job Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-gray-900 text-lg">{job.title}</h4>
                          {job.urgent && (
                            <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-medium">
                              급구
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 font-medium">{job.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-blue-600 text-xl">
                          {job.hourlyPay.toLocaleString()}원
                        </p>
                        <p className="text-xs text-gray-500">시급</p>
                      </div>
                    </div>

                    {/* Job Details */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                          <span className="text-blue-600 font-medium">({job.distance})</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1 text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span>{job.startTime} - {job.endTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-gray-700 font-medium">{job.rating}</span>
                        </div>
                      </div>
                    </div>

                    {/* Apply Button */}
                    <div className="flex items-center gap-3">
                      <Button 
                        onClick={() => handleApply(job.id)}
                        className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl h-12 shadow-lg brutal-button border-0"
                      >
                        ⚡ 1초 지원하기
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-12 w-12 rounded-xl border-gray-200 hover:bg-gray-50"
                      >
                        <Heart className={cn("h-5 w-5", job.isLiked ? "fill-red-500 text-red-500" : "text-gray-400")} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Bottom Spacing */}
        <div className="h-6" />
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t shadow-2xl">
        <div className="max-w-md mx-auto">
          <div className="grid grid-cols-5 h-20">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeTab === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className={cn(
                    "flex flex-col items-center justify-center gap-1 transition-all duration-200 relative",
                    isActive 
                      ? "text-blue-600" 
                      : "text-gray-500 hover:text-gray-700"
                  )}
                >
                  {isActive && (
                    <div className="absolute top-2 w-8 h-1 bg-blue-600 rounded-full" />
                  )}
                  <div className={cn(
                    "p-2 rounded-xl transition-all duration-200",
                    isActive ? "bg-blue-50 scale-110" : "hover:bg-gray-50"
                  )}>
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Index;
