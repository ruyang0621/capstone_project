import Wrapper from "../assets/wrappers/SearchContactContainer";
import { useAppContext } from "../context/appContext";
import { FormRow, FormRowSelect } from ".";
import { useState, useMemo } from "react";

const SearchContactContainer = () => {
  const [localSearchName, setLocalSearchName] = useState("");
  const [localSearchCompany, setLocalSearchCompany] = useState("");
  const {
    isLoading,
    contactSort,
    sortOptions,
    handleContactChange,
    clearContactFilters,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalSearchName("");
    setLocalSearchCompany("");
    clearContactFilters();
  };

  const debounce = () => {
    let timeoutId;
    return (e) => {
      if (e.target.name === "searchName") {
        setLocalSearchName(e.target.value);
      } else if (e.target.name === "searchCompany") {
        setLocalSearchCompany(e.target.value);
      }
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        handleContactChange({ name: e.target.name, value: e.target.value });
      }, 1000);
    };
  };

  const handleSearch = (e) => {
    if (isLoading) return;
    handleContactChange({ name: e.target.name, value: e.target.value });
  };

  const optimizedDebounce = useMemo(() => {
    return debounce();
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <h5 className="search-bar-title">Search Contact</h5>
      <form className="form">
        <div className="form-center">
          <FormRow
            type="text"
            name="searchName"
            labelText="name"
            value={localSearchName}
            handleChange={optimizedDebounce}
          ></FormRow>
          <FormRow
            type="text"
            name="searchCompany"
            labelText="company"
            value={localSearchCompany}
            handleChange={optimizedDebounce}
          ></FormRow>
          <FormRowSelect
            name="contactSort"
            labelText="sort"
            value={contactSort}
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
export default SearchContactContainer;
