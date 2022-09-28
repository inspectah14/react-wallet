import Card from "../Card/Card";
import "../../styles/cards.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteCard } from "../../redux/cardSlice";

const Cardholder = ({ setActiveCard, activeCard }) => {
  const dispatch = useDispatch();
  const { cards, user } = useSelector((state) => state.cardList);

  const handleClick = (e, id) => {
    e.preventDefault();
    setActiveCard(cards[id]);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deleteCard(id));
  };

  return (
    <section className="active-card cardholder">
      {cards.map((card) => (
        <div key={card.id}>
          <div
            className={
              activeCard === cards[card.id] ? "hidden" : "click-container"
            }
          >
            <Card
              accountNumber={card.accountNumber}
              accountName={card.accountName || user}
              expiryDate={card.expiryDate}
              cvcNumber={card.cvcNumber}
              vendorSelector={card.vendorSelector}
              inCardHolder={true}
              handleActivateBtn={(e) => handleClick(e, card.id)}
              handleDeleteBtn={(e) => handleDelete(e, card.id)}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Cardholder;
