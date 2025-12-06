import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import MovieDetail from "./Pages/MovieDetail";
import Saved from "./Pages/Saved";
import Landing from "./Pages/Landing";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </div>
  );
};

export default App;
