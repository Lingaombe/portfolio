
export default function Frontend({ onClose }){
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
              <li>Pinterest REST APIs</li>
            </ul>
            <div className="buttons">
              <button className="btn-shine" ><a href="https://github.com/Lingaombe/hair">Live Demo</a></button>
              <button className="btn-shine" ><a>View Source</a></button>
            </div>
          </div>
          <div className="project">
            <h3>
              BookClub
            </h3>
            <p>
              A bookstore or library website design
            </p>
            <ul className="tech">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <div className="buttons">
              <button className="btn-shine" ><a href="https://lingaombe.github.io/BOOKCLUB/" target="_blank">Live Demo</a></button>
              <button className="btn-shine" ><a href="https://github.com/Lingaombe/BOOKCLUB" target="_blank">View Source</a></button>
            </div>
          </div>       
        </div>
      </div>
    </div>
  );
};