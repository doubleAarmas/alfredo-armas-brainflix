import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
import Video from "./components/MainVideo/Video";
import VideoSection from "../src/data/video-details.json";
import VideoComponents from "./components/MainVideo/VideoComponents";

function App() {
  const [videos, setVideos] = useState(VideoSection);

  return (
    <div>
      <Header></Header>
      <Video></Video>
      <VideoComponents videos={videos} />
      {/* <Description></Description>
      <Comments></Comments> */}
    </div>
  );
}

export default App;
