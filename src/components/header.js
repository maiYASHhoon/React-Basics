import React, {Component} from "react";

/*const inputChange = () => {
    console.log("I Was Changed");
};*/

class Header extends Component {
    state = {
        title: "The keyword are: ",
        keywords: "",
        count: 0,
    };

    inputChange = (event) => {
        this.setState({
            keywords: event.target.value,
        });
    };

    addOne = () => {
        this.setState({count: this.state.count + 1});
    };
    render() {
        return (
            <>
                <header>
                    <div
                        className="logo"
                        onClick={() => {
                            console.log("I was Clicked");
                        }}
                    >
                        Logo
                    </div>
                    <input onChange={(e) => this.inputChange(e)} />
                    <br />
                    <div>{this.state.title}</div>
                    <div>{this.state.keywords}</div>
                    <div>{this.state.count}</div>
                    <button onClick={() => this.addOne()}>Add One</button>
                </header>
            </>
        );
    }
}

export default Header;
