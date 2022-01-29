import React from 'react';
const Header =(props)=>
{
    return (
        <div>
        <h1>{props.title}</h1>
        {props.subtitle ?<h2>{props.subtitle}</h2>:<h2>put your life in  hands of computer</h2>}
      
        </div>
    );
}
Header.defaultProps={
    title:"DECISION APP"
}

export default Header;