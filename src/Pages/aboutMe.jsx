
export default function Popup({ onClose }){
  return (
    <div className="popup-overlay font2">
      <div className="popup-content">
        <button onClick={onClose} id="close"><i class="bi bi-escape"></i></button>
        <h2>Meet the Dev</h2>
        <p>Developing software is my ikigai.</p>
        <p>The intersection of what I love, what i'm good at, what the world needs and what I can be paid for.</p>
        <p>If you have an awesome app idea let me know and we can turn it into reality together</p>
        <div className="contact_me">
            <a href="https://github.com/Lingaombe" target="_blank"><i className="bi-github"></i></a>
            <i className="bi-envelope-plus-fill" onClick={() => window.location = 'mailto:hmngoli@outlook.com'}></i>
            <a href="https://github.com/Lingaombe" target="_blank"><i className="bi-linkedin"></i></a>
            <a href="https://github.com/Lingaombe" target="_blank"><i className="bi-instagram"></i></a>
            <a href="https://github.com/Lingaombe" target="_blank"><i className="bi-file-earmark-person-fill" title="my resume"></i></a>
        </div>
      </div>
    </div>
  );
};