import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../../store/itemSlice";
import { fetchStatusAction } from "../../store/fetchStatusSlice";

export default function FetchItems() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://54.161.230.216:5173/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        
        dispatch(fetchStatusAction.markFetchDone());
        dispatch(fetchStatusAction.markFetchingFinished());
        dispatch(itemActions.addInitialItems(items[0]));
      });
  }, [fetchStatus]);

  return <></>;
}
