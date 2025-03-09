"use client";

import { Search, ChevronDown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

      {/* Course Details Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <Card className="mb-6">
            <CardHeader className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="mb-4 md:mb-0">
                <img
                  src="/course-image.png"
                  alt="Course Image"
                  className="w-32 h-24 rounded-lg object-cover mb-2"
                />
                <h1 className="text-2xl font-bold">
                  Belajar Dasar Pemrograman Web
                </h1>
                <div className="flex items-center space-x-2 text-yellow-500">
                  <Star className="h-5 w-5" />
                  <span>4.87</span>
                </div>
                <p className="text-gray-600">Level: Dasar | Jam Belajar: 48</p>
                <p className="text-gray-600">
                  119 Modul | 274.042 Siswa Terdaftar
                </p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline">Kursus Belajar</Button>
                <Button variant="outline">Informasi Lain</Button>
                <Button variant="outline">Lihat Sertifikat</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4 mb-6">
                <Button variant="ghost" className="text-blue-600">
                  Deskripsi
                </Button>
                <Button variant="ghost" className="text-gray-600">
                  Code Review
                </Button>
                <Button variant="ghost" className="text-gray-600">
                  Forum Diskusi
                </Button>
                <Button variant="ghost" className="text-gray-600">
                  Mentor
                </Button>
              </div>
              <p className="text-gray-600 mb-4">
                Deskripsi: Kelas ini diperuntukkan bagi kalian yang ingin
                belajar dasar pembuatan website dari nol. Selain itu, kalian
                akan belajar tentang manipulasi website menggunakan HTML, CSS,
                dan JavaScript untuk membangun website yang interaktif dan
                responsif. Kelas ini juga akan membahas cara kerja website dari
                sisi front-end web developer dan bagaimana cara membangun
                website yang sesuai dengan kebutuhan industri terkini.
              </p>
              <h3 className="text-lg font-semibold mb-2">
                Target dan Sasaran Siswa:
              </h3>
              <ul className="list-disc pl-5 text-gray-600 mb-4">
                <li>Pemula yang ingin mempelajari dasar pembuatan website.</li>
                <li>Belajar dasar-dasar HTML, CSS, dan JavaScript.</li>
                <li>Menghasilkan website interaktif dan responsif.</li>
                <li>Menguasai konsep dasar front-end web development.</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2">
                Tujuan Umum dan Khusus Pelatihan:
              </h3>
              <ul className="list-disc pl-5 text-gray-600 mb-4">
                <li>
                  Menyediakan pelatihan pengenalan dasar pembuatan website.
                </li>
                <li>
                  Membantu peserta memahami penggunaan HTML, CSS, dan
                  JavaScript.
                </li>
                <li>
                  Meningkatkan kemampuan mengembangkan website yang responsif.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar>
                    <AvatarImage src="/muhammad-avatar.png" alt="Muhammad" />
                    <AvatarFallback>MD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Muhammad Zulkifli Hasan
                    </h3>
                    <p className="text-gray-600">Front-End Web Developer</p>
                    <div className="flex items-center text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  Kelas ini sangat membantu saya untuk memahami dasar-dasar
                  pembuatan website. Saya sangat merekomendasikan kelas ini
                  untuk pemula yang ingin belajar front-end web development.
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:underline mt-2 block"
                >
                  Baca selengkapnya
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar>
                    <AvatarImage src="/budi-avatar.png" alt="Budi" />
                    <AvatarFallback>BS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">Budi Santoso</h3>
                    <p className="text-gray-600">Front-End Web Developer</p>
                    <div className="flex items-center text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  Saya senang sekali dengan kelas ini karena materinya sangat
                  jelas dan membantu saya untuk meningkatkan skill saya dalam
                  pengembangan website.
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:underline mt-2 block"
                >
                  Baca selengkapnya
                </a>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-gray-600 mb-6">Testimoni Siswa</p>
          <a
            href="#"
            className="text-blue-600 hover:underline text-center block"
          >
            Lihat testimoni lainnya
          </a>
        </div>
      </section>

      {/* Syllabus Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8">
            Punya Pertanyaan seputar Kelas ini?
          </h2>
          <div className="flex justify-center mb-6">
            <Button variant="outline">
              Berikut adalah pertanyaan yang sering ditanyakan.
            </Button>
            <Button variant="outline" className="ml-2">
              Ajukan pertanyaan di forum diskusi
            </Button>
          </div>
          <div className="flex justify-center mb-6">
            <Button variant="outline">
              Bagaimana cara mengetahui sertifikat kelas?
            </Button>
            <Button variant="outline" className="ml-2">
              Lihat semua FAQ
            </Button>
          </div>

          <h2 className="text-2xl font-bold text-center mb-8">Silabus</h2>
          <p className="text-center text-gray-600 mb-6">
            Materi yang Diajarkan dalam Kelas ini
          </p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Pengenalan Belajar</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">
                  Materi ini memberikan pengenalan dasar tentang HTML dan CSS
                  yang digunakan untuk membangun struktur dan tampilan website.
                </p>
                <ul className="list-disc pl-5 text-gray-600 mt-2">
                  <li>Dasar HTML</li>
                  <li>Dasar CSS</li>
                  <li>Dasar JavaScript</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Pengenalan HTML</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">
                  Materi ini akan mengajarkan cara menggunakan HTML untuk
                  membuat struktur halaman website seperti heading, paragraf,
                  dan lainnya.
                </p>
                <ul className="list-disc pl-5 text-gray-600 mt-2">
                  <li>Tag HTML</li>
                  <li>Atribut HTML</li>
                  <li>Struktur HTML</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Pengenalan CSS</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">
                  Materi ini akan mengajarkan cara menggunakan CSS untuk
                  mempercantik tampilan website, seperti mengatur warna, font,
                  dan layout.
                </p>
                <ul className="list-disc pl-5 text-gray-600 mt-2">
                  <li>Selektor CSS</li>
                  <li>Properti CSS</li>
                  <li>Box Model</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Pengenalan JavaScript</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">
                  Materi ini akan mengajarkan dasar-dasar JavaScript untuk
                  menambahkan interaktivitas pada website, seperti manipulasi
                  DOM dan event handling.
                </p>
                <ul className="list-disc pl-5 text-gray-600 mt-2">
                  <li>Variabel dan Tipe Data</li>
                  <li>Operator JavaScript</li>
                  <li>Event Handling</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Pengenalan CSS Lanjutan</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">
                  Materi ini akan mengajarkan penggunaan CSS tingkat lanjut
                  seperti Flexbox dan Grid untuk membuat layout website yang
                  lebih kompleks dan responsif.
                </p>
                <ul className="list-disc pl-5 text-gray-600 mt-2">
                  <li>Flexbox</li>
                  <li>Grid</li>
                  <li>Media Queries</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                Layout Responsif dengan Flexbox
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">
                  Materi ini akan mengajarkan cara menggunakan Flexbox untuk
                  membuat layout yang responsif dan dapat menyesuaikan diri
                  dengan berbagai ukuran layar.
                </p>
                <ul className="list-disc pl-5 text-gray-600 mt-2">
                  <li>Flex Container</li>
                  <li>Flex Item</li>
                  <li>Responsive Design</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>Penutup</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">
                  Materi ini akan merangkum semua yang telah dipelajari dan
                  memberikan proyek akhir untuk menguji pemahaman Anda.
                </p>
                <ul className="list-disc pl-5 text-gray-600 mt-2">
                  <li>Review Materi</li>
                  <li>Proyek Akhir</li>
                  <li>Evaluasi</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>Proyek Akhir</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">
                  Materi ini berisi proyek akhir berupa pembuatan website
                  sederhana menggunakan HTML, CSS, dan JavaScript untuk menguji
                  pemahaman Anda.
                </p>
                <ul className="list-disc pl-5 text-gray-600 mt-2">
                  <li>Pembuatan Website</li>
                  <li>Implementasi HTML, CSS, dan JavaScript</li>
                  <li>Submission</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
