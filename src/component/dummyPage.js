import React,{Component} from "react"
import "./dummy.css"

class Dummy extends Component {

    render() {
        return(
            <div>
                <div className="mother">
                <div className="dum-slide">
                    <div  style = {{paddingTop: "149px"}} >
                        &#x2936;
                    </div>   
                </div>

                <div>
                    <button className="dum-button" type="button" value="+">mc</button>
                    <button className="dum-button" type="button" value="*">mr</button>
                    <button className="dum-button" type="button" value="-">m-</button>
                    <button className="dum-button" type="button" value="/">m+</button>
                    <button className="dum-button" type="button" value="1">sin</button>
                    <button className="dum-button" type="button" value="2">cos</button>
                    <button className="dum-button" type="button" value="3">tan</button>
                    <button className="dum-button" type="button" value="4">log</button>
                    <button className="dum-button" type="button" value="5">in</button>
                    <button className="dum-button" type="button" value="6">(</button>
                    <button className="dum-button" type="button" value="7">)</button>
                    <button className="dum-button" type="button" value="8">cot</button>
                    <button className="dum-button" type="button" value="9">sec</button>
                    <button className="dum-button" type="button" value="0">cot</button>
                    <button className="dum-button" type="button" value="=">c</button>
                    <button className="dum-button" value="c" >c</button>
                </div>
                        
                </div>
            </div>
        )
    } 
}
export default Dummy