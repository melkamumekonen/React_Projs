import React from 'react';
import VideoItem from './VideoItem';


const VideoList = ({videos , onVideoSelect}) => {

    const list = videos.map((video) => {
    return (
        <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>
     );
     });

return ( <div className="ui relaxed divided animated list">{list}</div>);
}



export default VideoList;