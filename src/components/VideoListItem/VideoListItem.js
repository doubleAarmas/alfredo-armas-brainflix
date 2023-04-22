import "./VideoListItem.scss";
import { Link } from "react-router-dom";

function VideoListItem({ id, channel, title, thumbnail }) {
  return (
    <div className="video__list">
      <Link to={`/videos/${id}`} className="videoList__link">
        <div className="video__list--area-container">
          <div className="video__list--image-container">
            <img src={thumbnail} className="video__list--image" alt={title} />
          </div>
          <div className="video__list--data-container">
            <h4 className="video__list--title">{title}</h4>
            <p className="video__list--channel">{channel}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default VideoListItem;
