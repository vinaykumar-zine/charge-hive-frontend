import React, { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import StationMap from "../components/StationMap";
import StationFilters from "../components/StationFilters";
import StationCard from "../components/StationCard";

const DUMMY_STATIONS = [
  {
    id: 1,
    name: "Connaught Place EV Hub",
    location: "Connaught Place, New Delhi",
    latitude: 28.6315,
    longitude: 77.2167,
    isAvailable: true,
    status: "APPROVED",
    numberOfPorts: 6,
    chargingRate: 22,
    pricePerHour: 120,
  },
  {
    id: 2,
    name: "Cyber City ChargePoint",
    location: "DLF Cyber City, Gurugram",
    latitude: 28.4956,
    longitude: 77.0884,
    isAvailable: true,
    status: "APPROVED",
    numberOfPorts: 8,
    chargingRate: 50,
    pricePerHour: 180,
  },
  {
    id: 3,
    name: "Noida Sector 18 Station",
    location: "Sector 18, Noida",
    latitude: 28.5707,
    longitude: 77.3260,
    isAvailable: false,
    status: "MAINTENANCE",
    numberOfPorts: 4,
    chargingRate: 11,
    pricePerHour: 90,
  },
  {
    id: 4,
    name: "Saket Select City EV",
    location: "Saket, New Delhi",
    latitude: 28.5286,
    longitude: 77.2193,
    isAvailable: true,
    status: "APPROVED",
    numberOfPorts: 5,
    chargingRate: 30,
    pricePerHour: 150,
  },
];

function SearchStationsPage() {
  // const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [maxPrice, setMaxPrice] = useState("");
  const [currentLocation, setCurrentLocation] = useState(null); // [lat, lng]
  const [usingMyLocation, setUsingMyLocation] = useState(false);
  const [geoError, setGeoError] = useState("");

  const filteredStations = useMemo(() => {
    return DUMMY_STATIONS.filter((s) => {
      const matchesQuery = `${s.name} ${s.location}`
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesAvailability = !onlyAvailable || s.isAvailable;
      const matchesPrice = !maxPrice || (s.pricePerHour ?? 0) <= Number(maxPrice);
      return matchesQuery && matchesAvailability && matchesPrice;
    });
  }, [query, onlyAvailable, maxPrice]);

  useEffect(() => {
    if (!usingMyLocation) return;
    if (!navigator.geolocation) {
      setGeoError("Geolocation is not supported in this browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setGeoError("");
        setCurrentLocation([pos.coords.latitude, pos.coords.longitude]);
      },
      () => setGeoError("Unable to retrieve your location."),
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 }
    );
  }, [usingMyLocation]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <header className="space-y-2">
          <h1 className="text-2xl font-bold text-green-800">Find Charging Stations</h1>
          <p className="text-gray-600">Search and book a nearby EV charging station.</p>
          <StationFilters
            query={query}
            onQuery={setQuery}
            maxPrice={maxPrice}
            onMaxPrice={setMaxPrice}
            onlyAvailable={onlyAvailable}
            onOnlyAvailable={setOnlyAvailable}
            usingMyLocation={usingMyLocation}
            geoError={geoError}
            onUseMyLocation={() => setUsingMyLocation(v => !v)}
          />
        </header>

        <section>
          <StationMap stations={filteredStations} currentLocation={currentLocation} center={currentLocation} />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStations.map((s) => (
            <StationCard key={s.id} station={s} />
          ))}
          {!filteredStations.length && (
            <div className="col-span-full text-center text-gray-500">No stations match your search.</div>
          )}
        </section>
      </main>
    </div>
  );
}

export default SearchStationsPage;


