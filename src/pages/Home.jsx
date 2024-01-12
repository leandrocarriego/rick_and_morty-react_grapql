import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import spinner from "../assets/img/portal.webp";
import headerImage from "../assets/img/header_image.webp";

import { GET_CHARACTERS } from "../graphql/queries";

import CharacterList from "../components/CharacterList";
import Pagination from "../components/Pagination";
import FilterSection from "../components/FilterSection";
import Header from "../components/Header";


const Home = () => {
    const [page, setPage] = useState(1);

    const { loading, error, data, refetch } = useQuery(GET_CHARACTERS, {
        variables: { page },
    });

    if (error) return `Error! ${error.message}`;

    return (
        <>
            <Header image={headerImage} />

            <main>
                <FilterSection refetch={refetch} />

                {loading ? (
                    // Load spinner
                    <img
                        src={spinner}
                        alt="Rick and Morty portal gif"
                        className="mx-auto lg:mt-2"
                    />
                ) : (
                    <div className="lg:px-20">
                        {/* Resultados totales */}
                        <p className="py-2 lg:py-3 lg:text-lg">
                            Resultados:{" "}
                            {data.characters.info.count
                                ? data.characters.info.count
                                : "0"}
                        </p>

                        {/* Listado de personajes */}
                        <CharacterList characters={data.characters.results} />

                        {/* Paginacion */}
                        {data.characters.info.count && (
                            <Pagination
                                currentPage={page}
                                prevPage={data.characters.info.prev}
                                nextPage={data.characters.info.next}
                                totalPages={data.characters.info.pages}
                                onPageChange={setPage}
                            />
                        )}
                    </div>
                )}
            </main>
        </>
    );
};

export default Home;
