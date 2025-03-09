import { Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

      {/* Learning Path Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-2xl font-bold text-center mb-2">
            Front-End Web Developer
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Kurikulum disusun Dicoding dan para industri di bidang Web
            Development. Selesai interaksi untuk menjadi Front-End Web Developer
            sesuai standar kebutuhan industri.
          </p>

          <div className="flex flex-col lg:flex-row lg:space-x-8">
            {/* Left Column: Timeline */}
            <div className="flex-1">
              {/* Langkah 1 */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    Langkah 1
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-600 mb-2">
                    Anda sudah melewati langkah ini.
                  </p>
                  <h3 className="text-xl font-bold">
                    Belajar Dasar Pemrograman Web
                  </h3>
                  <p className="text-gray-600">48 Jam ★ 4.87 ★ Dasar</p>
                  <p className="text-gray-600">
                    119 Modul | 274.042 Siswa Terdaftar
                  </p>
                </CardContent>
              </Card>

              {/* Langkah 2 */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    Langkah 2
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-600 mb-2">
                    Anda sudah melewati langkah ini.
                  </p>
                  <h3 className="text-xl font-bold">
                    Belajar Dasar Pemrograman JavaScript
                  </h3>
                  <p className="text-gray-600">44 Jam ★ 4.85 ★ Dasar</p>
                  <p className="text-gray-600">
                    117 Modul | 219.743 Siswa Terdaftar
                  </p>
                </CardContent>
              </Card>

              {/* Langkah 3 */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    Langkah 3
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-600 mb-2">
                    Anda sudah melewati langkah ini.
                  </p>
                  <h3 className="text-xl font-bold">
                    Belajar Membuat Front-End untuk Pemula
                  </h3>
                  <p className="text-gray-600">42 Jam ★ 4.87 ★ Pemula</p>
                  <p className="text-gray-600">
                    61 Modul | 154.976 Siswa Terdaftar
                  </p>
                </CardContent>
              </Card>

              {/* Langkah 4 */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    Langkah 4
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-600 mb-2">
                    Anda sudah melewati langkah ini.
                  </p>
                  <h3 className="text-xl font-bold">
                    Belajar Fundamental Front-End Web
                  </h3>
                  <p className="text-gray-600">80 Jam ★ 4.89 ★ Menengah</p>
                  <p className="text-gray-600">
                    119 Modul | 53.420 Siswa Terdaftar
                  </p>
                </CardContent>
              </Card>

              {/* Langkah 5 */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    Langkah 5
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-600 mb-2">
                    Anda sudah melewati langkah ini.
                  </p>
                  <h3 className="text-xl font-bold">
                    Belajar Pengembangan Web Intermediate
                  </h3>
                  <p className="text-gray-600">80 Jam ★ 4.89 ★ Menengah</p>
                  <p className="text-gray-600">
                    119 Modul | 53.420 Siswa Terdaftar
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right Column: Details */}
            <div className="flex-1">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    Buat Pertamamu di Sini
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Belajar dasar-dasar pemrograman yang tidak boleh dilewatkan
                    untuk membangun fondasi yang kokoh. Di sini, Anda akan
                    belajar tentang HTML, CSS, dan JavaScript yang merupakan
                    elemen penting dalam membangun website yang interaktif,
                    responsif, dan fungsional.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    Kuasi JavaScript
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Kuasai JavaScript sebagai bahasa pemrograman yang digunakan
                    untuk membuat website yang lebih dinamis dan interaktif.
                    Belajar konsep-konsep seperti DOM, Event, ES6, hingga
                    konsumsi API menggunakan JavaScript untuk membangun website
                    yang lebih fungsional.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    Buat Website Front-End Interaktif
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Belajar cara membuat Front-End website yang interaktif
                    menggunakan JavaScript agar mampu membuat website yang
                    fungsional. Di langkah ini, Anda akan mempelajari cara
                    mengintegrasikan API, modularitas kode, dan memahami cara
                    kerja website modern.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    Pelajari Hal Esensial di Bidang Front-End Web Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Agar pengembangan website menjadi lebih optimal, Anda perlu
                    memahami konsep-konsep penting seperti performance,
                    accessibility, testing, dan deployment. Di langkah ini, Anda
                    akan belajar cara membangun website yang lebih baik,
                    efisien, dan sesuai dengan standar industri.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    Tingkatkan Web dengan Fitur Canggih
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Belajar membuat website yang lebih canggih dengan
                    fitur-fitur seperti Progressive Web App (PWA), Web
                    Accessibility, dan Deployment menggunakan CI/CD. Di langkah
                    ini, Anda akan belajar cara membangun website yang lebih
                    modern, responsif, dan sesuai dengan kebutuhan pengguna
                    modern.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <p className="text-gray-600 text-center mt-8">
            Anda sudah menyelesaikan seluruh kelas di Learning Path ini.
          </p>
          <div className="text-center mt-4">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Lihat Semua Kelas
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8">
            Apa Kata Alumni Dicoding Academy?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar>
                    <AvatarImage src="/geraldo-avatar.png" alt="Geraldo" />
                    <AvatarFallback>GS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Geraldo Sevriajaya
                    </h3>
                    <p className="text-gray-600">Front-End Web Developer</p>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  Kelas ini materi sangat lengkap dan mampu memberikan pemahaman
                  yang baik kepada pemula seperti saya agar dapat menguasai
                  front-end web development secara bertahap. Saya sangat
                  merekomendasikan kelas ini untuk siapa saja yang ingin memulai
                  karier di bidang ini. Terima kasih Dicoding!
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:underline mt-4 block"
                >
                  Baca selengkapnya
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar>
                    <AvatarImage src="/luthfi-avatar.png" alt="Luthfi" />
                    <AvatarFallback>LA</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Luthfi Bahar Agung Pamudji
                    </h3>
                    <p className="text-gray-600">Front-End Web Developer</p>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  Kelas ini memberikan pemahaman yang sangat mendalam tentang
                  Front-End Web Development. Saya sangat merekomendasikan kelas
                  ini karena materi yang disampaikan sangat relevan dengan
                  kebutuhan industri saat ini. Selain itu, saya juga mendapatkan
                  pengalaman praktis yang sangat membantu dalam membangun proyek
                  nyata.
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:underline mt-4 block"
                >
                  Baca selengkapnya
                </a>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <a href="#" className="text-blue-600 hover:underline">
              Lihat testimoni lainnya
            </a>
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
            © 2025 Dicoding | Dicoding adalah merek PT Presentologics, perseroan
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
