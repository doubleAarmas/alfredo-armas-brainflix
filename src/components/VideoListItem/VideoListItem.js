function VideoListItem({ clickHandler, videos }) {
  const { id, title, channel, image } = videos;

  return (
    <div className="item" onClick={() => clickHandler(id)}>
      <img src={image} />
      <h4>{title}</h4>
      <p>{channel}</p>
    </div>
  );
}

export default VideoListItem;
