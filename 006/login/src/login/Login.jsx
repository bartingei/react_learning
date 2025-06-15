import React, {useState} from 'react';
import styles from './Login.module.css'; 

function Login(){

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function handleChangeName(event){
        setUserName(event.target.value);
    }
    function handleChangePassword(event){
        setPassword(event.target.value);
    }   
 
    function handleSubmit(event){
        event.preventDefault();
        // Here you would typically handle the login logic, e.g., sending a request to your server
        console.log("Username:", userName);
        console.log("Password:", password);
        setUserName("");
        setPassword("");
    }

return(
    <>
        <form action="#">
            <h2>Welcome back</h2>
            <hr style={{width: "80%"}}/>

            <div className="inputs">

                <label htmlFor="username" >Username:</label>

                <input type="text" 
                    onChange={handleChangeName}
                    value={userName}
                    required
                    />
                
                <label htmlFor="#">password: </label>

                <input type="password" 
                    onChange={handleChangePassword}
                    value={password}
                    required
                    />               
            </div>
            <div className="btn">
                <button type="submit"
                 className='loginButton'
                 onClick={handleSubmit}
                 >Login</button>
            </div>            
        </form>
    </>
);

}

export default Login;