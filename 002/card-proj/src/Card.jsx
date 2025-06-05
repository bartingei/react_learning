import profilePic from './assets/me.jpg'

function Card(){
    return(
        <div className="card">
        <img src={profilePic} alt="profile picture" className="card-image"/>
        <h2 className="card-title"> Johnpaul</h2>
        <p className="card-text">Software Engineering student.</p>
    </div>
    );
}
export default Card