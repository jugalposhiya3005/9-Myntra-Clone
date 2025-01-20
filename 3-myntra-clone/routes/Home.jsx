import { useSelector } from "react-redux";
import HomeItem from "../src/components/HomeItem";

export default function Home() {
  const items = useSelector((store) => store.item.filteredItems);
  return (
    <main>
      <div className="items-container">
        {items.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}
