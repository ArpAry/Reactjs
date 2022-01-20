let count = 0;
const addOne = () => {
  count++;
  console.log("Add One ", count);
  renderCountApp();
};
const minusOne = () => {
  count--;
  console.log("Minus One ", count);
  renderCountApp();
};
const resetFun = () => {
  count = 0;
  console.log("Reset Function ", count);
  renderCountApp();
};

const appRoot = document.getElementById("app");

const renderCountApp = function () {
  const templateTwo = (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={resetFun}>reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCountApp();
