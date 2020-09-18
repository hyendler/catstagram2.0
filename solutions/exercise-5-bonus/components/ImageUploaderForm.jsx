import React from 'react';

// TODO: handle context
function ImageUploaderForm(props) {
    const {handleAddPhoto} = props
    const [url, setUrl] = useState('');

    handleChange = (e) =>
        setUrl(e.target.value);

    handleSubmit = (e) => {
        e.preventDefault();

        props.handleAddPhoto(url);
        setUrl('')
    }

    render() {
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
}

export default ImageUploaderForm;
