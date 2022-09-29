import { useState } from "react";
import { Link } from "react-router-dom";
import masterCardLogo from "../assets/mastercard.png";
import Card from "../components/Card/Card";
import Cardholder from "../components/Cardholder/Cardholder";
import { useDispatch, useSelector } from "react-redux";
import "../styles/cards.scss";
import { addCard } from "../redux/cardSlice";
import { useEffect } from "react";
import { getUser } from "../redux/userSlice";

const Wallet = ({ user }) => {
  let { name } = user.results[0];
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.cardList);

  useEffect(() => {
    if (cards.length < 1) {
      let initialCard = {
        accountNumber: "6980590932017867",
        accountName: `${name.first} ${name.last}`.toUpperCase(),
        expiryDate: "2024-01",
        cvcNumber: "111",
        vendorSelector: masterCardLogo,
        id: 0,
        active: true,
        color: ["darkgreen", "midnightblue", "crimson"][
          Math.floor(Math.random() * 3)
        ],
      };
      dispatch(addCard(initialCard));
    }
  }, []);

  console.log(cards);

  return (
    <div className="wallet-wrapper">
      <div className="active-card">
        <h3 className="section-heading">Active Card</h3>
        {cards &&
          cards.map((card, i) =>
            card.active ? <Card key={i} cardProps={card} /> : null
          )}
      </div>
      <div className="card-holder">
        <h3 className="section-heading">Cardholder</h3>
        {cards.length < 4 ? (
          <Link to="/addcards" state={user}>
            <button className="btn-styling">ADD NEW CARD</button>
          </Link>
        ) : (
          <h4 className="section-heading error">
            You've reached the maximum number of cards in wallet
          </h4>
        )}
        {cards.length <= 1 && (
          <h4 className="section-heading error">
            Add more cards to your wallet
          </h4>
        )}
        {cards &&
          cards.map((card, i) =>
            !card.active ? <Card key={i} cardProps={card} /> : null
          )}
      </div>
    </div>
  );
};

export default Wallet;
