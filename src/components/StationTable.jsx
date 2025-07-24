import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function StationTable({ stations }) {
    return (
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6 overflow-x-auto">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-green-800">Published Stations</h2>
                <button className="bg-green-100 text-green-800 font-semibold px-4 py-2 rounded-full shadow-sm transition hover:bg-green-200">
                    + Add New Station
                </button>
            </div>
            <div className="overflow-y-auto max-h-72 rounded">
                <table className="min-w-full text-left border-separate border-spacing-y-2">
                    <thead>
                        <tr>
                            <th className="px-3 py-2 sticky top-0 bg-white z-1">Name</th>
                            <th className="px-3 py-2 sticky top-0 bg-white z-1">Location</th>
                            <th className="px-3 py-2 sticky top-0 bg-white z-1">Status</th>
                            <th className="px-3 py-2 sticky top-0 bg-white z-1">Chargers</th>
                            <th className="px-3 py-2 sticky top-0 bg-white z-1">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stations.length ? (
                            stations.map(station => (
                                <tr key={station.id} className="hover:bg-green-50 transition">
                                    <td className="px-3 py-2 text-green-900">{station.name}</td>
                                    <td className="px-3 py-2 text-green-900">{station.location}</td>
                                    <td className="px-3 py-2">
                                        <span className={
                                            "inline-block px-3 py-1 rounded-lg font-medium text-xs " +
                                            (station.status === "Online"
                                                ? "bg-green-100 text-green-800"
                                                : "bg-red-50 text-red-600")
                                        }>
                                            {station.status}
                                        </span>
                                    </td>
                                    <td className="px-3 py-2 text-green-900">{station.chargers}</td>
                                    <td className="px-3 py-2">
                                        <div className="flex gap-2">
                                            <button
                                                className="flex items-center gap-1 bg-yellow-50 text-yellow-800 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm hover:bg-yellow-100 transition"
                                                title="Edit"
                                            >
                                                <FaEdit className="text-sm" />
                                                Edit
                                            </button>
                                            <button
                                                className="flex items-center gap-1 bg-red-50 text-red-600 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm hover:bg-red-100 transition"
                                                title="Delete"
                                            >
                                                <FaTrash className="text-sm" />
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5} className="text-center text-gray-400 py-8">
                                    No stations found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StationTable;
