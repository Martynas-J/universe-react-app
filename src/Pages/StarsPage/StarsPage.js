import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../Components/Config/Config";
import { toast } from "react-toastify";
import StarItem from "../../Components/StarItem/StarItem";

const StarsPage = () => {
  const [stars, setStars] = useState('');

  useEffect(() => {
    axios.get(`${API_URL}/stars`)
      .then(res => setStars(res.data))
      .catch(res => toast.error(res.message))
  }, [])
  if (!stars) {
    return ""
  }

  return (
    <div className="stars-wrapper">
      <h1 className="page-title">Stars</h1>
      <div className="star-wrapper">
        {
          stars.length > 0 ?
            stars.map(star => <StarItem key={star.id} star={star} />) :
            <h2>No stars</h2>
        }
      </div>
    </div>
  )
}

export default StarsPage