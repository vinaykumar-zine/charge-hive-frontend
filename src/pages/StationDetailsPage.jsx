import React, { useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import StationMap from "../components/StationMap";

const FALLBACK = [
    { id: 1, name: "Connaught Place EV Hub", location: "Connaught Place, New Delhi", latitude: 28.6315, longitude: 77.2167, numberOfPorts: 6, chargingRate: 22, pricePerHour: 120 },
    { id: 2, name: "Cyber City ChargePoint", location: "DLF Cyber City, Gurugram", latitude: 28.4956, longitude: 77.0884, numberOfPorts: 8, chargingRate: 50, pricePerHour: 180 },
    { id: 3, name: "Noida Sector 18 Station", location: "Sector 18, Noida", latitude: 28.5707, longitude: 77.3260, numberOfPorts: 4, chargingRate: 11, pricePerHour: 90 },
    { id: 4, name: "Saket Select City EV", location: "Saket, New Delhi", latitude: 28.5286, longitude: 77.2193, numberOfPorts: 5, chargingRate: 30, pricePerHour: 150 },
];

function StationDetailsPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { state } = useLocation();

    const station = useMemo(() => {
        if (state?.station) return state.station;
        return FALLBACK.find((s) => s.id === Number(id)) || null;
    }, [state, id]);

    if (!station) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <button className="text-green-700 hover:underline" onClick={() => navigate(-1)}>← Back</button>
                    <div className="mt-6 bg-white rounded-lg shadow p-6">Station not found.</div>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
                <button className="text-green-700 hover:underline" onClick={() => navigate(-1)}>← Back</button>
                <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-green-800">{station.name}</h1>
                        <p className="text-gray-600">{station.location}</p>
                    </div>
                    <div className="text-right">
                        <div className="text-sm text-gray-600">Rate</div>
                        <div className="text-2xl font-bold text-green-700">₹{station.pricePerHour}/hr</div>
                    </div>
                </header>

                <section>
                    <StationMap stations={[station]} />
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-lg font-semibold mb-3">Details</h2>
                        <ul className="text-sm text-gray-700 space-y-2">
                            <li>Ports: {station.numberOfPorts}</li>
                            <li>Charging rate: {station.chargingRate} kW</li>
                            <li>Address: {station.location}</li>
                        </ul>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-lg font-semibold mb-3">Actions</h2>
                        <button
                            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
                            onClick={() => navigate(`/book/${station.id}`, { state: { station } })}
                        >
                            Book this station
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default StationDetailsPage;


