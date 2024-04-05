import { Outlet, Link } from "react-router-dom";
import './Home.css'
import { useNavigate } from "react-router-dom";
import Courses from "./Courses";


const Home = () => {
  const navigate = useNavigate();
  const navigateToCourses = () =>
  {
      navigate('/Courses');
  };
  return (
    <div id="background">
      <div id="heading_text_home">
        <p>WELCOME TO THE WORLD OF GAMIFIED LEARNING!!!</p>
      </div>

      {/* <div id="image_text">
        <img src="tamico.png" width={"300px"} height={"300px"}></img>
      </div> */}

      <div id="sub_text1">
        <p>Imagine education that feels more like play, where every lesson is a quest, and each achievement unlocks a new level of knowledge. Welcome
          to a world where the joy of learning meets the thrill of gaming!</p>
      </div>

      <div id="sub_text2">
        <p>🚀 Embark on Your Learning questions 🏆 Earn Badges and Level Up
          🎮Engage in Interactive Challenges 🔒 Unlock Secret Content and Bonus
          Levels</p>
      </div>

      <div id="sub_text2">
        <p>🚀 Embark on Your Learning questions 🏆 Earn Badges and Level Up
          🎮Engage in Interactive Challenges 🔒 Unlock Secret Content and Bonus
          Levels</p>
      </div>

      <div id="submit">
        <button id="submit_button" type="submit" onClick={navigateToCourses}>GET STARTED</button>
      </div>
    </div>
  );
};
export default Home;
