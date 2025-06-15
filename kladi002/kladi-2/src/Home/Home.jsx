import styles from './Home.module.css';
import { Link } from "react-router-dom";
import React,{useState} from 'react'

function Home() {

        const [cartItems, setCartItems] = useState([]);
        const [newItem, setNewItem] = useState('');

    
        function handleSelectFilter(){
    
        }
    
        function handleCartItem(event){
    
        }
    



  return (
    <div className="home">
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <h1>KLADI</h1>
          </div>
          <ul >
            <li><a href="#home">Home</a></li>
            <li><Link to="/Shop">Shop</Link></li>
            <li><Link to="/About">About us</Link></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#">Cart</a></li>
          </ul>

        </nav>
        
      <div className={styles.welcome}>
        <h1>Welcome to KLADI</h1>
        <p>
            KLADI is a place where you can find unique and affordable second-hand items. <br></br>
            Our mission is to promote sustainability by giving pre-loved items a new life. <br/>
            Whether you're looking for vintage clothing, furniture, or accessories, we have something for everyone.
        </p>
        <Link to="/Shop">
        <button>Shop Now</button>
      </Link>
      </div>
      <div >
        <h2>Featured Items</h2>
      </div>
      <div className={styles.items}>
        
        <div className={styles.item} >
          <img src="/src/assets/vintage jacket.jpg" alt="Item 1" />
          <h4>Vintage Jacket</h4>
          <p className={styles.pricing}>Ksh.850 <button className={styles.addToCart} onClick={(event) => handleCartItem(event)} >Add to cart</button></p> 
        </div>
        <div className={styles.item}>
            <img src="/src/assets/sneakers(white).jpg" alt="Pre-owned White Sneakers" />
            <h4>Classic White Sneakers</h4>
            <p className={styles.pricing}>Ksh.1,200 <button className={styles.addToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>
        <div className={styles.item}>
            <img src="/src/assets/graphic-hoodie.jpg" alt="90s Band Hoodie" />
            <h4>Oversized Graphic Hoodie</h4>
            <p className={styles.pricing}>Ksh.950 <button className={styles.addToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>
        <div className={styles.item}>
            <img src="/src/assets/denim-shorts.jpg" alt="Vintage Denim Shorts" />
            <h4>Distressed Denim Shorts</h4>
            <p className={styles.pricing}>Ksh.850 <button className={styles.addToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>
        <div className={styles.item}>
            <img src="/src/assets/black-tshirts.jpg" alt="Basic Black Tees" />
            <h4>Black T-Shirts (3-Pack)</h4>
            <p className={styles.pricing}>Ksh.899 <button className={styles.addToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>
        <div className={styles.item}>
            <img src="/src/assets/track-jacket.jpg" alt="90s Track Jacket" />
            <h4>Vintage Track Jacket</h4>
            <p className={styles.pricing}>Ksh.799 <button className={styles.addToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>
        <div className={styles.item}>
            <img src="/src/assets/store.avif" alt="90s Track Jacket" />
            <h4>View More</h4>
            <p className={styles.pricing}><Link to="/Shop"><button className={styles.shopBtn}>Shop</button></Link></p>
        </div>
        
      </div>

        <div className={styles.footer}>
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

export default Home;