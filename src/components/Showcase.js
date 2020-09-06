import React, { Component } from "react";
import Challenge from "./Challenge";

export default class Showcase extends Component {
    render() {
        const allChallenges = this.props.challenges.map((item) => {
            return (
                <Challenge
                    key={item.title}
                    details={item}
                    theme={this.props.theme}
                />
            );
        });

        return <div className="showcase">{allChallenges}</div>;
    }
}
