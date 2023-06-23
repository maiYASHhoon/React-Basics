import React, {Component} from "react";

/*const inputChange = () => {
    console.log("I Was Changed");
};*/

class Header extends Component {
    state = {
        keywords: "",
    };

    inputChange = (event) => {
        this.setState({
            keywords: event.target.value,
        });
    };

    render() {
        return (
            <>
                <header>
                    <div className="logo">Code News</div>
                    <input onChange={(e) => this.inputChange(e)} />
                </header>
            </>
        );
    }
}

export default Header;
