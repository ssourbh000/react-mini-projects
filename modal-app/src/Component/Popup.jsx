import React, {useState} from "react";
import '../Component/Popup.css'

const Popup = () => {
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(!modal);
  }



  return (
    <>
      <div className='mainBody'>
      
      {modal ? (
        <div className='modal'> 
          <div className='overlay' onClick={handleClick}> 
            <div className="popbody">
              <h2>This is the Popup Content</h2>
              <p>Hello This is the pop up Content</p>
              <button className="btn-close" onClick={handleClick}>
                Close
              </button>
            </div>
          </div>
        </div>
      ) :
      
      <div className="pop">
          <h1>Click the button for Pop up </h1>
          <button className="btn-open" onClick={handleClick}>
            <span>Pop Up</span>
          </button>
        </div>
      
      
      
      }
      </div>
    </>
  );
};

export default Popup;
