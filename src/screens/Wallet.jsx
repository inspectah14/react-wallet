import { useState } from "react";
import { Link } from "react-router-dom";
// import { getUser } from "../redux/userSlice";
import Card from "../components/Card/Card";
import Cardholder from "../components/Cardholder/Cardholder";
import { useSelector } from "react-redux";
import "../styles/cards.scss";

const Wallet = () => {
  const { cards, user } = useSelector((state) => state.cardList);

  const [activeCard, setActiveCard] = useState(cards[0]);

  return (
    <main className="main cards">
      <h2 className="page-heading">E-Wallet</h2>
      <h3 className="section-heading">Active Card</h3>
      {user && (
        <Card
          accountNumber={activeCard.accountNumber}
          accountName={activeCard.accountName || user[0]}
          expiryDate={activeCard.expiryDate}
          cvcNumber={activeCard.cvcNumber}
          vendorSelector={activeCard.vendorSelector}
        />
      )}
      <h3 className="section-heading">Cardholder</h3>
      <Cardholder setActiveCard={setActiveCard} activeCard={activeCard} />
      <Link to="/addcards">
        <button>ADD NEW CARD</button>
      </Link>
    </main>
  );
};

export default Wallet;
