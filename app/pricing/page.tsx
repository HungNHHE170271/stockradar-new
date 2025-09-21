import Link from "next/link"
import { BarChart3, Check, Star, Zap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b bg-white">
        <Link className="flex items-center justify-center" href="/">
          <BarChart3 className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-xl font-bold">Stock Radar</span>
        </Link>
        <nav className="ml-8 flex gap-6">
          <Link className="text-sm font-medium hover:text-blue-600" href="/dashboard">
            Dashboard
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600" href="/stocks">
            Cổ phiếu
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600" href="/analysis">
            Phân tích
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600" href="/community">
            Cộng đồng
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="ghost" size="sm">
            Tài khoản
          </Button>
        </div>
      </header>

      <div className="flex-1 p-6 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Page Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Chọn gói phù hợp với bạn</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Từ nhà đầu tư mới bắt đầu đến chuyên gia, chúng tôi có gói dịch vụ phù hợp cho mọi nhu cầu
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Basic Plan */}
            <Card className="relative">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Users className="w-6 h-6 text-gray-600" />
                  <CardTitle className="text-2xl">Basic</CardTitle>
                </div>
                <CardDescription className="text-lg">Hoàn toàn miễn phí</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">0 VNĐ</span>
                  <span className="text-gray-500">/tháng</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Gợi ý cổ phiếu cơ bản</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Thông tin tổng quan thị trường</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Truy cập cộng đồng</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Công cụ lọc cơ bản</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Tin tức thị trường</span>
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <Link href="/register">Đăng ký miễn phí</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="relative border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white px-3 py-1">Phổ biến nhất</Badge>
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Star className="w-6 h-6 text-blue-600" />
                  <CardTitle className="text-2xl text-blue-600">Premium</CardTitle>
                </div>
                <CardDescription className="text-lg">Cho nhà đầu tư nghiêm túc</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold text-blue-600">499,000 VNĐ</span>
                  <span className="text-gray-500">/tháng</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span className="font-medium">Tất cả tính năng Basic</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Danh mục cổ phiếu chuyên gia</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Phân tích tài chính chi tiết</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Đánh giá rủi ro chuyên sâu</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Mô hình định giá DCF, P/E</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Khóa học & Livestream</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Hỗ trợ ưu tiên</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/register?plan=premium">Bắt đầu Premium</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="relative border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Zap className="w-6 h-6 text-purple-600" />
                  <CardTitle className="text-2xl text-purple-600">Pro</CardTitle>
                </div>
                <CardDescription className="text-lg">Cho trader chuyên nghiệp</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold text-purple-600">999,000 VNĐ</span>
                  <span className="text-gray-500">/tháng</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span className="font-medium">Tất cả tính năng Premium</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>API truy cập dữ liệu</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Báo cáo tùy chỉnh</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Tư vấn 1-1 với chuyên gia</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Cảnh báo giá real-time</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Công cụ backtesting</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Hỗ trợ 24/7</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                  <Link href="/register?plan=pro">Bắt đầu Pro</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Features Comparison */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">So sánh chi tiết các gói</h2>
              <p className="text-gray-600">Tìm hiểu sự khác biệt giữa các gói dịch vụ</p>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left p-4 font-medium">Tính năng</th>
                        <th className="text-center p-4 font-medium">Basic</th>
                        <th className="text-center p-4 font-medium text-blue-600">Premium</th>
                        <th className="text-center p-4 font-medium text-purple-600">Pro</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="p-4 font-medium">Gợi ý cổ phiếu</td>
                        <td className="text-center p-4">Cơ bản</td>
                        <td className="text-center p-4">Chuyên gia</td>
                        <td className="text-center p-4">Chuyên gia + AI</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium">Phân tích tài chính</td>
                        <td className="text-center p-4">-</td>
                        <td className="text-center p-4">
                          <Check className="h-5 w-5 text-green-600 mx-auto" />
                        </td>
                        <td className="text-center p-4">
                          <Check className="h-5 w-5 text-green-600 mx-auto" />
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium">Mô hình định giá</td>
                        <td className="text-center p-4">-</td>
                        <td className="text-center p-4">DCF, P/E</td>
                        <td className="text-center p-4">Tất cả mô hình</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium">API truy cập</td>
                        <td className="text-center p-4">-</td>
                        <td className="text-center p-4">-</td>
                        <td className="text-center p-4">
                          <Check className="h-5 w-5 text-green-600 mx-auto" />
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium">Tư vấn 1-1</td>
                        <td className="text-center p-4">-</td>
                        <td className="text-center p-4">-</td>
                        <td className="text-center p-4">
                          <Check className="h-5 w-5 text-green-600 mx-auto" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Câu hỏi thường gặp</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tôi có thể hủy gói Premium bất cứ lúc nào không?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Có, bạn có thể hủy gói Premium bất cứ lúc nào. Không có phí hủy và bạn vẫn có thể sử dụng các tính
                    năng Premium đến hết chu kỳ thanh toán.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Có thời gian dùng thử miễn phí không?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Có, chúng tôi cung cấp 7 ngày dùng thử miễn phí cho gói Premium. Bạn có thể trải nghiệm đầy đủ các
                    tính năng trước khi quyết định.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Dữ liệu có được cập nhật real-time không?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Gói Basic có độ trễ 15 phút, gói Premium có độ trễ 5 phút, và gói Pro cung cấp dữ liệu real-time.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tôi có thể nâng cấp hoặc hạ cấp gói bất cứ lúc nào không?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Có, bạn có thể thay đổi gói dịch vụ bất cứ lúc nào. Phí sẽ được tính theo tỷ lệ cho thời gian sử
                    dụng.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
