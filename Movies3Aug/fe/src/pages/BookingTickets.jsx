import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  HARYANA_CINEMA_SEED,
  HARYANA_CITIES_SEEDS,
  HIMACHAL_CINEMA_SEED,
  HIMACHAL_CITIES_SEEDS,
  PUNJAB_CINEMA_SEED,
  PUNJAB_CITIES_SEEDS,
  STATE_SEEDS,
} from "../api/configs/cinemas";
import TAB_OPTIONS from "./constants/TabOptions";
import "./styles.css";
export default function BookingTickets() {
  const [tab, setTab] = useState(TAB_OPTIONS.SEAT_TYPE);
  const [seatSelection, setSeatSelection] = useState({});
  const navigate = useNavigate();
  const [activeTime, setTime] = useState(null);
  const [index, setIndex] = useState(null);
  const [selectedState, setSelectedState] = useState();
  const [showCinemas, setShowCinemas] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");

  const CINEMA_SEEDS = React.useMemo(() => {
    return [
      {
        name: `Fun Cinemas : Republic Mall, ${selectedCity}`,
        timeSlots: ["12:45PM", "08:25PM", "10:45PM"],
        mTicket: true,
        fNb: true,
        cancellation: false,
      },
      {
        name: `Cinepolis : Jagat Mall, ${selectedCity}`,
        timeSlots: ["12:45PM", "08:25PM", "10:45PM"],
        mTicket: true,
        fNb: true,
        cancellation: true,
      },
      {
        name: `Inox : NH22 Mall, ${selectedCity}`,
        timeSlots: ["12:45PM", "08:25PM", "10:45PM"],
        mTicket: false,
        fNb: false,
        cancellation: false,
      },
    ];
  }, [selectedCity]);

  function handleTabChange(tab, seatSelection) {
    setTab(tab);
    setSeatSelection(seatSelection);
  }

  const selectCitySeeds = () => {
    switch (Number(selectedState)) {
      case 1:
        return PUNJAB_CITIES_SEEDS;
      case 2:
        return HARYANA_CITIES_SEEDS;
      case 3:
        return HIMACHAL_CITIES_SEEDS;
    }
  };
  const selectCinemasSeeds = () => {
    switch (Number(selectedState)) {
      case 1:
        return PUNJAB_CINEMA_SEED;
      case 2:
        return HARYANA_CINEMA_SEED;
      case 3:
        return HIMACHAL_CINEMA_SEED;
      default:
        return;
    }
  };
  return (
    <div style={{ marginTop: "5%" }} className="m-9">
      {!showCinemas && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 30,
          }}
        >
          <div>
            <label style={{ padding: 5 }} for="state">
              Choose State:
            </label>
            <select
              onChange={(e) => {
                setSelectedState(e.target.value);
                selectCitySeeds();
                selectCinemasSeeds();
              }}
              style={{ padding: 5, borderRadius: 5 }}
              name="state"
              id="state"
            >
              <option disabled selected value={""}>
                Select State
              </option>
              {STATE_SEEDS.map((i) => {
                return <option value={i.id}>{i.name}</option>;
              })}
            </select>
          </div>

          <div>
            <label style={{ padding: 5 }} for="state">
              Choose City:
            </label>
            <select
              onChange={(e) => {
                setSelectedCity(e.target.value);
              }}
              style={{ padding: 5, borderRadius: 5 }}
              name="state"
              id="state"
            >
              <option disabled selected value={""}>
                Select City
              </option>
              {selectCitySeeds()?.map((i) => {
                return <option value={i.name}>{i.name}</option>;
              })}
            </select>
          </div>
          <button
            style={{
              padding: 5,
              width: 100,
              backgroundColor: "green",
              border: 0,
              borderRadius: 5,
              color: "white",
            }}
            disabled={!selectedCity}
            onClick={() => {
              setShowCinemas(true);
            }}
          >
            Next
          </button>
        </div>
      )}
      {showCinemas && (
        <div>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h4>Select Cinema</h4>
            {CINEMA_SEEDS.map((i, z) => {
              return (
                <div
                  style={{
                    alignItems: "center",
                    padding: 15,
                    border: "0.1px solid",
                    margin: 5,
                    flexDirection: "column",
                    width: "50%",
                    borderRadius: 5,
                    justifyContent: "center",
                  }}
                >
                  <div>
                    <span>{i?.name}</span>
                    {i.timeSlots?.map((time, i) => {
                      return (
                        <button
                          onClick={() => {
                            setTime(i);
                            setIndex(z);
                          }}
                          style={{
                            backgroundColor:
                              activeTime === i && z === index
                                ? "green"
                                : "gray",
                            paddingLeft: 5,
                            paddingRight: 5,
                            marginLeft: 5,
                            border: "1px solid",
                            borderColor: "black",
                            borderRadius: 5,
                          }}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    {i.mTicket && (
                      <>
                        <img
                          style={{ height: 20, width: 20 }}
                          src="https://cdn-icons-png.flaticon.com/512/389/389801.png"
                        />
                        <span style={{ color: "green", margin: 5 }}>
                          {"M-ticket"}
                        </span>
                      </>
                    )}
                    {i.mTicket && (
                      <div style={{}}>
                        <img
                          style={{ height: 20, width: 20 }}
                          src="https://cdn-icons-png.flaticon.com/128/3655/3655682.png"
                        />
                        <span style={{ color: "#ffa426", margin: 5 }}>
                          {"Food & Beverage"}
                        </span>
                      </div>
                    )}
                    <div>
                      <span>
                        {i.cancellation
                          ? "Cancellation Available"
                          : "Non-cancellable"}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
            {activeTime !== null && (
              <button
                style={{
                  padding: 10,
                  width: 100,
                  backgroundColor: "green",
                  border: 0,
                  borderRadius: 5,
                  color: "white",
                }}
                onClick={() => {
                  navigate("/seatbooking");
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
