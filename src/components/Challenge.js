import React, { Component } from "react";

export default class Challenge extends Component {
    render() {
        const { details } = this.props;

        const isDisplayed = details.isDisplayed;

        const displayStyle = {
            display: isDisplayed ? "block" : "none",
        };

        return (
            <div
                className="card"
                style={displayStyle}
                data-level={details.level}
                data-name={details.title}
            >
                <div className="card__cover">
                    <a target="_blank" href={details.demo_link}>
                        <img
                            src={details.img}
                            alt={details.title}
                            className="card__img"
                        />
                    </a>
                </div>
                <div className="card__text" style={this.props.theme}>
                    <h2 className="card__title">{details.title}</h2>
                    <p className="card__level">{details.level}</p>
                    <div className="card__links">
                        <a
                            target="_blank"
                            style={{ marginRight: "10px" }}
                            href={details.demo_link}
                            className="card__link"
                        >
                            <i className="fas fa-globe"></i>
                        </a>
                        <a
                            target="_blank"
                            href={details.repo_link}
                            className="card__link"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
