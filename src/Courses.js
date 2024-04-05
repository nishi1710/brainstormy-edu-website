import React from "react";
import "./Courses.css"
import { Outlet, Link } from "react-router-dom";

const Courses = () => {
    const topics = [
        {
            id: 1,
            name: "C++",
            img: "Cpp.jpeg",
            link: "/Course1",
            info: "C++ \nCourse By : Mark Brown",
            topic: "CS"
        },
        {
            id: 2,
            name: "Data Structures",
            img: "Data_Structures.jpeg",
            info: "Data Structures \nCourse By : William Fiset",
            link: "/Course2",
            topic: "CS"
        },
        {
            id: 3,
            name: "Stocks",
            img: "Stocks.webp",
            info: "Stocks \nCourse By : Supraganesh C",
            link: "/Course3",
            topic: "Finance"
        },
        {
            id: 4,
            name: "Taxes",
            img: "Taxes.webp",
            info: "Taxes \nCourse By : David Fisher",
            link: "/Course4",
            topic: "Finance"
        }
    ]
    return (
        <div class="rootparent">
            <div class="parent">
                <div>
                    {topics.filter((topic) => topic.name === "C++").map((topic) => (
                        <div key={topic.name} id="out1">
                            <div class='box1' id="b1">
                                <Link to={topic.link}>
                                    <img src={topic.img} alt="Not Found" id="pix"></img>
                                    <div class="overlay">
                                        <p class="text_c">{topic.info.split('\n').map(str => <p>{str}</p>)}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>))}
                </div>

                <div>
                    {topics.filter((topic) => topic.name === "Data Structures").map((topic) => (
                        <div key={topic.name} id="out2">
                            <div class='box2'>
                                <Link to={topic.link}>
                                    <img src={topic.img} alt="Not Found" id="pix"></img>
                                    <div class="overlay">
                                        <p class="text_c">{topic.info.split('\n').map(str => <p>{str}</p>)}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>))}
                </div>
            </div>

            <div class="parent" >
                <div> 
                    {topics.filter((topic) => topic.name === "Stocks").map((topic) => (
                        <div key={topic.name} id="out3">
                            <div class='box3'>
                                <Link to={topic.link}>
                                    <img src={topic.img} alt="Not Found" id="pix"></img>
                                    <div class="overlay">
                                        <p class="text_c">{topic.info.split('\n').map(str => <p>{str}</p>)}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>))}
                </div>

                <div >
                    {topics.filter((topic) => topic.name === "Taxes").map((topic) => (
                        <div key={topic.name} id="out4">
                            <div class='box4'>
                                <Link to={topic.link}>
                                    <img src={topic.img} alt="Not Found" id="pix"></img>
                                    <div class="overlay">
                                        <p class="text_c">{topic.info.split('\n').map(str => <p>{str}</p>)}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>))}
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Courses;
