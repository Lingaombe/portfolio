import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png"

export default function Popup1({ onClose }){
  return (
    <div className="main_page font1">
      <div className="inner_page">
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
            <div className="techstack">
              <img src={html} alt="HTML" title="HTML" />
              <img src={css} alt="CSS" title="CSS" />
              <img src={js} alt="JavaScript" title="JavaScript" />
              <img src={react} alt="React" title="React" />
            </div>
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
            <div className="techstack">
              <img src={html} alt="HTML" title="HTML" />
              <img src={css} alt="CSS" title="CSS" />
              <img src={js} alt="JavaScript" title="JavaScript" />
            </div>
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