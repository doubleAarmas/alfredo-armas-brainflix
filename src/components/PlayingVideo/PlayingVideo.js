import "./PlayingVideo.scss";
function PlayingVideo({ playingVideoDetails }) {
  return (
    <div className="main__video">
      <div className="main__video--container">
        <video
          className="main__video--actual"
          controls
          poster={playingVideoDetails.image}
          type="video/mp4"
        ></video>
      </div>
    </div>
  );
}

export default PlayingVideo;
