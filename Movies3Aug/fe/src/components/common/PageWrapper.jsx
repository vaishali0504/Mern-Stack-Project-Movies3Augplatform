/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

const PageWrapper = ({ state, children, setAppState }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setAppState(state);
  }, [state]);

  return (
    children
  );
};

export default PageWrapper;