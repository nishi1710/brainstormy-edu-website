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

const Course1 = () => {
    const videos = [
        'https://www.youtube.com/watch?v=ZzaPdXTrSb8',
        'https://www.youtube.com/watch?v=vLnPwxZdW4Y'
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
            <ReactPlayer ref={playerRef} url={videos[path]} controls={true} height={"600px"} width={"800px"} playing={true}/>
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
                    <p class="text">C++ is a statically typed, compiled, general-purpose,
                    case-sensitive, free-form programming language that supports procedural, object-oriented, and generic programming.</p>
                    <p class="text">C++ is regarded as a middle-level language, as it comprises a combination of both high-level and low-level language features.</p>
            </div>
        </div>
    </div>
    )
}

export default Course1;
