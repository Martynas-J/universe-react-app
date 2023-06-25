import { useParams } from "react-router-dom";
import Container from "../../Components/Container/Container"
import UniversalForm from "../../Components/Form/UniversalForm"
import { API_URL } from "../../Components/Config/Config";
import { toast } from "react-toastify";
import axios from "axios";


const FormPage = () => {
    const { text } = useParams()

    const inputs = [
        { type: 'text', name: 'name', label: 'Name', value: '' },
        { type: 'text', name: 'country', label: 'Country', value: '' },
        { type: 'text', name: 'birthplace', label: 'Birthplace', value: '' },
        { type: 'text', name: 'occupation', label: 'Occupation', value: '' },
        { type: 'text', name: 'contribution', label: 'Contribution', value: '' },
        { type: 'url', name: 'url', label: 'Photo Url', value: '' },
        { type: 'url', name: 'thumbnailUrl', label: 'Thumbnail Url Photo', value: '' },
    ];
    const addDiscovererHandler = (data) => {
        const { name, country, birthplace, occupation, contribution, url, thumbnailUrl } = data
        const newDiscoverer = { name, country, birthplace, occupation, contribution }
        axios.post(`${API_URL}/discoverers`, newDiscoverer)
            .then((response) => {
                const discovererId = response.data.id;
                const photoData = {name, url, thumbnailUrl, discovererId, category: "discoverers"};
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
                <UniversalForm inputs={inputs} onAddData={addDiscovererHandler} />
            </div>
        </Container>
    )
}

export default FormPage