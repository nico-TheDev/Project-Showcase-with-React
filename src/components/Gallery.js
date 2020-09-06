import React, { Component } from "react";
import Search from "./Search";
import Showcase from "./Showcase";

export default class Gallery extends Component {
    render() {
        const theme = {
            backgroundColor: this.props.isDark ? "black" : "white",
            transition: "500ms",
            color: this.props.isDark ? "white" : "black",
        };

        return (
            <section className="gallery" id="projects" style={theme}>
                <h2 className="gallery__title">Projects</h2>
                <div className="container">
                    <Search
                        onSearch={this.props.onSearch}
                        onSort={this.props.onSort}
                    />
                    <Showcase challenges={this.props.data} theme={theme} />
                </div>
            </section>
        );
    }
}
