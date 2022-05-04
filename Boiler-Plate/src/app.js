// import validator from "validator";
import React, {useState } from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
const appRoot = document.getElementById("app");
const App=()=>{
    const [name,setName]=useState("Dipesh");
    const [Flag,SetFlag]=useState(true);
    const [Step,SetStep]=useState(0);
   const Increament=()=>{
        SetStep((prevState)=>prevState+1);
        SetStep((prevState)=>prevState+1);
   } 
   const Decreament=()=>{
     SetStep((prevState)=>prevState-1);
     SetStep((prevState)=>prevState-1);
    } 
    const ChangeName=()=>{
       return  SetFlag(!Flag);
   }
    return  (
    <div>
        <h1>Hello ,{Flag ?name :""} {Step}</h1>
        <button onClick={ChangeName}>change your Change Name</button>
        <button onClick={Increament}>Increament</button>
        <button onClick={Decreament}>Decreament</button>
    </div>
)};
ReactDOM.render(<App/>, appRoot);
