import "./style.css";
import imgTotal from "./../../img/1.png";
const CartSecond = () => {
    return ( 
        <div className="container">
        <div className="wrapper_cart">
            <div className="details_delivery">
                <div className="contact_details">
                    <p>Contact details</p>
                    <div className="contact_details_textarea">
                        <textarea name="first_name" autoComplete="1" id="first_name" maxLength="20" defaultValue="First name"/>
                    </div>
                    <div className="contact_details_textarea">
                        <textarea name="last_name" id="last_name" autoComplete="2" maxLength="20" defaultValue="Last Name"/>
                    </div>
                    <div className="contact_details_textarea">
                        <textarea name="email" id="email" maxLength="20" autoComplete="3" defaultValue="Email"/>
                    </div>
                    <div className="contact_details_textarea">
                        <textarea name="phone_number" id="phone_number"  autoComplete="4" maxLength="20" defaultValue="Phone"/>
                    </div>
                </div>
                <div className="contact_delivery">
                    <p>Delivery</p>
                    <select name="contact_city" required="required">
                        <option value="">Select City</option>
                        <option value="1">Синий</option>
                        <option value="2">Зеленый</option>
                        <option value="3">Желтый</option>
                        <option value="4">Красный</option>
                        <option value="5">Оранжевый</option>
                        <option value="6">Черный</option>
                    </select>
                    <div className="contact_delivery_textarea">
                        <textarea name="nova" id="nova" maxLength="20" defaultValue="Enter «Nova Poshta» Branch Number"/>
                    </div>
                </div>
                <div className="payment">
                    <div className="radio1"><input type="radio" id="radio1" name="radios" defaultValue="Payment Online" defaultChecked/><span>Payment Online</span></div>
                    <div className="radio2"><input type="radio" id="radio2" name="radios" defaultValue="Postpaiment"/><span>Postpaiment</span></div>
                </div>
            </div>
            <div className="checkk">
                <div className="total_pricee">
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
                        PLACE AN ORDER
                        </button>
                    </div>
                </div>
            </div>
            <div class="total_items">
                    <div class="total_item">
                        <div class="img_inf">
                                <img src={imgTotal} alt="items"/>
                            <div class="inf">
                                <div><span>T-shirt:</span>«SYMBIOSIS»<span>Size:</span><span>M</span></div>
                                <div><span>QTY:</span>
                                    <span>1</span></div>
                            </div>
                        </div>
                        <div class="total_price_item">
                            599₴
                        </div>
                    </div>
                    <div class="total_item">
                        <div class="img_inf">
                            <img src={imgTotal} alt="items"/>
                            <div class="inf">
                                <div><span>T-shirt:</span>«SYMBIOSIS»<span>Size:</span><span>M</span></div>
                                <div><span>QTY:</span>
                                    <span>1</span></div>
                            </div>
                        </div>
                        <div class="total_price_item">
                            599₴
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default CartSecond;