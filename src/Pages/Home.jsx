import dna from '../assets/dna.gif';
import { useState } from "react";
import Popup from './aboutMe';
import Popup1 from './myWork';
import Popup2 from './other';
import "./popup.css";
import sound from "../assets/mood-toggle.mp3";


export default function Home() {

    const [isOpen, setIsOpen] = useState(false);
    const [isopen, setisopen] = useState(false);
    const [oOpen, setoOpen] = useState(false);

    function aboutMe() {
        setIsOpen(!isOpen);
    };
    function myWork(){
        setisopen(!isopen);
    };
    function other(){
        setoOpen(!oOpen);
    }

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
                    {isOpen && <Popup onClose={aboutMe} />}
                </div>
                <h2>
                    Software Developer
                </h2>
                <p><i class="bi bi-geo-alt-fill"></i>Kolhapur, India</p>
                <div className="tech" style={{justifyContent:"flex-start"}} >
                    <button className="btn-shine" onClick={myWork} style={{border:"outset"}}>
                        Frontend
                    </button>
                    {isopen && <Popup1 onClose={myWork} />}
                    <button className="btn-shine" onClick={other} style={{border:"outset"}}>
                        Fullstack
                    </button>
                    {oOpen && <Popup2 onClose={other} />}                    
                    <button className="btn-shine" onClick={other} style={{border:"outset", width: "70px"}}>
                        Apps
                    </button>
                    {oOpen && <Popup2 onClose={other} />}    
                    <button className="btn-shine" onClick={other} style={{border:"outset", width: "70px"}}>
                        IoT
                    </button>
                    {oOpen && <Popup2 onClose={other} />}   
                </div>                         
            </div>
        </div>
    );
};
