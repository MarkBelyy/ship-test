import React, { useEffect, useRef, useState } from "react";
import "./ShipMain.scss";
import { GetShipListQuery, useGetShipListQuery } from "./ShipMain.generated";
import ShipFilter from "../ShipFilter/ShipFilter";
import ShipWindow from "../ShipWindow/ShipWindow";
import ShipInfo from "../ShipInfo/ShipInfo";
import ShipFooter from "../ShipFooter/ShipFooter";

const ShipMain = () => {
  const [shipList, setShipList] = useState<GetShipListQuery>({});
  const [selectedShip, setSelectedShip] = useState(0);
  const [showFilter, setShowFilter] = useState(true);
  const [showInfo, setShowInfo] = useState(true);

  const { data, loading, error } = useGetShipListQuery();
  useEffect(() => {
    if (data) {
      setShipList(data);
    }
  }, [data]);

  return (
    <div className="main-container">
      <div className="ship-container">
        {showFilter && <ShipFilter />}
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
          data={data}
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
