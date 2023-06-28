import { Link, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import PlanetsPage from "./Pages/PlanetsPage/PlanetsPage";
import MainNavBar from "./Components/MainNavBar/MainNavBar"
import SystemsPage from "./Pages/SystemsPage/SystemsPage";
import DiscoverersPage from "./Pages/DiscoverersPage/DiscoverersPage";
import StarsPage from "./Pages/StarsPage/StarsPage";
import GalleryPage from "./Pages/GalleryPage/GalleryPage";
import "./App.scss"
import DiscovererPage from "./Pages/DiscovererPage/DiscovererPage";
import PlanetPage from "./Pages/PlanetPage/PlanetPage";
import StarPage from "./Pages/StarPage/StarPage";
import SystemPage from "./Pages/SystemPage/SystemPage";
import GalleryByCategoryPage from "./Pages/GalleryByCategoryPage/GalleryByCategoryPage";
import DiscovererFormPage from "./Pages/DiscovererFormPage/DiscovererFormPage";
import PlanetFormPage from "./Pages/PlanetFormPage/PlanetFormPage";
import StarFormPage from "./Pages/StarFormPage/StarFormPage";
import SystemFormPage from "./Pages/SystemFormPage/SystemFormPage";
import { useEffect } from "react";


function App() {

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (isHomePage) {
      document.body.classList.add('home-page');
    } else {
      document.body.classList.remove('home-page');
    }
  }, [isHomePage]);

  return (
    <div className="body">
      <MainNavBar isHomePage={isHomePage} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/planets' element={<PlanetsPage />} />
        <Route path='/planets/:id' element={<PlanetPage />} />

        <Route path='/systems' element={<SystemsPage />} />
        <Route path='/systems/:id' element={<SystemPage />} />

        <Route path='/discoverers' element={<DiscoverersPage />} />
        <Route path='/discoverers/:id' element={<DiscovererPage />} />

        <Route path='/stars' element={<StarsPage />} />
        <Route path='/stars/:id' element={<StarPage />} />

        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/gallery/:category' element={<GalleryByCategoryPage />} />

        <Route path='/form/discoverer' element={<DiscovererFormPage />} />
        <Route path='/form/discoverer/:id' element={<DiscovererFormPage />} />

        <Route path='/form/planet' element={<PlanetFormPage />} />
        <Route path='/form/planet/:id' element={<PlanetFormPage />} />

        <Route path='/form/star' element={<StarFormPage />} />
        <Route path='/form/star/:id' element={<StarFormPage />} />

        <Route path='/form/system' element={<SystemFormPage />} />
        <Route path='/form/system/:id' element={<SystemFormPage />} />

        <Route path='*' element={
          <div>
            <h1>Page not found</h1>
            <span><Link to='/'>Back To Home Page</Link></span>
          </div>
        } />
      </Routes>
    </div >
  );
}

export default App;
