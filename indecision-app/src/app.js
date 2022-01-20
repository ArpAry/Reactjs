const app={
  title:"Indecision App",
  subtitle:"Put Your life in hands of computer",
  option:['One','Two']
};
const onformsubmit  = (e) =>
{
  e.preventDefault();
  const interest=e.target.form.option.value;

  //console.log(interest);

  if(interest)
  {
    console.log(interest);
    
  }

};
const template=(
  <div>
  <h1 name="arpit">{app.title}</h1>
  <p>{app.subtitle} </p>
  <p>{app.option.length > 0 ?'Here are Your Options' :'No options'}</p>
  <ol>
    <li>First Item</li>
    <li>Second Item</li>
  </ol>
  <form>
    <input type="text" name="option" /> 
    <button name="arpit" onClick={onformsubmit}> Add Option</button>
  </form>
  </div>
)
const appRoot=document.getElementById("app");
ReactDOM.render(template,appRoot);