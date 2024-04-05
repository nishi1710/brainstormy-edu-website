import ReactDOM from "react-dom/client";
import ReactPlayer from 'react-player';
import React, { useRef, useState } from 'react';
import "./courses_page.css"

function Hamburger() {
    return (
        <>
            <div className="hamburger">
                <div className="burger burger1" />
                <div className="burger burger2" />
                <div className="burger burger3" />
            </div>
        </>
    )
}

const Course2 = () => {
    const videos = [
        'https://www.youtube.com/watch?v=EJpTwf9b82M',
        'https://www.youtube.com/watch?v=8YeU1gbuR9g'
    ]
    const [path, setPath] = useState(0);
    const playerRef = useRef(null);
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <div class="rootparent_c">
            <div class="player">
                <ReactPlayer ref={playerRef} url={videos[path]} controls={true} height={"600px"} width={"800px"} playing={true} />
            </div>
            <div class="info">
                <ul class={hamburgerOpen ? 'bar_inline' : 'bar_none'}>
                    <li onClick={() => setPath(0)}>Chapter 1</li>
                    <li onClick={() => setPath(1)}>Chapter 2</li>
                </ul>
            </div>
            <div class="bar" onClick={toggleHamburger}>
                <Hamburger isOpen={hamburgerOpen} />
            </div>
            <div class="main_cp">
                <div class="nis">
                    <h1 class="header1">About This Course</h1>
                    <p class="text">Taxation is the imposition of compulsory levies on individuals or entities by governments in almost every country of the world.</p>
                    <p class="text"> Taxation is used primarily to raise revenue for government expenditures, though it can serve other purposes as well.</p>
                </div>
            </div>
        </div>
    )
}

export default Course2;
