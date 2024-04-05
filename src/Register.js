import React from 'react'
import {Routes , Route , useNavigate, Link} from 'react-router-dom'
import Courses from './Courses'
import { useState } from 'react'
import './register.css'
import axios from 'axios'



const Register = () => {

  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [name , setName] = useState('')
  const [phonenumber , setNumber] = useState('')
  const navigate = useNavigate();

  const afterClick = async (e) =>
  {
    e.preventDefault()
    console.log(email)
    console.log(password)
    console.log(phonenumber)
    console.log(name)

    axios.post('/Register' , 
    {
      name:name , 
      password : password,
      phone:phonenumber , 
      email: email
    }) .then
    (

      navigate("/Login")
    )
    .catch(err => console.log(err));
  }

  // const navigateToCourses = () =>
  // {
  //     navigate('/Courses');
  // };

  return (
   <div id="register_page">
      <div id="heading">
        <p>HEY THERE NEWBIEEE!!!</p>
      </div>

      <div id="sub-heading">
        <p>Let's get you registered</p>
      </div>

      <div id="name-title">
        <p>Your name</p>
      </div>

      <form>
        <div id="name-box">
          <input type="text" id="name-info" value={name} onChange={(e) => setName(e.target.value)}></input>
        </div>
      </form>

      <div id="pass-title">
        <p>Password</p>
      </div>

      <form>
        <div id="passw-box">
          <input type="password" id="pass-info" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </div>
      </form>

      <div id="phone-title">
        <p>Phone Number</p>
      </div>

      <form>
        <div id="phoneno-box">
          <input type="text" id="phoneno-info" value={phonenumber} onChange={(e) =>setNumber(e.target.value)}></input>
        </div>
      </form>

      <div id="emails-title">
        <p>E-mail</p>
      </div>

      <form>
        <div id="emails-box">
          <input type="text" id="emails-info" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </div>
      </form>

      <button id="reg_button" type="button" onClick={afterClick}>REGISTER</button>
      <Routes>
         <Route path='Courses' element = {<Courses/>}></Route>
      </Routes>
    
   </div>
  )
}

export default Register;