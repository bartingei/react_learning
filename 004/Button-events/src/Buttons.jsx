
function Buttons(){
    
    const handleClick = () => console.log("ouch");

    let count = 0;

    const handleClick2 = (name) => {
        if(count < 3){
            count ++;
            console.log(`${name} you clicked me ${count} times`)
        }
        else{
            console.log(`${name} stop clicking me! `)
        }
    }
    

    return(
        <button type="button" onClick={() => handleClick2('JP')}>Click me</button>
    );
}

export default Buttons