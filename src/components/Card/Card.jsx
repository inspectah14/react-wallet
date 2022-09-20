import "../../styles/cards.scss";
import chipIcon from "../../assets/card-chip-2.png";
import contactLessIcon from "../../assets/contactless.png";
import mastercardLogo from "../../assets/mastercard.png";

const Card = (props) => {
  const { accountNumber, accountName, expiryDate, cvcNumber, vendorSelector } =
    props;

  return (
    <section className="active-card">
      <div className="card-container">
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
              src={mastercardLogo}
              className="vendor-logo"
              alt="Card Vendor Logo"
            />
          </div>
        </div>
        <div className="center-container">
          <h6 className="subheading">Account Number</h6>
          <p className="card-text-large">123456789101112</p>
          <h6 className="subheading">Valid Thru</h6>
          <p className="card-text-small">December 2030</p>
          <h6 className="subheading">CVC</h6>
          <p className="card-text-small">208</p>
        </div>
        <div className="bottom-container">
          <h6 className="subheading">Cardholder's Name</h6>
          <p className="account-name">Patrizio Lunbdergo</p>
        </div>
      </div>
    </section>
  );
};

export default Card;
