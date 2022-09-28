import Card from "../Card/Card";
import "../../styles/cards.scss";
import { useSelector } from "react-redux";

const Cardholder = ({ setActiveCard, activeCard }) => {
  const { cards, user } = useSelector((state) => state.cardList);

  const handleClick = (i) => {
    setActiveCard(cards[i]);
  };

  return (
    <section className="active-card cardholder">
      {cards.map((card, i) => (
        <div
          onClick={() => handleClick(i)}
          key={i}
          className={activeCard === cards[i] ? "hidden" : "click-container"}
        >
          <Card
            accountNumber={card.accountNumber}
            accountName={card.accountName || user}
            expiryDate={card.expiryDate}
            cvcNumber={card.cvcNumber}
            vendorSelector={card.vendorSelector}
          />
        </div>
      ))}
    </section>
  );
};

export default Cardholder;
