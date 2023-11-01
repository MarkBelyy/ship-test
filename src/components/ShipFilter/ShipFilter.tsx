import React, { useEffect, useState } from "react";
import "./ShipFilter.scss";
import { allLevels, allNations, allTypes } from "../../data";
const ShipFilter = () => {
  const [nationFilter, setNationFilter] = useState<string[]>([]);
  const [typeFilter, setTypeFilter] = useState<string[]>([]);
  const [levelFilter, setLevelFilter] = useState<number[]>([]);

  useEffect(() => {
    console.log(nationFilter);
  }, [nationFilter]);
  useEffect(() => {
    console.log(typeFilter);
  }, [typeFilter]);
  useEffect(() => {
    console.log(levelFilter);
  }, [levelFilter]);
  const nationClick = (nation: string) => {
    if (nationFilter.includes(nation)) {
      setNationFilter((prevState) =>
        prevState.filter((item) => item !== nation),
      );
    } else {
      setNationFilter((prevState) => [...prevState, nation]);
    }
  };
  const typeClick = (type: string) => {
    if (typeFilter.includes(type)) {
      setTypeFilter((prevState) => prevState.filter((item) => item !== type));
    } else {
      setTypeFilter((prevState) => [...prevState, type]);
    }
  };
  const levelClick = (level: number) => {
    if (levelFilter.includes(level)) {
      setLevelFilter((prevState) => prevState.filter((item) => item !== level));
    } else {
      setLevelFilter((prevState) => [...prevState, level]);
    }
  };
  return (
    <div className="filter">
      <div className="filter-container nation-filter">
        {allNations.map((nation) => (
          <img
            onClick={() => nationClick(nation.name)}
            className="filter-icon"
            key={nation.name}
            src={nation.image}
            alt={nation.name}
          />
        ))}
      </div>
      <div className="filter-container level-filter">
        {allLevels.map((level) => (
          <span
            onClick={() => levelClick(level)}
            className="filter-icon"
            key={level}
          >
            {level}
          </span>
        ))}
      </div>
      <div className="filter-container type-filter">
        {allTypes.map((type) => (
          <img
            onClick={() => typeClick(type.name)}
            className="filter-icon"
            key={type.name}
            src={type.image}
            alt={type.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ShipFilter;
