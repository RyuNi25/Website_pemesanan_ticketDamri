import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MapPin, Calendar, Users, Search } from "lucide-react";

export function SearchForm({ onSearch }: { onSearch: (searchData: any) => void }) {
  const [searchData, setSearchData] = useState({
    from: "",
    to: "",
    date: "",
    passengers: "1"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchData);
  };

  const routes = [
    "Kampus UNSRI Indralaya",
    "Kampus UNSRI Bukit",
   
  ];

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blue-600">
          <Search className="w-5 h-5" />
          Cari Tiket Bus DAMRI
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="from" className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                Keberangkatan
              </Label>
              <Select value={searchData.from} onValueChange={(value) => setSearchData({...searchData, from: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih lokasi keberangkatan" />
                </SelectTrigger>
                <SelectContent>
                  {routes.map((route) => (
                    <SelectItem key={route} value={route}>{route}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="to" className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-600" />
                Tujuan
              </Label>
              <Select value={searchData.to} onValueChange={(value) => setSearchData({...searchData, to: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih lokasi tujuan" />
                </SelectTrigger>
                <SelectContent>
                  {routes.map((route) => (
                    <SelectItem key={route} value={route}>{route}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date" className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-600" />
                Tanggal Keberangkatan
              </Label>
              <Input
                type="date"
                id="date"
                value={searchData.date}
                onChange={(e) => setSearchData({...searchData, date: e.target.value})}
                min={new Date().toISOString().split('T')[0]}
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="passengers" className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600" />
                Jumlah Penumpang
              </Label>
              <Select value={searchData.passengers} onValueChange={(value) => setSearchData({...searchData, passengers: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} Orang
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            <Search className="w-4 h-4 mr-2" />
            Cari Tiket
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}