
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MapPin, Clock, Star, Search, Filter, ArrowLeft, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const categories = ["전체", "서빙", "배달", "물류", "행사", "청소", "기타"];

  const jobs = [
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
      urgent: true,
      category: "서빙"
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
      urgent: false,
      category: "물류"
    },
    {
      id: 3,
      title: "배달 라이더",
      hourlyPay: 16000,
      location: "서초구 서초동",
      distance: "0.8km",
      startTime: "11:00",
      endTime: "21:00",
      rating: 4.7,
      company: "배달의민족",
      urgent: true,
      category: "배달"
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "전체" || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b px-6 py-4 sticky top-0 z-10">
        <div className="flex items-center gap-4 max-w-md mx-auto">
          <Button variant="ghost" size="icon" className="rounded-xl">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold text-gray-900">일자리 찾기</h1>
        </div>
      </header>

      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            placeholder="직종이나 회사명으로 검색"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-4 h-14 rounded-2xl border-2 focus:border-blue-500 bg-white shadow-sm"
          />
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="rounded-xl border-2">
            <Filter className="h-4 w-4 mr-2" />
            필터
          </Button>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "rounded-xl whitespace-nowrap",
                  selectedCategory === category 
                    ? "bg-blue-600 text-white" 
                    : "border-gray-200 text-gray-600"
                )}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between">
          <p className="text-gray-600 font-medium">
            총 {filteredJobs.length}개의 일자리
          </p>
          <Button variant="ghost" size="sm" className="text-blue-600 rounded-xl">
            거리순 정렬
          </Button>
        </div>

        {/* Job List */}
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border-0 rounded-2xl bg-white hover-lift">
              <CardContent className="p-5 space-y-4">
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
                  <Button className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl h-12 shadow-lg brutal-button border-0">
                    ⚡ 1초 지원하기
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-12 w-12 rounded-xl border-gray-200 hover:bg-gray-50"
                  >
                    <Heart className="h-5 w-5 text-gray-400" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
