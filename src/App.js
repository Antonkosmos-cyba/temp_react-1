import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/main/Main";
import Heder from "./components/header/Header";
import Foter from "./components/footer/Footer";

import Roknrol from "./components/pages/roknrol/Roknrol";
import Hard from "./components/pages/hard_rok/Hard";
import Metal from "./components/pages/metal/Metal";
import Trash from "./components/pages/trash/Trash";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Heder />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/roknrol" element={<Roknrol />} />
            <Route path="/hard" element={<Hard />} />
            <Route path="/metal" element={<Metal />} />
            <Route path="/trash" element={<Trash />} />
          </Routes>
        </div>
        <Foter />
      </BrowserRouter>
    </>
  );
}

export default App;
