import VideoListItem from "../VideoListItem/VideoListItem";
import "./VideoList.scss";
import { Link } from "react-router-dom";

function VideoList({ videos }) {
  return (
    <div className="video__list--main-container">
      <p className="video__list--header"> NEXT VIDEOS</p>
      <div className="nav">
        {videos.map((video) => (
          <VideoListItem
            key={video.id}
            id={video.id}
            thumbnail={video.image}
            title={video.title}
            channel={video.channel}
          />
        ))}
      </div>
    </div>
  );
}

export default VideoList;
