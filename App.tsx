import { useState } from "react";
import { Header } from "./components/Header";
import { SearchForm } from "./components/SearchForm";
import { BusSchedule } from "./components/BusSchedule";
import { SeatSelection } from "./components/SeatSelection";
import { PassengerForm } from "./components/PassengerForm";
import { BookingSummary } from "./components/BookingSummary";
import { BookingConfirmation } from "./components/BookingConfirmation";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

type BookingStep =
  | "search"
  | "schedule"
  | "seats"
  | "passenger"
  | "payment"
  | "confirmation";

export default function App() {
  const [currentStep, setCurrentStep] =
    useState<BookingStep>("search");
  const [searchData, setSearchData] = useState<any>(null);
  const [selectedBus, setSelectedBus] = useState<any>(null);
  const [selectedSeats, setSelectedSeats] = useState<string[]>(
    [],
  );
  const [passengerData, setPassengerData] = useState<any[]>([]);
  const [bookingId] = useState(
    `DAMRI${Date.now().toString().slice(-8)}`,
  );

  const handleSearch = (data: any) => {
    setSearchData(data);
    setCurrentStep("schedule");
  };

  const handleBusSelect = (bus: any) => {
    setSelectedBus(bus);
    setCurrentStep("seats");
  };

  const handleSeatsSelected = (seats: string[]) => {
    setSelectedSeats(seats);
    setCurrentStep("passenger");
  };

  const handlePassengerDataSubmit = (data: any[]) => {
    setPassengerData(data);
    setCurrentStep("payment");
  };

  const handleBookingComplete = () => {
    setCurrentStep("confirmation");
  };

  const handleNewBooking = () => {
    setCurrentStep("search");
    setSearchData(null);
    setSelectedBus(null);
    setSelectedSeats([]);
    setPassengerData([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section - Only show on search step */}
        {currentStep === "search" && (
          <div className="mb-8 text-center">
            <div className="relative mb-6 rounded-lg overflow-hidden max-w-2xl mx-auto">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1632834380561-d1e05839a33a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjYW1wdXN8ZW58MXx8fHwxNzU5MTMwNjc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="UNSRI Campus"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center">
                <div className="text-white text-center">
                  <h1 className="text-3xl mb-2">
                    BUS DAMRI UNSRI
                  </h1>
                  <p className="text-xl">
                    Transportasi nyaman untuk Mahasiswa
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Progress Steps */}
        {currentStep !== "search" &&
          currentStep !== "confirmation" && (
            <div className="mb-8">
              <div className="flex items-center justify-center space-x-4 text-sm">
                <div
                  className={`flex items-center ${currentStep === "schedule" ? "text-blue-600" : "text-gray-400"}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                      currentStep === "schedule"
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-gray-300"
                    }`}
                  >
                    1
                  </div>
                  <span className="ml-2">Pilih Jadwal</span>
                </div>

                <div className="w-8 h-px bg-gray-300"></div>

                <div
                  className={`flex items-center ${currentStep === "seats" ? "text-blue-600" : "text-gray-400"}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                      currentStep === "seats"
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-gray-300"
                    }`}
                  >
                    2
                  </div>
                  <span className="ml-2">Pilih Kursi</span>
                </div>

                <div className="w-8 h-px bg-gray-300"></div>

                <div
                  className={`flex items-center ${currentStep === "passenger" ? "text-blue-600" : "text-gray-400"}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                      currentStep === "passenger"
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-gray-300"
                    }`}
                  >
                    3
                  </div>
                  <span className="ml-2">Data Penumpang</span>
                </div>

                <div className="w-8 h-px bg-gray-300"></div>

                <div
                  className={`flex items-center ${currentStep === "payment" ? "text-blue-600" : "text-gray-400"}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                      currentStep === "payment"
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-gray-300"
                    }`}
                  >
                    4
                  </div>
                  <span className="ml-2">Pembayaran</span>
                </div>
              </div>
            </div>
          )}

        {/* Step Content */}
        <div className="flex justify-center">
          {currentStep === "search" && (
            <SearchForm onSearch={handleSearch} />
          )}

          {currentStep === "schedule" && searchData && (
            <BusSchedule
              searchData={searchData}
              onSelectBus={handleBusSelect}
            />
          )}

          {currentStep === "seats" && selectedBus && (
            <SeatSelection
              selectedBus={selectedBus}
              passengerCount={parseInt(searchData.passengers)}
              onSeatsSelected={handleSeatsSelected}
            />
          )}

          {currentStep === "passenger" && (
            <PassengerForm
              passengerCount={parseInt(searchData.passengers)}
              selectedSeats={selectedSeats}
              onPassengerDataSubmit={handlePassengerDataSubmit}
            />
          )}

          {currentStep === "payment" && (
            <BookingSummary
              searchData={searchData}
              selectedBus={selectedBus}
              passengers={passengerData}
              onBookingComplete={handleBookingComplete}
            />
          )}

          {currentStep === "confirmation" && (
            <div className="space-y-6">
              <BookingConfirmation
                searchData={searchData}
                selectedBus={selectedBus}
                passengers={passengerData}
                bookingId={bookingId}
              />
              <div className="text-center">
                <button
                  onClick={handleNewBooking}
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Buat Pemesanan Baru
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <div className="flex items-center justify-center space-x-4 mb-2">
              <div className="bg-white text-blue-800 px-3 py-1 rounded font-bold">
                DAMRI
              </div>
              <span>×</span>
              <div className="bg-blue-600 text-white px-3 py-1 rounded font-bold">
                UNSRI
              </div>
            </div>
            <p className="text-gray-300">
              Melayani perjalanan mahasiswa dengan nyaman dan
              aman
            </p>
          </div>
          <div className="text-sm text-gray-400">
            <p>
              &copy; 2025 DAMRI UNSRI. Semua hak dilindungi
              undang-undang.
            </p>
            <p>
              Customer Service: (0711) 580-123
              |cs.unsri@damri.co.id
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}