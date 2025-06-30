import dna from '../assets/dna.gif';
import { useState } from "react";
import Popup from './aboutMe';
import Popup1 from './myWork';
import "./popup.css";


export default function Home() {

    const [isOpen, setIsOpen] = useState(false);
    const [isopen, setisopen] = useState(false);

    function aboutMe() {
        setIsOpen(!isOpen);
    };
    function myWork(){
        setisopen(!isopen);
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
                    <button className="btn-shine" onClick={myWork} style={{border:"outset"}}>
                        Fullstack
                    </button>
                    {isopen && <Popup1 onClose={myWork} />}                    
                    <button className="btn-shine" onClick={myWork} style={{border:"outset", width: "70px"}}>
                        Apps
                    </button>
                    {isopen && <Popup1 onClose={myWork} />}    
                    <button className="btn-shine" onClick={myWork} style={{border:"outset", width: "70px"}}>
                        IoT
                    </button>
                    {isopen && <Popup1 onClose={myWork} />}   
                </div>                         
            </div>
        </div>
    );
};