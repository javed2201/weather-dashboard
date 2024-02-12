import { useContext } from "react";
import SearchIcom from "../../assets/search.svg";
import { LocationContext } from "../../context";
import { getLocationByName } from "../../data/location-data";
import useDebounce from "../../hooks/useDebounce";

const Search = () => {
  const { setSelectedLocation } = useContext(LocationContext);

  const doSearch = useDebounce((term) => {
    const fetchLocation = getLocationByName(term);
    setSelectedLocation({ ...fetchLocation });
  }, 500);

  function handleChange(e) {
    const value = e.target.value;
    doSearch(value);
  }

  return (
    <form action="#" >
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          onChange={handleChange}
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          required
        />
        <button>
          <img src={SearchIcom} alt="Search" />
        </button>
      </div>
    </form>
  );
};

export default Search;
