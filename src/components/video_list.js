import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) =>{
	console.dir(props);
	const videoItems = props.videos.map((video)=>{
		console.log(video);
		return <VideoListItem key={video.etag} video={video} />;
	});

	return (
		<ul className="col-md-4-group">
			{videoItems}
		</ul>
	)
};

export default VideoList;
