import React, {useState} from 'react'

function Changes(){

    const [name, setName] = useState(" Guest");
    
    function handleNameChange(event){
        setName(event.target.value);
    }

    const [quantity, setQuantity] = useState(0)
    function handleChangeQuantity(event){
        setQuantity(event.target.value)
    }
    const [comment, setComment] = useState("");

    function handleCommentSection(event){
        setComment(event.target.value);
    }

    const [payment, setPayment] = useState("");

    function handlePaymentOption(event){
        setPayment(event.target.value)
    }

    const [shipping, setShipping] = useState("Delivery");

    function handleShipment(event){
        setShipping(event.target.value);
    }


    return(
        <div>
            <p><input type="text" value={name} onChange = {handleNameChange} /></p>
            <p>Name: {name}</p>

            <p><input type="number" value={quantity}  onChange = {handleChangeQuantity} /></p>
            <p>Quantity: {quantity}</p>

            <p><textarea name="comment" id="comment" placeholder='Enter delivery instructions' onChange={handleCommentSection}> </textarea></p>
            <p>Comment: {comment}</p>

            <select name="payment" id="payment"  onChange={handlePaymentOption}>
                <option value="">Select an option</option>
                <option value="M-pesa">M-pesa</option>
                <option value="Master Card">Master Card</option>
                <option value="Visa">Visa</option>
                <option value="Paypal">Paypal</option>
            </select>
            <p>Payment: {payment}</p>

            <label htmlFor="">
                <input type="radio"  value="Pick up" onChange={handleShipment} checked = {shipping === "Pick up"}/>
                Pick up
            </label>
            <label htmlFor="">
                <input type="radio"  value="Delivery" onChange={handleShipment} checked = {shipping === "Delivery"}/>
                Delivery
            </label>
            <p>shipping: {shipping}</p>
            
        </div>
    );
}

export default Changes;