import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import AddCards from "./screens/AddCards";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1 className="app-heading">React Wallet</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addcards" element={<AddCards />} />
      </Routes>
    </div>
  );
}

export default App;
