import React, {Component} from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";

import Header from "./components/header";
import NewsList from "./components/news_list";
import Footer from "./components/footer";
import JSON from "./db.json";
import Life from "./components/lifecycle";

class App extends Component {
    state = {
        unmount: true,
        active: false,
        news: JSON,
        filtered: [],
        footerText: "I am a happy footer",
    };

    getKeyword = (event) => {
        let keywords = event.target.value;
        let filtered = this.state.news.filter((item) => {
            return item.title.indexOf(keywords) > -1;
        });

        this.setState({
            filtered,
        });
    };

    changeColor = () => {
        this.setState({
            active: this.state.active ? false : true,
        });
    };

    render() {
        // console.log(this.state);
        const {filtered, news, active, footerText} = this.state;
        return (
            <div className="hey">
                <Header active={active} changeColor={this.changeColor} keyword={this.getKeyword} />
                <NewsList news={filtered.length === 0 ? news : filtered}>
                    <br />
                    <h1>This is a childern</h1>
                </NewsList>
                {this.state.unmount ? <Life /> : null}
                <button onClick={() => this.setState({unmount: !this.state.unmount})}>Action</button>

                <Footer footerText={footerText} />
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
