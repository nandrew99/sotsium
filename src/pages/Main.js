import HeaderCards from "../components/cards/HeaderCards";
import PhotoMain from "../components/photomain/PhotoMain";
import Marquee from "../components/marquee/Marquee";
import FooterCards from "../components/cards/Footercards";
import Comments from "../components/comments/Comments";
const Main = () => {
    return ( 
        <>
        <div className="container">
            <HeaderCards/>
            <PhotoMain/>
            <Marquee/>
            <FooterCards/>
            <Marquee/>
            <Comments/>
            </div>
        </>
     );
}
 
export default Main;