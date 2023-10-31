import React, { FC } from "react";
import "./ShipWindow.scss";
import { Vehicle } from "../../types.generated";
import { GetOneShip } from "../ShipMain/ShipMain.generated";
const ShipWindow: FC<GetOneShip> = (data) => {
  return (
    <div className={"window"}>
      <img src={data.vehicle?.icons?.large} alt={data.vehicle?.title} />
    </div>
  );
};

export default ShipWindow;
