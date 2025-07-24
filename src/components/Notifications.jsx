// src/components/Notifications.jsx
import React from "react";

function Notifications({ alerts }) {
    return (
        <div className="bg-white rounded-lg shadow p-4 mt-6">
            <h2 className="text-lg font-semibold mb-2">Notifications</h2>
            <ul className="list-disc pl-5 text-blue-700">
                {alerts.map((alert, idx) => (
                    <li key={idx} className="my-1">{alert}</li>
                ))}
            </ul>
        </div>
    );
}

export default Notifications;
