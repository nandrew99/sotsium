import "./styles/main.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hoodies from "./pages/Hoodies";
import CartFirstPage from "./pages/CartFirstPage";
import CartSecond from "./components/cartsecond/CartSecond";
import Shoppers from "./pages/Shoppers";
import Other from "./pages/Other";
import Main from "./pages/Main";
import ItemPage from "./pages/ItemPage";
import TShirt from "./pages/Tshirt";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import ScrollToTop from "./components/utils/scrolltotop";
function App() {
  return (
      <div className="App">
        <div className="wrapper">
            <Router>
              <ScrollToTop/>
            <Header/>
            <Routes>
              <Route path="item/:id" element={<ItemPage/>}/>
              <Route path="/" element={<Main/>}/>
              <Route path="/hoodies" element={<Hoodies/>}/>
              <Route path="/cart2" element={<CartSecond/>}/>
              <Route path="/shoppers" element={<Shoppers/>}/>
              <Route path="/other" element={<Other/>}/>
              <Route path="/cart1" element={<CartFirstPage/>}/>
              <Route path="/tshirt" element={<TShirt/>}/>
            </Routes>
            <Footer/>
            </Router>
            </div>
      </div> 
           
  );
}

export default App;
