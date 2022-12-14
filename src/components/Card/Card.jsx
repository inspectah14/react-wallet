import "../../styles/cards.scss";
import chipIcon from "../../assets/card-chip-2.png";
import contactLessIcon from "../../assets/contactless.png";
import { useDispatch } from "react-redux";
import { activateCard, deleteCard } from "../../redux/cardSlice";

const Card = ({ cardProps }) => {
  const dispatch = useDispatch();

  const {
    accountNumber,
    accountName,
    expiryDate,
    cvcNumber,
    vendorSelector,
    active,
    id,
    color,
  } = cardProps;

  const activateHandler = () => {
    dispatch(activateCard(cardProps));
  };

  const deleteHandler = () => {
    dispatch(deleteCard(cardProps));
  };

  return (
    <section className="active-card">
      <div className={`card-container ${color}`}>
        <div className="top-container">
          <div className="top-container-left">
            <img src={chipIcon} className="chip-icon" alt="Card Chip" />
            <img
              src={contactLessIcon}
              className="contactless-icon"
              alt="Contactless Symbol"
            />
          </div>
          <div className="top-container-right">
            <img
              src={vendorSelector}
              className="vendor-logo"
              alt="Card Vendor Logo"
            />
          </div>
        </div>
        <div className="center-container">
          <div className="center-top-container">
            <h6 className="subheading">Account Number</h6>
            <p className="card-text-large">{accountNumber}</p>
          </div>
          <div className="center-bottom-container">
            <div className="cbc-left">
              <h6 className="subheading">Valid Thru</h6>
              <p className="card-text-small">{expiryDate}</p>
            </div>
            <div className="cbc-right">
              <h6 className="subheading">CVC</h6>
              <p className="card-text-small">{cvcNumber}</p>
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <h6 className="subheading">Cardholder's Name</h6>
          <p className="account-name"> {accountName} </p>
        </div>
        {!cardProps.active && (
          <div>
            <button
              onClick={() => activateHandler()}
              className="btn-cards activate"
            >
              Activate
            </button>
            <button
              onClick={() => deleteHandler()}
              className="btn-cards delete"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Card;
