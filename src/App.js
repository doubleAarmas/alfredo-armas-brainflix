import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import PlayingVideo from "./components/PlayingVideo/PlayingVideo";
import VideoList from "./components/VideoList/VideoList";
import videosListData from "./data/videos.json";
import videoSection from "../src/data/video-details.json";
// import VideoComponents from "./components/MainVideo/VideoComponents";

function App() {
  const [videos, setVideos] = useState(videosListData);

  const [selectedVideo, setSelectedVideo] = useState(videoSection[0]);

  const videoClick = (videoId) => {
    const foundVideo = videoSection.find(
      (videoInformation) => videoInformation.id === videoId
    );
    setSelectedVideo(foundVideo);
    const filteredVideos = videoSection.filter(
      (videoInformation) => videoInformation.id !== selectedVideo.id
    );
    setVideos(filteredVideos);
  };

  return (
    <div>
      <Header />
      <PlayingVideo selectedVideo={selectedVideo} />
      <VideoDetails selectedVideo={selectedVideo} />
      <VideoList clickHandler={videoClick} videos={videos} />
    </div>
  );
}

export default App;
