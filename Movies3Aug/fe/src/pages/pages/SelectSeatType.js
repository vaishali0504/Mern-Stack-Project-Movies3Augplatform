import { useState, useEffect } from "react";
import SEAT from "../constants/SeatOptions";
import Button from "../library/Button";
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Label
} from "reactstrap";
import TAB_OPTIONS from "../constants/TabOptions";
export default function SelectSeatType({ onNext }) {
  const [seatCount, setSeatCount] = useState(1);
  const [seatType, setSeatType] = useState(null);
  const [isNextDisable, setNextDisable] = useState(true);
  function RenderSeatCounts() {
    var rows = [];
    for (let i = 1; i <= SEAT.MAX_SEAT_ALLOWED; i++) {
      rows.push(
        <PaginationItem key={i} active={seatCount === i ? true : false}>
          <PaginationLink onClick={() => setSeatCount(i)}>{i}</PaginationLink>
        </PaginationItem>
      );
    }
    return rows;
  }
  useEffect(() => {
    if (seatCount > 0 && seatType) setNextDisable(false);
  }, [seatCount, seatType]);

  function handleNext() {
    onNext(TAB_OPTIONS.SEAT_SELECTION, { seatCount, seatType });
  }

  return (
    <Row>
      <Row>
        <Col>
          <Label>Select Seat Type</Label>
          <ListGroup horizontal>
            {SEAT.SEAT_TYPE.map((item) => (
              <ListGroupItem
                key={item.type}
                active={seatType === item.type ? true : false}
                tag="a"
                onClick={() => setSeatType(item.type)}
              >
                {item.title} (₹{SEAT.SEAT_PRICE[item.type]}.00/seat)
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <Label>Total Seats</Label>
          {/* <Pagination aria-label="Page navigation example">
            <RenderSeatCounts />
          </Pagination> */}<br />
          <input max={100} value={seatCount} maxLength={100} onChange={(e) => {
            let val = e.target.value
            if (val <= 100) {
              setSeatCount(Number(e.target.value))
            } else {
              alert('You can only book 100 seats.')
            }
          }} style={{ border: 0, padding: 10, borderRadius: 5, }} type="number" placeholder="Enter seat counts" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Label>
            Total Price:{" "}
            <b>
              ₹
              {seatCount > 0 && seatType
                ? SEAT.SEAT_PRICE[seatType] * seatCount
                : 0}
              .00
            </b>
          </Label>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={handleNext} title="Next" disabled={isNextDisable} />
        </Col>
      </Row>
    </Row>
  );
}
