import React, { FC } from "react";
import "./ShipInfo.scss";
import { GetOneShip } from "../ShipMain/ShipMain.generated";

const ShipInfo: FC<GetOneShip> = (data) => {
  return (
    <div className={"info"}>
      <div>{data.vehicle?.description}</div>ShipInfo
    </div>
  );
};

export default ShipInfo;
