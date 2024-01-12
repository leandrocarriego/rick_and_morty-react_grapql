import React from "react";
import { useQuery } from "@apollo/client";

import { GET_CHARACTER_BY_ID } from "../graphql/queries";


const CharacterDetail = ({ id, image, name, onClose }) => {
    const { loading, error, data } = useQuery(GET_CHARACTER_BY_ID, {
        variables: { id },
    });

    if (error) return `Error! ${error.message}`;

    return (
        <article className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-zinc-800 bg-opacity-80 lg:w-auto p-4 lg:pb-8 w-96 mx-auto shadow-lg rounded">
                <div className="w-full pb-4">
                    <button
                        onClick={() => onClose()}
                        className="float-right text-xl font-bold pb-4"
                    >
                        X
                    </button>
                </div>

                <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 px-4">
                    <img src={image} alt={name} />

                    <div className="h-full w-full lg:w-1/2 space-y-3">
                        <h2 className="text-2xl text-center lg:text-left font-bold left-0 w-full block">
                            {name}
                        </h2>
                        {loading ? (
                            <div className="w-full text-center pt-8">
                                <span class="material-symbols-outlined animate-spin text-theme-green mx-auto">
                                    progress_activity
                                </span>
                            </div>
                        ) : (
                            <>
                                <p>Status: {data.character.status}</p>
                                <p>Genders: {data.character.gender}</p>
                                <p>Species: {data.character.species}</p>
                                <p>Type: {data.character.type}</p>
                                <p>Location: {data.character.location.name}</p>
                                <p>Origin: {data.character.origin.name}</p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default CharacterDetail;
