import React, {Component} from "react";

class Header extends Component {
    state = {
        active: false,
        keywords: "",
    };

    inputChange = (event) => {
        this.setState({
            keywords: event.target.value,
        });
    };
    changeColor = () => {
        this.setState({
            active: this.state.active ? false : true,
        });
    };

    render() {
        return (
            <>
                {/* <header style={{background: `${this.state.active ? "red" : "blue"}`}}> */}
                <header className={this.state.active ? "active" : "not-active"}>
                    <div className="logo">Code News</div>
                    <input onChange={(e) => this.inputChange(e)} />
                    <button onClick={() => this.changeColor()}>Change It</button>
                </header>
            </>
        );
    }
}

export default Header;
