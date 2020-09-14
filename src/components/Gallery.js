import React from "react";
import Search from "./Search";
import Showcase from "./Showcase";

export default function Gallery({ isDark, data, handleSort, handleSearch }) {
    const theme = {
        backgroundColor: isDark ? "black" : "white",
        transition: "500ms",
        color: isDark ? "white" : "black",
    };

    return (
        <section className="gallery" id="projects" style={theme}>
            <h2 className="gallery__title">Projects</h2>
            <div className="container">
                <Search handleSearch={handleSearch} handleSort={handleSort} />
                <Showcase challenges={data} theme={theme} />
            </div>
        </section>
    );
}
