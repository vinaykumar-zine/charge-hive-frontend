import React from "react";
import { useNavigate } from "react-router-dom";

function StationCard({ station }) {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-lg shadow p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-green-900">{station.name}</h3>
          <p className="text-sm text-gray-600">{station.location}</p>
        </div>
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            station.isAvailable ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {station.isAvailable ? "Available" : "Unavailable"}
        </span>
      </div>
      <div className="text-sm text-gray-700">
        <p>Ports: {station.numberOfPorts} • Rate: {station.chargingRate} kW</p>
        <p>Price: ₹{station.pricePerHour}/hr</p>
      </div>
      <div className="flex gap-2 mt-2">
        <button
          className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition disabled:opacity-50"
          disabled={!station.isAvailable}
          onClick={() => navigate(`/book/${station.id}`, { state: { station } })}
        >
          Book
        </button>
        <button
          className="px-4 py-2 rounded-md border text-green-700 border-green-200 hover:bg-green-50"
          onClick={() => navigate(`/stations/${station.id}`, { state: { station } })}
        >
          Details
        </button>
      </div>
    </div>
  );
}

export default StationCard;


