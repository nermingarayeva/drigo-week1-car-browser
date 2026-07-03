import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import carsData from "./data/cars.json";

import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import Sort from "./components/Sort";
import CarGrid from "./components/CarGrid";
import EmptyState from "./components/EmptyState";

import useDebounce from "./hooks/useDebounce";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  const [transmission, setTransmission] = useState(
    searchParams.get("transmission") || "All"
  );

  const [type, setType] = useState(
    searchParams.get("type") || "All"
  );

  const [availableOnly, setAvailableOnly] = useState(
    searchParams.get("available") === "true"
  );

  const [sort, setSort] = useState(
    searchParams.get("sort") || ""
  );

  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    const params = {};

    if (search) params.search = search;
    if (transmission !== "All") params.transmission = transmission;
    if (type !== "All") params.type = type;
    if (availableOnly) params.available = "true";
    if (sort) params.sort = sort;

    setSearchParams(params);
  }, [
    search,
    transmission,
    type,
    availableOnly,
    sort,
    setSearchParams,
  ]);

  const filteredCars = useMemo(() => {
    let result = carsData.filter((car) => {
      const matchSearch = car.name
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase());

      const matchTransmission =
        transmission === "All" ||
        car.transmission === transmission;

      const matchType =
        type === "All" ||
        car.type === type;

      const matchAvailable =
        !availableOnly ||
        car.available;

      return (
        matchSearch &&
        matchTransmission &&
        matchType &&
        matchAvailable
      );
    });

    if (sort === "asc") {
      result.sort(
        (a, b) => a.pricePerDay - b.pricePerDay
      );
    }

    if (sort === "desc") {
      result.sort(
        (a, b) => b.pricePerDay - a.pricePerDay
      );
    }

    return result;
  }, [
    debouncedSearch,
    transmission,
    type,
    availableOnly,
    sort,
  ]);

  const resetFilters = () => {
    setSearch("");
    setTransmission("All");
    setType("All");
    setAvailableOnly(false);
    setSort("");
  };

  return (
    <div className="container">
      <h1>Car Browser</h1>

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <Filters
        transmission={transmission}
        setTransmission={setTransmission}
        type={type}
        setType={setType}
        availableOnly={availableOnly}
        setAvailableOnly={setAvailableOnly}
      />

      <Sort
        sort={sort}
        setSort={setSort}
      />

      <p className="counter">
        Showing {filteredCars.length} of {carsData.length} cars
      </p>

      {filteredCars.length > 0 ? (
        <CarGrid cars={filteredCars} />
      ) : (
        <EmptyState
          resetFilters={resetFilters}
        />
      )}
    </div>
  );
}

export default App;