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
      <Link to="/addcards">
        <button className="btn-styling">ADD NEW CARD</button>
      </Link>
      {cards.length > 1 ? (
        <Cardholder setActiveCard={setActiveCard} activeCard={activeCard} />
      ) : (
        <h4 className="error-heading">
          There are no other cards in your wallet
        </h4>
      )}
      {cards.length >= 4 && (
        <h4 className="error-heading">
          You've reached the maximum amount of cards
        </h4>
      )}
    </main>
  );
};

export default Wallet;
