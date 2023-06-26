import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../Components/Config/Config";
import { toast } from "react-toastify";
import StarItem from "../../Components/StarItem/StarItem";
import Container from "../../Components/Container/Container";
import "./StarsPage.scss"
import { Link } from "react-router-dom";

const StarsPage = () => {
  const [stars, setStars] = useState('');

  useEffect(() => {
    axios.get(`${API_URL}/stars?_expand=system&_embed=photos`)
      .then(res => setStars(res.data))
      .catch(res => toast.error(res.message))
  }, [])
  if (!stars) {
    return ""
  }
  const deleteHandler = (id) => {
    axios.delete(`${API_URL}/stars/${id}?_embed=photos`)
      .then(() => {
        toast.info("Star was deleted!")
        setStars(prevState => {
          let newState = [...prevState]
          return newState.filter(((star) => star.id !== id))
        })
      })
      .catch(err => {
        toast.error(err.message);
      });
  }
  return (
    <Container>
      <div className="stars-wrapper">
        <h1 className="page-title">Stars</h1>
        <Link to="/form/star" className="create-link">Add New Star</Link>
        <div className="star-wrapper">
          {
            stars.length > 0 ?
              stars.map(star => <StarItem key={star.id} star={star} onDelete={deleteHandler} />) :
              <h2>No data</h2>
          }
        </div>
      </div>
    </Container>

  )
}

export default StarsPage