🏏 CricZone - Live Cricket Dashboard
A visually engaging React-based cricket dashboard that fetches live match data from CricketData.org. CricZone provides real-time scores and match statuses with an elegant UI, built using Tailwind CSS and React Router.

---

🔥 Features

* 🏏 Live cricket scores from CricketData.org
* 📍 Match location, match type, and live status indicators
* 🔄 Refresh button to fetch updated data manually
* 📱 Responsive layout with a clean visual structure

---

⚙️ Tech Stack

* Frontend: React.js (with Hooks)
* Styling: Tailwind CSS
* Routing: React Router DOM
* Icons: Heroicons, React Icons
* Data Handling: Context API + custom hooks

---

🧐 React Hooks Used

* useState – Manages dynamic data (matches, index)
* useEffect – Triggers fetch calls when components mount
* useContext – Accesses global match data across components
* useParams – Enables dynamic routing for match detail pages

---

📂 Folder Structure

CricZone/
├── public/
│   └── screenshots/
│       ├── CricZone\_internalPage.png
│       ├── CricZone\_mobile.png
│       └── CricZone\_thumbnail.png
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

---

🛠️ Installation

1. Clone the repository:
   `git clone https://github.com/pawar-harshal/CricZone.git`

2. Navigate to the project directory:
   `cd CricZone`

3. Install dependencies:
   `npm install`

4. Add your CricketData API key to a `.env` file:
   `REACT_APP_CRICKETDATA_API_KEY=your_api_key_here`

5. Start the development server:
   `npm start`

---

🚀 Usage

* Open `http://localhost:3000` in your browser
* Browse live cricket matches on the homepage
* Click a match to view detailed stats
* Use the refresh button to update match data

---

🖼️ Screenshots

Internal Page
![Internal](https://raw.githubusercontent.com/pawar-harshal/CricZone/main/public/screenshots/CricZone_internalPage.png)

Mobile View
![Mobile](https://raw.githubusercontent.com/pawar-harshal/CricZone/main/public/screenshots/CricZone_mobile.png)

App Thumbnail
![Thumbnail](https://raw.githubusercontent.com/pawar-harshal/CricZone/main/public/screenshots/CricZone_thumbnail.png)

---

🙇‍♂️ Author
**Harshal Pawar**
🔗 LinkedIn -https://www.linkedin.com/in/harshalpawar1204/
💻 Passionate about full-stack development and solving real-world problems

---

📜 License
This project is licensed under the MIT License – see the LICENSE file for details.
