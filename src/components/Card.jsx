import React, { useState } from "react";

import CharacterDetail from "../components/CharacterDetail";


const Card = ({ id, image, name }) => {
    const [showCharacterModal, setShowCharacterModal] = useState(false);

    return (
        <>
            <article className="group relative">
                <img className="w-full" src={image} alt={name} />
                <div className="w-full flex items-center justify-between text-center px-1 bg-black bg-opacity-50 text-white absolute bottom-0">
                    <h3 className="inline lg:text-lg lg:text-left py-1 lg:p-2">{name}</h3>
                </div>
                <button
                        onClick={() => setShowCharacterModal(true)}
                        className="lg:bg-opacity-0 lg:group-hover:bg-opacity-80 absolute inset-0 text-theme-green font-semibold text-lg  lg:bg-black "
                    >
                        <span className="hidden lg:group-hover:inline">Ver más</span>
                    </button>
            </article>

            {showCharacterModal && (
                <CharacterDetail
                    onClose={() => setShowCharacterModal(false)}
                    id={id}
                    image={image}
                    name={name}
                />
            )}
        </>
    );
};

export default Card;
