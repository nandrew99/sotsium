import "./style.css";
import Marquee from "../marquee/Marquee";
import { allItems } from "../helpers/ItemList";
import { NavLink } from "react-router-dom";
const HeaderCards = () => {
    return ( 
        <div className="shoping_cards">
                <Marquee/>
               <div className="shoping_cards_row">
                  <div className="shoping_card shop_card_xl shop_card shop_card_first">
                     <NavLink  to={`/item/0`} className="shoping_card_a">
                        <div className="cover_item">
                           <div className="shoping_card_img flex_img_cover">
                              <img src={allItems[0].img1} alt="1"/>
                           </div>
                           <div className="shoping_card_info">
                              <div className="shoping_card_price">{allItems[0].price}</div>
                              <div className="shoping_card_des">{allItems[0].stock}</div>
                           </div>
                        </div>
                     </NavLink>
                  </div>
                  <div className="shoping_card shop_card_xl shop_card shop_card_second">
                     <div>
                        <div className="shoping_cards_sm_row">
                           <div className="shoping_card_sm shop_card">
                              <NavLink  to={`/item/1`}href="/#" className="shoping_card_a">
                                 <div className="shoping_card_sm_img">
                                    <img src={allItems[1].img1} alt="/#"/>
                                 </div>
                                 <div className="shoping_card_sm_info">
                                    <div className="shoping_card_sm_price">{allItems[1].price}</div>
                                    <div className="shoping_card_sm_des">{allItems[1].stock}</div>
                                 </div>
                              </NavLink>
                           </div>
                           <div className="shoping_card_sm shop_card">
                              <NavLink  to={`/item/2`}href="/#" className="shoping_card_a">
                                 <div className="shoping_card_sm_img">
                                    <img src={allItems[2].img1} alt="/#"/>
                                 </div>
                                 <div className="shoping_card_sm_info">
                                    <div className="shoping_card_sm_price">{allItems[2].price}</div>
                                    <div className="shoping_card_sm_des">{allItems[2].stock}</div>
                                 </div>
                              </NavLink>
                           </div>
                           <div className="shoping_card_sm shop_card">
                              <NavLink  to={`/item/3`}href="/#" className="shoping_card_a">
                                 <div className="shoping_card_sm_img">
                                    <img src={allItems[3].img1} alt="/#"/>
                                 </div>
                                 <div className="shoping_card_sm_info">
                                    <div className="shoping_card_sm_price">{allItems[3].price}</div>
                                    <div className="shoping_card_sm_des">{allItems[3].stock}</div>
                                 </div>
                              </NavLink>
                           </div>
                           <div className="shoping_card_sm shop_card">
                              <NavLink  to={`/item/4`}href="/#" className="shoping_card_a">
                                 <div className="shoping_card_sm_img">
                                    <img src={allItems[4].img1} alt="/#"/>
                                 </div>
                                 <div className="shoping_card_sm_info">
                                    <div className="shoping_card_sm_price">{allItems[4].price}</div>
                                    <div className="shoping_card_sm_des">{allItems[4].stock}</div>
                                 </div>
                              </NavLink>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="shoping_cards_row">
                  <div className="shoping_card shop_card_xl shop_card shop_card_third">
                     <div>
                        <div className="shoping_cards_sm_row">
                           <div className="shoping_card_sm shop_card">
                              <NavLink  to={`/item/9`}href="/#" className="shoping_card_a">
                                 <div className="shoping_card_sm_img">
                                    <img src={allItems[9].img1} alt="/#"/>
                                 </div>
                                 <div className="shoping_card_sm_info">
                                    <div className="shoping_card_sm_price">{allItems[9].price}</div>
                                    <div className="shoping_card_sm_des">{allItems[9].stock}</div>
                                 </div>
                              </NavLink>
                           </div>
                           <div className="shoping_card_sm shop_card">
                              <NavLink  to={`/item/5`}href="/#" className="shoping_card_a">
                                 <div className="shoping_card_sm_img">
                                    <img src={allItems[5].img1} alt="/#"/>
                                 </div>
                                 <div className="shoping_card_sm_info">
                                    <div className="shoping_card_sm_price">{allItems[5].price}</div>
                                    <div className="shoping_card_sm_des">{allItems[5].stock}</div>
                                 </div>
                              </NavLink>
                           </div>
                           <div className="shoping_card_sm shop_card">
                              <NavLink  to={`/item/12`}href="/#" className="shoping_card_a">
                                 <div className="shoping_card_sm_img">
                                    <img src={allItems[12].img1} alt="/#"/>
                                 </div>
                                 <div className="shoping_card_sm_info">
                                    <div className="shoping_card_sm_price">{allItems[12].price}</div>
                                    <div className="shoping_card_sm_des">{allItems[12].stock}</div>
                                 </div>
                              </NavLink>
                           </div>
                           <div className="shoping_card_sm shop_card">
                              <NavLink  to={`/item/15`}href="/#" className="shoping_card_a">
                                 <div className="shoping_card_sm_img">
                                    <img src={allItems[15].img1} alt="/#"/>
                                 </div>
                                 <div className="shoping_card_sm_info">
                                    <div className="shoping_card_sm_price">{allItems[15].price}</div>
                                    <div className="shoping_card_sm_des">{allItems[15].stock}</div>
                                 </div>
                              </NavLink>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="shoping_card shop_card_xl shop_card shop_card_four">
                     <NavLink  to={`/item/10`}href="/#" className="shoping_card_a">
                        <div className="cover_item">
                           <div className="shoping_card_img flex_img_cover">
                              <img src={allItems[10].img1} alt="1"/>
                           </div>
                           <div className="shoping_card_info">
                              <div className="shoping_card_price">{allItems[10].price}</div>
                              <div className="shoping_card_des">{allItems[10].stock}</div>
                           </div>
                        </div>
                     </NavLink>
                  </div>
               </div>
            
         </div>
     );
}
 
export default HeaderCards;