import { Routes, Route } from "react-router-dom";
import "./App.scss";
import AddCards from "./screens/AddCards";
import Wallet from "./screens/Wallet";

function App() {
  return (
    <div className="App">
      <h1 className="app-heading">React Wallet</h1>
      <Routes>
        <Route path="/" element={<Wallet />} />
        <Route path="/addcards" element={<AddCards />} />
      </Routes>
    </div>
  );
}

export default App;
