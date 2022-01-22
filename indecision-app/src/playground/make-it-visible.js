const toggleOption={
    title:"Toggle-App",
    options:['one','two']
};
let visiblity=false;

const togOption =()=>
{
 visiblity= !visiblity;
 render();
}

const appRoot=document.getElementById("app");


 const render =()=>
 {
    const template=(
        <div>
        <h1>{toggleOption.title}</h1>
        <button onClick={togOption} >{visiblity ? " Hide Details" : "Show Details" } </button>
        <p>{visiblity && ("Here are your Options")}</p>
        </div>
    );
    ReactDOM.render(template,appRoot);

 }
 render();