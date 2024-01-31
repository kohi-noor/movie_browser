import React from "react";

function Hero({ text }) {
    return(
        <header className="bg-dark p-5 text-white">
            {text}
        </header>
    )
}

export default Hero;