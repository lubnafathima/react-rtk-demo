import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

const IcecreamView = () => {
  const numOfIcecream = useSelector(state => state.cake.numOfIcecream);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Ice Cream - {numOfIcecream}</h2>
       <button onClick={() => dispatch(ordered())}>Order</button>
       <button onClick={() => dispatch(restocked(5))}>Restock</button>
    </div>
  );
};

export default IcecreamView;
