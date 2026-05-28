import { useState, useMemo} from "react";
import debounce from "../../async/rate-limiting/debounce/solution.js"

const DebouncedSearch = () => {
  const [search, setSearch] = useState("");

  function searchData(searchTerm) {

  }

  return(
      <div>
        <label for="debounced-search" />
        <input
            id="debounced-search"
            placeholder="Search for fruits"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}></input>
      </div>
  );
}

export default DebouncedSearch;