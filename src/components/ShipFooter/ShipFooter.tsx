import React, { FC } from "react";
import "./ShipFooter.scss";
import { GetShipListQuery } from "../ShipMain/ShipMain.generated";
import { ApolloError } from "@apollo/client";
import ShipIcon from "../ShipIcon/ShipIcon";

const ShipFooter: FC<{
  data: GetShipListQuery | undefined;
  loading: boolean;
  error: ApolloError | undefined;
}> = ({ data, loading, error }) => {
  return (
    <div className={"footer"}>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data?.vehicles?.map((vehicle) => (
        <ShipIcon
          onClick={() => console.log(vehicle)}
          key={vehicle?.title}
          {...vehicle}
        />
      ))}
    </div>
  );
};

export default ShipFooter;
