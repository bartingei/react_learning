import React,{useState, useEffect} from "react";

function Clock(){

    const [time,setTime] = useState(new Date())


    return(
        <>
        <div className="clock-container">
            <div className="clock">
                <span>00:00:00</span>
            </div>
        </div>
        
        </>
    );
}

export default Clock