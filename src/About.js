import {Outlet , Link} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./About.css"

const About = () =>
{
    return (
        <div className="about-us-container">
            <div className="about-us-title">
                <p>Our Team</p>
            </div>

            <div className="member-container">
                <div className="grps">

                    {/* Member 1 */}
                    <div className="member-box">
                        <img src="member.webp" alt="Member 1" className="member-photo" />
                        <div className="member-details">
                            <p className="member-name">Nishita Gopi</p>
                            <p className="member-designation">SRN:PES1UG22CS397</p>
                        </div>
                    </div>
                

                    {/* Member 2 */}
                    <div className="member-box">
                        <img src="member.webp" alt="Member 2" className="member-photo" />
                        <div className="member-details">
                            <p className="member-name">Nikitha Roj</p>
                            <p className="member-designation">SRN:PES1UG22CS392</p>
                        </div>
                    </div>
            </div>

                <div className="grps">
                    {/* Member 3 */}
                    <div className="member-box">
                        <img src="member.webp" alt="Member 3" className="member-photo" />
                        <div className="member-details">
                            <p className="member-name">Nilesh Vasu Mudaliar</p>
                            <p className="member-designation">SRN:PES1UG22CS393</p>
                        </div>
                    </div>

                    {/* Member 4 */}
                    <div className="member-box">
                        <img src="member.webp" alt="Member 4" className="member-photo" />
                        <div className="member-details">
                            <p className="member-name">Nidhi Shekhar</p>
                            <p className="member-designation">SRN:PES1UG22CS382</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;