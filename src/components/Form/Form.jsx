import PreviewCard from "..//PreviewCard/PreviewCard";
import placeHolder from "../../assets/placeholder.png";
import mastercardLogo from "../../assets/mastercard.png";
import visaLogo from "../../assets/visa-2.png";
import amexLogo from "../../assets/amex.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addCard } from "../../redux/cardSlice";
import "../../styles/form.scss";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { latestId } = useSelector((state) => state.cardList);
  const { user } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    accountNumber: "",
    accountName: "",
    expiryDate: "",
    cvcNumber: "",
    vendorSelector: placeHolder,
    id: latestId + 1,
    color: ["darkgreen", "midnightblue", "crimson"][
      Math.floor(Math.random() * 3)
    ],
  });

  let { name } = user.results[0];
  let userName = `${name.first.toUpperCase()} ${name.last.toUpperCase()}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCard(formData));
    navigate("/");
  };

  return (
    <>
      <PreviewCard
        accountNumber={formData.accountNumber}
        accountName={
          !user ? formData.accountName : (formData.accountName = userName)
        }
        expiryDate={formData.expiryDate}
        cvcNumber={formData.cvcNumber}
        vendorSelector={formData.vendorSelector}
      />
      <h3 className="section-heading">Card Information</h3>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="accountNumber">Account Number</label>
        <input
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, accountNumber: e.target.value })
          }
          value={formData.accountNumber}
          inputMode="numeric"
          pattern="[0-9]{16}"
          maxLength={16}
          id="accountNumber"
          name="accountNumber"
          className="input account-info"
          required
        />
        <label htmlFor="accountName">Cardholder Name</label>
        <input
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, accountName: e.target.value })
          }
          value={
            !user ? formData.accountName : (formData.accountName = userName)
          }
          id="accountName"
          name="accountName"
          className="input account-info"
          required
        />
        <div className="expiryCVC-container">
          <div className="date-container">
            <label htmlFor="expiryDate">Valid Thru</label>
            <input
              type="month"
              onChange={(e) =>
                setFormData({ ...formData, expiryDate: e.target.value })
              }
              value={formData.expiryDate}
              id="expiryDate"
              name="expiryDate"
              className="input expiry-cvc date"
              required
            />
          </div>
          <div className="cvc-container">
            <label htmlFor="cvcNumber">CVC</label>
            <input
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, cvcNumber: e.target.value })
              }
              value={formData.cvcNumber}
              pattern="[0-9]{3}"
              maxLength={3}
              id="cvcNumber"
              name="cvcNumber"
              className="input expiry-cvc number"
              required
            />
          </div>
        </div>
        <label htmlFor="vendorSelector">Vendor</label>
        <select
          name="vendorSelector"
          id="vendorSelector"
          onChange={(e) =>
            setFormData({ ...formData, vendorSelector: e.target.value })
          }
          value={formData.vendorSelector}
          className="vendor-selector"
        >
          <option value={placeHolder} disabled>
            Select Card Vendor
          </option>
          <option value={visaLogo}>VISA</option>
          <option value={mastercardLogo}>MasterCard</option>
          <option value={amexLogo}>American Express</option>
        </select>
        <button type="submit" className="btn-styling submit">
          Add Card
        </button>
      </form>
    </>
  );
};

export default Form;
