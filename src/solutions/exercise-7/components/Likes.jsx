import React, {useState} from 'react';

function Likes(props) {
	const {totalLikes} = props
	const [numLikes, setNumLikes] = useState(totalLikes)
	const [liked, setLiked] = useState(false)

	const handleLikeButtonClick = () => {
		// TODO: check if this actually modifying state or ot
		if (liked) {
			setNumLikes(numLikes - 1)
		} else {
			setNumLikes(numLikes + 1)
		}

		setLiked(!liked)
	}

	return (
		<div className="Likes">
			<span>{ numLikes } likes</span>
			<button className="Likes-like-button" onClick={handleLikeButtonClick}>
				{ liked ? 'Liked!' : 'Not liked (yet)' }
			</button>
		</div>
	);
}

export default Likes;
