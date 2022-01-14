console.log("hello");
///////////JSX  JAVASCRIPT XML
// var template=<p id="someid" > hello sir where are you from </p>;
// //var template = <p> This is your JSX from app.js </p>;
// var template=
// (<div>
//     <h1>THis is your JSX  start</h1>
//     <p>this is your jsx code</p>
// </div>);
// var appRoot=document.getElementById("app");
//  ReactDOM.render(template,appRoot);


console.log("hello sir");
var template=
<div>
    <h1>INDECISION APP</h1>
    <p>this is your jsx code</p>
    <ol>
        <li>HTML</li>
        <li>CSS</li>

    </ol>
</div>;
var appRoot=document.getElementById("app");
  ReactDOM.render(template,appRoot);



  var studentInfo=
(
      <div>
            <h1>Name: Arpit</h1>
            <p> Age:20</p>
            <p>Location:Bareilly</p>
      </div>
);
      var templateTwo=document.getElementById("personal");
      ReactDOM.render(studentInfo,templateTwo);


  