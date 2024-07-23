import React, { useState } from 'react'
import "./Join.css";
import pingimg from "../../images/pingimg.png";
import { Link } from "react-router-dom";

let user;


const sendUser = () => {
    user = document.getElementById('joinInput').value;
    document.getElementById('joinInput').value = "";
}


const Join = () => {

    const [name, setname] = useState("");

    return (
        <div className="JoinPage">
            <div className="JoinContainer">
                <img  className='logo' src={pingimg} alt="logo" />
                <h1>PING CHAT</h1>
                <input onChange={(e) => setname(e.target.value)} placeholder="Enter Your Name" type="text" id="joinInput" />
                <Link onClick={(event) => !name ? event.preventDefault() : null} to="/chat">  <button onClick={sendUser} className="joinbtn">Login In</button></Link>
            </div>
            <div className='copyright'><p>Copyright &#169; Vansh Garg</p></div>
        </div>
    )
}

export default Join
export { user }
