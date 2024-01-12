import React from "react";


const Pagination = ({
    currentPage,
    prevPage,
    nextPage,
    totalPages,
    onPageChange,
}) => {
    return (
        <div className="flex justify-center items-center py-6">
            <button
                className="bg-theme-green text-black lg:hover:bg-opacity-80 lg:hover:cursor-pointer px-3 py-1 rounded-md mr-2"
                onClick={() => onPageChange(prevPage)}
                disabled={!prevPage}
            >
                <span class="material-symbols-outlined pt-1.5">chevron_left</span>
            </button>
            <span className="mx-4">
                Página {currentPage} de {totalPages}
            </span>
            <button
                className="bg-theme-green text-black lg:hover:bg-opacity-80 lg:hover:cursor-pointer px-3 py-1 rounded-md ml-2"
                onClick={() => onPageChange(nextPage)}
                disabled={!nextPage}
            >
                <span class="material-symbols-outlined pt-1.5">chevron_right</span>
            </button>
        </div>
    );
};

export default Pagination;
