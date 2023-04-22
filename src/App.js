import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Upload from "./pages/Upload/Upload";
import Home from "./pages/Home/Home";

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
