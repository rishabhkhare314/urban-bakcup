import React, { useState } from "react";
import { Header, Dropdown, Icon, Image, Item } from "semantic-ui-react";
import style from "./style.module.css";
import get from "lodash.get";
import Service from "./../service.service";
const Search = ({ cityId }) => {
  const [searchData, setSearchData] = useState(null);

  const serviceSearch = async e => {
    const { value } = e.target;
    if (value.length > 2) {
      const searchData = await Service.searchServices(value, cityId);
      console.log("SEARCH DATA", get(searchData, "data.Data.serviceList"));
      setSearchData(get(searchData, "data.Data.serviceList"));
    } else {
      setSearchData([]);
    }
  };
  return (
    <>
      <span>
        <Icon name="search" className={style.searchIcon} size="tiny" />
      </span>
      <input
        type="text"
        name="search"
        placeholder="Search Services"
        className={style.searchText}
        onChange={serviceSearch}
      />
      {searchData &&
        searchData.length > 0 &&
        searchData.map(item => <li>{item.serviceName}</li>)}
    </>
  );
};

export default Search;
