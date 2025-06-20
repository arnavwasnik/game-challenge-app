import React from "react";
import { FaTimes, FaCheckCircle, FaHourglassHalf } from "react-icons/fa";

const PopupModal = ({ show, onClose }) => {
  if (!show) return null;

  // Dummy challenge data
  const challenges = [
    { id: 1, text: "Win 3 Ludo games", completed: true },
    { id: 2, text: "Win 2 Rummy games", completed: false },
    { id: 3, text: "Play 5 total games", completed: false },
  ];

  const completedCount = challenges.filter(c => c.completed).length;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
      <div className="bg-white text-black w-11/12 max-w-md rounded-xl p-6 relative shadow-lg animate-scaleIn">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-red-500 text-xl hover:scale-125 transition-transform"
        >
          <FaTimes />
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold text-blue-800 mb-1">🔥 Daily Challenge</h2>
        <p className="text-sm text-gray-600 mb-4">Complete the missions to earn <span className="font-semibold text-green-600">750 Coins</span></p>

        {/* Challenge List */}
        <div className="space-y-3 mb-6">
          {challenges.map((c) => (
            <div key={c.id} className="flex items-center gap-3">
              {c.completed ? (
                <FaCheckCircle className="text-green-600" />
              ) : (
                <FaHourglassHalf className="text-yellow-600" />
              )}
              <span className={c.completed ? "line-through text-gray-500" : ""}>{c.text}</span>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-blue-600 transition-all"
            style={{ width: `${(completedCount / challenges.length) * 100}%` }}
          />
        </div>
        <p className="text-xs text-center text-gray-600">
          {completedCount} of {challenges.length} missions completed
        </p>
      </div>
    </div>
  );
};

export default PopupModal;
