import React, {Component} from "react";

class Header extends Component {
    render() {
        return (
            <>
                {/* <header style={{background: `${this.state.active ? "red" : "blue"}`}}> */}
                <header className={this.props.active ? "active" : "not-active"}>
                    <div className="logo">Code News</div>
                    <input onChange={this.props.keyword} />
                    <button onClick={() => this.props.changeColor()}>Change It</button>
                </header>
            </>
        );
    }
}

export default Header;
