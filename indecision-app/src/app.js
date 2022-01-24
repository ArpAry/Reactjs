        const title="Indecision App";
        const subtitle="Put Yor lifein hands of computer";
        let options=['one','two','three'];
class Indecisionapp extends React.Component{
    render()
    {
        return(
            <div>
            <Header title={title} subtitle={subtitle}/>
            <Action/>
            <Options options={options}/>
            <Addoption/>
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
    shoulddo()
    {
        alert("Should do");
    };

    render(){
        return (
            <div>
                <button onClick={this.shoulddo}>What should i do ?</button>
            </div>
        );
    }
};
class Options extends React.Component {
    constructor(props)
    {
        super(props);
        this.removeall =this.removeall.bind(this);

    }
    removeall()
    {
        console.log(this.props.options);
        
       
    };
    render()
    {
        return (
            <div>
            <button onClick={this.removeall}>Remove All</button>
                {
                    this.props.options.map((num) => <Option key={num} optionstext={num}  />  )  
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
    submitHandle(e)
    {
        e.preventDefault();
       let newOption= e.target.elements.option.value.trim();
       options.push(newOption);
       e.target.elements.option.value="";
       if(newOption)
       {
           alert("Added a  New Option ");   
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
