import cat from '../assets/cat.png';

export default function Popup2({ onClose }){
  return (
    <div className="popup-overlay font2">
      <div className="popup-content">
        <button onClick={onClose} id="close"><i class="bi bi-escape"></i></button>
        <div className="notfound">
            <img className='cat'
                src={cat}
                alt="cute cat"
            />
            <p>
                Oopsy, looks like nothing's here rn...
            </p>
        </div>
      </div>
    </div>
  );
};