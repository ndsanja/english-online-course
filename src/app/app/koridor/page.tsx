import {
  LayoutGrid,
  BookOpen,
  CheckCircle,
  MessageCircle,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md h-screen fixed top-0 left-0 p-4 hidden md:block">
        <div className="flex items-center space-x-2 mb-6">
          <img src="/dicoding-logo.png" alt="Dicoding Logo" className="h-8" />
          <span className="text-xl font-bold">dicoding</span>
          <span className="text-sm text-gray-500">Academy</span>
        </div>
        <nav className="space-y-2">
          <a
            href="#"
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 p-2 rounded-md hover:bg-gray-100"
          >
            <LayoutGrid className="h-5 w-5" />
            <span>Progress Belajar</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 p-2 rounded-md hover:bg-gray-100"
          >
            <BookOpen className="h-5 w-5" />
            <span>Langganan</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-0 md:ml-64 p-6">
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">
              Belajar Pengembangan Web Intermediate
            </h1>
            <p className="text-gray-600">
              Selamat, kamu telah menyelesaikan kelas ini
            </p>
            <p className="text-gray-600">
              Terus belajar dan praktikkan ilmu untuk menjadi Developer andal
            </p>
            <p className="text-gray-600 mt-2">
              <a href="#" className="text-blue-600 hover:underline">
                Lihat Sertifikat
              </a>
            </p>
          </div>
          <Button variant="outline" className="rounded-full">
            Belajar lagi
          </Button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Progress Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <LayoutGrid className="h-5 w-5" />
                <span>Progress Belajar</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Kordinasi Kelas</p>
              <p className="text-2xl font-bold mt-2">
                Front-End Web Learning Path
              </p>
            </CardContent>
          </Card>

          {/* Submission History */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Riwayat Submission</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600">
                    Status: <span className="text-green-600">Disetujui</span>
                  </p>
                  <p className="text-gray-600">
                    Tugas: Submission: Katalog Restoran PWA + Testing and...
                  </p>
                  <p className="text-gray-600">24 Desember 2023</p>
                </div>
                <div>
                  <p className="text-gray-600">
                    Status: <span className="text-red-600">Ditolak</span>
                  </p>
                  <p className="text-gray-600">
                    Tugas: Submission: Katalog Restoran PWA + Testing and...
                  </p>
                  <p className="text-gray-600">24 Desember 2023</p>
                </div>
                <div>
                  <p className="text-gray-600">
                    Status: <span className="text-green-600">Disetujui</span>
                  </p>
                  <p className="text-gray-600">
                    Tugas: Submission: Katalog Restoran + PWA
                  </p>
                  <p className="text-gray-600">20 November 2023</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Exam History */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Riwayat Ujian</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600">Ujian: Ujian Akhir</p>
                  <p className="text-gray-600">24 November 2023</p>
                  <p className="text-gray-600">Nilai: 85%</p>
                </div>
                <div>
                  <p className="text-gray-600">
                    Ujian: Ujian Deployment dengan CI/CD
                  </p>
                  <p className="text-gray-600">24 November 2023</p>
                  <p className="text-gray-600">Nilai: 75%</p>
                </div>
                <div>
                  <p className="text-gray-600">Ujian: Kuis Web Performance</p>
                  <p className="text-gray-600">25 November 2023</p>
                  <p className="text-gray-600">Nilai: 100%</p>
                </div>
              </div>
              <a href="#" className="text-blue-600 hover:underline mt-4 block">
                Selengkapnya
              </a>
            </CardContent>
          </Card>

          {/* Forum Discussion */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5" />
                <span>Forum Diskusi</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Berdiskusi dengan para expert, alumni, atau siswa lainnya
                terkait kelas Belajar Pengembangan Web Intermediate.
              </p>
              <a href="#" className="text-blue-600 hover:underline mt-4 block">
                Ke forum diskusi
              </a>
            </CardContent>
          </Card>

          {/* Mentoring Platform */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Video className="h-5 w-5" />
                <span>Mentoring Platform</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Berkonsultasi secara langsung dengan para expert untuk
                memecahkan kesulitanmu.
              </p>
              <a href="#" className="text-blue-600 hover:underline mt-4 block">
                Ke mentoring platform
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-600 text-sm">
          <p>
            © 2025 Dicoding Indonesia | Dicoding is a trademark of PT
            Presentologics
          </p>
          <div className="mt-2">
            <a href="#" className="text-blue-600 hover:underline">
              Terms
            </a>{" "}
            |{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
