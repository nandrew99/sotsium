import PhotoMain from "../components/photomain/PhotoMain";
import Marquee from "../components/marquee/Marquee";
import FooterCards from "../components/cards/Footercards";
import Comments from "../components/comments/Comments";
import NavBtn from "../components/navbtn/NavBtn";
import {allItems} from "../components/helpers/ItemList";
import SimpleItem from "../components/cards/simple/SimpleItem";
const Other = () => {
    return ( 
        <div className="container">
            <Marquee/>
            <div className="simple_item_row">
                {allItems.map((allItems, index)=>{
                    return (
                        allItems.other&&(
                        <SimpleItem 
                        key={index}
                        stock={allItems.stock}
                        price={allItems.price}
                        img1={allItems.img1}
                        title={allItems.title}
                        index={index}
                        />)
                    );
                })}
            </div>
            <PhotoMain/>
            <Marquee/>
            <FooterCards/>
            <NavBtn/>
            <Marquee/>
            <Comments/>
        </div>
     );
}
 
export default Other;