"use client";

import { useState } from "react";

export default function SearchBox() {
  const [selectedMode, setSelectedMode] = useState<
    "residential" | "commercial"
  >("residential");
  const [propertyType, setPropertyType] = useState("");
  const [city, setCity] = useState("");
  const [searchText, setSearchText] = useState("");

  const residentialOptions = [
    "Apartments",
    "Villas",
    "Plots",
    "Independent Houses",
  ];
  const commercialOptions = [
    "Office Spaces",
    "Shops",
    "Warehouses",
    "Coworking",
  ];

  const currentOptions =
    selectedMode === "residential" ? residentialOptions : commercialOptions;

  const handleSearch = () => {
    const searchData = {
      mode: selectedMode,
      propertyType,
      city,
      searchText,
    };
    console.log("Search Data:", searchData);
  };

  return (
    <div className="flex flex-col items-center space-y-4 mt-8 w-1/2 mx-auto">
      {/* --- Top Pill --- */}
      <div className="flex items-center bg-white rounded-md shadow-md px-8 py-4 w-full gap-4">
        {/* Toggle Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={() => {
              setSelectedMode("residential");
              setPropertyType(residentialOptions[0]);
            }}
            className={`px-5 py-2 rounded-md font-medium border-2 transition ${
              selectedMode === "residential"
                ? "bg-primary text-white border-primary"
                : "bg-white text-primary border-primary hover:bg-primary hover:text-white"
            }`}
          >
            Residential
          </button>

          <button
            onClick={() => {
              setSelectedMode("commercial");
              setPropertyType(commercialOptions[0]);
            }}
            className={`px-5 py-2 rounded-md font-medium border-2 transition ${
              selectedMode === "commercial"
                ? "bg-primary text-white border-primary"
                : "bg-white text-primary border-primary hover:bg-primary hover:text-white"
            }`}
          >
            Commercial
          </button>
        </div>

        {/* Dropdown */}
        <div className="flex-grow flex justify-end">
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="border border-gray-300 text-black rounded-md px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[100%]"
          >
            {currentOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      {/* --- Bottom Pill --- */}
      <div className="flex items-center bg-white rounded-md shadow-md px-8 py-4 w-full gap-4">
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border text-black border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">City</option>
          <option>Delhi</option>
          <option>Mumbai</option>
          <option>Chennai</option>
        </select>

        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search by locality, landmark or project"
          className="flex-grow border text-black border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleSearch}
          className="bg-primary text-white rounded-md px-5 py-2 font-medium hover:bg-accent transition"
        >
          Go
        </button>
      </div>
    </div>
  );
}
