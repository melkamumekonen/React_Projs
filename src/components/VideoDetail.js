import React from 'react';



const VideoDetail = ({ video }) => {
if(!video){
    return (
<div className="ui container">
  <div className="ui active dimmer">
    <div className="ui text loader">Loading</div>
  </div>
  <p></p>
</div>
    )
}

const link = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`;
return ( <div>
    <div className="ui embed">
      <iframe title="video player" src={link} width="200" height="150" />
    </div>
    <div className="ui segment">
    <h4 className="ui header">{video.snippet.title}</h4>
    <p>{video.snippet.description}</p>
    </div>
    </div>);
}



export default VideoDetail;




//<iframe width="560" height="315" src="https://www.youtube.com/embed/4dQaGzcj-wU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>