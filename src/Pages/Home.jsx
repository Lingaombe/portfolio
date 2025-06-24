import dna from '../assets/dna.gif';
import { useState } from "react";
import Popup from './aboutMe';


export default function Home() {

    const [isOpen, setIsOpen] = useState(false);

    function aboutMe() {
        setIsOpen(!isOpen);
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
                <div className="work">
                    <h2>
                        Frontend Developer
                    </h2>
                    <button className="btn-shine" onClick={myWork}
                    ><span>my work</span></button>                   
                </div>
                <p><i class="bi bi-geo-alt-fill"></i>Kolhapur, India</p>
            </div>
        </div>
    );
};