// import Home from "./Home";
// import Contacts from "./Contacts";
// import Courses from "./Courses";
// import About from "./About";

import { Outlet, Link } from "react-router-dom";
import './navigation.css'

const Navigation = () => {
  return (
    <>
      <div id="bar">
        <ul id="navigation">
        <li><img src="logos.png" class="logo"></img></li>
          <li id="list">
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/Contacts">CONTACTS</Link>
          </li>
          <li>
            <Link to="/Courses">COURSES</Link>
          </li>
          <li>
            <Link to="/About">ABOUT</Link>
          </li>
          <li>
            <Link to="/Register">REGISTER</Link>
          </li>
        </ul>
        </div>
        <div id="button">
        <Link to={"/Login"}><button id="login_button">LOGIN</button></Link>
        </div>
      <Outlet />

      <footer class="footer1">
        <div class="div_footer">
          <img src="logos.png" class="logo"></img>
        </div>
      </footer>
    </>
  )
};

export default Navigation;