
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Clock, MapPin, CheckCircle, XCircle, AlertCircle, TrendingUp, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const Applications = () => {
  const applications = [
    {
      id: 1,
      title: "카페 홀서빙",
      company: "스타벅스",
      location: "강남구 역삼동",
      appliedDate: "2024-01-15",
      workDate: "2024-01-20",
      status: "승인",
      startTime: "09:00",
      endTime: "18:00",
      hourlyPay: 12000
    },
    {
      id: 2,
      title: "물류창고 정리",
      company: "쿠팡물류센터", 
      location: "송파구 가락동",
      appliedDate: "2024-01-14",
      workDate: "2024-01-19",
      status: "대기",
      startTime: "14:00",
      endTime: "22:00",
      hourlyPay: 15000
    },
    {
      id: 3,
      title: "행사장 설치",
      company: "이벤트코리아",
      location: "서초구 서초동",
      appliedDate: "2024-01-13",
      workDate: "2024-01-18",
      status: "거절",
      startTime: "08:00",
      endTime: "17:00",
      hourlyPay: 18000
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "승인":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "대기":
        return <AlertCircle className="h-5 w-5 text-yellow-600" />;
      case "거절":
        return <XCircle className="h-5 w-5 text-red-600" />;
      default:
        return null;
    }
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "승인":
        return "status-approved";
      case "대기":
        return "status-pending";
      case "거절":
        return "status-rejected";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const approvedCount = applications.filter(app => app.status === "승인").length;
  const pendingCount = applications.filter(app => app.status === "대기").length;
  const rejectedCount = applications.filter(app => app.status === "거절").length;

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="glass-effect sticky top-0 z-20 px-6 py-4 border-b border-white/20">
        <div className="flex items-center gap-4 max-w-md mx-auto">
          <Button variant="ghost" size="icon" className="rounded-2xl hover:bg-white/60">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold text-gray-900">지원 내역</h1>
          <div className="ml-auto flex items-center gap-2 text-blue-600 bg-blue-50 rounded-xl px-3 py-2">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm font-semibold">{applications.length}건</span>
          </div>
        </div>
      </header>

      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        {/* Stats Dashboard */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="brutal-shadow hover-lift bg-gradient-to-br from-green-50 to-emerald-100 border-0 rounded-3xl">
            <CardContent className="p-5 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{approvedCount}</div>
              <div className="text-sm text-green-700 font-semibold">승인</div>
              <div className="w-8 h-1 bg-green-500 rounded-full mx-auto mt-2"></div>
            </CardContent>
          </Card>
          <Card className="brutal-shadow hover-lift bg-gradient-to-br from-yellow-50 to-amber-100 border-0 rounded-3xl">
            <CardContent className="p-5 text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">{pendingCount}</div>
              <div className="text-sm text-yellow-700 font-semibold">대기</div>
              <div className="w-8 h-1 bg-yellow-500 rounded-full mx-auto mt-2"></div>
            </CardContent>
          </Card>
          <Card className="brutal-shadow hover-lift bg-gradient-to-br from-red-50 to-rose-100 border-0 rounded-3xl">
            <CardContent className="p-5 text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">{rejectedCount}</div>
              <div className="text-sm text-red-700 font-semibold">거절</div>
              <div className="w-8 h-1 bg-red-500 rounded-full mx-auto mt-2"></div>
            </CardContent>
          </Card>
        </div>

        {/* Applications List */}
        <div className="space-y-5">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-xl font-bold text-gray-900">최근 지원</h3>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
          </div>
          
          {applications.map((application, index) => (
            <Card key={application.id} className="brutal-shadow hover-lift bg-white border-0 rounded-3xl overflow-hidden animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6 space-y-5">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-xl mb-2">{application.title}</h4>
                    <p className="text-sm text-gray-600 font-semibold bg-gray-50 rounded-lg px-3 py-1 inline-block mb-3">{application.company}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    {getStatusIcon(application.status)}
                    <span className={cn(
                      "text-sm font-bold px-4 py-2 rounded-2xl border-2",
                      getStatusStyle(application.status)
                    )}>
                      {application.status}
                    </span>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-50 rounded-2xl p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <span className="text-xs text-blue-700 font-semibold">근무지</span>
                    </div>
                    <span className="text-sm text-gray-800 font-medium">{application.location}</span>
                  </div>
                  
                  <div className="bg-green-50 rounded-2xl p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-green-700 font-semibold">시급</span>
                    </div>
                    <span className="text-sm font-bold text-green-600">
                      {application.hourlyPay.toLocaleString()}원
                    </span>
                  </div>
                  
                  <div className="bg-gray-50 rounded-2xl p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="h-4 w-4 text-gray-600" />
                      <span className="text-xs text-gray-700 font-semibold">근무시간</span>
                    </div>
                    <span className="text-sm text-gray-800 font-medium">
                      {application.startTime} - {application.endTime}
                    </span>
                  </div>
                  
                  <div className="bg-purple-50 rounded-2xl p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="h-4 w-4 text-purple-600" />
                      <span className="text-xs text-purple-700 font-semibold">근무일</span>
                    </div>
                    <span className="text-sm text-gray-800 font-medium">{application.workDate}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2">
                  {application.status === "승인" && (
                    <div className="flex gap-3">
                      <Button className="flex-1 gradient-success text-white font-bold rounded-2xl h-14 brutal-shadow hover:scale-105 transition-transform duration-200">
                        출근 인증하기
                      </Button>
                      <Button variant="outline" className="px-6 rounded-2xl border-2 border-gray-200 hover:border-red-300 hover:bg-red-50 hover:text-red-600 font-semibold">
                        취소
                      </Button>
                    </div>
                  )}

                  {application.status === "대기" && (
                    <Button variant="outline" className="w-full rounded-2xl border-2 border-yellow-300 bg-yellow-50 text-yellow-700 hover:bg-yellow-100 h-14 font-semibold">
                      지원 취소
                    </Button>
                  )}

                  {application.status === "거절" && (
                    <Button variant="outline" className="w-full rounded-2xl border-2 border-gray-200 h-14 font-semibold" disabled>
                      재지원 불가
                    </Button>
                  )}
                </div>

                {/* Application Date */}
                <div className="text-xs text-gray-500 text-center pt-2 border-t border-gray-100">
                  지원일: {application.appliedDate}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Applications;
