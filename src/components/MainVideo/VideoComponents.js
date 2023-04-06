import { useState } from "react";
import VideoDetails from "../../data/video-details.json";

// const VideoComponents = (props) => {
//   const videos = props.videos;

//   return (
//     <div>
//       {videos.map((videos) => (
//         <div className="video-list" key={videos.id}></div>
//       ))}
//     </div>
//   );
// };

const VideoComponents = () => {
  const [videos, setVideos] = useState(VideoDetails);

  return (
    <div className="VideoLists">
      {videos.map((video) => (
        <div className="video__preview" key={video.id}>
          <h2>{video.title}</h2>
          <div className="video__details">
            <p className="video__thumbnail">By {video.image}</p>
            <p className="video__timestamp">{video.timestamp}</p>
            <p className="video__views">{video.views}</p>
            <p className="video__likes">{video.likes}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default VideoComponents;
