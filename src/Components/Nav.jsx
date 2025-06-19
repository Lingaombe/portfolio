import { useColorMode} from "@chakra-ui/react"
import 'bootstrap-icons/font/bootstrap-icons.css';
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import sound from "../assets/mood-toggle.mp3";
import "./comps.css"


export default function Nav(){

    const { colorMode, toggleColorMode } = useColorMode();
    
    return (
        <nav>
            <img
                className="mode-toggle"
                src={colorMode === 'light' ? sun : moon}
                alt={colorMode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                mr={2}
                onClick={toggleColorMode}
            />
        </nav>
    );
}