import React,{Component} from "react"
import "./calculator.css"
import DummyPage from "./dummyPage"

class Calculator extends Component {

    state = {
        value:"",
    }

    

    handleButton(e) {
        if(e=="=") {
            this.setState({value:(eval(this.state.value))});
        } else if (e=="c") {
            this.setState({value:""});
        } else {
            this.setState({value:this.state.value+e});
        }
    }

    render() {
        return(
            <div>
                <div className="cal-middle">
                    <div style={{fontSize: "60px",height: "73px" }}>
                        {this.state.value}
                    </div>
                        <div className="cal-but-div">

                            <div>
                                <button className="cal-button" onClick={e => {this.handleButton(e.target.value)}} type="button" value="c">c</button>
                                <button className="cal-button" onClick={e => {this.handleButton(e.target.value)}} type="button" >&#177;</button>
                                <button className="cal-button" onClick={e => {this.handleButton(e.target.value)}} type="button" value="%">%</button>
                                <button className="cal-button" onClick={e => {this.handleButton(e.target.value)}} type="button" >&#9003;</button>
                                <button className="cal-button" onClick={e => {this.handleButton(e.target.value)}} type="button" value="7">7</button>
                                <button className="cal-button" onClick={e => {this.handleButton(e.target.value)}} type="button" value="8">8</button>
                                <button className="cal-button" onClick={e => {this.handleButton(e.target.value)}} type="button" value="9">9</button>
                                <button className="cal-button" onClick={e => {this.handleButton(e.target.value)}} type="button" value="/">/</button>
                                <button className="cal-button" onClick={e => {this.handleButton(e.target.value)}} type="button" value="4">4</button>
                                <button className="cal-button" onClick={e => {this.handleButton(e.target.value)}} type="button" value="5">5</button>
                                <button className="cal-button" onClick={e => {this.handleButton(e.target.value)}} type="button" value="6">6</button>
                                <button className="cal-button" onClick={e => {this.handleButton(e.target.value)}} type="button" value="*">*</button>
                                <button className="cal-button" onClick={e => {this.handleButton(e.target.value)}} type="button" value="1">1</button>
                                <button className="cal-button" onClick={e => {this.handleButton(e.target.value)}} type="button" value="2">2</button>
                                <button className="cal-button" onClick={e => {this.handleButton(e.target.value)}} type="button" value="3">3</button>
                                <button className="cal-button" onClick={e => {this.handleButton(e.target.value)}} value="-" >-</button>
                                <button className="cal-button" onClick={e => {this.handleButton(e.target.value)}} type="button" value="0">0</button>
                                <button className="cal-button" onClick={e => {this.handleButton(e.target.value)}} type="button" value=".">.</button>
                                <button className="cal-button" onClick={e => {this.handleButton(e.target.value)}} type="button" value="=">=</button>
                                <button className="cal-button" onClick={e => {this.handleButton(e.target.value)}} value="+" >+</button>
                            
                            </div>

                            <div className="cal-slide">
                                <div onClick={this.props.handleChangeCal} style = {{paddingTop: "209px"}} >
                                    &#x2936;
                                </div>   
                            </div>
                        
                        </div>

                </div>
                
            </div>
        )
    }
}
export default Calculator