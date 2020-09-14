import React, { useState, useEffect } from "react";

import Nav from "./components/Nav";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const [challenges, setChallenges] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => {
                setChallenges(data.data);
            });
    }, []);

    const handleChange = (text) => {
        setChallenges(
            challenges.map((item) => {
                if (text === "") {
                    return { ...item, isDisplayed: true };
                } else if (item.title.toLowerCase().includes(text)) {
                    return { ...item, isDisplayed: true };
                } else {
                    return { ...item, isDisplayed: false };
                }
            })
        );
    };

    const handleSort = (level) => {
        setChallenges(
            challenges.map((item) => {
                if (item.level === level) {
                    return { ...item, isDisplayed: true };
                } else if (level === "all") {
                    return { ...item, isDisplayed: true };
                } else {
                    return { ...item, isDisplayed: false };
                }
            })
        );
    };

    const changeTheme = () => setIsDarkTheme(!isDarkTheme);

    return (
        <div className="App">
            <Nav changeTheme={changeTheme} isDark={isDarkTheme} />
            <Header />
            <Gallery
                isDark={isDarkTheme}
                data={challenges}
                handleSearch={handleChange}
                handleSort={handleSort}
            />
            <Footer />
        </div>
    );
}

export default App;
