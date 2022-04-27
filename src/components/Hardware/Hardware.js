import React, { Fragment } from "react";
import HardwareSummary from "./HardwareSummary";
import AvailableHardware from "./AvailableHardware";

const Hardware = () => {
  return (
    <Fragment>
      <HardwareSummary />
      <AvailableHardware />
    </Fragment>
  );
};

export default Hardware;
