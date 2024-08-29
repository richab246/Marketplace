"use client"

import { useState, useMemo, useEffect } from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const ITEMS_PER_PAGE = 12;

export function Content({models}) {
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return models.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage]);

  const totalPages = Math.ceil(models.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <BentoGrid className="xl:w-full lg:w-[88%] sm:w-[85%] md:mt-16 mt-10 w-3/4 p-4">
        {paginatedItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.subtitle}
            image={item.image}
            id={item.id}
          />
        ))}
      </BentoGrid>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = useMemo(() => {
    const pages = [];
    for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
      pages.push(i);
    }
    return pages;
  }, [currentPage, totalPages]);

  return (
    <div className="flex justify-center mt-8 space-x-6 items-center mb-8">

      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="text-black disabled:opacity-50 hover:bg-[#D0D0D0] hover:rounded-full hover:p-2"
      >
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-4 dark:stroke-white">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
     </svg>
      </button>
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`text-xs ${
            currentPage === page
              ? "dark:text-white text-black bg-[#D0D0D0] rounded-full px-[14px] py-2"
              : "dark:text-white text-gray-800"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="text-black disabled:opacity-50 hover:bg-[#D0D0D0] hover:rounded-full hover:p-2"
      >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-4 dark:stroke-white">
       <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
      </button>
    </div>
  );
}