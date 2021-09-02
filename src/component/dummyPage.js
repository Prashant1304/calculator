import React,{Component} from "react"
import "./dummy.css"

class Dummy extends Component {
    
    render() {
        return(
            <div>
                <div className="dum-middle">
                    <div className="dum-display" >
                    </div>
                        <div className="dum-but-div">

                        <div className="dum-slide">
                                <div className="dum-slide-center" onClick={this.props.handleChangeDum} > &#x2936; </div>   
                            </div>
                            

                            
                                <div className="dum-but">
                                    <button className="dum-button"  type="button" value="c">c</button>
                                    <button className="dum-button"  type="button" >&#177;</button>
                                    <button className="dum-button"  type="button" value="%">Rad</button>
                                    <button className="dum-button"  type="button" >&#9003;</button>
                                </div>
                                <div className="dum-but">
                                    <button className="dum-button"  type="button" value="7">mc</button>
                                    <button className="dum-button"  type="button" value="8">mr</button>
                                    <button className="dum-button"  type="button" value="9">m-</button>
                                    <button className="dum-button"  type="button" value="/">m+</button>
                                </div>
                                <div className="dum-but">
                                    <button className="dum-button"  type="button" value="4">sin</button>
                                    <button className="dum-button"  type="button" value="5">cos</button>
                                    <button className="dum-button"  type="button" value="6">tan</button>
                                    <button className="dum-button"  type="button" value="*">log</button>
                                </div>
                                <div className="dum-but">
                                    <button className="dum-button"  type="button" value="1">in</button>
                                    <button className="dum-button"  type="button" value="2">#</button>
                                    <button className="dum-button"  type="button" value="3">e</button>
                                    <button className="dum-button"  value="-" >!</button>
                                </div>
                                <div className="dum-but">
                                    <button className="dum-button"  type="button" value="0">(</button>
                                    <button className="dum-button"  type="button" value=".">)</button>
                                    <button className="dum-button"  type="button" value="=">$</button>
                                    <button className="dum-button"  value="+" >*</button>
                                </div>
                            

                            
                        </div>

                </div>
                
            </div>
        )
    } 
}
export default Dummy