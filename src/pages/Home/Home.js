import { NavLink, Route, Routes, Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import PlayingVideo from "../../components/PlayingVideo/PlayingVideo";
import VideoList from "../../components/VideoList/VideoList";

function Home() {
  const [videos, setVideos] = useState([]);

  const [playingVideo, setPlayingVideo] = useState([]);

  const { idFromParams } = useParams();

  //this is setting the homepage video before the list has been loaded.
  let defaultVideoId = null;
  if (videos.length > 0) {
    defaultVideoId = videos[0].id;
  }

  let videoIdToDisplay = idFromParams || defaultVideoId;

  useEffect(() => {
    if (videoIdToDisplay === null) {
      return;
    }
    //needs to be fixed below so the videos will show up from the backend
    axios
      .get(`http://localhost:8080/videos/${videoIdToDisplay}`)
      .then((response) => {
        console.log(response.data);
        setPlayingVideo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [videoIdToDisplay]);

  function requestVideoDetails(videoId) {
    return axios.get(`http://localhost:8080/videos/${videoIdToDisplay}`);
  }
  //this was the code I was trying last night to load the initial videos
  // .get("https://localHost:8080/data/videos.json")
  const filteredVideoList = videos.filter((video) => {
    return video.id !== videoIdToDisplay.id;
  });
  useEffect(() => {
    axios
      .get("http://localhost:8080/videos")
      .then((response) => {
        setVideos(response.data);
        return requestVideoDetails(response.data[0].id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <PlayingVideo playingVideoDetails={playingVideo} />
      <div className="video__components">
        <VideoDetails playingVideoDetails={playingVideo} />
        <VideoList videos={videos} />
      </div>
    </>
  );
}

export default Home;
