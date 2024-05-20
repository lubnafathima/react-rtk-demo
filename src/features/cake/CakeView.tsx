import { useSelector } from "react-redux";

const CakeView = () => {
  const numOfCakes = useSelector(state => state.cake.numOfCakes);
   return (
     <div>
       <h2>Number of cakes - {numOfCakes}</h2>
       <button>Order</button>
       <button>Restock</button>
     </div>
   )
 }
 
 export default CakeView
 