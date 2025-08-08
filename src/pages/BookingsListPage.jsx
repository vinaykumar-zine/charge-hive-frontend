import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import BookingTable from "../components/BookingTable";

const DUMMY_BOOKINGS = [
  { id: 101, user: "You", station: "Connaught Place EV Hub", slotTime: "2025-08-08 10:00 (2h)", status: "Upcoming" },
  { id: 102, user: "You", station: "Cyber City ChargePoint", slotTime: "2025-08-01 18:30 (1h)", status: "Completed" },
];

function BookingsListPage() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const bookings = state?.justBooked && state.booking
    ? [{ ...state.booking, user: "You" }, ...DUMMY_BOOKINGS]
    : DUMMY_BOOKINGS;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-green-800">Your Bookings</h1>
            <p className="text-gray-600">Manage and view your charging bookings.</p>
          </div>
          <button
            className="px-4 py-2 border rounded-md text-green-700 border-green-200 hover:bg-green-50"
            onClick={() => navigate("/stations")}
          >
            Find stations
          </button>
        </header>

        <BookingTable bookings={bookings} />
      </main>
    </div>
  );
}

export default BookingsListPage;


