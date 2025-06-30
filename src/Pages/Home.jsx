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
                        Hannah Mngoli
                    </h1>
                    <img className="dna"
                        src={dna}
                        alt="About me"
                        title="About me"
                        onClick={aboutMe}
                    ></img>
                    {isOpen && <Popup onClose={aboutMe} />}
                </div>
                <h2>
                    Software Developer
                </h2>
                <p><i class="bi bi-geo-alt-fill"></i>Kolhapur, India</p>
                <div className="tech">
                    <button className="btn-shine" onClick={myWork}>
                        Websites
                    </button>
                    {isopen && <Popup1 onClose={myWork} />}
                    <button className="btn-shine" onClick={myWork}>
                        Apps
                    </button>
                    {isopen && <Popup1 onClose={myWork} />}    
                    <button className="btn-shine" onClick={myWork}>
                        IoT
                    </button>
                    {isopen && <Popup1 onClose={myWork} />}   
                </div>                         
            </div>
        </div>
    );
};