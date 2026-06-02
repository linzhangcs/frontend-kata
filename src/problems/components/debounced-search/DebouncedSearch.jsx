import { useState, useMemo } from "react";
import debounce from "../../async/rate-limiting/debounce/solution.js";
import {searchFruits} from "./searchFruits.js";

const DebouncedSearch = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const debouncedUpdateResult = useMemo(() =>
      debounce(async (searchTerm)=> {
        setLoading(true);
        const result = await searchFruits(searchTerm);
        console.log(searchTerm, result);
        setResults(result);
        setLoading(false);
      }, 500), []);

  function handleSearchInput(e){
    const nextSearchTerm = e.target.value;
    setSearch(nextSearchTerm);

    if(nextSearchTerm.trim().length === 0){
      setResults([]);
      //TODO: cancel debounced is needed
      return;
    }

    debouncedUpdateResult(e.target.value);
  }

  return(
      <div>
        <label htmlFor="debounced-search">Search Fruits</label>
        <br/>
        <p>Raw search term: {search}</p>

        <input
            id="debounced-search"
            placeholder="Search for fruits"
            type="text"
            value={search}
            onChange={handleSearchInput}
            disabled = {loading} />
        <ul>{results.length > 0 && results.map((fruit, index) => <li key={`${fruit}-${index}`}>{fruit}</li>)}</ul>
      </div>
  );
}

export default DebouncedSearch;