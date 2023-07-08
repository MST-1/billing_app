import { BrowserRouter ,Routes,Route } from "react-router-dom"; 
import { Navbar } from "../components/Nav/Navbar.js";
import { Cart } from "../Pages/Cart/Cart.js";
import { Home } from "../components/Home/Home.js";
// import { Footer } from "../components/Footer/Footer.js";
import { Invoice } from "../Pages/invoice/Invoice.js";
import {Checkout} from '../Pages/checkout/Checkout.js'


 
const Rout =()=>{
return (
<BrowserRouter>
<Navbar/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/Home" element={<Home/>}/>
<Route path="/Cart" element={<Cart/>}/>
<Route path="/Checkout" element={<Checkout/>}/>
<Route path="/Invoice" element={<Invoice/>}/>
</Routes>
{/* <Footer/> */}

</BrowserRouter>
)






}

export default Rout;