import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../Components/Config/Config";
import { toast } from "react-toastify";
import DiscovererItem from "../../Components/DiscovererItem/DiscovererItem"
import Container from "../../Components/Container/Container";
import "./DiscoverersPage.scss"
import { Link } from "react-router-dom";

const DiscoverersPage = () => {
  const [discoverers, setDiscoverers] = useState('');
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    axios.get(`${API_URL}/discoverers?_embed=photos`)
      .then(res => setDiscoverers(res.data))
      .catch(res => toast.error(res.message))
  }, [])
  if (!discoverers) {
    return ""
  }
  const deleteHandler = (id) => {
    axios.delete(`${API_URL}/discoverers/${id}?_embed=photos`)
      .then(res => {
        setDeleted(true)
        toast.info('Discoverer was deleted!');
      })
      .catch(err => {
        toast.error(err.message);
      });
  }
  return (
    <Container>
      <div className="discoverers-wrapper">
        <h1 className="page-title">Discoverers</h1>
        <Link to="/form/Discoverer" className="create-link">Create New Discoverer</Link>
        <div className="discoverer-wrapper">
          {
            discoverers.length > 0 ?
              discoverers.map(discoverer => 
              <DiscovererItem key={discoverer.id} discoverer={discoverer} onDelete={deleteHandler} />) :
              <h2>No data</h2>
          }
        </div>
      </div>
    </Container>

  )
}

export default DiscoverersPage