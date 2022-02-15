import React, { useState, useCallback } from "react";
import Link from "next/link";
import debounce from "lodash.debounce";

import SymbolList from "./SymbolList";

import { fetchSearch } from "../lib/finnhub";

const Searchbar = () => {
  const [symbols, setSymbols] = useState(null);

  // debounce the onChange to prevent multiple calls being made while typing
  const handleSearch = debounce(async (e) => {
    if (e.target.value == "") {
      setSymbols(null);
      return;
    }
    const res = await fetchSearch(e.target.value);
    setSymbols(res);
  }, 500);

  return (
    <div>
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search for Stocks..."
        onChange={handleSearch}
        autoComplete="off"
      />
      <SymbolList data={symbols} />
    </div>
  );
};

export default Searchbar;
