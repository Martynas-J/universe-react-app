import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../Components/Config/Config";
import { toast } from "react-toastify";
import SystemItem from "../../Components/StarItem/SystemItem/SystemItem";
import Container from "../../Components/Container/Container";

const SystemsPage = () => {
  const [systems, setSystems] = useState('');

  useEffect(() => {
    axios.get(`${API_URL}/systems`)
      .then(res => setSystems(res.data))
      .catch(res => toast.error(res.message))
  }, [])
  if (!systems) {
    return ""
  }

  return (
    <Container>
      <div className="systems-wrapper">
        <h1 className="page-title">Systems</h1>
        <div className="system-wrapper">
          {
            systems.length > 0 ?
              systems.map(system => <SystemItem key={system.id} system={system} />) :
              <h2>No data</h2>
          }
        </div>
      </div>
    </Container>

  )
}


export default SystemsPage