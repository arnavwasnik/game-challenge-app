import React, { useState } from "react";
import { FaUserPlus, FaChevronDown, FaChevronUp } from "react-icons/fa";

const ChallengeForm = ({ onInvite }) => {
  const [friendName, setFriendName] = useState("");
  const [gameInput, setGameInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const games = ["Ludo", "Rummy", "Carrom", "Chess", "Snake & Ladder", "Poker", "UNO"];
  const mostPlayed = ["Ludo", "Rummy", "Chess"];

  const friends = [
    { id: 1, name: "Kevin Marshall", isFriend: true },
    { id: 2, name: "Ritika Sharma", isFriend: true },
    { id: 3, name: "Aayush Patel", isFriend: false },
  ];

  const allUsers = [
    "Kevin Marshall",
    "Ritika Sharma",
    "Aayush Patel",
    "Rohan Mehta",
    "Kiran Jain",
    "Anjali Rao",
    "Akshay Kulkarni",
  ];

  const nameSuggestions = friendName.length > 0
    ? allUsers.filter(
        (name) =>
          name.toLowerCase().includes(friendName.toLowerCase()) &&
          name.toLowerCase() !== friendName.toLowerCase()
      )
    : [];

  const gameSuggestions = gameInput.length > 0
    ? games.filter((game) =>
        game.toLowerCase().includes(gameInput.toLowerCase())
      )
    : games;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!friendName || !gameInput) return alert("Please fill both fields");
    onInvite(friendName, gameInput);
    setFriendName("");
    setGameInput("");
  };

  const handleSuggestionClick = (name) => {
    setFriendName(name);
    setIsOpen(true);
  };

  const handleFriendClick = (name) => {
    setFriendName(name);
    setIsOpen(true);
  };

  return (
    <div className="bg-white text-black rounded-xl p-4 shadow-md">
      {/* Toggle */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-bold text-blue-800">Challenge a Friend</h2>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {/* Animated Form */}
      <form
        onSubmit={handleSubmit}
        className={`transition-all duration-300 ease-in-out mt-4 relative overflow-hidden ${
          isOpen ? "max-h-[1000px] opacity-100 scale-100" : "max-h-0 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {/* Friend Name Input */}
        <input
          type="text"
          placeholder="Enter friend's name or ID"
          value={friendName}
          onChange={(e) => setFriendName(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Friend Suggestions */}
        {nameSuggestions.length > 0 && (
          <ul className="absolute z-10 bg-white border w-full mt-1 rounded shadow text-sm text-gray-800">
            {nameSuggestions.map((name, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(name)}
                className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
              >
                {name}
              </li>
            ))}
          </ul>
        )}

        {/* Game Input */}
        <input
          type="text"
          placeholder="Search game"
          value={gameInput}
          onChange={(e) => setGameInput(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mt-3"
        />

        {/* Most Played Games */}
        <div className="mt-2">
          <h4 className="text-sm text-gray-600 mb-1">Most Played</h4>
          <div className="flex gap-2 flex-wrap">
            {mostPlayed.map((game) => (
              <button
                key={game}
                type="button"
                onClick={() => setGameInput(game)}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition"
              >
                {game}
              </button>
            ))}
          </div>
        </div>

        {/* Game Suggestions */}
        {gameInput && gameSuggestions.length > 0 && (
          <ul className="bg-white border w-full mt-1 rounded shadow text-sm text-gray-800 max-h-40 overflow-y-auto">
            {gameSuggestions.map((game, index) => (
              <li
                key={index}
                onClick={() => setGameInput(game)}
                className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
              >
                {game}
              </li>
            ))}
          </ul>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition mt-4"
        >
          Send Invite
        </button>
      </form>

      {/* Suggested Friends */}
      <div className="mt-6">
        <h3 className="font-semibold text-blue-800 mb-2">Suggested Friends</h3>
        <div className="space-y-2">
          {friends.map((friend) => (
            <div
              key={friend.id}
              className="flex items-center justify-between px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleFriendClick(friend.name)}
            >
              <div className="flex items-center gap-3">
                <img
                  src={`https://ui-avatars.com/api/?name=${friend.name}`}
                  alt={friend.name}
                  className="w-8 h-8 rounded-full"
                />
                <p>{friend.name}</p>
              </div>
              {!friend.isFriend && (
                <FaUserPlus className="text-yellow-600 text-lg" title="Send Friend Request" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChallengeForm;
