import React from 'react';
import data from '../../../data.json';
import ImageUploaderForm from '../components/ImageUploaderForm.jsx';
import FeedList from '../components/FeedList';

function HomePage() {
	constructor(props) {
		super(props);
		this.state = {
			photos: data.photos
		}
	}

	// TODO: Add context
	handleAddPhoto = (url) => {
		const newPhoto = {
			url: url,
			likes: 0
		};

		this.setState((prevState) => {
			return {
				photos: prevState.photos.concat([newPhoto])
			};
		});
	}

	render() {
		const { photos } = data;

		return (
			<div className="HomePage">
				<ImageUploaderForm handleAddPhoto={this.handleAddPhoto} />
				<FeedList photos={this.state.photos} />
			</div>
		);
	}
}

export default HomePage;
