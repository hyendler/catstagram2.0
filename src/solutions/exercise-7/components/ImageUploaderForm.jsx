import React, {useContext, useState} from 'react';
import {PhotosContext} from '../App.jsx';

// TODO: handle context
function ImageUploaderForm() {
    const {addPhoto} = useContext(PhotosContext)
    const [url, setUrl] = useState('');

    const handleChange = (e) =>
        setUrl(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        addPhoto(url)

        setUrl('')
    }

    return (
        <form className="ImageUploaderForm">
            <input
                placeholder="Add URL here"
                value={url}
                onChange={handleChange} />
            <button className="SubmitButton" onClick={handleSubmit} >
                Submit
            </button>

        </form>
    )
}

export default ImageUploaderForm;
