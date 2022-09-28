import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card/Card";
import Cardholder from "../components/Cardholder/Cardholder";
import { useSelector } from "react-redux";
import "../styles/cards.scss";

const Wallet = () => {
  const { cards, user } = useSelector((state) => state.cardList);

  const [activeCard, setActiveCard] = useState(cards[0]);

  console.log(cards);
  console.log(activeCard);

  return (
    <main className="main cards">
      <h2 className="page-heading">E-Wallet</h2>
      <h3 className="section-heading">Active Card</h3>
      <Card
        accountNumber={activeCard.accountNumber}
        accountName={activeCard.accountName || user}
        expiryDate={activeCard.expiryDate}
        cvcNumber={activeCard.cvcNumber}
        vendorSelector={activeCard.vendorSelector}
      />
      <h3 className="section-heading">Cardholder</h3>
      {cards.length > 1 ? (
        <Cardholder setActiveCard={setActiveCard} activeCard={activeCard} />
      ) : (
        <h4>Add more cards to your wallet</h4>
      )}
      {cards.length >= 4 && <h4>You've reached the maximum amount of cards</h4>}
      <Link to="/addcards">
        <button>ADD NEW CARD</button>
      </Link>
    </main>
  );
};

export default Wallet;
