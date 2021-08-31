import React,{Component} from "react"
import "./calculator.css"

class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input:"",
            input2:"",
            num1:"",
            num2:"",
            butoon1:"",
            button2:"",
            operator:"",
            evaluate:"",
            ans:"",
            previousNumber:"",
            currentNumber:""
        }
        
        this.handleButtonNum = this.handleButtonNum.bind(this);
        // this.handleClear = this.handleClear.bind(this)
        this.handleAddition = this.handleAddition.bind(this)
        this.handleDivision = this.handleDivision.bind(this)
        this.handleSubtraction = this.handleSubtraction.bind(this)
        this.handleMultiplication = this.handleMultiplication.bind(this)
        this.handleEvaluate = this.handleEvaluate.bind(this)
        this.handleClear = this.handleClear.bind(this)
    }
    
    componentDidUpdate() {

    }
    
    handleClear() {
        this.setState({ input: "" });
        this.setState({ input2: "" });
    }

    handleButtonNum(e) {
        let target = e.target.value
        this.setState({ input: this.state.input + target });
        this.setState({ input2: this.state.input2 + target });
    }

    handleAddition(e) {
        let target = e.target.value
        this.setState({previousNumber:this.state.input})
        this.setState({ input: "" });
        this.setState({ input2: this.state.input2+target });
        this.setState({operator:"+"})
    }

    handleDivision(e) {
        let target = e.target.value
        this.setState({previousNumber:this.state.input})
        this.setState({operator:"/"})
        this.setState({ input: "" });
        this.setState({ input2: this.state.input2+target });
    }

    handleMultiplication(e) {
        let target = e.target.value
        this.setState({previousNumber:this.state.input})
        this.setState({ input: "" });
        this.setState({ input2: this.state.input2+target });
        this.setState({operator:"*"})
    }

    handleSubtraction(e) {
        let target = e.target.value
        this.setState({previousNumber:this.state.input})
        this.setState({ input: "" });
        this.setState({ input2: this.state.input2+target });
        this.setState({operator:"-"})
    }

    handleEvaluate(e) {
        this.state.currentNumber = this.state.input;

        if (this.state.operator == "+") {
          this.setState({ input:parseInt(this.state.previousNumber) + parseInt(this.state.currentNumber) });
        } else if (this.state.operator == "-") {
          this.setState({ input:parseInt(this.state.previousNumber) - parseInt(this.state.currentNumber) });
        } else if (this.state.operator == "*") {
            this.setState({ input:parseInt(this.state.previousNumber) * parseInt(this.state.currentNumber) });
        } else if (this.state.operator == "/") {
            this.setState({ input:parseInt(this.state.previousNumber) / parseInt(this.state.currentNumber) });
        }
    }

    render() {
        console.log(this.state.num1,this.state.num2)
        var a=this.state.num2
        // var b = a.split(" ")
        console.log(parseInt(this.state.num1),)
        return(
            <div>
                <div className="cal-middle">
                    <div className="cal-display" >
                      <p> {this.state.input} </p>
                          {this.state.input2} 
                    </div>
                        <div className="cal-but-div">

                            <div >
                                <div className="cal-but">
                                    <button className="cal-button" onClick={this.handleClear} type="button" value="c">c</button>
                                    <button className="cal-button"  type="button" >&#177;</button>
                                    <button className="cal-button"  type="button" value="%">%</button>
                                    <button className="cal-button"  type="button" >&#9003;</button>
                                </div>
                                <div className="cal-but">
                                    <button className="cal-button" onClick={this.handleButtonNum} type="button" value="7">7</button>
                                    <button className="cal-button" onClick={this.handleButtonNum} type="button" value="8">8</button>
                                    <button className="cal-button" onClick={this.handleButtonNum} type="button" value="9">9</button>
                                    <button className="cal-button" onClick={this.handleDivision} type="button" value="/">/</button>
                                </div>
                                <div className="cal-but">
                                    <button className="cal-button" onClick={this.handleButtonNum} type="button" value="4">4</button>
                                    <button className="cal-button" onClick={this.handleButtonNum} type="button" value="5">5</button>
                                    <button className="cal-button" onClick={this.handleButtonNum} type="button" value="6">6</button>
                                    <button className="cal-button" onClick={this.handleMultiplication} type="button" value="x">x</button>
                                </div>
                                <div className="cal-but">
                                    <button className="cal-button" onClick={this.handleButtonNum} type="button" value="1">1</button>
                                    <button className="cal-button" onClick={this.handleButtonNum} type="button" value="2">2</button>
                                    <button className="cal-button" onClick={this.handleButtonNum} type="button" value="3">3</button>
                                    <button className="cal-button" onClick={ this.handleSubtraction} value="-" >-</button>
                                </div>
                                <div className="cal-but">
                                    <button className="cal-button"  onClick={this.handleButtonNum} type="button" value="0">0</button>
                                    <button className="cal-button"  type="button" value=".">.</button>
                                    <button className="cal-button" onClick={this.handleEvaluate} type="button" value="=">=</button>
                                    <button className="cal-button" onClick={this.handleAddition} value="+" >+</button>
                                </div>
                            </div>

                            <div className="cal-slide">
                                <div className="cal-slide-center" onClick={this.props.handleChangeCal}> &#x2936; </div>   
                            </div>
                        
                        </div>

                </div>
                
            </div>
        )
    }
}
export default Calculator