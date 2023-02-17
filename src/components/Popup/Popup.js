import React from "react";
import {FaTimes} from "react-icons/fa"
import "./PoPup.css"
function Popup({ onClose }) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Attention</h2>
        <p>
         <h5> I'm still working on the project to improve the user login system.</h5>
         <h5>Please check out the other functionalities, I'll soon add the user login system</h5>
         <h5>close it and add Some items to the cart and check out😀😀</h5>
          <h5>Thank you: By Emmanuel Donkor</h5>
        </p>
        <button onClick={onClose}><FaTimes/></button>
      </div>
    </div>
  );
}
export default Popup
