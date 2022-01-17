console.log("hello");
///////////JSX  Java Script XML
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

  