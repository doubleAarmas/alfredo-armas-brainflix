import { NavLink, Route, Routes, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import PlayingVideo from "../../components/PlayingVideo/PlayingVideo";
import VideoList from "../../components/VideoList/VideoList";

function Home() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});
  const videoClick = (videoId) => {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=4411685c-edc5-4991-9b0a-9384dd5c2b79`
      )
      .then((response) => {
        const selectedVideoList = response.data;
        setSelectedVideo(selectedVideoList);
        const filteredVideoList = filterVideos(videos);
        setVideos(filteredVideoList);
      });
  };
  function filterVideos(videosArray, videoId) {
    return videosArray.filter((videosObject) => videosObject.id !== videoId);
  }
  function requestVideoDetails(videoId) {
    return axios.get(
      `https://project-2-api.herokuapp.com/videos/${videoId}/?api_key=4411685c-edc5-4991-9b0a-9384dd5c2b79`
    );
  }
  useEffect(() => {
    axios
      .get(
        "https://project-2-api.herokuapp.com/videos?api_key=4411685c-edc5-4991-9b0a-9384dd5c2b79"
      )
      .then((response) => {
        const filteredVideoList = filterVideos(response.data);
        setVideos(filteredVideoList);
        return requestVideoDetails(response.data[0].id);
      })
      .then((response) => {
        console.log(response.data);
        const mainVideo = response.data;
        setSelectedVideo(mainVideo);
      });
  }, []);
  return (
    <>
      <PlayingVideo selectedVideo={selectedVideo} />
      <div className="video__components">
        <VideoDetails selectedVideo={selectedVideo} />
        <VideoList clickHandler={videoClick} videos={videos} />
      </div>
    </>
  );
}
export default Home;
