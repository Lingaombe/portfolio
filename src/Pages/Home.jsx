import dna from '../assets/dna.gif';
import { useState } from "react";
import About from './aboutMe';
import Frontend from './Frontend';
import Fullstack from './Fullstack';
import Popup2 from './other';
import "./popup.css";


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
    function other(){
        setoOpen(!oOpen);
    };
    function fullstack(){
        setfullOpen(!fullOpen);
    };

    return (
        <div className='main_page'>
            <div className="inner_page">
                <div className="my_name font">
                    <h1>
                        HANNAH MNGOLI
                    </h1>
                    <div className="title_disp font1" data-title="About Me">
                        <img className="dna"
                            src={dna}
                            alt="About me"
                            onClick={aboutMe}
                        ></img>
                    </div>
                    {isOpen && <About onClose={aboutMe} />}
                </div>
                <h2>
                    Software Developer
                </h2>
                <p style={{fontSize:"12px"}}><i class="bi bi-geo-alt-fill"></i>Kolhapur, India</p>
                <div className="roles">
                    <button className="btn-shine" onClick={frontend} style={{border:"outset"}}>
                        Frontend
                    </button>
                    {isopen && <Frontend onClose={frontend} />}
                    <button className="btn-shine" onClick={fullstack} style={{border:"outset"}}>
                        Fullstack
                    </button>
                    {fullOpen && <Fullstack onClose={fullstack} />}                    
                    <button className="btn-shine" onClick={other} style={{border:"outset"}}>
                        Apps
                    </button>
                    {oOpen && <Popup2 onClose={other} />}    
                    <button className="btn-shine" onClick={other} style={{border:"outset"}}>
                        IoT
                    </button>
                    {oOpen && <Popup2 onClose={other} />}   
                </div>                         
            </div>
        </div>
    );
};
