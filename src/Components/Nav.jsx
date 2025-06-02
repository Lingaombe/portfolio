import { useColorMode } from "@chakra-ui/react"
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Link } from 'react-router-dom';
export default function Nav(){

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <nav>
            <ul>
                <Link to={"www.google.com"}><li><i class="bi bi-cloud-lightning"></i></li></Link>
            </ul>
            <button onClick={toggleColorMode}>
                {colorMode === 'light' ? <i class="bi bi-lightbulb-off"></i> : <i class="bi bi-lightbulb-fill"></i>}
            </button>

        </nav>
    );
}