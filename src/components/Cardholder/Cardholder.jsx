// import Card from "../Card/Card";
// import "../../styles/cards.scss";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteCard } from "../../redux/cardSlice";

// const Cardholder = ({ setActiveCard, activeCard }) => {
//   const dispatch = useDispatch();
//   const { cards, user } = useSelector((state) => state.cardList);

//   const handleClick = (id) => {
//     setActiveCard(cards[id]);
//   };

//   const handleDelete = (id) => {
//     dispatch(deleteCard(id));
//   };

//   console.log(activeCard);

//   return (
//     <section className="active-card cardholder">
//       {cards.map((card) => (
//         <div
//           key={card.id}
//           className={
//             activeCard === cards[card.id] ? "hidden" : "click-container"
//           }
//         >
//           <Card
//             accountNumber={card.accountNumber}
//             accountName={card.accountName}
//             expiryDate={card.expiryDate}
//             cvcNumber={card.cvcNumber}
//             vendorSelector={card.vendorSelector}
//             inCardHolder={true}
//             handleActivateBtn={() => handleClick(card.id)}
//             handleDeleteBtn={() => handleDelete(card.id)}
//           />
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Cardholder;
