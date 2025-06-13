import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Star, Users, Search, Bell, User, Home, Briefcase, FileText, Filter, Heart, TrendingUp, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const navigate = useNavigate();
  const nearbyJobs = [{
    id: 1,
    title: "카페 홀서빙1",
    hourlyPay: 12000,
    location: "강남구 역삼동",
    distance: "0.5km",
    startTime: "09:00",
    endTime: "18:00",
    rating: 4.8,
    company: "스타벅스",
    isLiked: false,
    urgent: true,
    category: "서빙"
  }, {
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
    urgent: false,
    category: "물류"
  }, {
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
    urgent: true,
    category: "행사"
  }];
  const navigationItems = [{
    id: "home",
    label: "홈",
    icon: Home,
    path: "/"
  }, {
    id: "jobs",
    label: "일자리찾기",
    icon: Search,
    path: "/jobs"
  }, {
    id: "applications",
    label: "지원내역",
    icon: FileText,
    path: "/applications"
  }, {
    id: "notifications",
    label: "알림",
    icon: Bell,
    path: "/notifications"
  }, {
    id: "profile",
    label: "마이페이지",
    icon: User,
    path: "/profile"
  }];
  const handleApply = (jobId: number) => {
    console.log(`Applied to job ${jobId}`);
  };
  const handleInstantWork = () => {
    console.log("Instant work clicked");
    navigate("/jobs");
  };
  const handlePostJob = () => {
    console.log("Post job clicked");
  };
  const handleNavigation = (item: typeof navigationItems[0]) => {
    setActiveTab(item.id);
    navigate(item.path);
  };
  return <div className="min-h-screen gradient-bg flex flex-col">
      {/* Header */}
      <header className="glass-effect sticky top-0 z-20 px-6 py-4 border-b border-white/20">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 gradient-primary rounded-2xl flex items-center justify-center brutal-shadow">
              <span className="text-white font-bold text-lg">오</span>
            </div>
            <h1 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">오늘잡</h1>
          </div>
          <div className="flex items-center gap-2 text-gray-600 bg-white/60 rounded-xl px-3 py-2">
            <MapPin className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium">강남구 역삼동</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-24 max-w-md mx-auto w-full">
        {/* Hero Section */}
        <section className="p-6">
          <div className="space-y-8">
            {/* Welcome Message */}
            <div className="text-center space-y-3">
              <div className="animate-bounce-subtle">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  안녕하세요! 👋
                </h2>
              </div>
              <p className="text-lg text-gray-600 font-medium">
                지금 바로 일할 수 있어요
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-blue-600 bg-blue-50 rounded-xl px-4 py-2 mx-auto w-fit">
                <TrendingUp className="h-4 w-4" />
                <span className="font-semibold">오늘 매칭률 94% ↗</span>
              </div>
            </div>
            
            {/* Main CTA Buttons */}
            <div className="grid grid-cols-1 gap-6">
              <Button onClick={handleInstantWork} className="h-24 btn-primary relative overflow-hidden group">
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Zap className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-bold">즉시 출근</div>
                    <div className="text-sm opacity-90 font-medium">지금 바로 일하기</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              
              <Button onClick={handlePostJob} className="h-24 btn-accent relative overflow-hidden group">
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Users className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-bold">지금 인력 구인</div>
                    <div className="text-sm opacity-90 font-medium">필요한 인력 찾기</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-700 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="px-6 pb-8">
          <div className="grid grid-cols-3 gap-4">
            <Card className="brutal-shadow hover-lift bg-gradient-to-br from-blue-50 to-blue-100 border-0 rounded-2xl">
              <CardContent className="p-5 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">127</div>
                <div className="text-xs text-blue-700 font-medium">오늘의 일자리</div>
              </CardContent>
            </Card>
            <Card className="brutal-shadow hover-lift bg-gradient-to-br from-green-50 to-emerald-100 border-0 rounded-2xl">
              <CardContent className="p-5 text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">94%</div>
                <div className="text-xs text-green-700 font-medium">매칭 성공률</div>
              </CardContent>
            </Card>
            <Card className="brutal-shadow hover-lift bg-gradient-to-br from-orange-50 to-orange-100 border-0 rounded-2xl">
              <CardContent className="p-5 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-1">12분</div>
                <div className="text-xs text-orange-700 font-medium">평균 매칭 시간</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nearby Jobs Section */}
        <section className="px-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">내 주변 일자리</h3>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50 rounded-xl font-semibold">
                <Filter className="h-4 w-4 mr-2" />
                필터
              </Button>
              <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50 rounded-xl font-semibold">
                지도
              </Button>
            </div>
          </div>

          <div className="space-y-5">
            {nearbyJobs.map((job, index) => <Card key={job.id} className="brutal-shadow hover-lift bg-white border-0 rounded-3xl overflow-hidden animate-fade-in-up" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <CardContent className="p-0">
                  <div className="p-6 space-y-5">
                    {/* Job Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-bold text-gray-900 text-xl">{job.title}</h4>
                          {job.urgent && <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-bold animate-pulse-slow">
                              급구
                            </span>}
                        </div>
                        <p className="text-sm text-gray-600 font-semibold bg-gray-50 rounded-lg px-3 py-1 inline-block">{job.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-blue-600 text-2xl mb-1">
                          {job.hourlyPay.toLocaleString()}원
                        </p>
                        <p className="text-xs text-gray-500 font-medium">시급</p>
                      </div>
                    </div>

                    {/* Job Details */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-blue-50 rounded-xl px-3 py-2">
                          <MapPin className="h-4 w-4 text-blue-600" />
                          <span className="text-gray-700 font-medium">{job.location}</span>
                          <span className="text-blue-600 font-bold">({job.distance})</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2">
                          <Clock className="h-4 w-4 text-gray-600" />
                          <span className="text-gray-700 font-medium">{job.startTime} - {job.endTime}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-yellow-50 rounded-xl px-3 py-2">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-gray-700 font-bold">{job.rating}</span>
                        </div>
                      </div>
                    </div>

                    {/* Apply Button */}
                    <div className="flex items-center gap-4">
                      <Button onClick={() => handleApply(job.id)} className="flex-1 btn-accent h-14 text-lg font-bold relative overflow-hidden group">
                        <Zap className="h-5 w-5 mr-2" />
                        1초 지원하기
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Button>
                      <Button variant="outline" size="icon" className="h-14 w-14 rounded-2xl border-2 border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all duration-200">
                        <Heart className={cn("h-6 w-6 transition-colors duration-200", job.isLiked ? "fill-red-500 text-red-500" : "text-gray-400 hover:text-red-500")} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </section>

        {/* Bottom Spacing */}
        <div className="h-8" />
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 glass-effect border-t border-white/20 z-20">
        <div className="max-w-md mx-auto">
          <div className="grid grid-cols-5 h-20">
            {navigationItems.map(item => {
            const IconComponent = item.icon;
            const isActive = activeTab === item.id;
            return <button key={item.id} onClick={() => handleNavigation(item)} className={cn("flex flex-col items-center justify-center gap-1 transition-all duration-300 relative group", isActive ? "text-blue-600" : "text-gray-500 hover:text-gray-700")}>
                  {isActive && <div className="absolute top-2 w-10 h-1 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full animate-scale-in" />}
                  <div className={cn("p-2 rounded-2xl transition-all duration-300 group-hover:scale-110", isActive ? "bg-blue-100 scale-110" : "hover:bg-gray-100")}>
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <span className={cn("text-xs font-semibold transition-all duration-300", isActive ? "scale-105" : "")}>{item.label}</span>
                </button>;
          })}
          </div>
        </div>
      </nav>
    </div>;
};
export default Index;