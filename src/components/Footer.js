import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer" id="about">
                <div className="container">
                    <img
                        src="./img/logo-light.png"
                        alt="logo"
                        className="footer__img"
                    />

                    <p className="footer__note">
                        All Projects are from{" "}
                        <a
                            target="_blank"
                            href="https://www.frontendmentor.io/challenges"
                        >
                            Frontendmentors.io
                        </a>
                    </p>

                    <ul className="footer__links">
                        <a
                            target="_blank"
                            href="https://github.com/theAspiringDev1/"
                            className="footer__link"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                        <a
                            target="_blank"
                            href="https://twitter.com/theAspiringDev1"
                            className="footer__link"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                    </ul>
                </div>
            </footer>
        );
    }
}
