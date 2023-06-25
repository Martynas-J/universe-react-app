import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../Components/Config/Config";
import { toast } from "react-toastify";
import PlanetItem from "../../Components/PlanetItem/PlanetItem";
import Container from "../../Components/Container/Container";

const PlanetsPage = () => {

  const [planets, setPlanets] = useState('');

  useEffect(() => {
    axios.get(`${API_URL}/planets?_embed=photos`)
      .then(res => setPlanets(res.data))
      .catch(res => toast.error(res.message))
  }, [])
  if (!planets) {
    return ""
  }

  return (
    <Container>
      <div className="planets-wrapper">
        <h1 className="page-title">Planets</h1>
        <div className="planet-wrapper">
          {
            planets.length > 0 ?
              planets.map(planet => <PlanetItem key={planet.id} planet={planet} />) :
              <h2>No data</h2>
          }
        </div>
      </div>
    </Container>

  )
}

export default PlanetsPage