import "./App.scss";
import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import PlayingVideo from "./components/PlayingVideo/PlayingVideo";
import VideoList from "./components/VideoList/VideoList";

import Upload from "./pages/Upload/Upload";
import Home from "./pages/Home/Home";
import SelectedVideoHome from "./pages/SelectedVideoHome/SelectedVideoHome";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/videos/:idFromParams" element={<Home />} />
      </Routes>
    </>
  );
}
export default App;
