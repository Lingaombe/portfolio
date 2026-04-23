import dna from '../assets/vlog.gif';
import About from './aboutMe.jsx';
import Phunzira from './Phunzira.jsx';
import TsAssist from './TsAssist.jsx';
import PickFro from './PickFro.jsx';
import "./popup.css";

import { useState } from "react";
import { Link } from 'react-router-dom';


export default function Home() {

    const [about, setAbout] = useState(false);
    const [phunzira, setPhunzira] = useState(false);
    const [tsassist, setTsassist] = useState(false);
    const [pickfro, setPickfro] = useState(false);

    function aboutMe() {
        setAbout(!about);
    };
    function PhunziraFn(){
        setPhunzira(!phunzira);
    };
    function TsAssistFn(){
        setTsassist(!tsassist);
    };
    function PickFroFn(){
        setPickfro(!pickfro);
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
                            onClick={aboutMe}
                            src={dna}
                            alt="About me"
                        ></img>
                    {about && <About onClose={aboutMe} />}
                    </div>
                </div>
                <h2>
                    Software Developer
                </h2>
                
                <div className="buttons roles">
                    <button onClick={PhunziraFn} className="btn-shine">
                        Phunzira
                    </button>
                    {phunzira && <Phunzira onClose={PhunziraFn} />}

                    <button onClick={TsAssistFn} className="btn-shine">
                        TsAssist
                    </button>
                    {tsassist && <TsAssist onClose={TsAssistFn} />}

                    <button onClick={PickFroFn} className="btn-shine">
                        Pick Ya Fro
                    </button>
                    {pickfro && <PickFro onClose={PickFroFn} />}
                </div>                         
            </div>
        </div>
    );
};
