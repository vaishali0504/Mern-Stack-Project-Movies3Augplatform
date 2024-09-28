/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

const ProtectedPage = ({ children }) => {

  const userData = localStorage.getItem("Token")
  const user = JSON.parse(userData)
  const [authModalOpen, setAuthModalOpen] = useState(false)

  useEffect(() => {
    setAuthModalOpen(!user);
  }, [user]);
  return (
    user ? children : null
  );
};

export default ProtectedPage;