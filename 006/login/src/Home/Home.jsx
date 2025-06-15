import './Home.css';

function Home(){
    return(
        <div>
            <nav>
                <h1>KLADI</h1>
                <ul>
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Services">Services</a></li>
                    <li><a href="/Contact">Contact</a></li>
                    <li><a href="/Logout">Logout</a></li>
                </ul>
            </nav>

            <div className="welcome">
                <h2>Welcome to KLADI</h2>
                <p>We are glad to have you here. Explore our <a href="/services">services</a> and get to know more <a href="/about">about us</a>.</p>
            </div>
        </div>
    );
}

export default Home;