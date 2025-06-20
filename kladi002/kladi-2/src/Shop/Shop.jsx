import style from './Shop.module.css'
import { Link } from "react-router-dom";
import React, {useState} from 'react';

function Shop() {
    const [cartItems, setCartItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    function handleSelectFilter(){

    }

    function handleCartItem(event){

    }


  return (

    <div className={style.shop}>
        <nav className={style.navbar}>
          <div className={style.logo}>
            <h1>KLADI</h1>
          </div>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><a href="#shop">Shop</a></li>
            <li><Link to="/About">About us</Link></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#cart">Cart</a></li>
          </ul>

        </nav>
        
      <div className={style.welcome}>
        <h1>KLADI</h1>
        <p> Streetwear Essentials, Unmatched Vibes </p>
      </div>
      <div className={style.featureHead}>
        <h2>Featured Items</h2>
      </div>
      <div className={style.items}>
        
        <div className={style.item}>
          <img src="/src/assets/vintage jacket.jpg" alt="Item 1" />
          <h4>Vintage Jacket</h4>
          <p className={style.pricing}>Ksh.850 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p> 
        </div>
        <div className={style.item}>
            <img src="/src/assets/sneakers(white).jpg" alt="White Sneakers" />
            <h4>Classic White Sneakers</h4>
            <p className={style.pricing}>Ksh.1,200 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>
        <div className={style.item}>
            <img src="/src/assets/graphic-hoodie.jpg" alt="90s Band Hoodie" />
            <h4>Oversized Graphic Hoodie</h4>
            <p className={style.pricing}>Ksh.950 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>
        <div className={style.item}>
            <img src="/src/assets/denim-shorts.jpg" alt="Vintage Denim Shorts" />
            <h4>Denim Shorts</h4>
            <p className={style.pricing}>Ksh.850 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>
        <div className={style.item}>
            <img src="/src/assets/black-tshirts.jpg" alt="Basic Black Tees" />
            <h4>Black T-Shirts (3-Pack)</h4>
            <p className={style.pricing}>Ksh.899 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>
        <div className={style.item}>
            <img src="/src/assets/track-jacket.jpg" alt="90s Track Jacket" />
            <h4>Vintage Track Jacket</h4>
            <p className={style.pricing}>Ksh.799 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
            
        </div>
      </div>

      <div className={style.allProducts}>
        <h2>All Products</h2>
        <p>Explore our full collection of second-hand items.</p>
        <select name="#"
         id="#" 
         onChange={handleSelectFilter}
         className={style.selectFilter}>
            <option value="#">Filter</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
            
        </select>
      </div>
      <div className={style.items}>

        <div className={style.item}>
            <img src="/src/assets/track-jacket.jpg" alt="90s Track Jacket" />
            <h4>Vintage Track Jacket</h4>
            <p className={style.pricing}>Ksh.1,300 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/denim-jacket.jpg" alt="Classic Denim Jacket" />
            <h4>Classic Denim Jacket</h4>
            <p className={style.pricing}>Ksh.2,500 <button className={style.ToCart} onClick={(event) => handleCartItem(event)} >Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/ripped-jeans.jpg" alt="Ripped Jeans" />
            <h4>High-Waist Ripped Jeans</h4>
            <p className={style.pricing}>Ksh.1,800 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/oversized-hoodie.jpg" alt="Oversized Hoodie" />
            <h4>Oversized Hoodie</h4>
            <p className={style.pricing}>Ksh.1,600 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/linen-shirt.jpg" alt="Linen Shirt" />
            <h4>Linen Button-Up Shirt</h4>
            <p className={style.pricing}>Ksh.1,400 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/leather-bag.jpg" alt="Leather Crossbody Bag" />
            <h4>Leather Crossbody Bag</h4>
            <p className={style.pricing}>Ksh.2,200 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/air-max.jpg" alt="Nike Air Max" />
            <h4>Nike Air Max Sneakers</h4>
            <p className={style.pricing}>Ksh.5,500 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/crop-top.jpg" alt="Crop Top" />
            <h4>Basic Cotton Crop Top</h4>
            <p className={style.pricing}>Ksh.900 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/chino-pants.jpg" alt="Chino Pants" />
            <h4>Slim-Fit Chino Pants</h4>
            <p className={style.pricing}>Ksh.2,000 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
          <img src="/src/assets/vintage jacket.jpg" alt="Item 1" />
          <h4>Vintage Jacket</h4>
          <p className={style.pricing}>Ksh.850 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p> 
        </div>

        <div className={style.item}>
            <img src="/src/assets/sneakers(white).jpg" alt="Pre-owned White Sneakers" />
            <h4>Classic White Sneakers</h4>
            <p className={style.pricing}>Ksh.1,200 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/graphic-hoodie.jpg" alt="90s Band Hoodie" />
            <h4>Oversized Graphic Hoodie</h4>
            <p className={style.pricing}>Ksh.950 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/denim-shorts.jpg" alt="Vintage Denim Shorts" />
            <h4>Denim Shorts</h4>
            <p className={style.pricing}>Ksh.850 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/black-tshirts.jpg" alt="Basic Black Tees" />
            <h4>Black T-Shirts (3-Pack)</h4>
            <p className={style.pricing}>Ksh.899 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>


        <div className={style.item}>
            <img src="/src/assets/bomber-jacket.jpg" alt="Bomber Jacket" />
            <h4>Classic Bomber Jacket</h4>
            <p className={style.pricing}>Ksh.3,200 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/slides.jpg" alt="Slides" />
            <h4>Casual Slides</h4>
            <p className={style.pricing}>Ksh.1,100 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/printed-tee.jpg" alt="Printed T-Shirt" />
            <h4>Graphic Print T-Shirt</h4>
            <p className={style.pricing}>Ksh.1,000 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/ankle-boots.jpg" alt="Ankle Boots" />
            <h4>Women's Ankle Boots</h4>
            <p className={style.pricing}>Ksh.3,800 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/joggers.jpg" alt="Joggers" />
            <h4>Men's Jogger Pants</h4>
            <p className={style.pricing}>Ksh.1,700 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/sun-hat.jpg" alt="Sun Hat" />
            <h4>Wide-Brim Sun Hat</h4>
            <p className={style.pricing}>Ksh.1,500 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/leather-belt.jpg" alt="Leather Belt" />
            <h4>Genuine Leather Belt</h4>
            <p className={style.pricing}>Ksh.1,200 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/formal-shoes.jpg" alt="Formal Shoes" />
            <h4>Men's Formal Shoes</h4>
            <p className={style.pricing}>Ksh.4,500 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>


        <div className={style.item}>
            <img src="/src/assets/turtleneck.jpg" alt="Turtleneck" />
            <h4>Wool Turtleneck Sweater</h4>
            <p className={style.pricing}>Ksh.2,100 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>


        <div className={style.item}>
            <img src="/src/assets/windbreaker.jpg" alt="Windbreaker" />
            <h4>Lightweight Windbreaker</h4>
            <p className={style.pricing}>Ksh.2,400 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/pleated-skirt.jpg" alt="Pleated Skirt" />
            <h4>Women's Pleated Skirt</h4>
            <p className={style.pricing}>Ksh.1,600 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/cargo-pants.jpg" alt="Cargo Pants" />
            <h4>Men's Cargo Pants</h4>
            <p className={style.pricing}>Ksh.2,300 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/beanie.jpg" alt="Beanie" />
            <h4>Knit Beanie Hat</h4>
            <p className={style.pricing}>Ksh.800 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/flannel-shirt.jpg" alt="Flannel Shirt" />
            <h4>Checked Flannel Shirt</h4>
            <p className={style.pricing}>Ksh.1,900 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/loafers.jpg" alt="Loafers" />
            <h4>Casual Leather Loafers</h4>
            <p className={style.pricing}>Ksh.3,500 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/athleisure-set.jpg" alt="Athleisure Set" />
            <h4>Matching Athleisure Set</h4>
            <p className={style.pricing}>Ksh.2,700 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/puffer-jacket.jpg" alt="Puffer Jacket" />
            <h4>Winter Puffer Jacket</h4>
            <p className={style.pricing}>Ksh.4,000 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/sunglasses.jpg" alt="Sunglasses" />
            <h4>Aviator Sunglasses</h4>
            <p className={style.pricing}>Ksh.1,200 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/chelsea-boots.jpg" alt="Chelsea Boots" />
            <h4>Women's Chelsea Boots</h4>
            <p className={style.pricing}>Ksh.3,600 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/sport-shoes.jpg" alt="Men's Running Shoes" />
            <h4>Men's Running Shoes</h4>
            <p className={style.pricing}>Ksh.2,300 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/polo-shirt.jpg" alt="Men's Polo Shirt" />
            <h4>Men's Polo Shirt</h4>
            <p className={style.pricing}>Ksh.1,800 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/formal-pants.jpg" alt="Formal Pants" />
            <h4>Men's Formal Pants</h4>
            <p className={style.pricing}>Ksh.2,700 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>


        <div className={style.item}>
            <img src="/src/assets/womens-heels.jpg" alt="Women's High Heels" />
            <h4>Women's High Heels</h4>
            <p className={style.pricing}>Ksh.3,900 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/maxi-dress.jpg" alt="Maxi Dress" />
            <h4>Women's Maxi Dress</h4>
            <p className={style.pricing}>Ksh.3,200 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/blouse.jpg" alt="Silk Blouse" />
            <h4>Women's Silk Blouse</h4>
            <p className={style.pricing}>Ksh.2,000 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/kids-sneakers.jpg" alt="Kids' Sneakers" />
            <h4>Kids' Sneakers</h4>
            <p className={style.pricing}>Ksh.1,000 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/kids-jacket.jpg" alt="Kids' Winter Jacket" />
            <h4>Kids' Winter Jacket</h4>
            <p className={style.pricing}>Ksh.2,800 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/kids-jeans.jpg" alt="Kids' Denim Jeans" />
            <h4>Kids' Denim Jeans</h4>
            <p className={style.pricing}>Ksh.1,200 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>


        <div className={style.item}>
            <img src="/src/assets/unisex-hoodie.jpg" alt="Unisex Hoodie" />
            <h4>Couple Hoodie</h4>
            <p className={style.pricing}>Ksh.2,000 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/unisex-sandals.jpg" alt="Unisex Sandals" />
            <h4>Sandals</h4>
            <p className={style.pricing}>Ksh.2,199 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/unisex-trainers.jpg" alt="Unisex Trainers" />
            <h4>Trainers</h4>
            <p className={style.pricing}>Ksh.2,099 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>


        <div className={style.item}>
            <img src="/src/assets/baseball-cap.jpg" alt="Baseball Cap" />
            <h4>Unisex Baseball Cap</h4>
            <p className={style.pricing}>Ksh.900 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/womens-flats.jpg" alt="Women's Flats" />
            <h4>Women's Ballet Flats</h4>
            <p className={style.pricing}>Ksh.2,000 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/womens-cardigan.jpg" alt="Women's Cardigan" />
            <h4>Women's Knitted Cardigan</h4>
            <p className={style.pricing}>Ksh.2,800 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/kids-winter-boots.jpg" alt="Kids' Winter Boots" />
            <h4>Kids'  Boots</h4>
            <p className={style.pricing}>Ksh.2,200 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/mens-wool-coat.jpg" alt="Men's Wool Coat" />
            <h4>Men's Wool Coat</h4>
            <p className={style.pricing}>Ksh.5,500 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>


        <div className={style.item}>
            <img src="/src/assets/socks-set.jpg" alt="Socks Set" />
            <h4>Cotton Socks Set</h4>
            <p className={style.pricing}>Ksh.500 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/src/assets/athletic-set.jpg" alt="Athletic Tracksuit" />
            <h4>Athletic Tracksuit</h4>
            <p className={style.pricing}>Ksh.3,400 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

      </div>
    <div className={style.footer}>
        <p>&copy; 2025 KLADI. All rights reserved.</p>
        <ul className="social-links">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
        </ul>
    </div>
    </div>
  );
}

export default Shop;