import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import PlanetsPage from "./Pages/PlanetsPage/PlanetsPage";
import MainNavBar from "./Components/MainNavBar/MainNavBar"
import SystemsPage from "./Pages/SystemsPage/SystemsPage";
import GalaxyPage from "./Pages/GalaxyPage/GalaxyPage";
import DiscoverersPage from "./Pages/DiscoverersPage/DiscoverersPage";
import StarsPage from "./Pages/StarsPage/StarsPage";
import GalleryPage from "./Pages/GalleryPage/GalleryPage";
import "./App.scss"
import DiscovererPage from "./Pages/DiscovererPage/DiscovererPage";
import PlanetPage from "./Pages/PlanetPage/PlanetPage";
import StarPage from "./Pages/StarPage/StarPage";


function App() {
  return (
    <div className="body">
      <MainNavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/planets' element={<PlanetsPage />} />
        <Route path='/planets/:id' element={<PlanetPage />} />

        <Route path='/systems' element={<SystemsPage />} />

        <Route path='/discoverers' element={<DiscoverersPage />} />
        <Route path='/discoverers/:id' element={<DiscovererPage />} />

        <Route path='/stars' element={<StarsPage />} />
        <Route path='/stars/:id' element={<StarPage />} />

        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/galaxy' element={<GalaxyPage />} />

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
