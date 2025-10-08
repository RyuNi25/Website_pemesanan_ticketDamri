import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";

interface PassengerFormProps {
  passengerCount: number;
  selectedSeats: string[];
  onPassengerDataSubmit: (passengerData: any[]) => void;
}

export function PassengerForm({ passengerCount, selectedSeats, onPassengerDataSubmit }: PassengerFormProps) {
  const [passengers, setPassengers] = useState(
    Array.from({ length: passengerCount }, (_, index) => ({
      id: index + 1,
      name: "",
      nim: "",
      faculty: "",
      phone: "",
      email: "",
      seat: selectedSeats[index] || ""
    }))
  );

  const faculties = [
    "Fakultas Kedokteran",
    "Fakultas Teknik", 
    "Fakultas Ekonomi",
    "Fakultas Hukum",
    "Fakultas Ilmu Sosial dan Politik",
    "Fakultas Keguruan dan Ilmu Pendidikan",
    "Fakultas Pertanian",
    "Fakultas Matematika dan Ilmu Pengetahuan Alam",
    "Fakultas Ilmu Komputer",
    "Fakultas Kesehatan Masyarakat",
    
  ];

  const updatePassenger = (index: number, field: string, value: string) => {
    const updatedPassengers = [...passengers];
    updatedPassengers[index] = { ...updatedPassengers[index], [field]: value };
    setPassengers(updatedPassengers);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const isValid = passengers.every(p => 
      p.name.trim() && p.nim.trim() && p.faculty && p.phone.trim() && p.email.trim()
    );
    
    if (isValid) {
      onPassengerDataSubmit(passengers);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Data Penumpang</CardTitle>
        <p className="text-sm text-muted-foreground">
          Isi data lengkap untuk semua penumpang. Pastikan data sesuai dengan kartu mahasiswa UNSRI.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {passengers.map((passenger, index) => (
            <div key={passenger.id}>
              <div className="flex items-center gap-4 mb-4">
                <h3 className="font-medium">Penumpang {index + 1}</h3>
                <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                  Kursi {passenger.seat}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor={`name-${index}`}>Nama Lengkap *</Label>
                  <Input
                    id={`name-${index}`}
                    value={passenger.name}
                    onChange={(e) => updatePassenger(index, "name", e.target.value)}
                    placeholder="Sesuai kartu mahasiswa"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor={`nim-${index}`}>NIM *</Label>
                  <Input
                    id={`nim-${index}`}
                    value={passenger.nim}
                    onChange={(e) => updatePassenger(index, "nim", e.target.value)}
                    placeholder="Nomor Induk Mahasiswa"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor={`faculty-${index}`}>Fakultas *</Label>
                  <Select 
                    value={passenger.faculty} 
                    onValueChange={(value) => updatePassenger(index, "faculty", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih fakultas" />
                    </SelectTrigger>
                    <SelectContent>
                      {faculties.map((faculty) => (
                        <SelectItem key={faculty} value={faculty}>
                          {faculty}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor={`phone-${index}`}>Nomor Telepon *</Label>
                  <Input
                    id={`phone-${index}`}
                    value={passenger.phone}
                    onChange={(e) => updatePassenger(index, "phone", e.target.value)}
                    placeholder="08xxxxxxxxxx"
                    required
                  />
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor={`email-${index}`}>Email *</Label>
                  <Input
                    id={`email-${index}`}
                    type="email"
                    value={passenger.email}
                    onChange={(e) => updatePassenger(index, "email", e.target.value)}
                    placeholder="email@student.unsri.ac.id"
                    required
                  />
                </div>
              </div>
              
              {index < passengers.length - 1 && <Separator className="my-6" />}
            </div>
          ))}
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <ul className="text-sm text-amber-700 space-y-1">
              <li>• Data yang diisi harus sesuai dengan identitas resmi</li>
            </ul>
          </div>
          
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Lanjutkan ke Pembayaran
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}