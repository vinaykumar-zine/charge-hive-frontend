import React, { useState, useMemo } from "react";

// Mock station data
const stations = [
  { id: 1, name: "Green Charge - Connaught Place", lat: 28.6315, lng: 77.2167, address: "Connaught Place, Delhi" },
  { id: 2, name: "EcoPlug - Cyber City", lat: 28.4945, lng: 77.0806, address: "Gurgaon Cyber City" },
  { id: 3, name: "VoltUp - Noida Sector 18", lat: 28.5700, lng: 77.3260, address: "Noida Sector 18" },
  { id: 4, name: "ChargeGrid - Saket", lat: 28.5245, lng: 77.1855, address: "Saket, Delhi" },
];

// 👇 Placeholder for the Google Map — easy to replace later    
function MapView({ selected }) {
  return (
    <div className="w-full h-[70vh] bg-green-100 border-2 border-green-300 rounded-xl flex items-center justify-center shadow-inner">
      <div className="text-center">
        <p className="text-green-700 text-xl font-semibold mb-2">EV Station Map Placeholder</p>
        <p className="text-green-500">
          {/* Show selected station */}
          {selected ? `Selected: ${selected.name}` : "Map will appear here once Google Maps is connected."}
        </p>
        <p className="text-green-400 text-sm mt-4">📍 Google Maps Integration Coming Soon</p>
      </div>
    </div>
  );
}

function HomePage() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filteredStations = useMemo(() => {
    if (!search) return stations;
    return stations.filter(
      s =>
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.address.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-green-50 to-lime-100">
      {/* Left: Map Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full">
          <h2 className="text-2xl font-bold text-green-800 mb-4">EV Station Locator</h2>
          <MapView selected={selected} />
        </div>
      </div>

      {/* Right: Search and List */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-green-700 mb-2">Search EV Stations</h2>
          <input
            type="text"
            placeholder="Search by location or station name..."
            className="w-full px-4 py-3 rounded-lg border border-green-200 focus:ring-2 focus:ring-green-400 focus:outline-none text-green-900 mb-4 transition"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <ul className="divide-y divide-green-100 max-h-80 overflow-y-auto">
            {filteredStations.length ? (
              filteredStations.map(station => (
                <li
                  key={station.id}
                  className={`py-4 px-2 cursor-pointer hover:bg-green-50 rounded transition flex flex-col ${
                    selected && selected.id === station.id ? "bg-green-100" : ""
                  }`}
                  onClick={() => setSelected(station)}
                >
                  <span className="font-semibold text-green-800">{station.name}</span>
                  <span className="text-green-600 text-sm">{station.address}</span>
                </li>
              ))
            ) : (
              <li className="py-4 text-gray-400">No stations found.</li>
            )}
          </ul>
        </div>

        {/* Selected Station Info */}
        {selected && (
          <div className="bg-green-50 border-l-4 border-green-400 rounded-xl p-6 shadow mb-4 transition-all duration-300 ease-in-out">
            <h3 className="text-lg font-bold text-green-800 mb-1">{selected.name}</h3>
            <div className="text-green-700">{selected.address}</div>
            <button
              className="mt-4 px-6 py-2 bg-green-600 text-white rounded-full font-semibold shadow hover:bg-green-700 transition"
              onClick={() => setSelected(null)}
            >
              Clear Selection
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
