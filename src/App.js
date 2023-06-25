import { Link, Route, Routes } from "react-router-dom";
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
import FormPage from "./Pages/FormPage/FormPage";


function App() {
  return (
    <div className="body">
      <MainNavBar />
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

        <Route path='/form' element={<FormPage />} />

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
