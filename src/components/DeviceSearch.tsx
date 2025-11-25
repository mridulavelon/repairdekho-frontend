import { useState } from "react";

export default function DeviceSearch() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  // sample devices
  const devices = [
    "iPhone 11",
    "iPhone 12",
    "iPhone 13 Pro",
    "Samsung Galaxy S21",
    "Samsung A52",
    "Xiaomi Redmi Note 10",
    "OnePlus Nord CE 3",
  ];

  const filtered =
    query.trim() === ""
      ? []
      : devices.filter((d) =>
          d.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="relative w-full max-w-xl">
      {/* Search Bar */}
      <div className="flex items-center bg-white py-3 px-4 rounded-full shadow-md border border-gray-200">
        <input
          type="text"
          placeholder="Search your device model..."
          value={query}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
        />

        <button className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
          Search
        </button>
      </div>

      {/* Results Dropdown */}
      {focused && query.trim() !== "" && (
        <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
          {filtered.length > 0 ? (
            filtered.map((device, index) => (
              <button
                key={index}
                className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 border-b last:border-none"
              >
                {device}
              </button>
            ))
          ) : (
            <div className="px-4 py-3 text-gray-500 text-center">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
}
