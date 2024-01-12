import React, { useState } from "react";

import Tag from "./Tag";


const FilterSection = ({ refetch }) => {
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    const [species, setSpecies] = useState("");
    const [gender, setGender] = useState("");
    const [showFiltersModal, setShowFiltersModal] = useState(false);

    const showClearFiltersButton =
        name !== "" || status !== "" || species !== "" || gender !== "";

    const handleFilterChange = (value, setState, refetchKey) => {
        setState(value);
        refetch({ name, status, species, gender, [refetchKey]: value });
    };

    const handleClearFilters = () => {
        setName("");
        setStatus("");
        setSpecies("");
        setGender("");
        refetch({ name: "", status: "", species: "", gender: "" });
    };

    return (
        <section className="w-full space-y-4 lg:space-y-6">
            {/* Search bar */}
            <div className="w-full lg:w-[60vw] flex lg:mx-auto items-center justify-center gap-x-3">
                <div className="w-full px-2 flex justify-between items-center bg-white text-black rounded-xl">
                    <input
                        type="text"
                        placeholder="Buscar por nombre..."
                        value={name}
                        onChange={(e) =>
                            handleFilterChange(e.target.value, setName, "name")
                        }
                        className="w-full py-1 lg:py-2 pl-2 bg-transparent border-0 outline-0"
                    />

                    <div className="px-2 h-full">
                        <span className="material-symbols-outlined h-8 opacity-30 py-1.5">
                            search
                        </span>
                    </div>
                </div>
                <button
                    className="lg:hidden"
                    onClick={() => setShowFiltersModal(true)}
                >
                    <span class="material-symbols-outlined py-1.5 lg:hidden text-gray-100">
                        tune
                    </span>
                </button>
            </div>

            {/* Filters */}
            <div
                className={`${
                    showFiltersModal ? "block" : "hidden"
                } fixed lg:relative bottom-0 left-0 w-full lg:w-[60vw] lg:mx-auto h-full lg:h-auto flex items-end lg:items-center justify-center bg-black lg:bg-transparent bg-opacity-50 z-50 lg:block`}
            >
                <div className="bg-zinc-800 border-t lg:bg-transparent w-full h-[40vh] lg:h-auto space-y-4 px-4 mx-auto border-theme-green rounded-t-xl lg:rounded-none">
                    <button
                        onClick={() => setShowFiltersModal(false)}
                        className="w-full text-gray-200 lg:hidden text-right text-2xl font-bold pt-1"
                    >
                        x
                    </button>
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-y-4 lg:space-x-6">
                        {/* Status filter */}
                        <div className="w-full lg:w-1/3 flex items-center justify-between lg:justify-center lg:gap-x-2">
                            <label
                                htmlFor="status"
                                className="font-semibold text-theme-green w-1/4"
                            >
                                Status
                            </label>
                            <select
                                id="status"
                                className="bg-gray-200 lg:bg-white text-black border-b outline-0 rounded-lg p-2 lg:py-1 lg:cursor-pointer w-3/4"
                                value={status}
                                onChange={(e) =>
                                    handleFilterChange(
                                        e.target.value,
                                        setStatus,
                                        "status"
                                    )
                                }
                            >
                                <option value="">Todos</option>
                                {["Alive", "Dead", "unknown"].map(
                                    (optionValue) => (
                                        <option
                                            key={optionValue}
                                            value={optionValue}
                                        >
                                            {optionValue}
                                        </option>
                                    )
                                )}
                            </select>
                        </div>

                        {/* Species filter */}
                        <div className="w-full lg:w-1/3 flex items-center justify-between lg:justify-center lg:gap-x-3">
                            <label
                                htmlFor="species"
                                className="font-semibold text-theme-green w-1/4"
                            >
                                Species
                            </label>
                            <select
                                id="species"
                                className="bg-gray-200 lg:bg-white text-black border-b outline-0 rounded-lg p-2 lg:py-1 lg:cursor-pointer w-3/4"
                                value={species}
                                onChange={(e) =>
                                    handleFilterChange(
                                        e.target.value,
                                        setSpecies,
                                        "species"
                                    )
                                }
                            >
                                <option value="">Todos</option>
                                {["Human", "Alien", "unknown"].map(
                                    (optionValue) => (
                                        <option
                                            key={optionValue}
                                            value={optionValue}
                                        >
                                            {optionValue}
                                        </option>
                                    )
                                )}
                            </select>
                        </div>

                        {/* Gender filter */}
                        <div className="w-full lg:w-1/3 flex items-center justify-between lg:justify-center lg:gap-x-3">
                            <label
                                htmlFor="gender"
                                className="font-semibold text-theme-green w-1/4"
                            >
                                Gender
                            </label>
                            <select
                                id="gender"
                                className="bg-gray-200 lg:bg-white text-black border-b outline-0 rounded-lg p-2 lg:py-1 lg:cursor-pointer w-3/4"
                                value={gender}
                                onChange={(e) =>
                                    handleFilterChange(
                                        e.target.value,
                                        setGender,
                                        "gender"
                                    )
                                }
                            >
                                <option value="">Todos</option>
                                {[
                                    "Female",
                                    "Male",
                                    "Genderless",
                                    "unknown",
                                ].map((optionValue) => (
                                    <option
                                        key={optionValue}
                                        value={optionValue}
                                    >
                                        {optionValue}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Selected filters tags and clear button */}
            <div className="w-full flex items-center justify-between lg:w-[60vw] lg:mx-auto">
                <div className="flex items-center justify-start flex-wrap gap-2 lg:gap-6">
                    {status !== "" && (
                        <Tag
                            value={status}
                            setState={setStatus}
                            refetchKey={"status"}
                            handleDelete={handleFilterChange}
                        />
                    )}
                    {species !== "" && (
                        <Tag
                            value={species}
                            setState={setSpecies}
                            refetchKey={"species"}
                            handleDelete={handleFilterChange}
                        />
                    )}
                    {gender !== "" && (
                        <Tag
                            value={gender}
                            setState={setGender}
                            refetchKey={"gender"}
                            handleDelete={handleFilterChange}
                        />
                    )}
                </div>

                {showClearFiltersButton && (
                    <button
                        type="button"
                        className="lg:border-white px-2 lg:px-4 lg:py-1 lg:border rounded-xl lg:hover:opacity-80"
                        onClick={handleClearFilters}
                    >
                        <span className="hidden lg:inline">Borrar filtros</span>
                        <span class="material-symbols-outlined py-1.5 lg:hidden">
                            delete
                        </span>
                    </button>
                )}
            </div>
        </section>
    );
};

export default FilterSection;
