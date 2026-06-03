import { useState, useMemo } from "react";
import debounce from "../../async/rate-limiting/debounce/solution.js";
import {searchFruits} from "./searchFruits.js";

const DebouncedSearch = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const debouncedUpdateResult = useMemo(() =>
      debounce(async (searchTerm)=> {
        setLoading(true);
        try{
          const result = await searchFruits(searchTerm);
          console.log(searchTerm, result);
          setResults(result);
        }catch(e){
          setError(e);
          setResults([]);
        }finally{
        setLoading(false);
        }
      }, 500), []);

  function handleSearchInput(e){
    const nextSearchTerm = e.target.value;
    setSearch(nextSearchTerm);

    if(nextSearchTerm.trim().length === 0){
      debouncedUpdateResult.cancel?.();
      setResults([]);
      return;
    }

    debouncedUpdateResult(nextSearchTerm);
  }

  return(
      <div>
        <label htmlFor="debounced-search">Search Fruits</label>
        <br/>
        <p>Raw search term: {search}</p>
        {loading && <p>Loading...</p>}

        <input
            id="debounced-search"
            placeholder="Search for fruits"
            type="text"
            value={search}
            onChange={handleSearchInput}
        />

        <div>
          {!loading && search.trim().length > 0 && results.length === 0 && (
              <p>No fruits found :(((</p>
          )}
          <ul>{!loading && results.length > 0 && results.map((fruit, index) => <li key={`${fruit}-${index}`}>{fruit}</li>)}</ul>
        </div>
      </div>
  );
}

export default DebouncedSearch;