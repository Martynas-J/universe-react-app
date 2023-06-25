import { useParams } from "react-router-dom";
import Container from "../../Components/Container/Container"
import UniversalForm from "../../Components/Form/UniversalForm"


const FormPage = () => {
    const { text } = useParams()
    const nameChangeHandler = (e) => {
        // Čia galite apdoroti pavardės keitimo įvykius
    };

    const countryChangeHandler = (e) => {
        // Čia galite apdoroti el. pašto keitimo įvykius
    };
    const inputs = [
        { type: 'text', name: 'name', label: 'Name', value: '' },
        { type: 'text', name: 'country', label: 'Country', value: '' },
        { type: 'text', name: 'birthplace', label: 'Birthplace', value: '' },
        { type: 'text', name: 'occupation', label: 'Occupation', value: '' },
        { type: 'text', name: 'contribution', label: 'Contribution', value: '' },
        { type: 'url', name: 'url', label: 'Photo Url', value: '' },
    ];
    return (
        <Container>
            <div className="form-wrapper">
                <h1 className="page-title">{text} Form</h1>
                <UniversalForm inputs={inputs} />
            </div>
        </Container>
    )
}

export default FormPage