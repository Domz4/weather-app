import { useState } from "react";
import { getCity } from "../service/weatherService";
import { AsyncPaginate } from "react-select-async-paginate";
import Weather from "./wheather";

const Citysearch = () => {
  const [search, setSearch] = useState(null);
  const loadCities = async () => {
    const response = await getCity(search);
    return {
      options: response.data.map((e) => {
        const options = {
          value: `${e.latitude} ${e.longitude}`,
          label: `${e.name}, ${e.countryCode}`,
        };
        return options;
      }),
    };
  };
  const handleSearch = (e) => {
    setSearch(e);
  };
  console.log(search);
  return (
    <>
      <AsyncPaginate
        placeholder="search"
        debounceTimeout={500}
        value={search}
        onInputChange={handleSearch}
        loadOptions={loadCities}
      />
    </>
  );
};

export default Citysearch;
