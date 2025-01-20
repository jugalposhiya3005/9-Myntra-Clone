import { Outlet } from "react-router-dom";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import FetchItems from "../src/components/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../src/components/LoadingSpinner";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyLoading ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
