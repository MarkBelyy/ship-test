import React, { useEffect, useState } from "react";
import "./ShipMain.scss";
import { GetShipListQuery, useGetShipListQuery } from "./ShipMain.generated";
import ShipFilter from "../ShipFilter/ShipFilter";
import ShipWindow from "../ShipWindow/ShipWindow";
import ShipInfo from "../ShipInfo/ShipInfo";
import ShipFooter from "../ShipFooter/ShipFooter";
import { allLevels, allNationName, allTypesName } from "../../data";

const ShipMain = () => {
  const [shipList, setShipList] = useState<GetShipListQuery>({});
  const [selectedShip, setSelectedShip] = useState(0);
  const [showFilter, setShowFilter] = useState(true);
  const [showInfo, setShowInfo] = useState(true);
  const [nationFilter, setNationFilter] = useState<string[]>(allNationName);
  const [typeFilter, setTypeFilter] = useState<string[]>(allTypesName);
  const [levelFilter, setLevelFilter] = useState<number[]>(allLevels);
  const { data, loading, error } = useGetShipListQuery();
  useEffect(() => {
    if (data) {
      setShipList(data);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      const filteredData = data.vehicles?.filter(
        (vehicle) =>
          vehicle &&
          vehicle.nation?.name &&
          nationFilter.includes(vehicle.nation.name) &&
          vehicle.type?.name &&
          typeFilter.includes(vehicle.type?.name) &&
          vehicle.level &&
          levelFilter.includes(vehicle.level),
      );
      setShipList({ vehicles: filteredData });
    }
  }, [nationFilter, typeFilter, levelFilter]);

  return (
    <div className="main-container">
      <div className="ship-container">
        {showFilter && (
          <ShipFilter
            nationFilter={nationFilter}
            typeFilter={typeFilter}
            levelFilter={levelFilter}
            setNationFilter={setNationFilter}
            setTypeFilter={setTypeFilter}
            setLevelFilter={setLevelFilter}
          />
        )}
        <ShipWindow
          vehicle={shipList?.vehicles && shipList.vehicles[selectedShip]}
        />
        {showInfo && (
          <ShipInfo
            vehicle={shipList?.vehicles && shipList.vehicles[selectedShip]}
          />
        )}
      </div>
      <div className="footer-container">
        <div className="footer-buttons">
          <button
            className="show-button"
            onClick={() => setShowInfo((prevState) => !prevState)}
          >
            {showInfo ? "Скрыть описание" : "Показать описание"}
          </button>
          <button
            className="show-button"
            onClick={() => setShowFilter((prevState) => !prevState)}
          >
            {showFilter ? "Скрыть фильтры" : "Показать фильтры"}
          </button>
        </div>
        <ShipFooter
          shipList={shipList}
          loading={loading}
          error={error}
          selectedShip={selectedShip}
          setSelectedShip={setSelectedShip}
        />
      </div>
    </div>
  );
};

export default ShipMain;
