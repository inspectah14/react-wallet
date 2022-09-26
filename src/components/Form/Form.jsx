import mastercardLogo from "../../assets/mastercard.png";
import visaLogo from "../../assets/visa.png";
import amexLogo from "../../assets/amex.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addCard } from "../../redux/cardSlice";

import "../../styles/form.scss";

const Form = () => {
  // const [isDisabled, setIsDisabled] = useState(false);
  const [formData, setFormData] = useState({
    accountNumber: "",
    accountName: "",
    expiryDate: "",
    cvcNumber: "",
    vendorSelector: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userGenerator);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCard(formData));
    navigate("/");
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="accountNumber">Account Number (16 digits)</label>
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
        value={!user ? formData.accountName : (formData.accountName = user)}
        id="accountName"
        name="accountName"
        className="input account-info"
        required
      />
      <div className="expiryCVC-container">
        <label htmlFor="expiryDate">Valid Thru</label>
        <input
          type="month"
          onChange={(e) =>
            setFormData({ ...formData, expiryDate: e.target.value })
          }
          value={formData.expiryDate}
          id="expiryDate"
          name="expiryDate"
          className="input expiry-cvc"
          required
        />
        <label htmlFor="cvcNumber">CVC (3 digits)</label>
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
          className="input expiry-cvc"
          required
        />
      </div>
      <label htmlFor="vendorSelector">Vendor</label>
      <select
        name="vendorSelector"
        id="vendorSelector"
        onChange={(e) =>
          setFormData({ ...formData, vendorSelector: e.target.value })
        }
        value={formData.vendorSelector}
      >
        <option value="" disabled>
          Select Card Vendor
        </option>
        <option value={visaLogo}>VISA</option>
        <option value={mastercardLogo}>MasterCard</option>
        <option value={amexLogo}>American Express</option>
      </select>
      <button type="submit"> Add card </button>
    </form>
  );
};

export default Form;
