import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Clock, MapPin, Users, Zap } from "lucide-react";

interface BusScheduleProps {
  searchData: any;
  onSelectBus: (bus: any) => void;
}

export function BusSchedule({ searchData, onSelectBus }: BusScheduleProps) {
  const busSchedules = [
    {
      id: 1,
      departure: "06:00",
      arrival: "07:00",
      duration: "1j",
      price: 15000,
      availableSeats: 25,
      busType: "AC",
      busNumber: "D001"
    },
    {
      id: 2,
      departure: "06:15",
      arrival: "07:15",
      duration: "1j",
      price: 15000,
      availableSeats: 18,
      busType: "AC",
      busNumber: "D002"
    },
    {
      id: 3,
      departure: "06:30",
      arrival: "07:30",
      duration: "1j",
      price: 12000,
      availableSeats: 32,
      busType: "AC",
      busNumber: "D003"
    },
    {
      id: 4,
      departure: "06:45",
      arrival: "07:45",
      duration: "1j",
      price: 15000,
      availableSeats: 8,
      busType: "AC",
      busNumber: "D004"
    },
    {
      id: 5,
      departure: "07:00",
      arrival: "08:00",
      duration: "1j",
      price: 15000,
      availableSeats: 22,
      busType: "AC",
      busNumber: "D005"
    },
    {
      id: 6,
      departure: "07:15",
      arrival: "08:15",
      duration: "1j",
      price: 15000,
      availableSeats: 15,
      busType: "AC",
      busNumber: "D006"
    }
  ];

  if (!searchData.from || !searchData.to || !searchData.date) {
    return null;
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl">Jadwal Bus Tersedia</h2>
        <div className="text-sm text-muted-foreground">
          {searchData.from} → {searchData.to} • {new Date(searchData.date).toLocaleDateString('id-ID', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      </div>

      <div className="space-y-3">
        {busSchedules.map((bus) => (
          <Card key={bus.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-lg">{bus.departure}</div>
                    <div className="text-sm text-muted-foreground">{searchData.from}</div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="text-sm text-muted-foreground">{bus.duration}</div>
                    <div className="w-16 h-px bg-border my-1"></div>
                    <div className="text-xs text-muted-foreground">{bus.busNumber}</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-lg">{bus.arrival}</div>
                    <div className="text-sm text-muted-foreground">{searchData.to}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      {bus.availableSeats} kursi
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      {bus.busType === "AC" && (
    <div className="flex items-center gap-1 text-sm">
    <Zap className="w-4 h-4 text-blue-600" />
    <span>AC</span>
  </div>
)}

                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-lg">Rp {bus.price.toLocaleString('id-ID')}</div>
                    <div className="text-sm text-muted-foreground">per orang</div>
                  </div>
                  
                  <Button 
                    onClick={() => onSelectBus(bus)}
                    disabled={bus.availableSeats === 0}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    {bus.availableSeats === 0 ? 'Penuh' : 'Pilih'}
                  </Button>
                </div>
              </div>
              
              {bus.availableSeats < 10 && bus.availableSeats > 0 && (
                <div className="mt-2">
                  <Badge variant="destructive" className="text-xs">
                    Hanya tersisa {bus.availableSeats} kursi!
                  </Badge>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}