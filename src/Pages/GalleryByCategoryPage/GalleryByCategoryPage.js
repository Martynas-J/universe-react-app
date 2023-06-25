import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../Components/Config/Config";
import { toast } from "react-toastify";
import { firstLetterUpperCase } from "../../Components/Functions/Functions";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"


const GalleryByCategoryPage = () => {
    const { category } = useParams();

    const [photos, setPhotos] = useState('');

    useEffect(() => {
        axios.get(`${API_URL}/photos`)
            .then(res => setPhotos(res.data))
            .catch(res => toast.error(res.message))
    }, [])
    if (!photos) {
        return ""
    }
    let images = []
    const photosByCategory = photos.filter(photo => photo.category === category)
    photosByCategory.map(photo => images.push({
        original: photo.url, thumbnail: photo.thumbnailUrl,
        description: <>{photo.name}
          <button > Delete</button></>
      }))
    console.log(photosByCategory)
    return (
        <div className="gallery-category-wrapper">
            <h1 className="page-title">{firstLetterUpperCase(category)} Gallery</h1>
            <ReactImageGallery items={images} />
        </div>
    )
}

export default GalleryByCategoryPage