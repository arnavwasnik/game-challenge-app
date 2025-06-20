import React from 'react';

const OngoingChallenges = ({ challenges, onCancel }) => {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Ongoing Challenges</h2>

      <div className="space-y-3">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="bg-white text-black rounded-lg p-3 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <img src={challenge.avatar} alt={challenge.name} className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold">{challenge.name}</p>
                <p className="text-sm text-gray-500">{challenge.game}</p>
              </div>
            </div>

            {challenge.status === "Pending" ? (
              <button
                onClick={() => onCancel(challenge.id)}
                className="text-sm bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200"
              >
                Cancel
              </button>
            ) : (
              <span
                className={`text-sm font-semibold px-3 py-1 rounded ${
                  challenge.status === "Accepted"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {challenge.status}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OngoingChallenges;
