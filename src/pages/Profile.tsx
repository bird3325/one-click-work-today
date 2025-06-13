
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, User, Star, MapPin, Phone, Mail, Settings, Bell, HelpCircle, LogOut, Edit } from "lucide-react";

const Profile = () => {
  const userStats = {
    name: "김영희",
    rating: 4.8,
    completedJobs: 28,
    totalEarnings: 2840000,
    location: "강남구 역삼동"
  };

  const menuItems = [
    { icon: Edit, label: "프로필 수정", description: "개인정보 및 이력 관리" },
    { icon: Star, label: "후기 관리", description: "받은 후기 및 평점 확인" },
    { icon: Bell, label: "알림 설정", description: "푸시 알림 및 SMS 설정" },
    { icon: HelpCircle, label: "고객센터", description: "문의하기 및 FAQ" },
    { icon: Settings, label: "앱 설정", description: "테마, 언어, 접근성 설정" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b px-6 py-4 sticky top-0 z-10">
        <div className="flex items-center gap-4 max-w-md mx-auto">
          <Button variant="ghost" size="icon" className="rounded-xl">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold text-gray-900">마이페이지</h1>
        </div>
      </header>

      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        {/* Profile Card */}
        <Card className="overflow-hidden shadow-lg border-0 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold">{userStats.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{userStats.rating}</span>
                  </div>
                  <span className="text-white/70">•</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{userStats.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="border-0 rounded-2xl shadow-sm">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{userStats.completedJobs}</div>
              <div className="text-sm text-gray-600">완료한 일자리</div>
            </CardContent>
          </Card>
          <Card className="border-0 rounded-2xl shadow-sm">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">
                {(userStats.totalEarnings / 10000).toFixed(0)}만원
              </div>
              <div className="text-sm text-gray-600">총 수익</div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="border-0 rounded-2xl shadow-sm">
          <CardContent className="p-5">
            <h4 className="font-bold text-gray-900 mb-4">빠른 연결</h4>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-12 rounded-xl border-gray-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600">
                <Phone className="h-4 w-4 mr-2" />
                전화 연결
              </Button>
              <Button variant="outline" className="h-12 rounded-xl border-gray-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600">
                <Mail className="h-4 w-4 mr-2" />
                이메일
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Menu Items */}
        <Card className="border-0 rounded-2xl shadow-sm">
          <CardContent className="p-5 space-y-1">
            {menuItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start h-auto p-4 rounded-xl hover:bg-gray-50"
              >
                <item.icon className="h-5 w-5 mr-3 text-gray-600" />
                <div className="text-left flex-1">
                  <div className="font-medium text-gray-900">{item.label}</div>
                  <div className="text-sm text-gray-500">{item.description}</div>
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Logout */}
        <Card className="border-0 rounded-2xl shadow-sm">
          <CardContent className="p-5">
            <Button
              variant="ghost"
              className="w-full justify-start h-12 rounded-xl hover:bg-red-50 hover:text-red-600"
            >
              <LogOut className="h-5 w-5 mr-3" />
              로그아웃
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
