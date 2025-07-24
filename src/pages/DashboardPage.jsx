// src/DashboardPage.jsx
import React from "react";
// import Navbar from "./components/Navbar";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import KPICards from "../components/KPICards";
import StationTable from "../components/StationTable";
import BookingTable from "../components/BookingTable";
import EarningsChart from "../components/EarningsChart";
import StationMap from "../components/StationMap";
import Notifications from "../components/Notifications";

// Example data (replace with actual fetch/calls)
const stats = { stations: 5, bookings: 12, earnings: 300, activeUsers: 3 };
const stations = [
    {
        id: 1,
        name: "Station A",
        location: "Connaught Place, Delhi",
        latitude: 28.6315,
        longitude: 77.2167,
        status: "Online",
        chargers: 4,
    },
    {
        id: 2,
        name: "Station B",
        location: "Gurgaon Cyber City",
        latitude: 28.4945,
        longitude: 77.0806,
        status: "Offline",
        chargers: 2,
    },
    // ...more stations
]

const bookings = [
    { id: "B101", user: "User1", station: "Station A", slotTime: "10:00-11:00", status: "Upcoming" },
    { id: "B102", user: "User2", station: "Station B", slotTime: "11:00-12:00", status: "Completed" },
];
const earningsData = [/* ... */];
const alerts = ["Station B is offline", "Scheduled maintenance at Station A"];

function DashboardPage() {
    return (
        <div className="flex flex-col h-screen">
            {/* Fixed Navbar */}
            <div className="fixed w-full z-10">
                <Navbar />
            </div>

            {/* Main content with sidebar */}
            <div className="flex flex-1 pt-16 bg-gray-50">
                {/* Sidebar */}
                <div className="fixed left-0 top-16 h-[calc(100vh-4rem)]">
                    <Sidebar />
                </div>

                {/* Main section */}
                <main className="ml-56 flex-1 p-8 space-y-8">
                    {/* KPI Cards */}
                    <KPICards stats={stats} />

                    {/* FIRST ROW: Station & Booking tables */}
                    <section className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                        {/* Station Table, limited height, scroll on overflow */}
                        <div className="min-h-[320px] max-h-[400px] overflow-auto">
                            <StationTable stations={stations} />
                        </div>

                        {/* Booking Table, limited height, scroll on overflow */}
                        <div className="min-h-[320px] max-h-[400px] overflow-auto">
                            <BookingTable bookings={bookings} />
                        </div>
                    </section>

                    {/* SECOND ROW: Earnings chart & Station Map */}
                    <section className="grid grid-cols-1 lg:grid-cols-1 gap-8 w-full rounded overflow-hidden z-0">
                        <StationMap stations={stations} />
                        <EarningsChart data={earningsData} />
                    </section>

                    {/* Notifications */}
                    <Notifications alerts={alerts} />
                </main>
            </div>
        </div>
    );
}


export default DashboardPage;
