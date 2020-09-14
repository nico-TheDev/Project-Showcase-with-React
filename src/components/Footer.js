import React from "react";

export default function Footer() {
    return (
        <footer className="footer" id="about">
            <div className="container">
                <img
                    src="./img/logo-light.png"
                    alt="logo"
                    className="footer__img"
                />

                <p className="footer__note">
                All projects are from 
                    <a
                        target="_blank"
                        href="https://www.frontendmentor.io/challenges"
                        rel="noopener noreferrer"
                    >
                        Frontendmentors.io
                    </a>
                </p>

                <ul className="footer__links">
                    <a
                        target="_blank"
                        href="https://github.com/theAspiringDev1/"
                        className="footer__link"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                    <a
                        target="_blank"
                        href="https://twitter.com/theAspiringDev1"
                        className="footer__link"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>
                </ul>
            </div>
        </footer>
    );
}
