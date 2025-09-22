"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, BarChart3, Shield, Users, Zap, TrendingUp, Star, Play, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const testimonials = [
    {
      name: "Nguyễn Minh Tuấn",
      role: "Nhà đầu tư cá nhân",
      content: "Stock Radar đã giúp tôi tăng lợi nhuận 35% trong 6 tháng qua. Các phân tích chuyên sâu rất chính xác.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Trần Thị Hương",
      role: "Trader chuyên nghiệp",
      content:
        "Công cụ phân tích kỹ thuật và cảnh báo real-time của Stock Radar là không thể thiếu trong công việc của tôi.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Lê Văn Đức",
      role: "Quản lý quỹ đầu tư",
      content: "Dữ liệu chính xác và giao diện trực quan giúp tôi đưa ra quyết định đầu tư nhanh chóng và hiệu quả.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-md fixed w-full z-50 transition-all duration-300">
        <Link className="flex items-center justify-center" href="/">
          <div className="relative">
            <BarChart3 className="h-8 w-8 text-blue-600 animate-pulse" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
          </div>
          <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Stock Radar
          </span>
        </Link>
        <nav className="ml-auto flex gap-6 sm:gap-8">
          <Link
            className="text-sm font-medium hover:text-blue-600 transition-colors duration-200 relative group"
            href="/stocks"
          >
            Cổ phiếu
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-600 transition-colors duration-200 relative group"
            href="/analysis"
          >
            Phân tích
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-600 transition-colors duration-200 relative group"
            href="/community"
          >
            Cộng đồng
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-600 transition-colors duration-200 relative group"
            href="/pricing"
          >
            Gói dịch vụ
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
          </Link>
        </nav>
        <div className="ml-6 flex gap-3">
          <Button variant="ghost" size="sm" className="hover:bg-blue-50 transition-colors duration-200" asChild>
            <Link href="/login">Đăng nhập</Link>
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            asChild
          >
            <Link href="/register">Đăng ký</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full pt-20 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5 bg-cover bg-center"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative px-6 md:px-6 mx-auto">
          <div
            className={`flex flex-col items-center space-y-8 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 animate-bounce">
                🚀 Mới: AI phân tích cổ phiếu thông minh
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                Đầu tư thông minh với{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                  Stock Radar
                </span>
              </h1>
              <p className="mx-auto max-w-[800px] text-gray-600 text-lg md:text-xl leading-relaxed">
                Nền tảng kết nối nhà đầu tư với các cơ hội đầu tư tốt nhất. Phân tích chuyên sâu, gợi ý từ chuyên gia,
                và cộng đồng đầu tư sôi động.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                asChild
              >
                <Link href="/dashboard">
                  Bắt đầu ngay <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group hover:bg-blue-50 transition-all duration-300 bg-transparent"
                asChild
              >
                <Link href="/stocks">
                  <Play className="mr-2 h-5 w-5 group-hover:text-blue-600 transition-colors" />
                  Xem demo
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50K+</div>
                <div className="text-sm text-gray-600">Nhà đầu tư</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">₫2.5T+</div>
                <div className="text-sm text-gray-600">Giá trị giao dịch</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">95%</div>
                <div className="text-sm text-gray-600">Độ chính xác</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Tính năng <span className="text-blue-600">nổi bật</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 text-lg">Tất cả công cụ bạn cần để đầu tư thành công</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                icon: TrendingUp,
                title: "Gợi ý đầu tư chuyên nghiệp",
                description:
                  "Danh mục cổ phiếu được đội ngũ chuyên gia phân tích kỹ lưỡng với chiến lược rõ ràng và xác suất tăng trưởng cao.",
                color: "blue",
                delay: "0",
              },
              {
                icon: BarChart3,
                title: "Phân tích tài chính chuyên sâu",
                description:
                  "Trích xuất và diễn giải thông tin tài chính quan trọng: doanh thu, lợi nhuận, ROE, nợ, EPS để hiểu rõ tiềm năng công ty.",
                color: "green",
                delay: "200",
              },
              {
                icon: Shield,
                title: "Đánh giá rủi ro thông minh",
                description:
                  "Hệ thống chấm điểm rủi ro theo các tiêu chí định lượng giúp nhà đầu tư mới tránh những quyết định sai lầm.",
                color: "red",
                delay: "400",
              },
              {
                icon: Zap,
                title: "Công cụ lọc cổ phiếu",
                description:
                  "Bộ lọc mạnh mẽ dựa trên tăng trưởng lợi nhuận, chỉ số tài chính, ngành nghề, vốn hóa để tự khám phá cơ hội.",
                color: "yellow",
                delay: "600",
              },
              {
                icon: Users,
                title: "Cộng đồng đầu tư",
                description:
                  "Forum trao đổi, chia sẻ kinh nghiệm với cộng đồng nhà đầu tư. Hệ thống đánh giá uy tín và thẻ mã chứng khoán.",
                color: "purple",
                delay: "800",
              },
              {
                icon: Star,
                title: "Khóa học & Livestream",
                description:
                  "Kiến thức đầu tư cơ bản qua video, bài viết, livestream từ các chuyên gia hàng đầu trong lĩnh vực.",
                color: "orange",
                delay: "1000",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg animate-fade-in-up`}
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-${feature.color}-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className={`h-8 w-8 text-${feature.color}-600`} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Khách hàng <span className="text-blue-600">nói gì</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 text-lg">
              Hàng nghìn nhà đầu tư đã tin tưởng Stock Radar
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 p-8 md:p-12">
                    <div className="text-center">
                      <div className="mb-6">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-blue-100"
                        />
                        <h3 className="font-bold text-xl">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                      <blockquote className="text-lg md:text-xl text-gray-700 italic leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>
                      <div className="flex justify-center mt-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-blue-600 w-8" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Gói <span className="text-blue-600">dịch vụ</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 text-lg">Chọn gói phù hợp với nhu cầu đầu tư của bạn</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-400 to-gray-600"></div>
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl">Gói Basic</CardTitle>
                <CardDescription className="text-lg">Miễn phí</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">0 VNĐ</span>
                  <span className="text-gray-500">/tháng</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {[
                    "Gợi ý cổ phiếu cơ bản",
                    "Thông tin tổng quan thị trường",
                    "Truy cập cộng đồng",
                    "Công cụ lọc cơ bản",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-green-600 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-transparent group-hover:bg-gray-50 transition-colors duration-300"
                  variant="outline"
                  asChild
                >
                  <Link href="/register">Đăng ký miễn phí</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 group hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Phổ biến nhất
                </div>
              </div>
              <CardHeader className="pb-6 pt-8">
                <CardTitle className="text-2xl text-blue-600">Gói Premium</CardTitle>
                <CardDescription className="text-lg">Cho nhà đầu tư nghiêm túc</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold text-blue-600">499,000 VNĐ</span>
                  <span className="text-gray-500">/tháng</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {[
                    "Tất cả tính năng Basic",
                    "Danh mục cổ phiếu chuyên gia",
                    "Phân tích tài chính chi tiết",
                    "Đánh giá rủi ro chuyên sâu",
                    "Khóa học & Livestream",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-green-600 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  asChild
                >
                  <Link href="/pricing">Nâng cấp Premium</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container px-4 md:px-6 text-center mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Sẵn sàng bắt đầu hành trình đầu tư?
          </h2>
          <p className="mx-auto max-w-[600px] text-blue-100 text-lg mb-8">
            Tham gia cùng hàng nghìn nhà đầu tư thông minh đã chọn Stock Radar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              asChild
            >
              <Link href="/register">
                Bắt đầu miễn phí
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 bg-transparent"
              asChild
            >
              <Link href="/contact">Liên hệ tư vấn</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <Link className="flex items-center" href="/">
                <BarChart3 className="h-6 w-6 text-blue-400" />
                <span className="ml-2 text-xl font-bold">Stock Radar</span>
              </Link>
              <p className="text-gray-400">Nền tảng đầu tư thông minh hàng đầu Việt Nam</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Sản phẩm</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/stocks" className="hover:text-white transition-colors">
                    Cổ phiếu
                  </Link>
                </li>
                <li>
                  <Link href="/analysis" className="hover:text-white transition-colors">
                    Phân tích
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="hover:text-white transition-colors">
                    Cộng đồng
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Công ty</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    Về chúng tôi
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Tuyển dụng
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Hỗ trợ</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white transition-colors">
                    Trung tâm trợ giúp
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Điều khoản
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Bảo mật
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Stock Radar. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}