Game Challenge component.

Tech Stack Used

React (Vite-based setup)
Tailwind CSS for styling
React Icons for UI icons
UI Avatars API for profile images
Vanilla CSS (app.css) for additional animations
React hooks (useState) for state management

src/
│
├── components/
│ ├── Header.jsx // Top bar with wallet and notification icons
│ ├── ChallengeForm.jsx // Invite friend with game selection and suggestion
│ ├── OngoingChallenges.jsx // Shows ongoing sent challenges
│ ├── IncomingInvites.jsx // Shows received invites
│
├── App.jsx // Main layout integrating all components
├── main.jsx // React DOM entry point
└── index.css // Tailwind base styles and custom classes

Help for Backend Developer

For user suggestions:

Replace the hardcoded allUsers array with an API call

Example endpoint: GET /api/users?search=name

Use the results to populate the dropdown for friend search

For sending game invites:

Replace the local alert() with a POST request

Example endpoint: POST /api/invite

Payload: { friendName, game }

For fetching ongoing challenges and received invites:

Replace the static arrays with data from these endpoints:
GET /api/ongoing
GET /api/invites

Suggested backend models:

User

FriendRequest

GameChallenge (with status: pending, accepted, rejected)

Optionally add token-based authentication for real users

Space has been kept in the UI for user-specific features

How to Run Locally

Install dependencies:
npm install

Run development server:
npm run dev
