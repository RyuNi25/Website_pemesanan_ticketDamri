import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Calendar, Clock, MapPin, Users, CreditCard, Smartphone, Building } from "lucide-react";

interface BookingSummaryProps {
  searchData: any;
  selectedBus: any;
  passengers: any[];
  onBookingComplete: () => void;
}

export function BookingSummary({ searchData, selectedBus, passengers, onBookingComplete }: BookingSummaryProps) {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = selectedBus.price * passengers.length;
  const total = subtotal;

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onBookingComplete();
    }, 3000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
      {/* Booking Details */}
      <div className="md:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Detail Perjalanan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="font-medium">{searchData.from}</div>
                  <div className="text-sm text-muted-foreground">Keberangkatan</div>
                </div>
              </div>
              <div className="text-center">
                <Clock className="w-5 h-5 mx-auto text-blue-600 mb-1" />
                <div className="font-medium">{selectedBus.departure}</div>
              </div>
            </div>
            
            <div className="border-l-2 border-dashed border-gray-300 ml-2 h-8"></div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-green-600" />
                <div>
                  <div className="font-medium">{searchData.to}</div>
                  <div className="text-sm text-muted-foreground">Tujuan</div>
                </div>
              </div>
              <div className="text-center">
                <Clock className="w-5 h-5 mx-auto text-green-600 mb-1" />
                <div className="font-medium">{selectedBus.arrival}</div>
              </div>
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(searchData.date).toLocaleDateString('id-ID', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Bus {selectedBus.busNumber}</span>
                <Badge variant="secondary">{selectedBus.busType}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Passenger Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Data Penumpang
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {passengers.map((passenger, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">{passenger.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {passenger.nim} • {passenger.faculty}
                    </div>
                  </div>
                  <Badge variant="outline">Kursi {passenger.seat}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Payment Method */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              Metode Pembayaran
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              <div className="flex items-center space-x-2 p-3 border rounded-lg">
                <RadioGroupItem value="ewallet" id="ewallet" />
                <Label htmlFor="ewallet" className="flex items-center gap-3 flex-1 cursor-pointer">
                  <Smartphone className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-medium">E-Wallet</div>
                    <div className="text-sm text-muted-foreground">OVO, DANA, GoPay, ShopeePay</div>
                  </div>
                </Label>
              </div>
              
              <div className="flex items-center space-x-2 p-3 border rounded-lg">
                <RadioGroupItem value="bank" id="bank" />
                <Label htmlFor="bank" className="flex items-center gap-3 flex-1 cursor-pointer">
                  <Building className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-medium">Transfer Bank</div>
                    <div className="text-sm text-muted-foreground">BCA, BRI, BNI, Mandiri</div>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>
      </div>

      {/* Payment Summary */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Ringkasan Pembayaran</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span>Tiket ({passengers.length} penumpang)</span>
              <span>Rp {subtotal.toLocaleString('id-ID')}</span>
            </div>
            
            <Separator />
            
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>Rp {total.toLocaleString('id-ID')}</span>
            </div>
            
            <Button 
              onClick={handlePayment}
              disabled={!paymentMethod || isProcessing}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              {isProcessing ? "Memproses..." : `Bayar Rp ${total.toLocaleString('id-ID')}`}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="text-center text-sm text-muted-foreground">
              <p className="mb-2">🔒 Pembayaran aman dan terjamin</p>
              <p>Dengan melanjutkan, Anda menyetujui syarat dan ketentuan yang berlaku.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}