import React from "react";

import Card from "./Card";


const CharacterList = ({ characters }) => {
    return (
        <div className={characters.length > 0 ? "min-h-[50vh] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-x-8" : "w-full"}>
            {characters.length > 0 ? (
                characters.map((character) => (
                    <Card key={character.id} {...character} />
                ))
            ) : (
                <h3 className="border-t py-3">No se encontraron resultados</h3>
            )}
        </div>
    );
};

export default CharacterList;
