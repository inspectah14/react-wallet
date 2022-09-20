import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddCards from "./screens/AddCards";
import Wallet from "./screens/Wallet";
import { getUser } from "./redux/userSlice";
import "./App.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

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
