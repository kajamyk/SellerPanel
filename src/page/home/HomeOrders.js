import { VerticalDivider } from "../../shared/VerticalDivider";
import { ShortInfo } from "../../shared/Info";
import { getCurrentData } from "../../controllers/languagecontroller";
import React, { useEffect, useState} from "react";
export function HomeOrders() {
    const data = getCurrentData();
    const notPayed = data.not_payed;
    const notSend = data.not_delivered;
    const returns = data.returns;
  
  return (
    <div className="flex-row">
      <ShortInfo headline={notPayed} amount={10} />
      <VerticalDivider />
      <ShortInfo headline={notSend} amount={10} />
      <VerticalDivider />
      <ShortInfo headline={returns} amount={10} />
    </div>
  );
}
