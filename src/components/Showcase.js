import React from "react";
import Challenge from "./Challenge";

export default function Showcase({ challenges, theme }) {
    return (
        <div className="showcase">
            {challenges && challenges.map((item) => {
                return (
                    <Challenge
                        key={item.title}
                        details={item}
                        theme={theme}
                    />
                );
            })}
        </div>
    );
}
