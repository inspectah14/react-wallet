import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "./screens/Home";
import AddCards from "./screens/AddCards";
import Wallet from "./screens/Wallet";
import { getCardUser } from "./redux/cardSlice";
import "./App.scss";
import { getUser } from "./redux/userSlice";

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
