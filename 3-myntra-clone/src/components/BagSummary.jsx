import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bagActions } from "../../store/bagSlice";

export default function BagSummary({ item }) {
    const navigate = useNavigate(); 
    const dispatch = useDispatch();
  const bagItem = useSelector((store) => store.bag);

  const items = useSelector((state) => state.item.filteredItems);

  const finalItems = items.filter((item) => {
    const itemIndex = bagItem.indexOf(item.id);
    return itemIndex >= 0;
  });

  let totalItem = bagItem.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach((item) => {
    totalMRP += item.original_price;
    totalDiscount += item.original_price - item.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + 99;

  const buyOrder = () => {
    if (confirm("Are you sure you want to buy this order?")) {
      alert("Order placed successfully");
      dispatch(bagActions.clearBag())
      navigate("/")
    }
  };
  
  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order" onClick={buyOrder}>
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
}
