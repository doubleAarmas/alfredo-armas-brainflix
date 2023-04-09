import "./PlayingVideo.scss";
// https://medium.com/bleeding-edge/enforcing-an-aspect-ratio-on-an-html-element-in-react-and-css-27a13241c3d4
//good info for video sizing

function PlayingVideo({ selectedVideo }) {
  return (
    <div className="main__video">
      {/* needs a poster in the video for the image background while loading */}
      <video
        className="main__video--actual"
        controls
        width="320"
        height="180"
        poster={selectedVideo.image}
        type="video/mp4"
      ></video>
    </div>
  );
}

export default PlayingVideo;
