import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./components/pages/main/Main";
import Roknrol from "./components/pages/roknrol/Roknrol";
import Heder from "./components/pages/header/Header";

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
