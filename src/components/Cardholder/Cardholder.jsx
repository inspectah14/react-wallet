import Card from "../Card/Card";
import "../../styles/cards.scss";

const Cardholder = () => {
  return (
    <section className="active-card cardholder">
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
};

export default Cardholder;
