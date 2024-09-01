import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./pages/main/Main";
import Roknrol from "./pages/roknrol/Roknrol";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
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
