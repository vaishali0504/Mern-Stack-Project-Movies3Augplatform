import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import { Container } from "reactstrap";
import TAB_OPTIONS from "./constants/TabOptions";
import Confirmation from "./pages/Confirmation";
import SeatBooking from "./pages/SeatBooking";
import SelectSeatType from "./pages/SelectSeatType";
import "./styles.css";
export default function SeatBookings() {
  const [tab, setTab] = useState(TAB_OPTIONS.SEAT_TYPE);
  const [seatSelection, setSeatSelection] = useState({});

  function handleTabChange(tab, seatSelection) {
    setTab(tab);
    setSeatSelection(seatSelection);
  }
  return (
    <div style={{ marginTop: "10%" }} className="m-9">
      <Container>
        {tab === TAB_OPTIONS.SEAT_TYPE ? (
          <SelectSeatType onNext={handleTabChange} />
        ) : null}
        {tab === TAB_OPTIONS.SEAT_SELECTION ? (
          <SeatBooking onNext={handleTabChange} seatSelection={seatSelection} />
        ) : null}
        {tab === TAB_OPTIONS.CONFIRMATION ? (
          <Confirmation setTab={setTab} seatSelection={seatSelection} />
        ) : null}
      </Container>
      <div></div>
    </div>
  );
}
