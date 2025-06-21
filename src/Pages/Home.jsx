import dna from '../assets/dna.gif';
import image from '../assets/butterfly.gif';


export default function Home() {

    function displayaboutme() {
        window.alert("clicked")
    }
    function displaymywork() {
        window.alert("clicked")
    }
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
                        onClick={displayaboutme}
                    ></img>
                </div>
                <h2>
                    Frontend Developer
                </h2>
            </div>
        </div>
    );
}
