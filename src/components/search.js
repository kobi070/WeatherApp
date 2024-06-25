import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { geoApiOptions, GEO_API_URL } from "../api.js";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState("Lod");

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}cities/?minPopulation=50000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) =>{
        return {
            options: response.data.map((city) => {
                return {
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name} ,${city.countryCode}`,
                }
            })
        }
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return (
    <AsyncPaginate
      placeholder="Search"
      debounceTimeout={6000}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
