import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";

import Header from "./components/header";

const App = () => (
    <>
        <Header />
    </>
);

/*const App = () => {
    return React.createElement('h1', {className: 'Title'}, "Hello Yash")
}*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
