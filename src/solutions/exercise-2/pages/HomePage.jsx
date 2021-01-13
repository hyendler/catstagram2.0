import React from 'react';
import ImageUploaderForm from '../components/ImageUploaderForm.jsx';
import FeedList from '../components/FeedList';


function HomePage() {
	return (
		<div className="HomePage">
			<ImageUploaderForm />
			<FeedList />
		</div>
	);
}

export default HomePage;
