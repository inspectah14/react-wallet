import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addCard } from "../redux/cardSlice";
import Card from "../components/Card/Card";
import Form from "../components/Form/Form";

const AddCards = () => {
  const dispatch = useDispatch();
  const { cards, id } = useSelector((state) => state.cardList);

  const addCardFunc = (formData) => {
    dispatch(addCard([...cards, formData]));
  };

  console.log(cards);
  console.log(id);

  return (
    <main className="main addCards">
      <h2 className="page-heading">Add a new card</h2>
      <h3 className="section-heading">Preview Card</h3>
      <Card />
      <h3 className="section-heading">Card Information</h3>
      <Form addCardFunc={addCardFunc} />
      <Link to="/">
        <button>ADD CARD</button>
      </Link>
    </main>
  );
};

export default AddCards;
