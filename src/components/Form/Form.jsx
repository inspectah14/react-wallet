import "../../styles/form.scss";

const Form = () => {
  return (
    <form className="form">
      <label htmlFor="accountNumber">Account Number</label>
      <input
        type="number"
        min={16}
        max={16}
        id="accountNumber"
        className="input account-info"
        required
      />
      <label htmlFor="accountName">Cardholder Name</label>
      <input
        type="text"
        id="accountName"
        className="input account-info"
        required
      />
      <div className="expiryCVC-container">
        <label htmlFor="expiryDate">Valid Thru</label>
        <input
          type="month"
          id="expiryDate"
          className="input expiry-cvc"
          required
        />
        <label htmlFor="cvcNumber">CVC</label>
        <input
          type="number"
          id="cvcNumber"
          className="input expiry-cvc"
          required
        />
      </div>
      <label htmlFor="vendorSelector">Vendor</label>
      <select name="" id="vendorSelector">
        <option value="1">VISA</option>
        <option value="2">MasterCard</option>
        <option value="3">Diner's Club</option>
      </select>
    </form>
  );
};

export default Form;
