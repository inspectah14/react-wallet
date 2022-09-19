import { Link } from "react-router-dom";
import Card from "../components/Card/Card";
import Cardholder from "../components/Cardholder/Cardholder";
import "../styles/cards.scss";

const Wallet = () => {
  return (
    <main className="main cards">
      <h2 className="page-heading">E-Wallet</h2>
      <h3 className="section-heading">Active Card</h3>
      <Card />
      <h3 className="section-heading">Cardholder</h3>
      <Cardholder />
      <Link to="/addcards">
        <button>ADD NEW CARD</button>
      </Link>
    </main>
  );
};

export default Wallet;
