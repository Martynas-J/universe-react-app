import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import classes from "./Form.module.scss"

const Form = ({ onAddPhoto }) => {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [thumbnailUrl, setThumbnailUrl] = useState('');
    const [nameError, setNameError] = useState(false);
    const [urlError, setUrlError] = useState(false);
    const [thumbnailUrlError, setThumbnailUrlError] = useState(false);

    const {textErr, inputErr} = classes
    const albumId = useParams().id

    const nameHandler = event => {
        const value = event.target.value;
        setName(value);
        setNameError(value === "" || value[0] === " ");
    };
    const urlHandler = event => {
        const value = event.target.value;
        setUrl(value);
        setUrlError(value === "" || value[0] === " ");
    };
    const thumbnailUrlHandler = event => {
        const value = event.target.value;
        setThumbnailUrl(value);
        setThumbnailUrlError(value === "" || value[0] === " ");
    };
    const newPhotoHandler = (event) => {
        event.preventDefault();
        const newPhoto = {
            albumId: Number(albumId),
            name,
            url,
            thumbnailUrl
        }
        const returnData = onAddPhoto(newPhoto)
        if (returnData === "name") {
            toast.error("Name is Empty or incorrect", { autoClose: 5000 })
            setNameError(true)
        } else if (returnData === "url") {
            toast.error("Url is Empty or incorrect", { autoClose: 5000 })
            setUrlError(true)
        } else if (returnData === "thumbnailUrl") {
            toast.error("ThumbnailUrl is Empty or incorrect", { autoClose: 5000 })
            setThumbnailUrlError(true)
        } else {
            toast.success("Photo Added")
            setName("")
            setUrl("")
            setThumbnailUrl("")
        }
    }
    
    console.log(classes.textErr)
    return (
        <div className="photo-form-wrapper">
            <form className="photo-form" onSubmit={newPhotoHandler}>
                <div className="form-control">
                    <label className={`${nameError ? textErr : ""}`} htmlFor="name">Name:</label>
                    <input className={`${nameError ? inputErr : ""}`} type="text" id="name" name="name" value={name} onChange={nameHandler} />
                </div>
                <div className="form-control">
                    <label className={`${urlError ? textErr : ""}`} htmlFor="url">Url:</label>
                    <input className={`${urlError ? inputErr : ""}`} type="url" id="url" name="url" value={url} onChange={urlHandler} />
                </div>
                <div className="form-control">
                    <label className={`${thumbnailUrlError ? textErr : ""}`} htmlFor="thumbnailUrl">ThumbnailUrl:</label>
                    <input className={`${thumbnailUrlError ? inputErr : ""}`} type="url" id="thumbnailUrl" name="thumbnailUrl" value={thumbnailUrl} onChange={thumbnailUrlHandler} />
                </div>
                <input type="submit" value="Add new Photo" />
            </form>
        </div>
    )
}
export default Form