🏏 CricZone - Live Cricket Dashboard
A visually engaging React-based cricket dashboard that fetches live match data from CricketData.org. CricZone provides real-time scores and match statuses with an elegant UI, built using Tailwind CSS and React Router.
🔥 Features

🏏 Live cricket scores fetched from CricketData.org
📍 Match location, match type, and live status indicators
🔄 Refresh button to fetch updated data manually
📱 Responsive layout with a clean and modern visual structure

⚙️ Tech Stack

Frontend: React.js (with Hooks)
Styling: Tailwind CSS
Routing: React Router DOM
Icons: Heroicons, React Icons
Data Handling: Context API + custom hooks

🧐 React Hooks Used

useState – Manages dynamic data (matches, index)
useEffect – Triggers fetch calls when components mount
useContext – Accesses global match data across components
useParams – Enables dynamic routing for match detail pages

📂 Folder Structure Overview
CricZone/
├── public/
│   └── screenshots/
│       ├── CricZone_internalPage.png
│       ├── CricZone_mobile.png
│       └── CricZone_thumbnail.png
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── MatchCard.jsx
│   │   ├── MatchDetails.jsx
│   │   ├── Navbar.jsx
│   │   ├── RefreshButton.jsx
│   ├── context/
│   │   └── matchDetails.jsx
│   ├── mockAPI/
│   ├── index.css
│   ├── index.html
│   ├── main.jsx
│   ├── Layout.jsx
├── .gitignore
├── package.json
├── README.md

🛠️ Installation

Clone the repository:git clone https://github.com/pawar-harshal/CricZone.git


Navigate to the project directory:cd CricZone


Install dependencies:npm install


Obtain an API key from CricketData.org and add it to your environment variables (e.g., in a .env file):REACT_APP_CRICKETDATA_API_KEY=your_api_key_here


Start the development server:npm start



🚀 Usage

Open the app in your browser (default: http://localhost:3000).
Browse live cricket matches on the homepage.
Click a match to view detailed stats.
Use the refresh button to update match data manually.

🖼️ Screenshots



Internal Page
Mobile View
App Thumbnail








🙇‍♂️ Author
Harshal Pawar🔗 - https://www.linkedin.com/in/harshalpawar1204/ LinkedIn💻 Passionate about full-stack development and solving real-world problems.
📜 License
This project is licensed under the MIT License - see the LICENSE file for details.