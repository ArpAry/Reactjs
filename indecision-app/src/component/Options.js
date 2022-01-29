import React from 'react'
import Option from './Option.js'

const Options= (props)=>{
    return (
        <div>
        {props.optionsbyuser.length === 0 &&<p>" Add an Option Please "</p>}
        <button onClick={props.deletethisoption}>Remove All</button>
            {
                props.optionsbyuser.map((num) => <Option key={num} optionstext={num} deleteoneoption={props.deleteoneoption}  />  )  
            }
        
        </div>
    );

}

export default Options;