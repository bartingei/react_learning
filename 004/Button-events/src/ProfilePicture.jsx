
function ProfilePicture(){

    const imageUrl = './Button-events/src/assets/astro.jpg';

    const handleClick = (e) => e.target.style.display = "none";

    return(
        <img src="imageUrl" alt="profile pic" onClick={(e) => handleClick(e)}/>
    );
}

export default ProfilePicture