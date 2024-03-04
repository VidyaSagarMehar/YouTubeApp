import React from 'react';

const VideoCard = ({ info }) => {
	console.log(info);
	const { snippet, statistics } = info;
	const { channelTitle, title, thumbnails } = snippet;
	return (
		<div className="p-2 m-2 w-72 shadow rounded">
			<img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
			<ul>
				<li className="font-semibold">{title}</li>
				<li>{channelTitle}</li>
				<li>{statistics.viewCount} views</li>
			</ul>
		</div>
	);
};

// HOC (Higher Order Components) we are using to show adds
export const AdVideoCard = ({ info }) => {
	return (
		<div className="m-1 p-1 border border-red-700">
			<VideoCard info={info} />
			<h2>Sponsored</h2>
		</div>
	);
};

export default VideoCard;
