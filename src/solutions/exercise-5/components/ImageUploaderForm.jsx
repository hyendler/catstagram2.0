import React, {useState} from 'react';

function ImageUploaderForm() {
    const [url, setUrl] = useState('');

    const handleChange = (e) =>
        setUrl(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(url)
        setUrl('')
    }

    return (
        <form className="ImageUploaderForm">
            <input
                placeholder="Add URL here"
                value={url}
                onChange={handleChange} />
            <button className="SubmitButton" onClick={handleSubmit} type="submit">
                Submit
            </button>
        </form>
    )
}

export default ImageUploaderForm;
