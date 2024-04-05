import React , {Component, useState} from 'react';
import {Routes , Route , useNavigate} from 'react-router-dom'
import './login.css'
import Courses from './Courses';
import axios from 'axios';


const  Login  = () =>
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const afterSubmit = (e) => {


        e.preventDefault();
        axios.post('/Login', { email, password })
            .then(result => {

                console.log(result);
                if (result.data === "Success") {
                    alert("Welcome back!");
                    navigate('/');

                }
                if (result.data === "incorrect") {
                    alert("Email or Password is incorrect");
                }


            })
            .catch(err => console.log(err));

    }

    return (
    <div id = "login_main">
        <div id="box">
            <div id="sub">
                <p>WELCOME BACK!!!</p>
            </div>

            <div id="email">
                <p>E-mail</p>
            </div>

            
                <form action="GET" onSubmit={afterSubmit}>
                <div id="email-box">
                    <input type="text" id="text-box" placeholder="Enter e-mail id" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                
                    </div>

                    <div id="password">
                        <p>Password</p>
                    </div>

                    <div id="password-box">
                        
                            <input type="password" id="pass-box" placeholder="Enter password" value={password} onChange={(e) =>setPassword(e.target.value)}></input>
                            </div>
                </form>
            

            <div id="submit">
                <button type="submit" id="submit_btn" onClick={afterSubmit}>LOGIN</button>
                {/* <Routes>
                    <Route path='/Courses' element = {<Courses/>}></Route>
                </Routes> */}

                
            </div>
        </div>
    </div>
  )
}

export default Login;