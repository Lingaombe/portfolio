
export default function Fullstack({ onClose }){
  return (
    <div className="popup-overlay font2">
        <div className="popup-content">
            <button onClick={onClose} id="close"><i class="bi bi-escape"></i></button>
            <h2>Key Projects</h2>
            <div className="projects">
                <div className="project">
                    <h3>
                        Phunzira
                    </h3>
                    <p>
                        A student exam prep solution with resources such as books and past papers
                    </p>
                    <ul className="tech">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>ExpressJs</li>
                        <li>MongoDB</li>
                        <li>OneDrive API</li>
                    </ul>
                    <div className="buttons">
                        <button className="btn-shine" ><a href="" target="_blank">Live Demo</a></button>
                        <button className="btn-shine" ><a href="https://github.com/Lingaombe/Phunzira" target="_blank">View Source</a></button>
                    </div>
                </div>   
            </div>
        </div>
    </div>
  );
};