import "./style.css";
import { NavLink } from "react-router-dom";
const SimpleItem = ({img1, title, price, stock, index}) => {
    return ( 
          <NavLink className="item" to={`/item/${index}`}>
              <div className="item_img"><img src={img1} alt={title}/></div>
              <div className="item_info">
                  <p>{price}</p>
                  <p>{stock}</p>
              </div>
          </NavLink>

     );
}
 
export default SimpleItem;