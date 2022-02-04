import React from 'react';

const Option= (props)=>
(
        
    <div> 
    {props.optionstext}
    <button 
    className="addoptionbutton--link"
    onClick={(e)=> {
     props.deleteoneoption(props.optionstext);}
    }
    >remove</button>
    </div>
    
)
export default Option;