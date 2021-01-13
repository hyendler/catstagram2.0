import React, {useContext} from 'react';
import FeedItem from './FeedItem.jsx';
import {PhotosContext} from '../App.jsx';

function FeedList() {
    const {photos} = useContext(PhotosContext)
    return (
        <div className="FeedList">
            {
                photos.map((photo, i) =>
                    <FeedItem photo={photo} key={i} />
                )
            }
        </div>
    );
};

export default FeedList;
