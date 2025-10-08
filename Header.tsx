import { Button } from "./ui/button";
import { User, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-white text-blue-600 px-3 py-2 rounded-lg font-bold">
              DAMRI
            </div>
            <div>
              <h1 className="text-xl">BUS DAMRI UNSRI</h1>
              <p className="text-blue-100 text-sm">Pemesanan Tiket Mahasiswa</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-blue-200 transition-colors">Beranda</a>
            <a href="#" className="hover:text-blue-200 transition-colors">Jadwal</a>
            <a href="#" className="hover:text-blue-200 transition-colors">Riwayat</a>
            <a href="#" className="hover:text-blue-200 transition-colors">Bantuan</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-blue-600">
              <User className="w-4 h-4 mr-2" />
              Masuk
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden text-white">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}