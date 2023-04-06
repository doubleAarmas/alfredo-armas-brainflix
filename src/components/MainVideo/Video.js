import Video from "../../assets/images/fullscreen.svg";
import "./Video.scss";
import VideoComponents from "../MainVideo/VideoComponents";
// https://medium.com/bleeding-edge/enforcing-an-aspect-ratio-on-an-html-element-in-react-and-css-27a13241c3d4
//good info for video sizing
function MainVideo() {
  return (
    <div>
      {/* needs a poster in the video for the image background while loading */}
      <video controls width="390" height="300">
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
}

export default MainVideo;
