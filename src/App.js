import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import{ BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from'./Pages/Cart';
import Footer from './Components/Footer/Footer';
import banner from './Components/Assets/banner.png'


function App() {
  return (                
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
             <Route path='/' element={<Shop/>}/>
              <Route path='/clothing' element={<ShopCategory banner={banner} category="clothing"/>}/>
              <Route path='/shoes' element={<ShopCategory banner={banner} category="shoes"/>}/>
              <Route path='/homeAccessories' element={<ShopCategory banner={banner} category="homeAccessories"/>}/>
              <Route path='/cosmetics' element={<ShopCategory banner={banner} category="cosmetics"/>}/>
              <Route path='/gadgets' element={<ShopCategory banner={banner} category="gadgets"/>}/>
             <Route path='/product/:productId' element={<Product/>}/>  
             
             
              
  
             <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
