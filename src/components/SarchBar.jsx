"use client";

import { CiSearch } from 'react-icons/ci';

const SarchBar = ({ inputValue, setInputValue, onSearch }) => {
  return (
    <div className="flex justify-center py-5">
      <div className="join w-full max-w-2xl border rounded-md pl-2 border-gray-400">

        <label className="flex items-center gap-2 w-full">
          <CiSearch className="text-gray-500" />

          <input
            type="search"
            placeholder="Search tiles..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") onSearch();
            }}
            className="w-full bg-transparent outline-none"
          />
        </label>

        <button
          onClick={onSearch}
          className="btn btn-neutral px-6"
        >
          Search
        </button>

      </div>
    </div>
  );
};

export default SarchBar;