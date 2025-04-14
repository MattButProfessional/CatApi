import "./css/App.css";
import { Routes, Route, useParams } from "react-router-dom";
import Home from "./pages/home";
import NavBar from "./components/NavBar";
import SearchScreen from "./pages/SearchScreen";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchScreen />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
