import React from "react";

const IncomingInvites = ({ invites, onAccept, onReject }) => {
  return (
    <div className="bg-white text-black rounded-xl shadow-md p-4 my-4">
      <h2 className="text-lg font-semibold mb-4 text-blue-800">Incoming Invites</h2>

      {invites.length === 0 ? (
        <p className="text-sm text-gray-500">No new invites.</p>
      ) : (
        invites.map((invite) => (
          <div
            key={invite.id}
            className="flex items-center justify-between mb-3 border-b pb-2"
          >
            {/* Avatar + Info */}
            <div className="flex items-center gap-3">
              <img
                src={invite.avatar}
                alt={invite.name}
                className="w-10 h-10 rounded-full object-cover border"
              />
              <div>
                <p className="font-medium">{invite.name}</p>
                <p className="text-sm text-gray-600">{invite.game}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => onAccept(invite.id)}
                className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-3 py-1 rounded transition-all"
              >
                Accept
              </button>
              <button
                onClick={() => onReject(invite.id)}
                className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded transition-all"
              >
                Reject
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default IncomingInvites;
