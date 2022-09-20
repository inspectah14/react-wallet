import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "../../styles/form.scss";

const Form = () => {
  const [formData, setFormData] = useState({
    accountNumber: "",
    accountName: "",
    expiryDate: "",
    cvcNumber: "",
    vendorSelector: "",
  });
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userGenerator);

  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate("/");
    console.log(formData);
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
          !user
            ? formData.accountName
            : user.map(
                (item) =>
                  `${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`
              )
        }
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
        <option value="Visa">VISA</option>
        <option value="Mastercard">MasterCard</option>
        <option value="Diners">Diner's Club</option>
      </select>
      <button type="submit"> Add card </button>
    </form>
  );
};

export default Form;
