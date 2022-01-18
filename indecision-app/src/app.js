console.log("hello");
///////////JSX  Java Script XML
var app={
     title:"App",
     subtitle:"this app is very useful",     
     options:['one','two']

}
var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle&&<p>{app.subtitle}</p>}
    {app['options'].length>0 ?<p>Here are Your Options</p> :<p>No Options </p> }
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);
var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);

var user=
{
      Name:"praveen",
      Age:18,
      Location:"Delhi"

}
function getLoc(location)
{
      if(location)
      return <p>location: {location}</p>;
}
var temp = (
  <div>
    <h1>{user.Name ?user.Name:"NONAME"}</h1>
    {user.Age &&(user.Age >=18 ) &&<p>Age:{user.Age}</p>}
    {getLoc(user.Location)}
  </div>
);

var tempTwo = document.getElementById("personal");
ReactDOM.render(temp, tempTwo);
