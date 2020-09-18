import React from 'react';
import data from '../../../data.json';
import ImageUploaderForm from '../components/ImageUploaderForm.jsx';
import FeedList from '../components/FeedList';

const { photos } = data;

function HomePage() {
    return (
        <div className="HomePage">
            <ImageUploaderForm />
            <FeedList photos={photos} />
        </div>
    );
}

export default HomePage;
