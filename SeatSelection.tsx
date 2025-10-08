import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

interface SeatSelectionProps {
  selectedBus: any;
  passengerCount: number;
  onSeatsSelected: (seats: string[]) => void;
}

export function SeatSelection({ selectedBus, passengerCount, onSeatsSelected }: SeatSelectionProps) {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  // Generate seat layout (assuming 4 seats per row, 10 rows)
  const generateSeats = () => {
    const seats = [];
    const occupiedSeats = ["1A", "2B", "3C", "5A", "7D", "8B", "9A", "10C"]; // Mock occupied seats
    
    for (let row = 1; row <= 30; row++) {
      const rowSeats = [];
      for (const letter of ["A", "B", "C", "D"]) {
        const seatNumber = `${row}${letter}`;
        rowSeats.push({
          number: seatNumber,
          isOccupied: occupiedSeats.includes(seatNumber),
          isSelected: selectedSeats.includes(seatNumber)
        });
      }
      seats.push(rowSeats);
    }
    return seats;
  };

  const handleSeatClick = (seatNumber: string) => {
    if (selectedSeats.includes(seatNumber)) {
      // Deselect seat
      const newSelection = selectedSeats.filter(seat => seat !== seatNumber);
      setSelectedSeats(newSelection);
    } else if (selectedSeats.length < passengerCount) {
      // Select seat
      const newSelection = [...selectedSeats, seatNumber];
      setSelectedSeats(newSelection);
    }
  };

  const handleConfirmSeats = () => {
    if (selectedSeats.length === passengerCount) {
      onSeatsSelected(selectedSeats);
    }
  };

  const seats = generateSeats();

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Pilih Kursi</CardTitle>
        <div className="text-sm text-muted-foreground">
          Bus {selectedBus.busNumber} • {selectedBus.departure} - {selectedBus.arrival}
          <br />
          Pilih {passengerCount} kursi untuk perjalanan Anda
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Legend */}
        <div className="flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-500 rounded border-2"></div>
            <span>Tersedia</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-500 rounded border-2"></div>
            <span>Dipilih</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-400 rounded border-2"></div>
            <span>Terisi</span>
          </div>
        </div>

        {/* Bus Layout */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="inline-block bg-gray-300 px-4 py-2 rounded">DEPAN BUS</div>
          </div>
          
          <div className="space-y-3">
            {seats.map((row, rowIndex) => (
              <div key={rowIndex} className="flex items-center justify-center gap-2">
                <div className="w-8 text-center text-sm">{rowIndex + 1}</div>
                
                {/* Left side seats (A, B) */}
                <div className="flex gap-1">
                  {row.slice(0, 2).map((seat) => (
                    <button
                      key={seat.number}
                      onClick={() => !seat.isOccupied && handleSeatClick(seat.number)}
                      disabled={seat.isOccupied}
                      className={`w-8 h-8 rounded border-2 text-xs transition-colors ${
                        seat.isOccupied
                          ? "bg-gray-400 border-gray-400 cursor-not-allowed"
                          : seat.isSelected
                          ? "bg-blue-500 border-blue-500 text-white"
                          : "bg-green-500 border-green-500 text-white hover:bg-green-600"
                      }`}
                    >
                      {seat.number}
                    </button>
                  ))}
                </div>
                
                {/* Aisle */}
                <div className="w-8"></div>
                
                {/* Right side seats (C, D) */}
                <div className="flex gap-1">
                  {row.slice(2, 4).map((seat) => (
                    <button
                      key={seat.number}
                      onClick={() => !seat.isOccupied && handleSeatClick(seat.number)}
                      disabled={seat.isOccupied}
                      className={`w-8 h-8 rounded border-2 text-xs transition-colors ${
                        seat.isOccupied
                          ? "bg-gray-400 border-gray-400 cursor-not-allowed"
                          : seat.isSelected
                          ? "bg-blue-500 border-blue-500 text-white"
                          : "bg-green-500 border-green-500 text-white hover:bg-green-600"
                      }`}
                    >
                      {seat.number}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected seats info */}
        {selectedSeats.length > 0 && (
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Kursi yang dipilih:</h3>
            <div className="flex flex-wrap gap-2">
              {selectedSeats.map((seat) => (
                <Badge key={seat} variant="default" className="bg-blue-500">
                  {seat}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Confirm button */}
        <div className="flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            {selectedSeats.length} dari {passengerCount} kursi dipilih
          </div>
          <Button
            onClick={handleConfirmSeats}
            disabled={selectedSeats.length !== passengerCount}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Konfirmasi Kursi
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}