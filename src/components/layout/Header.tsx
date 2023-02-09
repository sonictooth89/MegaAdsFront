import React, { SyntheticEvent, useContext, useState } from "react";
import { Btn } from "../common/Btn";
import { SearchContext } from "../../contexts/search.context";

import "./Header.css";

export const Header = () => {
  const { search, setSearch } = useContext(SearchContext);
  const [inputVal, setInputVal] = useState(search);

  const setSearchFromLokaleState = (e: SyntheticEvent) => {
    e.preventDefault();
    setSearch(inputVal);
  };

  return (
    <header>
      <h1>
        <p>
          <strong>Mega</strong> Ogloszenia
        </p>
      </h1>
      <Btn to='/add' text="Dodaj Ogloszenie" />
      <form className="search" onSubmit={setSearchFromLokaleState}>
        <input
          type="text"
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
        />
        <Btn text="Szukaj" />
      </form>
    </header>
  );
};
