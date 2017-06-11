import React from 'react';

const VideoListItem = (props)=>{
	const video = props.video;
	const imageUrl = video.snippet.thumbnails.default.url;
	return (<li className="list-group-item">
		video
		<div className="video-list media">
			<div className="media-object">
				<img className="media-object" src={imageUrl} />
			</div>
			<div className="media-body">
				<div className="media-heading">{video.snippet.title}</div>
			</div>
		</div>
		</li>
	);
}

export default VideoListItem;




















/*
import React from 'react';

const VideoListItem = (props) =>{
	return (<li>video</li>);
};

export default VideoListItem;
*/