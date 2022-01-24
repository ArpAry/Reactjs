class Indecisionapp extends React.Component{
    constructor(props){
        super(props);
        this.deletethisoption=this.deletethisoption.bind(this);
        this.handlepick=this.handlepick.bind(this);
        this.submitHandle=this.submitHandle.bind(this);
        this.state={
            optionsbyuser:['one','two','three']
        };
    }
    deletethisoption()
    {
        this.setState(() =>{
         return  {
            optionsbyuser:[]
        }}
        )
    }
    submitHandle(newOption)
    {
        console.log(newOption);
    }
    handlepick()
    { this.setState((preobj) =>
      {
        let num=Math.floor(Math.random()*preobj.optionsbyuser.length);
        alert(preobj.optionsbyuser[num]);
        })
    }
    render()
    {
        const title="Indecision App";
        const subtitle="Put Yor lifein hands of computer";
        return(
            <div>
            <Header title={title} subtitle={subtitle}/>
            <Action handlepick={this.handlepick} hasOptions={this.state.optionsbyuser.length>0}/>
            <Options deletethisoption={this.deletethisoption} optionsbyuser={this.state.optionsbyuser}/>
            <Addoption submitHandle={this.submitHandle}/>
            </div>

        );
    }
};
class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
};
class Action extends React.Component{
    render(){
        return (
            <div>
                <button onClick={this.props.handlepick}
                disabled={!this.props.hasOptions} >
                What should i do ?</button>
            </div>
        );
    }
};
class Options extends React.Component {
    render()
    {
        return (
            <div>
            <button onClick={this.props.deletethisoption}>Remove All</button>
                {
                    this.props.optionsbyuser.map((num) => <Option key={num} optionstext={num}  />  )  
                }
            
            </div>
        );
    }
};
class Option extends React.Component {
    render(){
        return(
            <div> 
            {this.props.optionstext}
            </div>
            
        )
    }
}
class Addoption extends React.Component{
    constructor(props)
    {
        super(props);
        this.submitHandle=this.submitHandle.bind(this);
    }
    submitHandle(e)
    {
        e.preventDefault();
       let newOption= e.target.elements.option.value.trim();
      this.state.optionsbyuser.push(newOption);
       e.target.elements.option.value="";
       if(newOption)
       {
           this.props.submitHandle(newOption);   
       }
    };
    render() 
    {
        return (
            <div>
            <form onSubmit={this.submitHandle}>
            <input  type="text" name="option"  />
            <button  >Add Option</button>
            </form>
            </div>
        );
    }
};

ReactDOM.render(<Indecisionapp/>,document.getElementById("app"));
