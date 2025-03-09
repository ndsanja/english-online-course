import { Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  // Sample data for the module list
  const modules = [
    {
      title: "Belajar Dasar Pemrograman Web",
      image: "/module-1.png",
      duration: "48 Jam",
      rating: "★ 4.87",
      level: "Dasar",
      modulesCount: "119 Modul",
      students: "274.042 Siswa Terdaftar",
    },
    {
      title: "Belajar Dasar Pemrograman JavaScript",
      image: "/module-2.png",
      duration: "44 Jam",
      rating: "★ 4.85",
      level: "Dasar",
      modulesCount: "117 Modul",
      students: "219.743 Siswa Terdaftar",
    },
    {
      title: "Belajar Membuat Front-End untuk Pemula",
      image: "/module-3.png",
      duration: "42 Jam",
      rating: "★ 4.87",
      level: "Pemula",
      modulesCount: "61 Modul",
      students: "154.976 Siswa Terdaftar",
    },
    {
      title: "Belajar Fundamental Front-End Web",
      image: "/module-4.png",
      duration: "80 Jam",
      rating: "★ 4.89",
      level: "Menengah",
      modulesCount: "119 Modul",
      students: "53.420 Siswa Terdaftar",
    },
    {
      title: "Belajar Pengembangan Web Intermediate",
      image: "/module-5.png",
      duration: "80 Jam",
      rating: "★ 4.89",
      level: "Menengah",
      modulesCount: "119 Modul",
      students: "53.420 Siswa Terdaftar",
    },
    {
      title: "Belajar Dasar Visualisasi Data",
      image: "/module-6.png",
      duration: "20 Jam",
      rating: "★ 4.82",
      level: "Dasar",
      modulesCount: "54 Modul",
      students: "72.123 Siswa Terdaftar",
    },
    {
      title: "Belajar Dasar Structured Query Language (SQL)",
      image: "/module-7.png",
      duration: "30 Jam",
      rating: "★ 4.86",
      level: "Dasar",
      modulesCount: "67 Modul",
      students: "98.456 Siswa Terdaftar",
    },
    {
      title: "Belajar Dasar Pemrograman Python",
      image: "/module-8.png",
      duration: "40 Jam",
      rating: "★ 4.88",
      level: "Dasar",
      modulesCount: "89 Modul",
      students: "123.654 Siswa Terdaftar",
    },
    {
      title: "Belajar Machine Learning untuk Pemula",
      image: "/module-9.png",
      duration: "50 Jam",
      rating: "★ 4.90",
      level: "Pemula",
      modulesCount: "95 Modul",
      students: "87.321 Siswa Terdaftar",
    },
    {
      title: "Memulai Pemrograman dengan Python",
      image: "/module-10.png",
      duration: "35 Jam",
      rating: "★ 4.85",
      level: "Dasar",
      modulesCount: "78 Modul",
      students: "145.987 Siswa Terdaftar",
    },
    {
      title: "Belajar Dasar Pemrograman C++",
      image: "/module-11.png",
      duration: "45 Jam",
      rating: "★ 4.87",
      level: "Dasar",
      modulesCount: "82 Modul",
      students: "112.345 Siswa Terdaftar",
    },
    {
      title: "Belajar Dasar Pemrograman Kotlin",
      image: "/module-12.png",
      duration: "40 Jam",
      rating: "★ 4.86",
      level: "Dasar",
      modulesCount: "76 Modul",
      students: "98.765 Siswa Terdaftar",
    },
    {
      title: "Belajar Dasar Pemrograman Android",
      image: "/module-13.png",
      duration: "55 Jam",
      rating: "★ 4.89",
      level: "Pemula",
      modulesCount: "101 Modul",
      students: "67.890 Siswa Terdaftar",
    },
    {
      title: "Belajar Dasar DevOps",
      image: "/module-14.png",
      duration: "60 Jam",
      rating: "★ 4.91",
      level: "Menengah",
      modulesCount: "110 Modul",
      students: "54.321 Siswa Terdaftar",
    },
    {
      title: "Belajar Dasar Cloud Computing",
      image: "/module-15.png",
      duration: "50 Jam",
      rating: "★ 4.88",
      level: "Pemula",
      modulesCount: "90 Modul",
      students: "78.123 Siswa Terdaftar",
    },
    {
      title: "Belajar Dasar Cyber Security",
      image: "/module-16.png",
      duration: "45 Jam",
      rating: "★ 4.87",
      level: "Pemula",
      modulesCount: "85 Modul",
      students: "65.432 Siswa Terdaftar",
    },
    {
      title: "Belajar Dasar UI/UX Design",
      image: "/module-17.png",
      duration: "40 Jam",
      rating: "★ 4.86",
      level: "Dasar",
      modulesCount: "70 Modul",
      students: "89.876 Siswa Terdaftar",
    },
    {
      title: "Belajar Dasar Artificial Intelligence",
      image: "/module-18.png",
      duration: "55 Jam",
      rating: "★ 4.90",
      level: "Pemula",
      modulesCount: "100 Modul",
      students: "43.210 Siswa Terdaftar",
    },
    {
      title: "Belajar Dasar Game Development",
      image: "/module-19.png",
      duration: "50 Jam",
      rating: "★ 4.89",
      level: "Pemula",
      modulesCount: "95 Modul",
      students: "56.789 Siswa Terdaftar",
    },
    {
      title: "Belajar Dasar Blockchain",
      image: "/module-20.png",
      duration: "60 Jam",
      rating: "★ 4.92",
      level: "Menengah",
      modulesCount: "115 Modul",
      students: "32.109 Siswa Terdaftar",
    },
  ];

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

      {/* Module List Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-2xl font-bold text-center mb-2">
            Kelas di Dicoding Academy tersedia dengan level dasar hingga tingkat
            profesional sesuai kebutuhan terkini.
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <Card key={index}>
                <CardHeader>
                  <img
                    src={module.image}
                    alt={module.title}
                    className="w-full h-32 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg font-semibold">
                    {module.title}
                  </CardTitle>
                  <p className="text-gray-600 mt-2">
                    {module.duration} {module.rating} {module.level}
                  </p>
                  <p className="text-gray-600">
                    {module.modulesCount} | {module.students}
                  </p>
                </CardContent>
              </Card>
            ))}
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
