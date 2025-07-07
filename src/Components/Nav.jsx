import { useColorMode} from "@chakra-ui/react"
import 'bootstrap-icons/font/bootstrap-icons.css';
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import sound from "../assets/mood-toggle.mp3";
import "./comps.css"
import cloud1 from "../assets/cloud1.png";
import cloud2 from "../assets/cloud2.png"; 
import cloud3 from "../assets/cloud3.png";
import cloud4 from "../assets/cloud4.png";
import cloud5 from "../assets/cloud5.png"; 




export default function Nav(){

    const { colorMode, toggleColorMode } = useColorMode();
    

    return (
        <nav>
            <img
                className="mode-toggle"
                src={colorMode === 'light' ? sun : moon}
                alt={colorMode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                mr={2}
                title="toggle day/night"
                onClick= {toggleColorMode}
            />
            <div className="clouds">
                <img src={cloud1} className="cloud cloud1" />
                <img src={cloud2} className="cloud cloud2" />
                <img src={cloud3} className="cloud cloud3" />
                <img src={cloud4} className="cloud cloud4" />
                <img src={cloud5} className="cloud cloud5" /> 
            </div>
        </nav>
    );
}