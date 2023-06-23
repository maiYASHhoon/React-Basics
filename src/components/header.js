/*const getTheYear = () => {
    const newDate = new Date();
    return newDate.getFullYear();
};*/

/*const Header = () => {
    const getTheYear = () => {
        const newDate = new Date();
        return newDate.getFullYear();
    };
    return (
        <>
            <div>The Date is {getTheYear()}</div>
        </>
    );
};*/

import React, {Component} from "react";

/*let styles = {
    header: {
        background: "#03a9fa",
    },
    logo: {
        color: "#fff",
        fontFamily: "Anton",
        textAlign: "center",
    },
};*/

// Class Base Components 🌐
class Header extends Component {
    render() {
        return (
            <>
                <header>
                    {/* <div style={styles.logo}>Logo</div> */}
                    <div className="logo">Logo</div>
                    <input />
                </header>
            </>
        );
    }
}

export default Header;
