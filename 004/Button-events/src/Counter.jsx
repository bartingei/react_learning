import React, {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);

    const increment = () => {
        // this is an updater function, it is used eg when we want the counter to increment by 2 when clicked 
        //
        // you can copy the same code multiple times to increment the n number of times u want 
        //c below is used to represent previous count
        setCount(c => c + 1);
        setCount(c => c + 1);
    }
    const decrement = () => {
        setCount(c => c - 1)
        setCount(c => c - 1)
        setCount(c => c - 1)
        
    }
    const reset = () => {
        setCount(0)
    }


    return(
        <div className='counter-container'>
            <p className='count-display'>{count}</p>

            <button type="button" onClick={decrement} class="counter-button">Decrement</button>

            <button type="button" onClick={reset} class="counter-button" disabled = {count === 0}>Reset</button>
            
            <button type="button" onClick={increment} class="counter-button">Increment</button>
        </div>
    );
}
export default Counter;