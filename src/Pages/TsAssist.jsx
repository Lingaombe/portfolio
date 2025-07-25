
export default function TsAssist({ onClose }){
  return (
    <div className="popup-overlay">
        <div className="popup-content">
            <button onClick={onClose} id="close"><i class="bi bi-escape"></i></button>
            <h3>
              T'sAssist
            </h3>
            <ul className="tech">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>ExpressJs</li>
              <li>MongoDB</li>
              <li>OneDrive API</li>
            </ul>
            <p>
              A student exam prep solution with resources such as books and past papers
            </p>
            <div className="buttons code">
              <button className="btn-shine" ><a href="" target="_blank">Live Demo</a></button>
              <button className="btn-shine" ><a href="https://github.com/Lingaombe/TsAssist" target="_blank">View Source</a></button>
            </div>
        </div>
    </div>
  );
};