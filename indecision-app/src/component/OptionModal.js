import React from 'react'; 
import Modal from 'react-modal';
const Optionmodal=(props)=>
(
    <Modal 
    isOpen={!!props.selectedRandom}
    contentLabel="Select-Option "
    onRequestClose={props.handleClearOption}
    >
        <h1> Selected Option</h1>
        {props.selectedRandom&&<p>{props.selectedRandom}</p>} 
        <button onClick={props.handleClearOption}>Okay</button>
    </Modal>
);
export default Optionmodal;