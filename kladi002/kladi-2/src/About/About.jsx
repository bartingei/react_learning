import {Link} from 'react-router-dom'

function About(){
    return(
        <>
            <nav className={styles.navbar}>
               <div className={styles.logo}>
                    <h1>KLADI</h1>
                </div>

                <ul >
                    <li><a href="#home">Home</a></li>
                    <li><Link to="/Shop">Shop</Link></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#">Cart</a></li>
                </ul>

            </nav>
            
            <div className={style.welcome}>
                <h1>KLADI</h1>
                <p> Streetwear Essentials, Unmatched Vibes </p>
            </div>
            
        </>
    );
}

export default About;