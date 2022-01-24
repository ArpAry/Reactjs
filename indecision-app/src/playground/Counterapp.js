let count=0; 
class Counter extends React.Component {
  constructor(props)
  {
    super(props);
    this.addOne=this.addone.bind(this);
    this.minusOne=this.minusone.bind(this);
    this.reset=this.reset.bind(this);
  }
  addone()
  {
    count+=1;
    console.log("Add One");
    console.log(count);
  }
  minusone()
  {
    count-=1;
    console.log("Minus One");
    console.log(count);
  }
  reset() 
  {
    count=0;
    console.log("Reset Counter");
    console.log(count);
  }
  render()
  {
    return(
    <div>
        <h1>counter :{count} </h1>
        <button onClick={this.addone}>+1</button>
        <button onClick={this.minusone}>-1</button>
        <button onClick={this.reset}>Reset Button</button>
    </div>
    );
  }

}
ReactDOM.render(<Counter/>,document.getElementById("app"));
// let count = 0;
// const addOne = () => {
//   count++;
//   console.log("Add One ", count);
//   renderCountApp();
// };
// const minusOne = () => {
//   count--;
//   console.log("Minus One ", count);
//   renderCountApp();
// };
// const resetFun = () => {
//   count = 0;
//   console.log("Reset Function ", count);
//   renderCountApp();
// };

// const appRoot = document.getElementById("app");

// const renderCountApp = function () {
//   const templateTwo = (
//     <div>
//       <h1>Count : {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={resetFun}>reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCountApp();