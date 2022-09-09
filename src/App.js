import "./App.css";
import { BrowserRouter as Router, Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";
import HomePath from "./components/HomePath";
import Laptop from "./components/laptop";
import Printer from "./components/printer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePath />} />
          <Route path="/laptop" element={<Laptop />} />
          <Route path="/printer" element={<Printer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
