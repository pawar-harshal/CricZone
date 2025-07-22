import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import MatchDetails from './components/MatchDetails/MatchDetails.jsx'
import { MatchDetailsProvider } from './context/matchDetails/matchDetails.jsx'
import About from './components/About/About.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={
      <MatchDetailsProvider>
        <Layout />
      </MatchDetailsProvider>
    }>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='match/:matchId' element={<MatchDetails />} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
