import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cardSlice from "../redux/cardSlice";
import { getUser } from "../redux/userSlice";
import Wallet from "./Wallet";

const Home = () => {
  const dispatch = useDispatch();
  const { user, status } = useSelector((state) => state.user);

  useEffect(() => {
    if (!user) {
      dispatch(getUser());
    }
  }, []);

  return (
    <main className="main cards">
      <h2 className="page-heading">E-Wallet</h2>
      {user ? <Wallet user={user} /> : <h4>Loading...</h4>}
    </main>
  );
};

export default Home;
