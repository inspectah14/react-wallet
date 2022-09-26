import Card from "../Card/Card";
import "../../styles/cards.scss";
import { useSelector } from "react-redux";

const Cardholder = () => {
  const { cards, id } = useSelector((state) => state.cardList);
  return (
    <section className="active-card cardholder">
      {cards.map((card, id) => (
        <Card
          key={id}
          accountNumber={card.accountNumber}
          accountName={card.accountName}
          expiryDate={card.expiryDate}
          cvcNumber={card.cvcNumber}
          vendorSelector={card.vendorSelector}
        />
      ))}
    </section>
  );
};

export default Cardholder;
