
export default function PickFro({ onClose }){
  return (
    <div className="popup-overlay">
        <div className="popup-content">
            <button onClick={onClose} id="close"><i class="bi bi-escape"></i></button>
            <h3>
              Hairstyle picker
            </h3>
            <ul className="tech">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Pinterest API</li>
            </ul>
            <p>
              A website to help you escape decision fatigue and pick a Hairstyle
            </p>
            <div className="buttons code">
              <button className="btn-shine" ><a href="" target="_blank">Live Demo</a></button>
              <button className="btn-shine" ><a href="https://github.com/Lingaombe/hair" target="_blank">View Source</a></button>
            </div>
        </div>
    </div>
  );
};