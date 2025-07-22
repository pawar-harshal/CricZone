

# 🏏 CricZone - Live Cricket Dashboard

A visually engaging React-based cricket dashboard that fetches live match data from [CricketData.org](https://cricketdata.org/). CricZone provides real-time scores and match statuses with an elegant UI, built using Tailwind CSS and React Router.



## 🔥 Features

* 🏏 Live cricket scores from [CricketData.org](https://cricketdata.org)
* 📍 Match location, match type, and live status indicators
* 🔄 Refresh button to fetch updated data manually
* 📱 Responsive layout with clean visual structure


## ⚙️ Tech Stack

* **Frontend:** React.js (with Hooks)
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM
* **Icons:** Heroicons, React Icons
* **Data Handling:** Context API + custom hooks



## 🧐 React Hooks Used

* `useState` – to manage dynamic data (matches, index)
* `useEffect` – to trigger fetch calls when component mounts
* `useContext` – to access global match data in any component
* `useParams` – for dynamic routing (match detail page)



## 📂 Folder Structure Overview

CricZone/
├── public/
│   └── screenshots/
│       ├── CricZone_internalPage.png
│       ├── CricZone_mobile.png
│       └── CricZone_thumbnail.png
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── About, Footer, Home, MatchCard, MatchDetails, Navbar, RefreshButton
│   ├── context/
│   │   └── matchDetails.jsx
│   ├── mockAPI/
│   ├── index.css, index.html, main.jsx, Layout.jsx
├── .gitignore, package.json, README.md
```



## 🖼️ Screenshots

| Internal Page | Mobile View | App Thumbnail |
|---------------|-------------|----------------|
| ![Internal](https://raw.githubusercontent.com/pawar-harshal/CricZone/main/public/screenshots/CricZone_internalPage.png) | ![Mobile](https://raw.githubusercontent.com/pawar-harshal/CricZone/main/public/screenshots/CricZone_mobile.png) | ![Thumbnail](https://raw.githubusercontent.com/pawar-harshal/CricZone/main/public/screenshots/CricZone_thumbnail.png) |

## 🙇‍♂️ Author

**Harshal Pawar**
🔗 [linkedin.com/in/harshalpawar1204](https://linkedin.com/in/harshalpawar1204)
💻 Passionate about full-stack development & real-world problem solving.



## 📜 License

MIT

