import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../../store/bagSlice";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";

export default function HomeItem({ item }) {
  const dispatch = useDispatch();

  const bagItemsFound = useSelector((store) => store.bag.indexOf(item.id) >= 0);

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemoveToBag = () => {
    dispatch(bagActions.removeToBag(item.id));
  };
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={`/${item.image}`} alt="item image" />
        <div className="rating">
          {item.rating.stars} | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>

        {!bagItemsFound ? (
          <button
            className="btn-add-bag btn btn-success"
            onClick={handleAddToBag}
          >
            <GrAddCircle /> Add to Bag
          </button>
        ) : (
          <button
            className="btn-add-bag btn btn-danger"
            onClick={handleRemoveToBag}
          >
            <AiFillDelete /> Remove to Bag
          </button>
        )}
      </div>
      `
    </>
  );
}
