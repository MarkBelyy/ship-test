import React, { Dispatch, FC, SetStateAction } from "react";
import "./ShipFilter.scss";
import {
  allLevels,
  allNationName,
  allNations,
  allTypes,
  allTypesName,
} from "../../data";
const ShipFilter: FC<{
  nationFilter: string[];
  typeFilter: string[];
  levelFilter: number[];
  setNationFilter: Dispatch<SetStateAction<string[]>>;
  setTypeFilter: Dispatch<SetStateAction<string[]>>;
  setLevelFilter: Dispatch<SetStateAction<number[]>>;
}> = ({
  nationFilter,
  typeFilter,
  levelFilter,
  setNationFilter,
  setTypeFilter,
  setLevelFilter,
}) => {
  const nationClick = (nation: string) => {
    if (nationFilter.length === 1 && nationFilter[0] === nation) {
      setNationFilter(allNationName);
      return;
    }
    if (nationFilter.length === allNations.length) {
      setNationFilter([nation]);
      return;
    }
    if (nationFilter.includes(nation)) {
      setNationFilter((prevState) =>
        prevState.filter((item) => item !== nation),
      );
    } else {
      setNationFilter((prevState) => [...prevState, nation]);
    }
  };
  const typeClick = (type: string) => {
    if (typeFilter.length === 1 && typeFilter[0] === type) {
      setTypeFilter(allTypesName);
      return;
    }
    if (typeFilter.length === allTypes.length) {
      setTypeFilter([type]);
      return;
    }
    if (typeFilter.includes(type)) {
      setTypeFilter((prevState) => prevState.filter((item) => item !== type));
    } else {
      setTypeFilter((prevState) => [...prevState, type]);
    }
  };
  const levelClick = (level: number) => {
    if (levelFilter.length === 1 && levelFilter[0] === level) {
      setLevelFilter(allLevels.map((level) => level));
      return;
    }
    if (levelFilter.length === allLevels.length) {
      setLevelFilter([level]);
      return;
    }
    if (levelFilter.includes(level)) {
      setLevelFilter((prevState) => prevState.filter((item) => item !== level));
    } else {
      setLevelFilter((prevState) => [...prevState, level]);
    }
  };
  return (
    <div className="filter">
      <div className="filter-container-flex">
        <div className="filter-container nation-filter">
          {allNations.map((nation) => (
            <div
              className={
                nationFilter.includes(nation.name)
                  ? "filter-item-container"
                  : "filter-inactive filter-item-container"
              }
              key={nation.name}
              onClick={() => nationClick(nation.name)}
            >
              <img
                className="filter-icon"
                key={nation.name}
                src={nation.image}
                alt={nation.name}
              />
            </div>
          ))}
        </div>
        <div className="filter-container level-filter">
          {allLevels.map((level) => (
            <div
              key={level}
              className={
                levelFilter.includes(level)
                  ? "filter-item-container"
                  : "filter-inactive filter-item-container"
              }
              onClick={() => levelClick(level)}
            >
              <span className="filter-icon" key={level}>
                {level}
              </span>
            </div>
          ))}
        </div>
        <div className="filter-container type-filter">
          {allTypes.map((type) => (
            <div
              key={type.name}
              className={
                typeFilter.includes(type.name)
                  ? "filter-item-container"
                  : "filter-inactive filter-item-container"
              }
              onClick={() => typeClick(type.name)}
            >
              <img
                className="filter-icon"
                key={type.name}
                src={type.image}
                alt={type.name}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className="filter-reset-button"
        onClick={() => {
          setNationFilter(allNationName);
          setTypeFilter(allTypesName);
          setLevelFilter(allLevels.map((level) => level));
        }}
      >
        Сбросить фильтры
      </button>
    </div>
  );
};

export default ShipFilter;
