import "./VideoListItem.scss";

function VideoListItem({ clickHandler, videos }) {
  const { id, title, channel, image } = videos;

  return (
    <div className="item video__list" onClick={() => clickHandler(id)}>
      <div className="video__list--container">
        <div className="video__list--image-container">
          <img src={image} className="video__list--image" />
        </div>
        <div className="video__list--data-container">
          <h4 className="video__list--title">{title}</h4>
          <p className="video__list--channel">{channel}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoListItem;
