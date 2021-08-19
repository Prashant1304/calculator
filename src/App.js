import Calculator from "./component/calculater"
import './App.css';
import React,{ Component } from "react";
import Dummy from "./component/dummyPage"
class App extends Component {
    pages = {
        mainpage:"mainPage",
        dummypage:"dumyPage"
    }
    state = {
        changepage:this.pages.mainpage
    }

    handleChangeCal() {
        this.setState({changepage:this.pages.dummypage})
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
                        <Dummy/>
                    }
                </div>
            </div>
  );
}
}

export default App;
