import { useEffect, useState } from "react";

import "./Formik.scss"
import { toast } from "react-toastify";

const UniversalForm = ({ inputs, onAddData, discovererData }) => {
    const [formValues, setFormValues] = useState({});
    const [errors, setErrors] = useState({});
    const [buttonText, setButtonText] = useState("Add");


    useEffect(() => {
        if (discovererData) {
            setButtonText("Save")
            Object.keys(discovererData).forEach((key) => {
                setFormValues((prevValues) => ({ ...prevValues, [key]: discovererData[key] }));
            });
            console.log(formValues)
        }
    }, [discovererData]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (!value || value[0] === ' ') {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: 'Invalid' }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
        }
        setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const hasErrors = Object.values(errors).some((error) => error !== '');
        if (hasErrors) {
            toast.error("Empty or incorrect input", { autoClose: 5000 })
        } else {
            // setFormValues({});
            // setErrors({});
            onAddData(formValues)

        }
    };

    return (
        <div className="photo-form-wrapper">
            <form onSubmit={handleSubmit}>
                {inputs.map((input, index) => (
                    <div key={index}>
                        <label
                            htmlFor={input.name}
                            className={errors[input.name] ? 'textErr' : ''}
                        >
                            {input.label}:
                        </label>
                        <input
                            type={input.type}
                            name={input.name}
                            id={input.name}
                            onChange={handleChange}
                            value={formValues[input.name] || ''}
                            required={input.required}
                            className={errors[input.name] ? 'inputErr' : ''}
                        />
                        {errors[input.name] && <div className="textErr">{errors[input.name]}</div>}
                    </div>
                ))}
                <button type="submit">{buttonText}</button>
            </form>
        </div>
    )
}
export default UniversalForm