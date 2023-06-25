import { useParams } from "react-router-dom";
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
                .then(res => setDiscoverer(res.data))
                .catch(res => toast.error(res.message))
        }
    }, [])
    const inputs = [
        { type: 'text', name: 'name', label: 'Vardas', value: '', required: true },
        { type: 'text', name: 'country', label: 'Šalis', value: '', required: true },
        { type: 'text', name: 'birthplace', label: 'Gimimo vieta', value: '', required: true },
        { type: 'text', name: 'occupation', label: 'Profesija', value: '', required: true },
        { type: 'text', name: 'contribution', label: 'Indėlis', value: '', required: true },
        { type: 'url', name: 'url', label: 'Nuotraukos URL', value: '', required: true },
        { type: 'url', name: 'thumbnailUrl', label: 'Miniatiūros nuotraukos URL', value: '', required: true },
    ];
    const addDiscovererHandler = (data) => {
        const { name, country, birthplace, occupation, contribution, url, thumbnailUrl } = data
        const newDiscoverer = { name, country, birthplace, occupation, contribution }
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