import React from "react";


const Header = ({ image }) => {
    return (
        <header class="w-full py-6 lg:py-10">
            <img src={image} alt="Rick and Morty logo" className="mx-auto w-[80vw] lg:w-[45vw]" />
        </header>
    );
};

export default Header;
