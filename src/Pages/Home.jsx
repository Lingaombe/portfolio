import dna from '../assets/vlogger.gif';
import About from './aboutMe.jsx';
import Frontend from './Frontend.jsx';
import "./popup.css";

import { useState } from "react";
import { Link } from 'react-router-dom';


export default function Home() {

    const [isOpen, setIsOpen] = useState(false);
    const [isopen, setisopen] = useState(false);
    const [oOpen, setoOpen] = useState(false);
    const [fullOpen, setfullOpen] = useState(false);

    function aboutMe() {
        setIsOpen(!isOpen);
    };
    function frontend(){
        setisopen(!isopen);
    };

    return (
        <div className='main_page'>
            <div className="inner_page">
                <div className="my_name">
                    <h1>
                        HANNAH MNGOLI
                    </h1>
                    <div className="title_disp" data-title="About Me">
                        <img className="dna"
                            src={dna}
                            alt="About me"
                        ></img>
                    </div>
                </div>
                <h2>
                    Software Developer
                </h2>
                <p style={{fontSize:"12px"}}><i class="bi bi-geo-alt-fill"></i>Kolhapur India</p>
                <div className="buttons roles">
                    <button onClick={aboutMe} className="btn-shine">
                        About me
                    </button>
                    {isOpen && <About onClose={aboutMe} />}
                    
                    <button className="btn-shine"><Link to="/myProjects">
                        My Projects
                    </Link></button>
                </div>                         
            </div>
        </div>
    );
};
