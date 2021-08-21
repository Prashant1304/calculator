import Calculator from "./component/calculater"
import './App.css';
import React,{ Component } from "react";
import Dummy from "./component/dummyPage"
class App extends React.Component {
    constructor(props) {
        super(props);

        this.pages = {
            mainpage:"mainPage",
            dummypage:"dumyPage"
        }
        this.state = {
            changepage:this.pages.mainpage
        }
        this.handleChangeCal=this.handleChangeCal.bind(this)
        this.handleChangeDum=this.handleChangeDum.bind(this)
    }
      
    
    
    handleChangeCal() {
        this.setState({changepage:this.pages.dummypage})
    }


    handleChangeDum() {
        this.setState({changepage:this.pages.mainpage})
    }
    render() {

        return (
            <div className="App">
                <div>
                    {this.state.changepage===this.pages.mainpage&&
                        <Calculator
                             handleChangeCal={this.handleChangeCal}
                        />
                    }
                </div>
                
                <div>
                {this.state.changepage==this.pages.dummypage&&
                        <Dummy
                        handleChangeDum={this.handleChangeDum}
                        />
                    }
                </div>
            </div>
  );
}
}

export default App;
