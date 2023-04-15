import "./VideoListItem.scss";
import { Link, useNavigate } from "react-router-dom";

function VideoListItem({ clickHandler, videos }) {
  const { id, title, channel, image } = videos;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/selectedVideoHome/${id}`);
  };

  return (
    <div className="video__list" onClick={() => clickHandler(id)}>
      <Link to={`/SelectedVideoHome/${id}`} className="videoList__link">
        <div className="video__list--area-container">
          <div className="video__list--image-container">
            <img src={image} className="video__list--image" />
          </div>
          <div className="video__list--data-container">
            <h4 className="video__list--title">{title}</h4>
            <p className="video__list--channel">{channel}</p>
          </div>
        </div>
      </Link>{" "}
    </div>
  );
}

export default VideoListItem;
