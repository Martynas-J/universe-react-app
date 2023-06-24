
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../Components/Config/Config";
import { toast } from "react-toastify";
import DiscovererItem from "../../Components/DiscovererItem/DiscovererItem"

const DiscoverersPage = () => {
  const [discoverers, setDiscoverers] = useState('');

  useEffect(() => {
    axios.get(`${API_URL}/discoverers?_embed=photos`)
      .then(res => setDiscoverers(res.data))
      .catch(res => toast.error(res.message))
  }, [])
  if (!discoverers) {
    return ""
  }

  return (
    <div className="discoverers-wrapper">
      <h1 className="page-title">Discoverers</h1>
      <div className="discoverer-wrapper">
        {
          discoverers.length > 0 ?
            discoverers.map(discoverer => <DiscovererItem key={discoverer.id} discoverer={discoverer} />) :
            <h2>No discoverers</h2>
        }
      </div>
    </div>
  )
}

export default DiscoverersPage