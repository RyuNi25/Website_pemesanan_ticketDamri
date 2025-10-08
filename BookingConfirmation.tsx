import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { CheckCircle, Download, Share, Calendar, Clock, MapPin, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface BookingConfirmationProps {
  searchData: any;
  selectedBus: any;
  passengers: any[];
  bookingId: string;
}

export function BookingConfirmation({ searchData, selectedBus, passengers, bookingId }: BookingConfirmationProps) {
  const handleDownloadTicket = () => {
    // Mock download functionality
    alert("Tiket elektronik akan diunduh...");
  };

  const handleShareTicket = () => {
    // Mock share functionality
    if (navigator.share) {
      navigator.share({
        title: 'Tiket Bus DAMRI UNSRI',
        text: `Booking ID: ${bookingId}`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(`Booking ID: ${bookingId}`);
      alert("Booking ID disalin ke clipboard!");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Success Message */}
      <Card className="border-green-200 bg-green-50">
        <CardContent className="p-6 text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-2xl text-green-800 mb-2">Pemesanan Berhasil!</h1>
          <p className="text-green-700 mb-4">
            Tiket Anda telah berhasil dipesan. Simpan tiket elektronik ini dan tunjukkan saat naik bus.
          </p>
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <div className="text-sm text-muted-foreground mb-1">Booking ID</div>
            <div className="text-xl font-mono text-green-800">{bookingId}</div>
          </div>
        </CardContent>
      </Card>

      {/* E-Ticket */}
      <Card>
        <CardHeader className="bg-blue-600 text-white">
          <CardTitle className="flex items-center gap-2">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1757181471096-c375cbb229bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXMlMjB0cmFuc3BvcnRhdGlvbnxlbnwxfHx8fDE3NTkxODE4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="DAMRI Bus"
              className="w-8 h-8 rounded object-cover"
            />
            Tiket Elektronik DAMRI
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          {/* Trip Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Detail Perjalanan
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dari:</span>
                  <span className="font-medium">{searchData.from}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ke:</span>
                  <span className="font-medium">{searchData.to}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tanggal:</span>
                  <span className="font-medium">
                    {new Date(searchData.date).toLocaleDateString('id-ID', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Waktu:</span>
                  <span className="font-medium">{selectedBus.departure} - {selectedBus.arrival}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Bus:</span>
                  <span className="font-medium">{selectedBus.busNumber} ({selectedBus.busType})</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Penumpang
              </h3>
              <div className="space-y-3">
                {passengers.map((passenger, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium">{passenger.name}</div>
                        <div className="text-sm text-muted-foreground">{passenger.nim}</div>
                      </div>
                      <Badge variant="outline">Kursi {passenger.seat}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Separator />

          {/* Important Information */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-medium text-amber-800 mb-2">Informasi Penting:</h4>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>• Harap tiba di terminal 15 menit sebelum keberangkatan</li>
              <li>• Tiket tidak dapat direfund setelah keberangkatan</li>
              <li>• Hubungi customer service untuk perubahan atau pembatalan</li>
            </ul>
          </div>

          {/* QR Code Area */}
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg mx-auto flex items-center justify-center mb-2">
              <div className="text-xs text-gray-500 text-center">
                QR Code<br />Tiket
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              Scan QR code ini saat naik bus
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={handleDownloadTicket} className="flex-1 bg-blue-600 hover:bg-blue-700">
          <Download className="w-4 h-4 mr-2" />
          Unduh Tiket
        </Button>
        <Button onClick={handleShareTicket} variant="outline" className="flex-1">
          <Share className="w-4 h-4 mr-2" />
          Bagikan Tiket
        </Button>
      </div>

      {/* Contact Information */}
      <Card>
        <CardContent className="p-4 text-center">
          <h4 className="font-medium mb-2">Butuh Bantuan?</h4>
          <p className="text-sm text-muted-foreground mb-2">
            Customer Service DAMRI UNSRI
          </p>
          <div className="text-sm space-y-1">
            <div>📞 (0711) 580-123</div>
            <div>📧 cs.unsri@damri.co.id</div>
            <div>🕒 Senin - Minggu: 06:00 - 22:00 WIB</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}