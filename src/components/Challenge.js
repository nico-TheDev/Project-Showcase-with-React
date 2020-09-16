import React from "react";

export default function Challenge({ details, theme }) {
    const displayStyle = {
        display: details.isDisplayed ? "block" : "none",
    };

    return (
        <div
            className="card"
            style={displayStyle}
            data-level={details.level}
            data-name={details.title}
        >
            <div className="card__cover">
                <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href={details.demo_link}
                >
                    <img
                        src={details.img}
                        alt={details.title}
                        className="card__img"
                    />
                </a>
            </div>
            <div className="card__text" style={theme}>
                <h2 className="card__title">{details.title}</h2>
                <p className="card__level">{details.level}</p>
                <p className="card__level">{details.tech.join(",")}</p>
                <div className="card__links">
                    <a
                        target="_blank"
                        rel="noreferrer noopener"
                        style={{ marginRight: "10px" }}
                        href={details.demo_link}
                        className="card__link"
                    >
                        <i className="fas fa-globe"></i>
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer noopener"
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
