import { useState } from "react";
import { Link } from "react-router-dom";
// import { getUser } from "../redux/userSlice";
import Card from "../components/Card/Card";
import Cardholder from "../components/Cardholder/Cardholder";
import { useDispatch, useSelector } from "react-redux";
import "../styles/cards.scss";
import { addUser } from "../redux/cardSlice";
import { useEffect } from "react";

const Wallet = () => {
  const dispatch = useDispatch();

  const { cards, user } = useSelector((state) => state.cardList);

  const [activeCard, setActiveCard] = useState(cards[0]);

  return (
    <main className="main cards">
      <h2 className="page-heading">E-Wallet</h2>
      <h3 className="section-heading">Active Card</h3>
      {cards && (
        <Card
          accountNumber={activeCard.accountNumber}
          accountName={activeCard.accountName || user}
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
