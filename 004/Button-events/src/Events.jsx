
function Events(){
    const handleClick = (e) => e.target.style.backgroundColor = "red";

    return(
        <button type= "button" onClick={(e) => handleClick(e)}>click 😎 </button>
    );
}

export default Events