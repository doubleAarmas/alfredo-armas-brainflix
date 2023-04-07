import Views from "../../assets/images/views.svg";
import Likes from "../../assets/images/likes.svg";

function VideoDetails({ selectedVideo }) {
  const { title, channel, timestamp, views, likes } = selectedVideo;

  return (
    <div className="video__details">
      <h1>{title}</h1>
      <h4>{channel}</h4>
      <p>{timestamp}</p>
      <p>{views}</p>
      <p>{likes}</p>
    </div>
  );
}

export default VideoDetails;
