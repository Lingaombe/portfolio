
export default function Popup1({ onClose }){
  return (
    <div className="popup-overlay font2">
      <div className="popup-content">
        <button onClick={onClose} id="close"><i class="bi bi-escape"></i></button>
        <h2>Key Projects</h2>
        <div className="projects">
          <div className="project">
            <h3>
              Hairstyle picker
            </h3>
            <p>
              A website to help you escape decision fatigue and pick a Hairstyle
            </p>
            <ul className="tech">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <div className="buttons">
              <button className="btn-shine" >Live Demo</button>
              <button className="btn-shine" >View Source</button>
            </div>
          </div>
          <div className="project">
            <h3>
              VCKVault
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
            </ul>
            <div className="buttons">
              <button className="btn-shine" >Live Demo</button>
              <button className="btn-shine" >View Source</button>
            </div>
          </div>
          <div className="project">
            <h3>
              Hairstyle picker
            </h3>
            <p>
              A website to help you escape decision fatigue and pick a Hairstyle
            </p>
            <ul className="tech">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <div className="buttons">
              <button className="btn-shine" >Live Demo</button>
              <button className="btn-shine" >View Source</button>
            </div>
          </div>
          <div className="project">
            <h3>
              VCKVault
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
            </ul>
            <div className="buttons">
              <button className="btn-shine" >Live Demo</button>
              <button className="btn-shine" >View Source</button>
            </div>
          </div>          
        </div>
      </div>
    </div>
  );
};