import React,{useState, useEffect} from 'react'

function UseEffect(){
{
    /**    const [count,setCount] = useState(0);

    const [color, setColor] = useState("green")

    useEffect(() => {
        document.title =    `count : ${count} ${color}`
    } ,[count, color])

    function handleAdd(){
        setCount(c => c + 1)
    }
    function changeColour(){
        setColor(c => c === "green" ? "green" : "red")
    }
    function handleSubtract(){
        setCount(c => c - 1)
    } */
}

    const [height, setHeight] = useState(window.innerHeight);

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event listener added!");

        return()=>{
            window.removeEventListener("resize", handleResize);
            console.log("Event listener removed!");
        }
    },[height, width])

    useEffect(()=>{
        document.title= `size: ${width} * ${height} `
    })

    function handleResize(){
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }
    return(
        <>
            {
                /*
                <p style={{color: color}}>{count}</p>
            <button 
            onClick={handleAdd}
            className='addButton'
            type="button">Add</button>
            <button 
            onClick={handleSubtract}
            className='subtractButton'
            type="button">subtract</button>
            <button 
            onClick={changeColour}
            type="button">Change Colour</button>
        */
            }

            <p>Height: {height}</p>
            <p>width: {width}</p>
        
        </>
    );
}

export default UseEffect