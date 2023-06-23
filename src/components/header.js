import React, {Component} from "react";

/*const inputChange = () => {
    console.log("I Was Changed");
};*/

class Header extends Component {
    inputChange = (event) => {
        console.log(event.target.value);
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
                    <input onChange={this.inputChange} />
                </header>
            </>
        );
    }
}

export default Header;
