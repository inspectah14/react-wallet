import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/Card/Card";
import Form from "../components/Form/Form";

const AddCards = () => {
  const { cards, id } = useSelector((state) => state.cardList);
  console.log(cards);

  return (
    <main className="main addCards">
      <h2 className="page-heading">Add a new card</h2>
      <h3 className="section-heading">Preview Card</h3>
      <Card />
      <h3 className="section-heading">Card Information</h3>
      <Form />
      <Link to="/">
        <button>ADD CARD</button>
      </Link>
    </main>
  );
};

export default AddCards;
