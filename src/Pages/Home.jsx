import dna from '../assets/dna.gif';
import image from '../assets/icon.png';


export default function Home() {

    function displayaboutme() {
        window.alert("clicked")
    }
    return (
        <div className='page font'>
            <div className="main">
                <h1 className="name">
                    Hannah Mngoli
                </h1>
                <img className="dna"
                    src={dna}
                    alt="About me"
                    onClick={displayaboutme}
                ></img>
            </div>
            <h2>
                Frontend Developer
            </h2>
            <div className="projects">
               <div className="card">
                    <img
                        src={image}
                    ></img>
               </div>
            </div>
        </div>
    );
}
