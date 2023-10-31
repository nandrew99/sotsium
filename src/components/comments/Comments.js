
import star from "../../img/star.svg";
import NavBtn from "../navbtn/NavBtn";
import "./style.css";
const Comments = () => {
    return ( 
        
            <>
            <div className="rewiews_row">
               <div className="rewiew_card">
                  <div className="rewiew_card_top">
                     <div className="rewiew_card_name">
                        <h2>Катруся</h2>
                     </div>
                     <div className="rewiew_card_star">
                        <img src={star} alt="#"/>
                        <img src={star} alt="#"/>
                        <img src={star} alt="#"/>
                        <img src={star} alt="#"/>
                        <img src={star} alt="#"/>
                     </div>
                  </div>
                  <div className="rewiew_text">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quam dolores officia eligendi et distinctio nisi sit accusamus error fugiat.</p>
                  </div>
               </div>
               <div className="rewiew_card">
                  <div className="rewiew_card_top">
                     <div className="rewiew_card_name">
                        <h2>Катруся</h2>
                     </div>
                     <div className="rewiew_card_star">
                        <img src={star} alt="#"/>
                        <img src={star} alt="#"/>
                        <img src={star} alt="#"/>
                        <img src={star} alt="#"/>
                        <img src={star} alt="#"/>
                     </div>
                  </div>
                  <div className="rewiew_text">
                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, saepe? Expedita rerum, a Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, debitis culpa. Repudiandae, ratione! Deserunt sint dolores magnam voluptatum quos praesentium debitis. Labore nihil laborum consequatur voluptas magni? Ipsam impedit enim delectus nemo asperiores eaque nulla suscipit doloribus distinctio, id obcaecati quod placeat quam deleniti porro eos unde sed et odio quasi nostrum sapiente labore. Aliquid beatae unde pariatur, autem officiis eaque fugiat voluptate voluptas ducimus quidem, magni corporis reprehenderit in ab delectus? Deleniti aliquam at aliquid dolorum officiis, a recusandae nam? Voluptatum molestiae repellendus expedita odit fugiat natus inventore minima. Culpa omnis consequatur explicabo modi ex! Sapiente quo nihil ipsa!
                     </p>
                  </div>
               </div>
            </div>
        <NavBtn/>
         <div className="leave">
            <div className="leave_con">
               <div className="leave_text">
                  Spill the tea, sis! Let us know what you really think. 
                  <br/> Leave a review and make our day!
               </div>
               <div className="leave_btn">
                  <button>
                  Leave a Review
                  </button>
               </div>
            </div>
         </div>
            </>
        
     );
}
 
export default Comments;