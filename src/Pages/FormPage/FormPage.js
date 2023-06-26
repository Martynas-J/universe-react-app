import { useNavigate, useParams } from "react-router-dom";
import Container from "../../Components/Container/Container"
import UniversalForm from "../../Components/Form/UniversalForm"
import { API_URL } from "../../Components/Config/Config";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect, useState } from "react";


const FormPage = () => {
    const { text, id } = useParams()

    const [discoverer, setDiscoverer] = useState('');

    useEffect(() => {
        if (id) {
            axios.get(`${API_URL}/discoverers/${id}?_embed=photos`)
                .then(res => {
                    const { name, country, birthplace, occupation, contribution, photos, id } = res.data
                    const newData = { name, country, birthplace, occupation, contribution, url: photos[0].url, thumbnailUrl: photos[0].thumbnailUrl, id, photoId: photos[0].id }
                    return setDiscoverer(newData)
                })
                .catch(res => toast.error(res.message))
        }
    }, [])
    const inputs = [
        { type: 'text', name: 'name', label: 'Name', value: '', required: true },
        { type: 'text', name: 'country', label: 'Country', value: '', required: true },
        { type: 'text', name: 'birthplace', label: 'Birthplace', value: '', required: true },
        { type: 'text', name: 'occupation', label: 'Occupation', value: '', required: true },
        { type: 'text', name: 'contribution', label: 'Contribution', value: '', required: true },
        { type: 'url', name: 'url', label: 'Photo URL', value: '', required: true },
        { type: 'url', name: 'thumbnailUrl', label: 'Thumbnail Photo URL', value: '', required: true },
      ];
    const addDiscovererHandler = (data) => {
        const { name, country, birthplace, occupation, contribution, url, thumbnailUrl, photoId } = data
        const newDiscoverer = { name, country, birthplace, occupation, contribution }
        if (discoverer) {
            axios
                .patch(`${API_URL}/discoverers/${discoverer.id}`, newDiscoverer)
                .then((response) => {
                    const discovererId = response.data.id;
                    const photoData = { name, url, thumbnailUrl, discovererId, category: "discoverers" };
                    return axios.patch(`${API_URL}/photos/${photoId}`, photoData);
                })
                .then(() => {
                    toast.success("Discoverer was Edited");
                    setDiscoverer("");
                    // useNavigate("/discoverers")
                })
                .catch((res) => toast.error(res.messages));
        } else {
            axios.post(`${API_URL}/discoverers`, newDiscoverer)
                .then((response) => {
                    const discovererId = response.data.id;
                    const photoData = { name, url, thumbnailUrl, discovererId, category: "discoverers" };
                    return axios.post(`${API_URL}/photos`, photoData);
                })
                .then(() => {
                    toast.success('Discoverer was added');
                })
                .catch((error) => {
                    toast.error(error.message);
                });
        }
    }
    return (
        <Container>
            <div className="form-wrapper">
                <h1 className="page-title">{text} Form</h1>
                <UniversalForm
                    inputs={inputs}
                    onAddData={addDiscovererHandler}
                    discovererData={discoverer ? discoverer : ""}
                />
            </div>
        </Container>
    )
}

export default FormPage