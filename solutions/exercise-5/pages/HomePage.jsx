import React from 'react';
import data from '../../../data.json';
import ImageUploaderForm from '../components/ImageUploaderForm.jsx';
import FeedList from '../components/FeedList';

// TODO: redo with context
function HomePage() {
    state = {
        photos: data.photos;
    }

    handleAddPhoto = (url) => {
        // const newPhotosArray: = this.state.photos.slice(0);

        this.setState({
            photos: [
                {
                    url: url,
                    id: id
                },
                ...this.state.photos;
            ]
        })
    }

	render() {
		return (
			<div className="HomePage">
				<ImageUploaderForm submitCallback={this.handleAddPhoto} />
				<FeedList photos={this.state.photos} />
			</div>
		);
	}
}

export default HomePage;
