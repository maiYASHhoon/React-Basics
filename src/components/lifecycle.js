import React, {Component} from "react";

class Life extends Component {
    constructor(props) {
        super(props);
        console.log("1-constructor");

        this.state = {name: "Francis"};
    }

    static getDerivedStateFromProps() {
        console.log("2-getDerivedStateFromProps");
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        //can acccess nextProps and nextState
        // console.log("shouldComponentUpdate");
        if (nextState.name === "Yash") {
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // console.log(prevProps);
        // console.log(prevState);
        let age = 21;
        return age;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // can access prevProps and prevState
        console.log("x-componentDidUpdate");
        // console.log(prevProps);
        // console.log(this.state);
        console.log(snapshot);
    }

    componentDidMount() {
        console.log("4-componentDidMount");
    }

    componentWillUnmount() {
        console.log("x-componentWillUnmount");
    }

    render() {
        console.log("3-render");
        return (
            <>
                <hr />
                <div>{this.state.name}</div>
                <button onClick={() => this.setState({name: "YO"})}>Change Name</button>
            </>
        );
    }
}

export default Life;
