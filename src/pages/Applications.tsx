
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Clock, MapPin, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const Applications = () => {
  const applications = [
    {
      id: 1,
      title: "카페 홀서빙",
      company: "스타벅스",
      location: "강남구 역삼동",
      appliedDate: "2024-01-15",
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "승인":
        return "bg-green-100 text-green-700 border-green-200";
      case "대기":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "거절":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b px-6 py-4 sticky top-0 z-10">
        <div className="flex items-center gap-4 max-w-md mx-auto">
          <Button variant="ghost" size="icon" className="rounded-xl">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold text-gray-900">지원 내역</h1>
        </div>
      </header>

      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm border">
            <div className="text-2xl font-bold text-green-600">2</div>
            <div className="text-xs text-gray-600">승인</div>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm border">
            <div className="text-2xl font-bold text-yellow-600">1</div>
            <div className="text-xs text-gray-600">대기</div>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm border">
            <div className="text-2xl font-bold text-red-600">0</div>
            <div className="text-xs text-gray-600">거절</div>
          </div>
        </div>

        {/* Applications List */}
        <div className="space-y-4">
          {applications.map((application) => (
            <Card key={application.id} className="overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border-0 rounded-2xl bg-white">
              <CardContent className="p-5 space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-lg">{application.title}</h4>
                    <p className="text-sm text-gray-600 font-medium">{application.company}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(application.status)}
                    <span className={cn(
                      "text-xs font-medium px-3 py-1 rounded-full border",
                      getStatusColor(application.status)
                    )}>
                      {application.status}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{application.location}</span>
                    </div>
                    <div className="font-bold text-blue-600">
                      {application.hourlyPay.toLocaleString()}원/시간
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{application.startTime} - {application.endTime}</span>
                    </div>
                    <div className="text-gray-500">
                      지원일: {application.appliedDate}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                {application.status === "승인" && (
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold rounded-xl h-12">
                      출근 인증하기
                    </Button>
                    <Button variant="outline" className="px-6 rounded-xl border-gray-200">
                      취소
                    </Button>
                  </div>
                )}

                {application.status === "대기" && (
                  <Button variant="outline" className="w-full rounded-xl border-gray-200 h-12">
                    지원 취소
                  </Button>
                )}

                {application.status === "거절" && (
                  <Button variant="outline" className="w-full rounded-xl border-gray-200 h-12" disabled>
                    재지원 불가
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Applications;
