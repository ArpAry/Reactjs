import React from 'react';

const Option= (props)=>
{
    return(
        
        <div> 
        {props.optionstext}
        <button onClick={(e)=>{
         props.deleteoneoption(props.optionstext);}
        }
        >remove</button>
        </div>
        
    )
    
}
export default Option;