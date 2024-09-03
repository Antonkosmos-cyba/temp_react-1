import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/main/Main";
import Roknrol from "./components/roknrol/Roknrol";
import Heder from "./components/header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Heder />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/roknrol" element={<Roknrol />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
