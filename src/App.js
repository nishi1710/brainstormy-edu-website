import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import Contacts from "./Contacts";
import Courses from "./Courses";
import About from "./About";
import Login from "./Login";
import Register from "./Register";
import Course1 from "./Course1"
import Course2 from "./Course2"
import Course3 from "./Course3"
import Course4 from "./Course4"
function App()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Navigation/>}>
          <Route index element = {<Home/>}></Route>
          <Route path = "Contacts" element = {<Contacts/>}></Route>
          <Route path = "About" element = {<About/>}></Route>
          <Route path = "Courses" element = {<Courses/>}></Route>
          <Route path = "Register" element = {<Register/>}></Route>
          <Route path = "Login" element = {<Login/>}></Route>
          <Route path = "Course1" element = {<Course1/>}></Route>
          <Route path = "Course2" element = {<Course2/>}></Route>
          <Route path = "Course3" element = {<Course3/>}></Route>
          <Route path = "Course4" element = {<Course4/>}></Route>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;

