import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Flash from './Components/Flash/Flash';
import Products from './Components/Products/Products';
import Pic1 from './Components/Assets/Frame 427318441.svg';
import Pic2 from './Components/Assets/Frame 427318442.svg';
import Pic3 from './Components/Assets/Frame 427318443.svg';
import Pic4 from './Components/Assets/Frame 427318444.svg';
import star from './Components/Assets/star.svg';
import Load from './Components/Load/Load';
import Footer from './Components/Footer/Footer';
import Checkout from './Components/Checkout/Checkout';



function App() {
  const product = [
    {image: Pic1, star: star, name: 'Queen size Bedding and Platform', price: '200,000', oldPrice: '250,000', inches: '20'},
    {image: Pic2, star: star, name: 'King size Bedding and Platform', price: '500,000', oldPrice: '600,000', inches: '30'},
    {image: Pic3, star: star, name: 'Queen size Bedding and Platform', price: '250,000', oldPrice: '350,000', inches: '25'},
    {image: Pic4, star: star, name: 'Queen size Bedding and Platform', price: '250,000', oldPrice: '300,000', inches: '24'},
    {image: Pic4, star: star, name: 'Queen size Bedding and Platform', price: '125,000', oldPrice: '130,000', inches: '20'},
    {image: Pic1, star: star, name: 'Queen size Bedding and Platform', price: '200,000', oldPrice: '250,000', inches: '20'},
    {image: Pic2, star: star, name: 'King size Bedding and Platform', price: '500,000', oldPrice: '600,000', inches: '30'},
    {image: Pic3, star: star, name: 'Queen size Bedding and Platform', price: '250,000', oldPrice: '350,000', inches: '25'},
    {image: Pic4, star: star, name: 'Queen size Bedding and Platform', price: '250,000', oldPrice: '300,000', inches: '24'},
    {image: Pic3, star: star, name: 'Queen size Bedding and Platform', price: '125,000', oldPrice: '130,000', inches: '20'},
    {image: Pic1, star: star, name: 'Queen size Bedding and Platform', price: '200,000', oldPrice: '250,000', inches: '20'},
    {image: Pic2, star: star, name: 'King size Bedding and Platform', price: '500,000', oldPrice: '600,000', inches: '30'},
    
  ]


  return (
    <div>
    <Navbar/>
    <Header/>
    <Flash/>
    <main>
      <div className="product-container">
        {product.map((product, index) => (
          <Products key={index} {...product} />
        ))}
      </div>
    </main>
    <Load/>
    <Footer/>
    <Checkout/>
    </div>
  );
}

export default App;
