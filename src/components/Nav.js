import React from "react";

export default function Nav({ isDark, changeTheme }) {
    const moveThumb = {
        transform: isDark ? "translateX(0)" : "translateX(2rem)",
    };

    return (
        <nav className="nav">
            <img src="img/logo-light.png" alt="" className="nav__logo" />

            <ul className="nav__list">
                <li className="nav__item">
                    <a
                        href="#projects"
                        className="nav__link"
                    >
                        Projects
                    </a>
                </li>
                <button className="themeBtn" onClick={changeTheme}>
                    <span className="themeBtn__switch" style={moveThumb}></span>
                </button>
            </ul>
        </nav>
    );
}
