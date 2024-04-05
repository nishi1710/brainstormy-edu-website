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
        'https://www.youtube.com/watch?v=3WI9RZODuag',
        'https://www.youtube.com/watch?v=sx8sBN2prAE',
        'https://www.youtube.com/watch?v=2j8xTuYDB5U',
        'https://www.youtube.com/watch?v=6fQwVxqqpAg'
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
                    <li onClick={() => setPath(2)}>Chapter 3</li>
                    <li onClick={() => setPath(3)}>Chapter 4</li>
                </ul>
            </div>
            <div class="bar" onClick={toggleHamburger}>
                <Hamburger isOpen={hamburgerOpen} />
            </div>
            <div class="main_cp">
                <div class="nis">
                    <h1 class="header1">About This Course</h1>
                    <p class="text">Stocks are a type of security that gives stockholders a share of ownership in a company. Stocks also are called “equities.”</p>
                    <p class="text">A stock represents a share in the ownership of a company, including a claim on the company's earnings and assets. As such, stockholders are partial owners of the company. Fractional shares of stock also represent ownership of a company, but at a size smaller than a full share of common stock.</p>
                </div>
            </div>
        </div>
    )
}

export default Course2;
