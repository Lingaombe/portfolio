import React, { useEffect } from 'react';

export default function About({ onClose }){

  useEffect(() => {
    const triggers = document.querySelectorAll('.trigger');
    triggers.forEach((trigger) => {
      let tooltip = document.createElement('span');
      tooltip.setAttribute('role', 'tooltip');
      tooltip.textContent = trigger.dataset.tooltip;
      tooltip.className = 'custom-tooltip';
      trigger.appendChild(tooltip);

      const openTooltip = () => tooltip.classList.add('active');
      const closeTooltip = () => tooltip.classList.remove('active');

      trigger.addEventListener('mouseenter', openTooltip);
      trigger.addEventListener('mouseleave', closeTooltip);

      // Cleanup
      return () => {
        trigger.removeEventListener('mouseenter', openTooltip);
        trigger.removeEventListener('mouseleave', closeTooltip);
        trigger.removeChild(tooltip);
      };
    });
  }, []);

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button onClick={onClose} id="close"><i class="bi bi-escape"></i></button>
        <h2>Meet the Dev</h2>
        <p>Developing software is my ikigai.</p>
        <p>From pipettes to Postgres, my journey has been anything but typical.</p>
        <p>Started with life on a molecular level, and now I speak to computers.</p>
        <p>If you have an awesome idea let me know and we can turn it into reality.</p>
        <div className="contact_me">
            <a href="https://github.com/Lingaombe" target="_blank"><i className="bi-github"></i></a>
            <i className="bi-envelope-plus-fill" onClick={() => window.location = 'mailto:hmngoli@outlook.com'}></i>
            <a href="https://www.linkedin.com/in/hannahmngoli" target="_blank"><i className="bi-linkedin"></i></a>
            <a href="https://www.instagram.com/hanmngoli" target="_blank"><i className="bi-instagram"></i></a>
            <a href="#" target="_blank" className="trigger" data-tooltip="CV/Resume"><i className="bi-file-earmark-person-fill"></i></a>
        </div>
      </div>
    </div>
  );
};