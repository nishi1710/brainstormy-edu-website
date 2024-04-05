import {Outlet , Link} from "react";
import ReactDOM from "react-dom/client";
import './contacts.css'

const Contacts = () =>
{
    return (
        <>
        <body id="main">
            <div id="hello">
                <img src="amico.png" width={"250px"} height={"300px"}></img>
            </div>

            <div id="content">
                <div id = "email_heading">
                    <p>E-MAIL: </p>
                </div>

                <div id="email_text">
                    <p>hello_platform@gmail.com</p>
                </div>
                
                <div id="phone_heading">
                    <p>PHONE NUMBER: </p>
                </div>

                <div id="phone_text">
                    <p>1234567890</p>
                </div>

                <div id="location_heading">
                    <p>LOCATION: </p>
                </div>

                <div id="location_text">
                    <p>123 MG Road Koramangala , </p>
                    <p>Bangalore-123</p>
                </div>

                <div id="feed">
                    <p>Feel free to write to us:</p>
                </div>

                <div id="text-area">
                    <textarea placeholder="Your feedback" rows={"7"} cols={"40"} style={{resize:"none"}}></textarea>
                </div>

            </div>
        </body>
        
        </>
    )
}

export default Contacts;