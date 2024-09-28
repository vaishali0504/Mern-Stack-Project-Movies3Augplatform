import BookingTickets from "../pages/BookingTickets";
import FavoriteList from "../pages/FavoriteList";
import HomePage from "../pages/HomePage";
import MediaDetail from "../pages/MediaDetail";
import MediaList from "../pages/MediaList";
import MediaSearch from "../pages/MediaSearch";
import PasswordUpdate from "../pages/PasswordUpdate";
import PersonDetail from "../pages/PersonDetail";
import ReviewList from "../pages/ReviewList";
import SeatBookings from "../pages/Seating";

export const routesGen = {
  home: "/",
  mediaDetail: (type, id) => `/${type}/${id}`,
  person: (id) => `/person/${id}`,
  mediaSearch: "/search",
  favoriteList: "/favorites",
  passwordUpdate: "password-update",
  reviewList: "/reviews",
};

const routes = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "/search",
    element: <MediaSearch />,
  },
  {
    path: "/password-update",
    element: <PasswordUpdate />,
  },
  {
    path: "/favorites",
    element: <FavoriteList />,
  },
  {
    path: "/:mediaType/:mediaId",
    element: <MediaDetail />,
  },
  {
    path: "/:mediaType",
    element: <MediaList />,
  },
  {
    path: "/person/:personId",
    element: <PersonDetail />,
  },
  {
    path: "/reviews",
    element: <ReviewList />,
  },
  {
    path: "/booking",
    element: <BookingTickets />,
  },
  {
    path: "/seatbooking",
    element: <SeatBookings />,
  },
];

export default routes;
