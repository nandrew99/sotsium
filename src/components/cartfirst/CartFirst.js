import cartImg from "./../../img/1.png";
import "./style.css";
const CartFirst = () => {
    return ( 
    <div className="cart_all">
        <div className="cart_content">
            <div className="cards">
                <div className="card_item">
                    <div className="card_item_img">
                    <img src={cartImg} alt="1"/>
                    </div>
                    <div className="card_item_info_manage">
                    <div className="card_item_info">
                        <div className="span">
                            <span>T-shirt:</span><span>«SYMBIOSIS»</span>
                        </div>
                        <div className="span">
                            <span>Size:</span><span>M</span>
                        </div>
                        <div className="span">
                            <span>Color:</span><span>Black</span>
                        </div>
                        <div className="span">
                            <span>Price:</span><span>599₴</span>
                        </div>
                    </div>
                    <div className="card_manage">
                        <span>599</span>
                        <div className="add_btn_row">
                            <button className="minus">-</button> 
                            <input name="input" type="number" className="val_num" defaultValue="1"/>
                            <button className="plus">+</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="card_item">
                    <div className="card_item_img">
                    <img src={cartImg} alt="1"/>
                    </div>
                    <div className="card_item_info_manage">
                    <div className="card_item_info">
                        <div className="span">
                            <span>T-shirt:</span><span>«SYMBIOSIS»</span>
                        </div>
                        <div className="span">
                            <span>Size:</span><span>M</span>
                        </div>
                        <div className="span">
                            <span>Color:</span><span>Black</span>
                        </div>
                        <div className="span">
                            <span>Price:</span><span>599₴</span>
                        </div>
                    </div>
                    <div className="card_manage">
                        <span>599</span>
                        <div className="add_btn_row">
                            <button className="minus">-</button> 
                            <input name="input" type="number" className="val_num" defaultValue="1"/>
                            <button className="plus">+</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="card_item">
                    <div className="card_item_img">
                    <img src={cartImg} alt="1"/>
                    </div>
                    <div className="card_item_info_manage">
                    <div className="card_item_info">
                        <div className="span">
                            <span>T-shirt:</span><span>«SYMBIOSIS»</span>
                        </div>
                        <div className="span">
                            <span>Size:</span><span>M</span>
                        </div>
                        <div className="span">
                            <span>Color:</span><span>Black</span>
                        </div>
                        <div className="span">
                            <span>Price:</span><span>599₴</span>
                        </div>
                    </div>
                    <div className="card_manage">
                        <span>599</span>
                        <div className="add_btn_row">
                            <button className="minus">-</button> 
                            <input name="input" type="number" className="val_num" defaultValue="1"/>
                            <button className="plus">+</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="card_item">
                    <div className="card_item_img">
                    <img src={cartImg} alt="1"/>
                    </div>
                    <div className="card_item_info_manage">
                    <div className="card_item_info">
                        <div className="span">
                            <span>T-shirt:</span><span>«SYMBIOSIS»</span>
                        </div>
                        <div className="span">
                            <span>Size:</span><span>M</span>
                        </div>
                        <div className="span">
                            <span>Color:</span><span>Black</span>
                        </div>
                        <div className="span">
                            <span>Price:</span><span>599₴</span>
                        </div>
                    </div>
                    <div className="card_manage">
                        <span>599</span>
                        <div className="add_btn_row">
                            <button className="minus">-</button> 
                            <input name="input" type="number" className="val_num" defaultValue="1"/>
                            <button className="plus">+</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="check">
                <div className="total_price">
                    <div className="total_info">
                    <div className="total_info_span">
                        <span>Subtotal:</span><span>2595₴</span>
                    </div>
                    <div className="total_info_span">
                        <span>Discount:</span><span>0₴</span>
                    </div>
                    <div className="total_info_span">
                        <span>Total:</span><span>2995₴</span>
                    </div>
                    </div>
                    <div className="total_btns">
                    <div className="btn_textarea"><textarea name="coupon" maxLength="10" id="coupon" autoFocus rows="1" defaultValue="ADD COUPON"/></div>
                    <div className="check_btn">
                        <button>
                        CHECKOUT
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default CartFirst;