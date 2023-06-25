import Container from "../../Components/Container/Container"
import UniversalForm from "../../Components/Form/UniversalForm"


const FormPage = () => {
    return (
        <Container>
            <div className="form-wrapper">
                <h1 className="page-title">Form</h1>
                <UniversalForm />
            </div>
        </Container>
    )
}

export default FormPage