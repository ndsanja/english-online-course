import { AppSidebar } from "@/app/app/dashboard/app-sidebar";
import { SiteHeader } from "@/app/app/dashboard/site-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import {
  BadgeCheck,
  Book,
  BriefcaseBusiness,
  CalendarCheck,
  CircleCheck,
  FileText,
  GraduationCap,
  Medal,
  TrendingUp,
  Trophy,
} from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <div className="bg-gray-200 min-h-screen">
              <div className="px-6 pt-10 pb-14 bg-cyan-600">
                <div className="mb-8">
                  <div className="flex flex-col gap-2 text-white">
                    <h2 className="text-2xl font-semibold">{`Selamat datang ${`Nila Dwi Sanja`}!`}</h2>
                    <h3>Semoga aktivitas belajarmu menyenangkan.</h3>
                  </div>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Status Langganan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="border rounded-lg p-4 text-gray-700">
                      <p>
                        Anda belum berlangganan kelas Kampung Inggris. Pilih
                        paket langganan kelas dan mulailah perjalanan Anda
                        menuju kesuksekan dengan jago Bahasa Inggris
                      </p>
                      <Button className="mt-4">
                        Pilih Paket Langganan Kelas
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sedang dipelajari */}
              <div className="mt-4 bg-white">
                <div className="px-6 border-b-[0.5px] border-b-gray-300 py-4 flex items-center gap-2">
                  <Book className="h-8 w-8" />
                  <h2 className="text-xl">Sedang dipelajari</h2>
                </div>
                <div className="p-6 flex flex-col gap-8">
                  <Card className="bg-gray-100">
                    <CardHeader className="font-semibold text-sm">
                      Sedang dipelajari
                    </CardHeader>
                    <CardContent className="text-xl font-light text-gray-700">
                      Part Of Speech
                    </CardContent>
                    <CardFooter>
                      <Link href="#" className="underline text-blue-500">
                        Lanjutkan
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card className="bg-gray-100">
                    <CardHeader className="font-semibold text-sm">
                      Sedang dipelajari
                    </CardHeader>
                    <CardContent className="text-xl font-light text-gray-700">
                      IELTS Fundamental
                    </CardContent>
                    <CardFooter>
                      <Link href="#" className="underline text-blue-500">
                        Lanjutkan
                      </Link>
                    </CardFooter>
                  </Card>

                  <Button variant="link" className="self-end underline">
                    Selengkapnya
                  </Button>
                </div>
              </div>

              {/* Telah diselesaikan */}
              <div className="mt-4 bg-white">
                <div className="px-6 border-b-[0.5px] border-b-gray-300 py-4 flex items-center gap-2">
                  <BadgeCheck className="h-8 w-8" />
                  <h2 className="text-xl">Telah diselesaikan</h2>
                </div>
                <div className="p-6 flex flex-col gap-8">
                  <Card className="bg-gray-100">
                    <CardHeader className="font-semibold text-sm">
                      <div className="flex items-center gap-2">
                        <p>Telah diselesaikan</p>
                        <CircleCheck className="w-6 h-6  text-green-500" />
                      </div>
                    </CardHeader>
                    <CardContent className="text-xl font-light text-gray-700">
                      Cara Mudah Menguasai Tenses
                    </CardContent>
                    <CardFooter>
                      <Button className="bg-gray-200 text-black flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        <Link href="#">Lihat Sertifikat</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card className="bg-gray-100">
                    <CardHeader className="font-semibold text-sm">
                      <div className="flex items-center gap-2">
                        <p>Telah diselesaikan</p>
                        <CircleCheck className="w-6 h-6  text-green-500" />
                      </div>
                    </CardHeader>
                    <CardContent className="text-xl font-light text-gray-700">
                      Pengantar Belajar bahasa inggris
                    </CardContent>
                    <CardFooter>
                      <Button className="bg-gray-200 text-black flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        <Link href="#">Lihat Sertifikat</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Button variant="link" className="self-end underline">
                    Selengkapnya
                  </Button>
                </div>
              </div>

              {/* Tes & Latihan */}
              <div className="mt-4 bg-white">
                <div className="px-6 border-b-[0.5px] border-b-gray-300 py-4 flex items-center gap-2">
                  <Medal className="h-8 w-8" />
                  <h2 className="text-xl">Tes & Latihan</h2>
                </div>
                <div className="p-6 flex flex-col gap-8">
                  <Card className="bg-gray-100">
                    <CardHeader className="font-semibold text-sm">
                      <div className="flex items-center gap-2">
                        <p>Telah diselesaikan</p>
                        <CircleCheck className="w-6 h-6  text-green-500" />
                      </div>
                    </CardHeader>
                    <CardContent className="text-xl font-light text-gray-700">
                      Cara Mudah Menguasai Tenses Test
                    </CardContent>
                    <CardFooter>
                      <Button className="bg-gray-200 text-black flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        <Link href="#">Lihat Hasil</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card className="bg-gray-100">
                    <CardHeader className="font-semibold text-sm">
                      <div className="flex items-center gap-2">
                        <p>Belum dikerjakan</p>
                        {/* <CircleCheck className="w-6 h-6  text-green-500" /> */}
                      </div>
                    </CardHeader>
                    <CardContent className="text-xl font-light text-gray-700">
                      Skorring IELTS
                    </CardContent>
                    <CardFooter>
                      <Link href="#" className="text-blue-500 underline">
                        Kerjakan Sekarang
                      </Link>
                    </CardFooter>
                  </Card>
                  <Button variant="link" className="self-end underline">
                    Selengkapnya
                  </Button>
                </div>
              </div>

              {/* Aktivitas Lain */}
              <div className="mt-4 bg-white">
                <div className="px-6 border-b-[0.5px] border-b-gray-300 py-4 flex items-center gap-2">
                  <TrendingUp className="h-8 w-8" />
                  <h2 className="text-xl">Aktivitas Lain</h2>
                </div>
                <div className="p-6 flex flex-col gap-8">
                  <div>
                    <p className="text-xl text-gray-700">
                      Belum ada aktivitas.
                    </p>
                  </div>
                  <Card className="bg-gray-100">
                    <CardHeader className="font-semibold text-sm">
                      <div className="flex items-center gap-2">
                        <Trophy className="w-8 h-8  text-orange-500" />
                      </div>
                    </CardHeader>
                    <CardContent className="text-2xl font-light text-gray-700">
                      Terlusuri Challenge di Kampung Inggris
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-100">
                    <CardHeader className="font-semibold text-sm">
                      <div className="flex items-center gap-2">
                        <CalendarCheck className="w-8 h-8  text-purple-500" />
                      </div>
                    </CardHeader>
                    <CardContent className="text-2xl font-light text-gray-700">
                      Terlusuri Event di Kampung Inggris
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-100">
                    <CardHeader className="font-semibold text-sm">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-8 h-8  text-blue-900" />
                      </div>
                    </CardHeader>
                    <CardContent className="text-2xl font-light text-gray-700">
                      Terlusuri Informasi Beasiswa
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-100">
                    <CardHeader className="font-semibold text-sm">
                      <div className="flex items-center gap-2">
                        <BriefcaseBusiness className="w-8 h-8  text-green-500" />
                      </div>
                    </CardHeader>
                    <CardContent className="text-2xl font-light text-gray-700">
                      Terlusuri Informasi Pekerjaan Dalam & Luar Negeri
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mt-t pb-4">
                <div className="h-[60px]"></div>
                <div className="border-t-[0.5px] border-t-gray-300 p-4 text-center">
                  <div>
                    <p className="text-gray-700 text-center">
                      &#169; 2025 Kampung Inggris Pare
                    </p>
                    <div className="flex items-center justify-center gap-4 text-sm mt-2">
                      <Link href="#" className="text-blue-500 underline">
                        Terms
                      </Link>
                      <span className="">.</span>
                      <Link href="#" className="text-blue-500 underline">
                        Privacy
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
