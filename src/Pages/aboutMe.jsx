
export default function About({ onClose }){
  return (
    <div className="popup-overlay font2">
      <div className="popup-content">
        <button onClick={onClose} id="close"><i class="bi bi-escape"></i></button>
        <h2>Meet the Dev</h2>
        <p>Developing software is my ikigai.</p>
        {/* <p>From pipettes to Postgres, my journey has been anything but typical.</p> */}
        <p>{/* Started with lifes building blocks: DNA and B-cells, now  */}I speak JavaScript React Python Flask MySQL Assembly and Embedded C.</p>
        <p>If you have an awesome idea let me know and we can turn it into reality</p>
        <div className="contact_me">
            <a href="https://github.com/Lingaombe" target="_blank"><i className="bi-github"></i></a>
            <i className="bi-envelope-plus-fill" onClick={() => window.location = 'mailto:hmngoli@outlook.com'}></i>
            <a href="https://www.linkedin.com/in/hannahmngoli" target="_blank"><i className="bi-linkedin"></i></a>
            <a href="https://www.instagram.com/hanmngoli" target="_blank"><i className="bi-instagram"></i></a>
            <a href="" target="_blank"><i className="bi-file-earmark-person-fill" title="my resume"></i></a>
        </div>
      </div>
    </div>
  );
};