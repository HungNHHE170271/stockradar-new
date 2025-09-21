"use client"

import Link from "next/link"
import { BarChart3, TrendingUp, TrendingDown, DollarSign, PieChart, LineChart, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AnalysisPage() {
  const freeAnalysis = [
  {
    symbol: "VNM",
    name: "Vinamilk",
    sector: "Thực phẩm",
    recommendation: "Mua",
    targetPrice: "95,000",
    currentPrice: "85,500",
    upside: "+11.1%",
    summary:
      "Công ty dẫn đầu ngành sữa Việt Nam với thị phần ổn định và kế hoạch mở rộng ra nước ngoài.",
  },
  {
    symbol: "FPT",
    name: "FPT Corporation",
    sector: "Công nghệ",
    recommendation: "Nắm giữ",
    targetPrice: "150,000",
    currentPrice: "142,000",
    upside: "+5.6%",
    summary: "Tăng trưởng ổn định trong mảng công nghệ thông tin và giáo dục.",
  },
  {
    symbol: "HPG",
    name: "Hòa Phát Group",
    sector: "Thép",
    recommendation: "Mua",
    targetPrice: "35,000",
    currentPrice: "31,000",
    upside: "+12.9%",
    summary:
      "Doanh nghiệp thép hàng đầu Việt Nam với lợi thế quy mô, thị phần lớn và triển vọng phục hồi nhu cầu xây dựng.",
  },
]


  const premiumAnalysis = [
  {
    symbol: "MSN",
    name: "Masan Group",
    sector: "Tiêu dùng",
    recommendation: "Mua mạnh",
    targetPrice: "180,000",
    currentPrice: "156,000",
    upside: "+15.4%",
    pe: "12.5x",
    roe: "18.2%",
    debt: "45%",
  },
  {
    symbol: "VHM",
    name: "Vinhomes",
    sector: "Bất động sản",
    recommendation: "Mua",
    targetPrice: "85,000",
    currentPrice: "78,500",
    upside: "+8.3%",
    pe: "8.9x",
    roe: "22.1%",
    debt: "38%",
  },
  {
    symbol: "HPG",
    name: "Hòa Phát Group",
    sector: "Thép",
    recommendation: "Mua",
    targetPrice: "35,000",
    currentPrice: "31,000",
    upside: "+12.9%",
    pe: "10.2x",
    roe: "16.5%",
    debt: "40%",
  },
]


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
          <Link className="text-sm font-medium text-blue-600" href="/analysis">
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
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Page Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Phân tích chuyên sâu</h1>
              <p className="text-gray-600">Báo cáo và đánh giá từ đội ngũ chuyên gia</p>
            </div>
            <Button asChild>
              <Link href="/pricing">
                <Lock className="w-4 h-4 mr-2" />
                Nâng cấp Premium
              </Link>
            </Button>
          </div>

          {/* Market Overview */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">VN-Index</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,245.67</div>
                <p className="text-xs text-green-600">+12.34 (+1.00%)</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">HNX-Index</CardTitle>
                <TrendingDown className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">234.56</div>
                <p className="text-xs text-red-600">-2.11 (-0.89%)</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Khối lượng giao dịch</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">456.7M</div>
                <p className="text-xs text-muted-foreground">Cổ phiếu</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Giá trị giao dịch</CardTitle>
                <PieChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12,345 tỷ</div>
                <p className="text-xs text-muted-foreground">VNĐ</p>
              </CardContent>
            </Card>
          </div>

          {/* Analysis Tabs */}
          <Tabs defaultValue="free" className="space-y-6">
            <TabsList>
              <TabsTrigger value="free">Phân tích miễn phí</TabsTrigger>
              <TabsTrigger value="premium">Phân tích Premium</TabsTrigger>
              <TabsTrigger value="tools">Công cụ phân tích</TabsTrigger>
            </TabsList>

            <TabsContent value="free" className="space-y-4">
              <div className="grid gap-6 lg:grid-cols-2">
                {freeAnalysis.map((analysis) => (
  <Card key={analysis.symbol}>
    <CardHeader>
      <div className="flex justify-between items-start">
        <div>
          <CardTitle className="flex items-center gap-2">
            {analysis.name}
            <Badge variant="outline">{analysis.symbol}</Badge>
          </CardTitle>
          <CardDescription>{analysis.sector}</CardDescription>
        </div>
        <Badge
          variant={analysis.recommendation === "Mua" ? "default" : "secondary"}
          className={analysis.recommendation === "Mua" ? "bg-green-600" : ""}
        >
          {analysis.recommendation}
        </Badge>
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-sm text-gray-500">Giá hiện tại</p>
          <p className="font-bold">{analysis.currentPrice}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Mục tiêu</p>
          <p className="font-bold">{analysis.targetPrice}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Upside</p>
          <p className="font-bold text-green-600">{analysis.upside}</p>
        </div>
      </div>
      <div>
        <p className="text-sm font-medium mb-2">Tóm tắt phân tích:</p>
        <p className="text-sm text-gray-600">{analysis.summary}</p>
      </div>
      <Button asChild className="w-full bg-transparent" variant="outline">
        <Link href={`/analysis/${analysis.symbol.toLowerCase()}`}>
          Xem báo cáo đầy đủ
        </Link>
      </Button>
    </CardContent>
  </Card>
))}

              </div>
            </TabsContent>

            <TabsContent value="premium" className="space-y-4">
              <div className="grid gap-6 lg:grid-cols-2">
                {premiumAnalysis.map((analysis) => (
                  <Card
                    key={analysis.symbol}
                    className="relative border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50"
                  >
                    <div className="absolute top-2 right-2">
                      <Lock className="w-4 h-4 text-yellow-600" />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            {analysis.name}
                            <Badge variant="outline">{analysis.symbol}</Badge>
                          </CardTitle>
                          <CardDescription>{analysis.sector}</CardDescription>
                        </div>
                        <Badge
                          variant={analysis.recommendation === "Mua mạnh" ? "default" : "secondary"}
                          className={analysis.recommendation === "Mua mạnh" ? "bg-green-600" : "bg-blue-600"}
                        >
                          {analysis.recommendation}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-sm text-gray-500">Giá hiện tại</p>
                          <p className="font-bold">{analysis.currentPrice}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Mục tiêu</p>
                          <p className="font-bold">{analysis.targetPrice}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Upside</p>
                          <p className="font-bold text-green-600">{analysis.upside}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-center border-t pt-4">
                        <div>
                          <p className="text-sm text-gray-500">P/E</p>
                          <p className="font-bold">{analysis.pe}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">ROE</p>
                          <p className="font-bold">{analysis.roe}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Nợ/Vốn</p>
                          <p className="font-bold">{analysis.debt}</p>
                        </div>
                      </div>
                      <Button className="w-full" disabled>
                        <Lock className="w-4 h-4 mr-2" />
                        Yêu cầu Premium
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="p-6 bg-blue-50 border-blue-200">
                <div className="text-center">
                  <Lock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Phân tích Premium</h3>
                  <p className="text-gray-600 mb-4">
                    Truy cập báo cáo tài chính chi tiết, định giá chuyên sâu và khuyến nghị đầu tư từ chuyên gia
                  </p>
                  <Button asChild>
                    <Link href="/pricing">Nâng cấp ngay</Link>
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="tools" className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <LineChart className="w-8 h-8 text-blue-600 mb-2" />
                    <CardTitle>Bộ lọc cổ phiếu</CardTitle>
                    <CardDescription>Tìm kiếm cổ phiếu theo tiêu chí tài chính</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Sử dụng ngay</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <PieChart className="w-8 h-8 text-green-600 mb-2" />
                    <CardTitle>So sánh cổ phiếu</CardTitle>
                    <CardDescription>So sánh các chỉ số tài chính giữa các mã</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Sử dụng ngay</Button>
                  </CardContent>
                </Card>

                <Card className="relative">
                  <div className="absolute top-2 right-2">
                    <Lock className="w-4 h-4 text-yellow-600" />
                  </div>
                  <CardHeader>
                    <TrendingUp className="w-8 h-8 text-purple-600 mb-2" />
                    <CardTitle>Mô hình định giá</CardTitle>
                    <CardDescription>DCF, P/E, P/B và các mô hình khác</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" disabled>
                      <Lock className="w-4 h-4 mr-2" />
                      Premium
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
