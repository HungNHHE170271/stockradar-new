"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BarChart3 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { auth, googleProvider } from "@/lib/firebase";
import { signInWithPopup, signInWithRedirect, getRedirectResult } from "firebase/auth";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string>("");

  // Xử lý quay lại từ redirect (mobile/Safari)
  useEffect(() => {
    getRedirectResult(auth)
      .then((res) => {
        if (res?.user) router.push("/dashboard");
      })
      .catch((e: any) => setError(e?.message || String(e)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGoogle = async () => {
    setError("");
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
    try {
      if (isMobile) {
        await signInWithRedirect(auth, googleProvider);
      } else {
        await signInWithPopup(auth, googleProvider);
        router.push("/dashboard");
      }
    } catch (e: any) {
      setError(e?.message || String(e));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link className="flex items-center justify-center mb-6" href="/">
            <BarChart3 className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-2xl font-bold">Stock Radar</span>
          </Link>
        </div>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Đăng nhập</CardTitle>
            <CardDescription className="text-center">
              Chỉ dùng Google để đăng nhập
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full" onClick={handleGoogle}>
              Tiếp tục với Google
            </Button>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <div className="text-center text-sm mt-4">
              <Link href="/register" className="text-blue-600 hover:underline">
                Tạo tài khoản mới (Google)
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
