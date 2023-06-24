import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../Components/Config/Config";
import { toast } from "react-toastify";

const GalleryPage = () => {
  const [system, setSystem] = useState('');
  const [discoverers, setDiscoverers] = useState('');
  const [planets, setPlanets] = useState('');

  useEffect(() => {
    axios.get(`${API_URL}/planets?_embed=photos`)
      .then(res => setPlanets(res.data))
      .catch(res => toast.error(res.message))
      axios.get(`${API_URL}/discoverers?_embed=photos`)
      .then(res => setDiscoverers(res.data))
      .catch(res => toast.error(res.message))

  }, [])

if (!discoverers || !planets) {
  return ""
}

console.log(discoverers)
console.log(planets)
  return (
    <div className="gallery-wrapper">
      <h1 className="page-title">Gallery</h1>
    </div>
  )
}

export default GalleryPage