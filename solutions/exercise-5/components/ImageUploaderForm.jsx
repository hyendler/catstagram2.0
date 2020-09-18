import React, {useState} from 'react';

function ImageUploaderForm(props) {
    const {submitCallback} = props
    const [url, setUrl] = useState('');

    const handleChange = (e) =>
        setUrl(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();

        submitCallback(url);
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
