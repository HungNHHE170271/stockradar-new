"use client";

import { useState } from "react";
import Link from "next/link";
import { BarChart3, MessageSquare, ThumbsUp, TrendingUp, Users, Hash, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRequireAuth } from "@/hooks/use-require-auth";

export default function CommunityPage() {
  // Ép đăng nhập
  const { checking } = useRequireAuth("/login");
  const [newPost, setNewPost] = useState("");

  if (checking) {
    return (
      <div className="min-h-screen grid place-items-center text-gray-500 text-sm">
        Đang kiểm tra đăng nhập…
      </div>
    );
  }

  const posts = [
    {
      id: 1,
      author: "NguyenTrader",
      avatar: "/placeholder-user.jpg",
      time: "2 giờ trước",
      content: "Các bác nghĩ sao về #VNM trong tuần tới? Mình thấy có dấu hiệu tích cực từ báo cáo Q3.",
      tags: ["VNM"],
      likes: 12,
      comments: 5,
      reputation: 85,
    },
    {
      id: 2,
      author: "StockAnalyst",
      avatar: "/placeholder-user.jpg",
      time: "4 giờ trước",
      content:
        "#FPT vừa công bố hợp đồng lớn với khách hàng Nhật Bản. Dự kiến sẽ tác động tích cực đến doanh thu Q4. Ai đang hold FPT không?",
      tags: ["FPT"],
      likes: 28,
      comments: 12,
      reputation: 92,
    },
    {
      id: 3,
      author: "InvestorVN",
      avatar: "/placeholder-user.jpg",
      time: "6 giờ trước",
      content:
        "Thị trường hôm nay khá tích cực. #VCB và #TCB đều có phiên tăng tốt. Ngành ngân hàng đang có xu hướng phục hồi.",
      tags: ["VCB", "TCB"],
      likes: 15,
      comments: 8,
      reputation: 78,
    },
  ];

  const trendingTags = [
    { tag: "VNM", posts: 45, change: "+12%" },
    { tag: "FPT", posts: 38, change: "+8%" },
    { tag: "VCB", posts: 32, change: "+5%" },
    { tag: "HPG", posts: 28, change: "+15%" },
    { tag: "TCB", posts: 24, change: "+3%" },
  ];

  const topUsers = [
    { name: "StockMaster", reputation: 1250, posts: 156 },
    { name: "MarketGuru", reputation: 1180, posts: 142 },
    { name: "TradingPro", reputation: 1050, posts: 128 },
    { name: "InvestWise", reputation: 980, posts: 115 },
  ];

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
          <Link className="text-sm font-medium text-blue-600" href="/community">
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
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-6 lg:grid-cols-4">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Page Header */}
              <div>
                <h1 className="text-3xl font-bold">Cộng đồng Stock Radar</h1>
                <p className="text-gray-600">Kết nối và chia sẻ kinh nghiệm đầu tư</p>
              </div>

              {/* Community Stats */}
              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="text-2xl font-bold">12,456</p>
                        <p className="text-sm text-gray-500">Thành viên</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="text-2xl font-bold">3,248</p>
                        <p className="text-sm text-gray-500">Bài đăng hôm nay</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-purple-600" />
                      <div>
                        <p className="text-2xl font-bold">1,567</p>
                        <p className="text-sm text-gray-500">Online</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* New Post */}
              <Card>
                <CardHeader>
                  <CardTitle>Chia sẻ ý kiến của bạn</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Textarea
                      placeholder="Bạn đang nghĩ gì về thị trường? Sử dụng #MaCoPHieu để gắn thẻ..."
                      value={newPost}
                      onChange={(e) => setNewPost(e.target.value)}
                      rows={3}
                    />
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <Badge variant="outline">#VNM</Badge>
                        <Badge variant="outline">#FPT</Badge>
                        <Badge variant="outline">#VCB</Badge>
                      </div>
                      <Button>
                        <Send className="w-4 h-4 mr-2" />
                        Đăng bài
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Posts Feed */}
              <div className="space-y-4">
                {posts.map((post) => (
                  <Card key={post.id}>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        {/* Post Header */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Avatar>
                              <AvatarImage src={post.avatar || "/placeholder.svg"} />
                              <AvatarFallback>{post.author[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{post.author}</p>
                              <div className="flex items-center space-x-2 text-sm text-gray-500">
                                <span>{post.time}</span>
                                <span>•</span>
                                <span>Uy tín: {post.reputation}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Post Content */}
                        <div>
                          <p className="text-gray-800">{post.content}</p>
                          <div className="flex gap-2 mt-2">
                            {post.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-blue-600">
                                <Hash className="w-3 h-3 mr-1" />
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Post Actions */}
                        <div className="flex items-center justify-between pt-2 border-t">
                          <div className="flex items-center space-x-4">
                            <Button variant="ghost" size="sm">
                              <ThumbsUp className="w-4 h-4 mr-1" />
                              {post.likes}
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MessageSquare className="w-4 h-4 mr-1" />
                              {post.comments}
                            </Button>
                          </div>
                          <Button variant="ghost" size="sm">Chia sẻ</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Trending Tags */}
              <Card>
                <CardHeader>
                  <CardTitle>Thẻ thịnh hành</CardTitle>
                  <CardDescription>Các mã được thảo luận nhiều nhất</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {trendingTags.map((item) => (
                      <div key={item.tag} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Hash className="w-4 h-4 text-blue-600" />
                          <span className="font-medium">{item.tag}</span>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{item.posts} bài</p>
                          <p className="text-xs text-green-600">{item.change}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Top Contributors */}
              <Card>
                <CardHeader>
                  <CardTitle>Thành viên nổi bật</CardTitle>
                  <CardDescription>Những người đóng góp tích cực nhất</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {topUsers.map((user, index) => (
                      <div key={user.name} className="flex items-center space-x-3">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-sm font-bold text-blue-600">
                          {index + 1}
                        </div>
                        <Avatar className="w-8 h-8">
                          <AvatarFallback>{user.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{user.name}</p>
                          <p className="text-xs text-gray-500">
                            {user.reputation} điểm • {user.posts} bài
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Community Guidelines */}
              <Card>
                <CardHeader>
                  <CardTitle>Quy tắc cộng đồng</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p>• Chia sẻ thông tin chính xác và có căn cứ</p>
                    <p>• Tôn trọng ý kiến của người khác</p>
                    <p>• Không spam hoặc quảng cáo</p>
                    <p>• Sử dụng thẻ mã cổ phiếu phù hợp</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent">
                    Xem đầy đủ
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
