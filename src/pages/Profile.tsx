
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, User, Star, MapPin, Phone, Mail, Settings, Bell, HelpCircle, LogOut, Edit, Award, TrendingUp, Calendar } from "lucide-react";

const Profile = () => {
  const userStats = {
    name: "김영희",
    rating: 4.8,
    completedJobs: 28,
    totalEarnings: 2840000,
    location: "강남구 역삼동",
    joinDate: "2023년 3월",
    badgeLevel: "우수 근무자"
  };

  const menuItems = [
    { icon: Edit, label: "프로필 수정", description: "개인정보 및 이력 관리", color: "blue" },
    { icon: Star, label: "후기 관리", description: "받은 후기 및 평점 확인", color: "yellow" },
    { icon: Bell, label: "알림 설정", description: "푸시 알림 및 SMS 설정", color: "green" },
    { icon: HelpCircle, label: "고객센터", description: "문의하기 및 FAQ", color: "purple" },
    { icon: Settings, label: "앱 설정", description: "테마, 언어, 접근성 설정", color: "gray" },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "hover:bg-blue-50 hover:text-blue-600",
      yellow: "hover:bg-yellow-50 hover:text-yellow-600",
      green: "hover:bg-green-50 hover:text-green-600",
      purple: "hover:bg-purple-50 hover:text-purple-600",
      gray: "hover:bg-gray-50 hover:text-gray-600"
    };
    return colorMap[color as keyof typeof colorMap] || "hover:bg-gray-50";
  };

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="glass-effect sticky top-0 z-20 px-6 py-4 border-b border-white/20">
        <div className="flex items-center gap-4 max-w-md mx-auto">
          <Button variant="ghost" size="icon" className="rounded-2xl hover:bg-white/60">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold text-gray-900">마이페이지</h1>
          <div className="ml-auto">
            <Button variant="ghost" size="icon" className="rounded-2xl hover:bg-white/60">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        {/* Profile Card */}
        <Card className="brutal-shadow-lg border-0 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          <CardContent className="p-8 relative">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center border-4 border-white/30">
                <User className="h-10 w-10 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-1">{userStats.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1 bg-white/20 rounded-full px-3 py-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-sm">{userStats.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white/20 rounded-full px-3 py-1">
                    <Award className="h-4 w-4" />
                    <span className="text-sm font-medium">{userStats.badgeLevel}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-white/80">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{userStats.location}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/80">가입일</span>
                <span className="font-semibold">{userStats.joinDate}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="brutal-shadow border-0 rounded-3xl bg-gradient-to-br from-green-50 to-emerald-100 hover-lift">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{userStats.completedJobs}</div>
              <div className="text-sm text-green-700 font-semibold mb-3">완료한 일자리</div>
              <div className="w-12 h-1 bg-green-500 rounded-full mx-auto"></div>
            </CardContent>
          </Card>
          <Card className="brutal-shadow border-0 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 hover-lift">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {(userStats.totalEarnings / 10000).toFixed(0)}만원
              </div>
              <div className="text-sm text-blue-700 font-semibold mb-3">총 수익</div>
              <div className="w-12 h-1 bg-blue-500 rounded-full mx-auto"></div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="brutal-shadow border-0 rounded-3xl bg-white">
          <CardContent className="p-6">
            <h4 className="font-bold text-gray-900 mb-5 text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              빠른 연결
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <Button className="h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold brutal-shadow">
                <Phone className="h-5 w-5 mr-2" />
                전화 연결
              </Button>
              <Button className="h-16 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold brutal-shadow">
                <Mail className="h-5 w-5 mr-2" />
                이메일
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Menu Items */}
        <Card className="brutal-shadow border-0 rounded-3xl bg-white">
          <CardContent className="p-6 space-y-2">
            <h4 className="font-bold text-gray-900 mb-5 text-lg flex items-center gap-2">
              <Settings className="h-5 w-5 text-gray-600" />
              설정 및 도움말
            </h4>
            {menuItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className={cn(
                  "w-full justify-start h-auto p-5 rounded-2xl transition-all duration-300 hover:scale-105",
                  getColorClasses(item.color)
                )}
              >
                <div className="flex items-center gap-4 w-full">
                  <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-gray-600" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-semibold text-gray-900 text-base">{item.label}</div>
                    <div className="text-sm text-gray-500 mt-1">{item.description}</div>
                  </div>
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Logout */}
        <Card className="brutal-shadow border-0 rounded-3xl bg-white">
          <CardContent className="p-6">
            <Button
              variant="ghost"
              className="w-full justify-start h-16 rounded-2xl hover:bg-red-50 hover:text-red-600 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                  <LogOut className="h-6 w-6 text-red-600" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-base">로그아웃</div>
                  <div className="text-sm text-gray-500">계정에서 안전하게 로그아웃</div>
                </div>
              </div>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
