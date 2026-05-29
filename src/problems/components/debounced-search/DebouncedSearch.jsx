import { useState, useMemo} from "react";
import debounce from "../../async/rate-limiting/debounce/solution.js"
import {fruits} from './data.js'

const DebouncedSearch = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const debouncedUpdateResult = useMemo(() =>
      debounce((searchTerm)=> setResult(searchData(searchTerm)), 300), []);

  function searchData(searchTerm) {
    if(searchTerm.length === 0) return [];
    return fruits.filter(fruit => fruit.includes(searchTerm.trim().toLowerCase()));
  }

  function handleSearchInput(e){
    setSearch(e.target.value);
    debouncedUpdateResult(e.target.value);
  }

  return(
      <div>
        <label for="debounced-search" />
        <input
            id="debounced-search"
            placeholder="Search for fruits"
            type="text"
            value={search}
            onChange={handleSearchInput}></input>
        <ul>{result.length > 0 && result.map((re, index) => <li key={re-index}>{re}</li>)}</ul>
      </div>
  );
}

export default DebouncedSearch;