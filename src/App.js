import "./App.css";
import { BrowserRouter as Router, Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";
import HomePath from "./components/HomePath";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePath />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
