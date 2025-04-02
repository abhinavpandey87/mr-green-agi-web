// src/pages/AGIStatusPage.jsx
import React, { useEffect, useState } from 'react';

const AGIStatusPage = () => {
  const [status, setStatus] = useState(null);
  const [thought, setThought] = useState(null);

  useEffect(() => {
    fetch("/api/agi/status")
      .then(res => res.json())
      .then(data => setStatus(data));

    fetch("/api/agi/thought")
      .then(res => res.json())
      .then(data => setThought(data.thought_of_the_day));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-green-700 mb-4">MR GREEN – AGI Status</h2>
      {status ? (
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <p className="text-lg font-semibold text-gray-700 mb-2">Agents Online:</p>
          <ul className="list-disc list-inside text-gray-600">
            {status.agents_online.map((agent, idx) => (
              <li key={idx}>{agent}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-gray-500">Memory Entries: {status.memory_entries}</p>
          <p className="text-sm text-gray-500">Last Updated: {new Date(status.timestamp).toLocaleString()}</p>
        </div>
      ) : (
        <p>Loading status...</p>
      )}
      {thought && (
        <div className="bg-green-50 border-l-4 border-green-400 text-green-700 p-4">
          <p className="font-medium">Thought of the Day:</p>
          <p className="italic">"{thought}"</p>
        </div>
      )}
    </div>
  );
};
export default AGIStatusPage;
