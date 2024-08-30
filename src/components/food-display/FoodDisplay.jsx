/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDataContext } from "../../context/DataContext";
import FoodItem from "../food-item/FoodItem";
import { Oval } from "react-loader-spinner";

const FoodDisplay = ({ category }) => {
  const { allFoods, loaderFoodList, filteredAllFoods, setFilteredAllFoods } =
    useDataContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    if (searchQuery.trim()) {
      const filterData = allFoods.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredAllFoods(filterData);
    } else {
      setFilteredAllFoods(allFoods);
    }
  }, [allFoods, searchQuery]);

  // Calculate the indices for the items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAllFoods.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Function to handle page change
  const handlePageChange = (direction) => {
    if (direction === "next" && indexOfLastItem < filteredAllFoods.length) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 md:gap-0">
          <p className="mt-2 font-semibold text-[1.5rem] text-[#262626]">
            Top Dishes Near You
          </p>
          <div className="relative w-[13rem]">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-3 ps-10 text-xs text-gray-900 border border-gray-300 rounded-full bg-gray-50 outline-none focus:ring-orange-500 focus:border-orange-500 "
              placeholder="Search by name..."
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
              required
            />
          </div>
        </div>

        {!loaderFoodList ? (
          currentItems.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
              {currentItems.map(
                (item, index) =>
                  (category === "All" || item.category === category) && (
                    <FoodItem key={index} item={item} />
                  )
              )}
            </div>
          ) : (
            <p className="h-[20rem] flex justify-center items-center">
              No post found
            </p>
          )
        ) : (
          <div className="flex justify-center items-center min-h-[60vh]">
            <Oval
              visible={true}
              height="50"
              width="80"
              color="#4fa94d"
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        )}

        {/* pagination */}
        <div className="flex mt-[2rem] justify-between items-center">
          <div>
            <p className="text-gray-400 text-sm">Page No {currentPage}</p>
          </div>

          <div className="flex">
            <button
              onClick={() => handlePageChange("prev")}
              disabled={currentPage === 1}
              className={`flex w-[7rem] items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-orange-500 rounded-lg hover:bg-[#fff4f2] hover:text-gray-700 ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <svg
                className="w-3.5 h-3.5 me-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                />
              </svg>
              Previous
            </button>
            <button
              onClick={() => handlePageChange("next")}
              disabled={indexOfLastItem >= filteredAllFoods.length}
              className={`flex w-[7rem] items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-orange-500 rounded-lg hover:bg-[#fff4f2] hover:text-gray-700 ${
                indexOfLastItem >= filteredAllFoods.length
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              Next
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodDisplay;
