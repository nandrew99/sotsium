import Marquee from "../components/marquee/Marquee";
import FooterCards from "../components/cards/Footercards";
import Comments from "../components/comments/Comments";
import { useParams } from "react-router-dom";
import {allItems} from "../components/helpers/ItemList";
import back from "../img/back1.svg";
import next from "../img/next.svg";
import "./../components/item/itempage.css"
const ItemPage = () => {
    const {id}=useParams();
    const item = allItems[id];
    return ( 
           <>
           <div className="container">
           <div className="item_inf_row">
            <div className="item_img">
                <div className="item_img_row">
                    <div className="img_main">
                        <img src={item.img1} alt="1"/>
                    </div>
                    <div className="img_btn">
                        <a href="/#" className="nav_btn_a">
                        <div className="nav_icon"><img src={back} alt="#" className="nav_icon_img"/></div>
                        </a>
                        <a href="/#" className="nav_btn_a">
                        <div className="nav_icon"><img src={next} alt="#" className="nav_icon_img"/></div>
                        </a>
                    </div>
                    <div className="img_sm_row">
                        <div className="item_img_sm"><img src={item.img2} alt="1"/></div>
                        <div className="item_img_sm"><img src={item.img3} alt="1"/></div>
                        <div className="item_img_sm"><img src={item.img4} alt="1"/></div>
                        <div className="item_img_sm none"><img src={item.img5} alt="1"/></div>
                        <div className="item_img_sm none"><img src={item.img6} alt="1"/></div>
                    </div>
                </div>
            </div>
            <div className="item_text">
                <div className="item_text_row">
                    <div className="item_text_size">
                        <p>Size</p>
                        <div className="size_btn_row">
                        <div className="choice_size">
                            <input type="radio" id="radio1" name="radios" defaultValue="S" defaultChecked/><label htmlFor="radio1">S</label>
                            <input type="radio" id="radio2" name="radios" defaultValue="M"/><label htmlFor="radio2">M</label>
                            <input type="radio" id="radio3" name="radios" defaultValue="L"/><label htmlFor="radio3">L</label>
                            <input type="radio" id="radio4" name="radios" defaultValue="XL"/><label htmlFor="radio4">XL</label>
                            <input type="radio" id="radio5" name="radios" defaultValue="XXL"/><label htmlFor="radio5">XXL</label>
                        </div>
                        </div>
                    </div>
                    <div className="item_text_color">
                        <p>Color</p>
                        <div className="color_btn_row">
                        <div className="choice_color">
                            <input type="radio" id="radio11" name="radios_color" defaultValue="WHITE" defaultChecked/><label htmlFor="radio11">WHITE</label>
                            <input type="radio" id="radio22" name="radios_color" defaultValue="BLACK"/><label htmlFor="radio22">BLACK</label>
                        </div>
                        </div>
                    </div>
                    <div className="item_text_add">
                        <div className="add_btn_row">
                        <button className="minus">-</button> 
                        <input name="input" type="number" className="val_num" defaultValue="1"/>
                        <button className="plus">+</button>
                        </div>
                        <div className="add_btn_cart">
                        <button>
                        ADD TO CART
                        </button>
                        </div>
                    </div>
                    <div className="item_text_info">
                        <div className="item_text_info_row">
                        <div className="item_text_info_p1 ">
                            <div className="item_text_des">
                                <h2>{item.type}</h2>
                                <p>{item.title}</p>
                            </div>
                            <div className="price">{item.price}</div>
                        </div>
                        <div className="item_text_info_p">
                            <h2>Description</h2>
                            <p>{item.des}</p>
                        </div>
                        <div className="item_text_info_p">
                            <h2>Fabric</h2>
                            <p>{item.fabric}</p>
                        </div>
                        <div className="item_text_info_p">
                            <h2>Density</h2>
                            <p>{item.density}</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <Marquee/>
            <FooterCards/>
            <Marquee/>
            <Comments/>
           </div>
           </>
     );
}
 
export default ItemPage ;