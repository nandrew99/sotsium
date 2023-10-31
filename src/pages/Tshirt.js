import PhotoMain from "../components/photomain/PhotoMain";
import Marquee from "../components/marquee/Marquee";
import Comments from "../components/comments/Comments";
import SimpleItem from "../components/cards/simple/SimpleItem";
import { allItems } from "../components/helpers/ItemList";
import FooterCards from "../components/cards/Footercards";
const TShirt = () => {
    return ( 
        <div className="container">
            <Marquee/>
            <div className="simple_item_row">
                
                    {allItems.map((allItems, index)=>{
                        return (
                            allItems.tshirt&&(
                            <SimpleItem 
                                key={index}
                                stock={allItems.stock}
                                price={allItems.price}
                                img1={allItems.img1}
                                title={allItems.title}
                                index={index}
                            />
                            )
                        );
                    })}
                
            </div>
            <PhotoMain/>
            <Marquee/>
            <FooterCards/>
            <Marquee/>
            <Comments/>
        </div>
     );
}
 
export default TShirt;