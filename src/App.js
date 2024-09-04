import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/main/Main";
import Roknrol from "./components/roknrol/Roknrol";
import Heder from "./components/header/Header";
import Foter from "./components/footer/Footer";
import Metal from "./components/hard_rok/Hard";
import Rok from "./components/rok/Rok";
import Trash from "./components/trash/Trash";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Heder />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/roknrol" element={<Roknrol />} />
            <Route path="/metal" element={<Metal />} />
            <Route path="/rok" element={<Rok />} />
            <Route path="/trash" element={<Trash />} />
          </Routes>
        </div>
        <Foter />
      </BrowserRouter>
    </>
  );
}

export default App;
