import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../Components/Config/Config";
import { toast } from "react-toastify";

const GalleryPage = () => {
  const [photos, setPhotos] = useState('');

  useEffect(() => {
    axios.get(`${API_URL}/photos`)
      .then(res => setPhotos(res.data))
      .catch(res => toast.error(res.message))
  }, [])

if (!photos) {
  return ""
}

console.log(photos)

  return (
    <div className="gallery-wrapper">
      <h1 className="page-title">Gallery</h1>
    </div>
  )
}

export default GalleryPage