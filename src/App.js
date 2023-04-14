import "./App.scss";
import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import PlayingVideo from "./components/PlayingVideo/PlayingVideo";
import VideoList from "./components/VideoList/VideoList";
import videosListData from "./data/videos.json";
import videoSection from "../src/data/video-details.json";
import Upload from "./pages/Upload/Upload";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Upload" element={<Upload />} />
      </Routes>
    </>
  );
}
export default App;
