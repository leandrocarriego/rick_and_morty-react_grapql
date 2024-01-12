import React from "react";


const Tag = ({ value, setState, refetchKey, handleDelete }) => {
    return (
        <div className="w-fit bg-theme-green text-black font-semibold px-3 py-1 rounded-xl space-x-3">
            <span>{value}</span>
            <button
                className="font-bold lg:hover:text-gray-200"
                onClick={() => handleDelete("", setState, refetchKey)}
            >
                x
            </button>
        </div>
    );
};

export default Tag;
