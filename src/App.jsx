import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import ChallengeForm from './components/ChallengeForm';
import OngoingChallenges from './components/OngoingChallenges';
import IncomingInvites from './components/IncomingInvites';

function App() {
  const [toastMsg, setToastMsg] = useState("");

  const [ongoing, setOngoing] = useState([
    { id: 1, name: "Ravi", game: "Ludo", status: "Pending", avatar: "https://i.pravatar.cc/40?img=1" },
    { id: 2, name: "Simran", game: "Rummy", status: "Accepted", avatar: "https://i.pravatar.cc/40?img=5" },
  ]);

  const [invites, setInvites] = useState([
    { id: 101, name: "Priya", game: "Carrom", avatar: "https://i.pravatar.cc/40?img=11" },
    { id: 102, name: "Aman", game: "Chess", avatar: "https://i.pravatar.cc/40?img=12" },
  ]);

  const handleInvite = (friendName, game) => {
    setToastMsg(`✅ Challenge sent to ${friendName} for ${game}`);
    setTimeout(() => setToastMsg(""), 2000);
  };

  const handleCancel = (id) => {
    setOngoing((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: "Rejected" } : c))
    );
  };

  const handleAccept = (id) => {
    setInvites((prev) => prev.filter((i) => i.id !== id));
    alert("Invite accepted!");
  };

  const handleReject = (id) => {
    setInvites((prev) => prev.filter((i) => i.id !== id));
    alert("Invite rejected!");
  };

  return (
    <div className="bg-blue-bubbles font-sans text-white min-h-screen">
      {/* Header with shadow */}
      <div className="shadow-lg shadow-black/30 z-20 relative">
        <Header />
      </div>

      {/* Toast message */}
      {toastMsg && (
      <div className="fixed top-6 left-4 right-4 bg-white/20 text-yellow-300 border border-white px-4 py-2 rounded-md shadow-md backdrop-blur-sm z-50 animate-fade-in-out text-sm text-center">
  {toastMsg}
</div>
      )}

      <div className="p-4 space-y-6 max-w-2xl mx-auto relative z-10">
        <ChallengeForm onInvite={handleInvite} />
        <OngoingChallenges challenges={ongoing} onCancel={handleCancel} />
        <IncomingInvites invites={invites} onAccept={handleAccept} onReject={handleReject} />
      </div>
    </div>
  );
}

export default App;
