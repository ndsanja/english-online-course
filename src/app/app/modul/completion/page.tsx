import { Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center space-x-4">
            <img src="/dicoding-logo.png" alt="Dicoding Logo" className="h-8" />
            <div className="relative">
              <input
                type="text"
                placeholder="Apa yang ingin Anda pelajari?"
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Learning Path
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Langgan Dwi
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Program
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Capaian & Dampak
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Lainnya
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="rounded-full">
              Dashboard <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Avatar>
              <AvatarImage src="/user-avatar.png" alt="User" />
              <AvatarFallback>US</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Certificate Section */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 text-center">
            <img
              src="/dicoding-logo.png"
              alt="Dicoding Logo"
              className="h-8 mx-auto mb-4"
            />
            <h2 className="text-lg font-semibold">
              SERTIFIKAT KOMPETENSI KELULUSAN
            </h2>
            <p className="text-gray-600 mt-2">EYKA406KGKPDL</p>
            <h3 className="text-xl font-bold mt-4">Nila Dwi Sanja</h3>
            <p className="text-gray-600">
              Atas keberhasilannya menyelesaikan kelas
            </p>
            <p className="text-blue-600 font-semibold">
              Front-End Web Developer Expert
            </p>
            <p className="text-gray-600 mt-4">24 Desember 2023</p>
            <div className="flex justify-center mt-4">
              <img src="/signature.png" alt="Signature" className="h-12" />
            </div>
            <p className="text-gray-600 text-sm mt-2">Narenda Wicaksono</p>
            <p className="text-gray-600 text-sm">CEO Dicoding</p>
            <p className="text-gray-600 text-sm mt-4">
              Verifikasi sertifikat:{" "}
              <a href="#" className="text-blue-600">
                https://bit.ly/...
              </a>
            </p>
            <Button className="mt-6 bg-blue-600 hover:bg-blue-700">
              PERBARUI SERTIFIKAT
            </Button>
          </div>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row lg:space-x-8">
          {/* Main Content */}
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src="/course-image.png"
                alt="Course Image"
                className="w-32 h-24 rounded-lg object-cover"
              />
              <div>
                <h1 className="text-2xl font-bold">
                  Belajar Pengembangan Web Intermediate
                </h1>
                <p className="text-gray-600">
                  Disusun oleh: Dicoding Indonesia
                </p>
                <p className="text-gray-600">Level: Menengah</p>
                <Badge className="mt-2">1 modul telah dikerjakan</Badge>
              </div>
            </div>
            <div className="flex items-center space-x-2 mb-6">
              <img
                src="/dicoding-logo.png"
                alt="Dicoding Logo"
                className="h-6"
              />
              <img
                src="/google-developers-logo.png"
                alt="Google Developers Logo"
                className="h-6"
              />
            </div>
            <p className="text-gray-600 mb-6">
              Kelas ini ditujukan untuk seorang Front-End Web Developer yang
              ingin mengembangkan website yang optimal, mudah digunakan, serta
              cepat sehingga kualitasnya menjadi lebih optimal. Di akhir kelas,
              siswa dapat membuat aplikasi front-end web yang responsif,
              memiliki aksesibilitas yang baik, mudah di-maintenance, memiliki
              sifat native, dapat diuji, dan memiliki performa yang baik.
            </p>
            <h2 className="text-xl font-semibold mb-4">
              Materi yang dipelajari:
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
              <li>
                <strong>Pengenalan Kelas:</strong> Menjelaskan tentang
                pengenalan membuat website yang optimal untuk diakses oleh
                berbagai perangkat, khususnya smartphone yang mendominasi
                pengguna internet. (20 menit)
              </li>
              <li>
                <strong>First Approach:</strong> Memahami pendekatan
                mobile-first, serta belajar membangun website yang responsif
                menggunakan CSS Grid System, Media Query, dan Off Screen Canvas
                melalui pendekatan Mobile First (7 jam 30 menit)
              </li>
              <li>
                <strong>Aksesibilitas:</strong> Belajar aspek aksesibilitas web
                seperti focus, semantic HTML, tab order, label, alternative
                teks, serta pengujian screen reader agar website yang
                dikembangkan dapat diakses oleh semua pengguna (13 jam 10 menit)
              </li>
              <li>
                <strong>JavaScript Clean Code:</strong> Belajar prinsip-prinsip
                penulisan kode JavaScript berdasarkan acuan buku Clean Code yang
                ditulis oleh engineer Robert C. Martin. (5 jam)
              </li>
              <li>
                <strong>Progressive Web Apps:</strong> Belajar membuat yang
                progressive sehinga website yang dibuat dapat memiliki sifat
                native seperti instalable, offline capable, dan lainnya (30 jam
                15 menit)
              </li>
              <li>
                <strong>Automation Testing:</strong> Belajar penerapan testing
                seperti unit test, integration test, dan End to End Test pada
                website yang dibuat, serta belajar menggunakan DevTools untuk
                mengukur performa website (25 menit)
              </li>
              <li>
                <strong>Web Performance:</strong> Belajar mengukur performa
                website menggunakan berbagai tools seperti Lighthouse,
                Performance Monitor, dan lainnya (3 jam 55 menit)
              </li>
              <li>
                <strong>Deployment dengan CI/CD:</strong> Belajar mendeploy
                website secara otomatis menggunakan Continuous
                Integration/Continuous Deployment untuk mempercepat proses
                testing dan build secara otomatis sehingga aplikasi dapat segera
                dipublikasikan (6 jam 20 menit)
              </li>
            </ul>
            <h2 className="text-xl font-semibold mb-4">
              Evaluasi pembelajaran:
            </h2>
            <p className="text-gray-600 mb-6">
              - Submission: Proyek akhir berupa web app katalog restoran dengan
              experience dan fungsionalitas yang baik ketika diakses pada
              perangkat mobile
              <br />
              Total jam yang dibutuhkan untuk menyelesaikan kelas ini, mulai
              dari persiapan kelas sampai evaluasi belajar, adalah 100 jam.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              TAMBAHKAN KE LINKEDIN
            </Button>
          </div>

          {/* Instructor Card */}
          <div className="mt-8 lg:mt-0 lg:w-80">
            <Card>
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto">
                  <AvatarImage src="/instructor-avatar.png" alt="Instructor" />
                  <AvatarFallback>ND</AvatarFallback>
                </Avatar>
                <CardTitle className="mt-4">Nila Dwi Sanja</CardTitle>
                <p className="text-gray-600">EYKA406KGKPDL</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Diberikan pada
                  <br />
                  24 Desember 2023
                </p>
                <p className="text-gray-600 mt-2">
                  Berlaku sampai
                  <br />
                  24 Desember 2026
                </p>
                <a href="#" className="text-blue-600 text-sm mt-4 block">
                  Lihat profil sertifikat
                </a>
              </CardContent>
            </Card>
            <p className="text-center text-gray-600 mt-4">
              Bagikan sertifikat:
            </p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="#">
                <img src="/linkedin-logo.png" alt="LinkedIn" className="h-6" />
              </a>
              <a href="#">
                <img src="/twitter-logo.png" alt="Twitter" className="h-6" />
              </a>
              <a href="#">
                <img src="/facebook-logo.png" alt="Facebook" className="h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src="/dicoding-logo.png"
              alt="Dicoding Logo"
              className="h-8 mb-4"
            />
            <p className="text-gray-600">Dicoding Space</p>
            <p className="text-gray-600">Jl. Batik Kumeli No.50, Sukaluyu,</p>
            <p className="text-gray-600">Kec. Cibeunying Kaler, Kota Bandung</p>
            <p className="text-gray-600">Jawa Barat 40123</p>
            <div className="flex space-x-4 mt-4">
              <a href="#">
                <img src="/youtube-logo.png" alt="YouTube" className="h-6" />
              </a>
              <a href="#">
                <img src="/twitter-logo.png" alt="Twitter" className="h-6" />
              </a>
              <a href="#">
                <img src="/facebook-logo.png" alt="Facebook" className="h-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Decode Ideas, Discover Potential
            </h3>
            <a
              href="#"
              className="block text-gray-600 hover:text-blue-600 mb-2"
            >
              Tentang Kami
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Blog</h3>
            <a
              href="#"
              className="block text-gray-600 hover:text-blue-600 mb-2"
            >
              Reward
            </a>
            <a
              href="#"
              className="block text-gray-600 hover:text-blue-600 mb-2"
            >
              Showcase
            </a>
            <a
              href="#"
              className="block text-gray-600 hover:text-blue-600 mb-2"
            >
              Dicoding Elite
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
            <a
              href="#"
              className="block text-gray-600 hover:text-blue-600 mb-2"
            >
              FAQ
            </a>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/award-logo.png" alt="Award Logo" className="h-6" />
            <p className="text-gray-600">Penghargaan</p>
          </div>
          <p className="text-gray-600 mt-4 md:mt-0">
            © 2023 Dicoding | Dicoding adalah merek PT Presentologics, perseroan
            dari PT Dicoding Akademi Indonesia
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Terms
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
