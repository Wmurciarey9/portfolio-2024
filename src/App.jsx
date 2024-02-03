import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import { Home } from "./pages/Home/Home";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
