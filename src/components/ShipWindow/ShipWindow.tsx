import React, { FC } from "react";
import "./ShipWindow.scss";
import { GetOneShip } from "../ShipMain/ShipMain.generated";

const ShipWindow: FC<GetOneShip> = (data) => {
  return (
    <div className="window">
      <img
        className="ship-img"
        src={data.vehicle?.icons?.large}
        alt={data.vehicle?.title}
      />
    </div>
  );
};

export default ShipWindow;
