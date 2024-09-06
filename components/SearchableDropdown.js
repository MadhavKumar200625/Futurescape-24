"use client";
import { useState } from "react";

const SearchableDropdown = ({ list, listName, handleListSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredList = list.filter((listItem) =>
    listItem.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700">
        <span className="text-red-800">*</span>{`Select ${listName}`}
      </label>
      <input
        type="text"
        className="w-full border rounded p-2 text-sm"
        placeholder={`Search ${listName}`}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onClick={() => {
          setIsOpen(!isOpen);
          setSearchTerm("")
        }}
      />
      {isOpen && (
        <ul className="absolute z-10 w-full bg-white border rounded mt-1 max-h-48 overflow-y-auto shadow-lg">
          {filteredList.length > 0 ? (
            filteredList.map((listItem, idx) => (
              <li
                key={idx}
                onClick={() => {
                  handleListSelect(listItem);
                  setIsOpen(false);
                  setSearchTerm(listItem);
                }}
                className="p-2 text-sm hover:bg-gray-100 cursor-pointer"
              >
                {listItem}
              </li>
            ))
          ) : (
            <li className="p-2 text-sm text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchableDropdown;
