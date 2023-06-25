import { useState } from "react";

import "./Formik.scss"
import { toast } from "react-toastify";

const UniversalForm = ({ inputs, onAddData }) => {
    const [formValues, setFormValues] = useState({});
    const [errors, setErrors] = useState({});

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
                            className={errors[input.name] ? 'inputErr' : ''}
                        />
                        {errors[input.name] && <div className="textErr">{errors[input.name]}</div>}
                    </div>
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default UniversalForm