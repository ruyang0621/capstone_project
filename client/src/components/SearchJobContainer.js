import { useState, useMemo } from "react";
import Wrapper from "../assets/wrappers/SearchJobContainer";
import { useAppContext } from "../context/appContext";
import { FormRow, FormRowSelect } from ".";

const SearchJobContainer = () => {
  const [localSearch, setLocalSearch] = useState("");

  const {
    isLoading,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    statusOptions,
    jobTypeOptions,
    handleJobChange,
    clearFilters,
  } = useAppContext();

  const handleSearch = (e) => {
    if (isLoading) return;
    handleJobChange({ name: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalSearch("");
    clearFilters();
  };

  const debounce = () => {
    let timeoutId;
    return (e) => {
      setLocalSearch(e.target.value);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        handleJobChange({ name: e.target.name, value: e.target.value });
      }, 1000);
    };
  };

  const optimizedDebounce = useMemo(() => {
    return debounce();
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <h5 className="search-bar-title">Search Job</h5>
      <form className="form">
        <div className="form-center">
          <FormRow
            type="text"
            name="searchPosition"
            labelText="position"
            value={localSearch}
            handleChange={optimizedDebounce}
          ></FormRow>
          <FormRowSelect
            labelText="job status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={["all", ...statusOptions]}
          ></FormRowSelect>
          <FormRowSelect
            labelText="job type"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={["all", ...jobTypeOptions]}
          ></FormRowSelect>
          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          ></FormRowSelect>
          <button
            className="btn btn-block"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default SearchJobContainer;
