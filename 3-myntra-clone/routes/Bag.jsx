import BagItem from "../src/components/BagItem";
import BagSummary from "../src/components/BagSummary";
import { useSelector } from "react-redux";

const Bag = () => {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((store) => store.item.filteredItems);

  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.length > 0 ? (
              finalItems.map((item) => <BagItem key={item.id} item={item} />)
            ) : (
              <h1> Cart is Empty</h1>
            )}
          </div>
          {finalItems.length > 0 &&< BagSummary/>}
        </div>
      </main>
    </>
  );
};

export default Bag;
