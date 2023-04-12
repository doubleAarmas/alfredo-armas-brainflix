// import { NavLink, Route, Routes, Link } from "react-router-dom";
// import { useState } from "react";
// import Header from "./components/Header/Header";
// import VideoDetails from "./components/VideoDetails/VideoDetails";
// import PlayingVideo from "./components/PlayingVideo/PlayingVideo";
// import VideoList from "./components/VideoList/VideoList";
// import videosListData from "./data/videos.json";
// import videoSection from "../src/data/video-details.json";

// function Home() {
//   const slicedData = videosListData.slice(1);
//   const [videos, setVideos] = useState(slicedData);

//   const [selectedVideo, setSelectedVideo] = useState(videoSection[0]);

//   const videoClick = (videoId) => {
//     const foundVideo = videoSection.find(
//       (videoInformation) => videoInformation.id === videoId
//     );
//     setSelectedVideo(foundVideo);
//     const filteredVideos = videoSection.filter(
//       (videoInformation) => videoInformation.id !== videoId
//     );
//     setVideos(filteredVideos);
//   };
//   return (
//     <>
//       <PlayingVideo selectedVideo={selectedVideo} />
//       <div className="video__components">
//         <VideoDetails selectedVideo={selectedVideo} />
//         <VideoList clickHandler={videoClick} videos={videos} />
//       </div>
//     </>
//   );
// }

// export default Home;
