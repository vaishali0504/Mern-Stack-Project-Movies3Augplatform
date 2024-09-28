const SEATS = {
  SEAT_TYPE: [
    { type: "EXECUTIVE", title: "Executive" },
    { type: "PREMUIM_ECONOMY", title: "Premium Economy" },
    { type: "ECONOMY", title: "Economy" }
  ],
  SEAT_PRICE: { EXECUTIVE: 500, PREMUIM_ECONOMY: 350, ECONOMY: 200 },
  MAX_SEAT_ALLOWED: 10,
  SEAT_STRUCTURE: {
    EXECUTIVE: [
      {
        row: "K",
        seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        totalPlaces: 16
      }
    ],
    PREMUIM_ECONOMY: [
      {
        row: "J",
        seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21],
        totalPlaces: 21
      },
      {
        row: "I",
        seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21],
        totalPlaces: 21
      },
      {
        row: "H",
        seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21],
        totalPlaces: 21
      },
      {
        row: "G",
        seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21],
        totalPlaces: 21
      },
      {
        row: "F",
        seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21],
        totalPlaces: 21
      }
    ],
    ECONOMY: [
      {
        row: "E",
        seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21],
        totalPlaces: 21
      },
      {
        row: "D",
        seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21],
        totalPlaces: 21
      },
      {
        row: "C",
        seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21],
        totalPlaces: 21
      },
      {
        row: "B",
        seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21],
        totalPlaces: 21
      },
      {
        row: "A",
        seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21],
        totalPlaces: 21
      }
    ]
  }
};
export default SEATS;
