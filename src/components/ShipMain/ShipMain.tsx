import React, { useState } from "react";
import "./ShipMain.scss";
import { useGetShipListQuery } from "./ShipMain.generated";
import ShipFilter from "../ShipFilter/ShipFilter";
import ShipWindow from "../ShipWindow/ShipWindow";
import ShipInfo from "../ShipInfo/ShipInfo";
import ShipFooter from "../ShipFooter/ShipFooter";

const ShipMain = () => {
  const { data, loading, error } = useGetShipListQuery();
  const [selectedShip, setSelectedShip] = useState(0);
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="main-container">
      <div className="ship-container">
        {showFilter && (
          <div className="filter-window">
            {" "}
            <ShipFilter />
          </div>
        )}
        <h1>
          Selected ship is{" "}
          {data?.vehicles && data.vehicles[selectedShip]?.title}
        </h1>
        <ShipWindow vehicle={data?.vehicles && data.vehicles[selectedShip]} />
        <ShipInfo vehicle={data?.vehicles && data.vehicles[selectedShip]} />
      </div>
      <div className="footer-container">
        <button
          className={"show-filter-button"}
          onClick={() => setShowFilter((prevState) => !prevState)}
        ></button>
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
