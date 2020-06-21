import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import challengesData from "./challengesData";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            challenges: challengesData.data,
            isDark:true
        };
    }

    onChange = (text) => {
        console.log(text);
        text = text.toLowerCase();
        console.log(this.state.challenges);
        this.setState({
            challenges: [
                ...this.state.challenges.map((item) => {
                    if (item.title.toLowerCase().includes(text)) {
                        item.isDisplayed = true;
                    } else {
                        item.isDisplayed = false;
                    }
                    return item;
                }),
            ],
        });

        console.log(this.state.challenges);
    };

    onSort = (level) => {
        this.setState({
            challenges: [
                ...this.state.challenges.map((item) => {
                    if (item.level === level) {
                        item.isDisplayed = true;
                    } else if (level === "all") {
                        item.isDisplayed = true;
                    } else {
                        item.isDisplayed = false;
                    }

                    return item;
                }),
            ],
        });
    };

    changeTheme = () =>{
      console.log(this.state.isDark);
      this.setState({isDark:!this.state.isDark})
    }

    render() {
        return (
            <div className="App" >
                <Nav changeTheme={this.changeTheme} isDark={this.state.isDark}/>
                <Header />
                <Gallery
                    isDark={this.state.isDark}
                    data={this.state.challenges}
                    onSearch={this.onChange}
                    onSort={this.onSort}
                />
                <Footer />
            </div>
        );
    }
}

export default App;
