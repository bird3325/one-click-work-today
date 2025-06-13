
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MapPin, Clock, Star, Search, Filter, ArrowLeft, Heart, Zap, TrendingUp } from "lucide-react";
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
      category: "서빙",
      applicants: 3
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
      category: "물류",
      applicants: 7
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
      category: "배달",
      applicants: 12
    },
    {
      id: 4,
      title: "행사장 준비",
      hourlyPay: 18000,
      location: "서초구 강남대로",
      distance: "1.5km",
      startTime: "08:00",
      endTime: "17:00",
      rating: 4.9,
      company: "이벤트코리아",
      urgent: false,
      category: "행사",
      applicants: 2
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "전체" || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="glass-effect sticky top-0 z-20 px-6 py-4 border-b border-white/20">
        <div className="flex items-center gap-4 max-w-md mx-auto">
          <Button variant="ghost" size="icon" className="rounded-2xl hover:bg-white/60">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold text-gray-900">일자리 찾기</h1>
          <div className="ml-auto flex items-center gap-2 text-blue-600 bg-blue-50 rounded-xl px-3 py-2">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm font-semibold">{filteredJobs.length}개</span>
          </div>
        </div>
      </header>

      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
          <Input
            placeholder="직종이나 회사명으로 검색"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-4 h-16 rounded-3xl border-0 bg-white brutal-shadow focus:ring-2 focus:ring-blue-500 text-lg font-medium placeholder:text-gray-400"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <Button variant="ghost" size="sm" className="rounded-2xl bg-blue-50 text-blue-600 hover:bg-blue-100">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "rounded-2xl whitespace-nowrap font-semibold transition-all duration-200 h-12 px-6",
                selectedCategory === category 
                  ? "gradient-primary text-white brutal-shadow" 
                  : "bg-white border-2 border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50"
              )}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <p className="text-lg text-gray-700 font-bold">
              총 {filteredJobs.length}개의 일자리
            </p>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
          </div>
          <Button variant="ghost" size="sm" className="text-blue-600 rounded-xl hover:bg-blue-50 font-semibold">
            거리순 정렬
          </Button>
        </div>

        {/* Job List */}
        <div className="space-y-5">
          {filteredJobs.map((job, index) => (
            <Card key={job.id} className="brutal-shadow hover-lift bg-white border-0 rounded-3xl overflow-hidden animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-0">
                <div className="p-6 space-y-5">
                  {/* Job Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-bold text-gray-900 text-xl">{job.title}</h4>
                        {job.urgent && (
                          <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-bold animate-pulse-slow">
                            급구
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-gray-600 font-semibold bg-gray-50 rounded-lg px-3 py-1">{job.company}</p>
                        <span className="text-xs text-blue-600 bg-blue-50 rounded-full px-2 py-1 font-medium">
                          지원자 {job.applicants}명
                        </span>
                      </div>
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
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 bg-blue-50 rounded-xl px-3 py-2">
                        <MapPin className="h-4 w-4 text-blue-600" />
                        <span className="text-gray-700 font-medium text-sm">{job.location}</span>
                        <span className="text-blue-600 font-bold text-sm">({job.distance})</span>
                      </div>
                      <div className="flex items-center gap-2 bg-yellow-50 rounded-xl px-3 py-2">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-gray-700 font-bold text-sm">{job.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2 w-fit">
                      <Clock className="h-4 w-4 text-gray-600" />
                      <span className="text-gray-700 font-medium text-sm">{job.startTime} - {job.endTime}</span>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <div className="flex items-center gap-4">
                    <Button className="flex-1 btn-accent h-14 text-lg font-bold relative overflow-hidden group">
                      <Zap className="h-5 w-5 mr-2" />
                      1초 지원하기
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-14 w-14 rounded-2xl border-2 border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all duration-200"
                    >
                      <Heart className="h-6 w-6 text-gray-400 hover:text-red-500 transition-colors duration-200" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center pt-4">
          <Button variant="outline" className="btn-outline w-full h-14 text-lg font-semibold">
            더 많은 일자리 보기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
