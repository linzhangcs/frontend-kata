import { useState, useMemo} from "react";
import debounce from "../../async/rate-limiting/debounce/solution.js"
import {fruits} from './data.js'

const DebouncedSearch = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const debouncedUpdateResult = useMemo(() =>
      debounce((searchTerm)=> setResults(searchData(searchTerm)), 300), []);

  function searchData(searchTerm) {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    if(normalizedSearchTerm.length === 0) return [];
    return fruits.filter(fruit => fruit.toLowerCase().includes(normalizedSearchTerm));
  }

  function handleSearchInput(e){
    setSearch(e.target.value);
    debouncedUpdateResult(e.target.value);
  }

  return(
      <div>
        <label htmlFor="debounced-search">Search Fruits</label>
        <br/>
        <input
            id="debounced-search"
            placeholder="Search for fruits"
            type="text"
            value={search}
            onChange={handleSearchInput}></input>
        <ul>{results.length > 0 && results.map((fruit, index) => <li key={`${fruit}-${index}`}>{fruit}</li>)}</ul>
      </div>
  );
}

export default DebouncedSearch;