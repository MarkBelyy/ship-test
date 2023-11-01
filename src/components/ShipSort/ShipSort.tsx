import React, { Dispatch, FC, SetStateAction } from "react";
import "./ShipSort.scss";

const ShipSort: FC<{
  alphaSort: number;
  setAlphaSort: Dispatch<SetStateAction<number>>;
  levelSort: number;
  setLevelSort: Dispatch<SetStateAction<number>>;
}> = ({ alphaSort, setAlphaSort, levelSort, setLevelSort }) => {
  const container = document.querySelector(".footer");
  const alphaSortClick = () => {
    if (alphaSort === 0 || alphaSort === 2) setAlphaSort(1);
    else setAlphaSort(2);
    if (container) container.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };
  const levelSortClick = () => {
    if (levelSort === 0 || levelSort === 2) setLevelSort(1);
    else setLevelSort(2);
    if (container) container.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };
  return (
    <div className="sort">
      <button
        className="sort-button alpha-sort"
        onClick={() => {
          alphaSortClick();
        }}
      >
        {alphaSort === 2 ? "Z-A" : "A-Z"}
      </button>
      <button
        className="sort-button level-sort"
        onClick={() => levelSortClick()}
      >
        {levelSort === 2 ? "↓" : "↑"}
      </button>
    </div>
  );
};

export default ShipSort;
