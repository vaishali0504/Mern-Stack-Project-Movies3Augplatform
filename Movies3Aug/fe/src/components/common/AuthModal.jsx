import { Box, Modal } from "@mui/material";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";

const actionState = {
  signin: "signin",
  signup: "signup"
};

const AuthModal = ({ user, setUser, authModalOpen, setAuthModalOpen }) => {
  const [action, setAction] = useState(actionState.signin)

  useEffect(() => {
    if (authModalOpen) {
      setAction(actionState.signin)
    }
  }, [authModalOpen]);

  const handleClose = () => {
    setAuthModalOpen(false)
  }
  const switchAuthState = (state) => setAction(state)

  return (
    <Modal open={authModalOpen} onClose={handleClose}>
      <Box sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        maxWidth: "600px",
        padding: 4,
        outline: "none"
      }}>
        <Box sx={{ padding: 4, boxShadow: 24, backgroundColor: "background.paper" }}>
          <Box sx={{ textAlign: "center", marginBottom: "2rem" }}>
            <Logo />
          </Box>

          {action === actionState.signin && <SigninForm
            user={user}
            setUser={setUser}
            authModalOpen={authModalOpen}
            setAuthModalOpen={setAuthModalOpen}
            switchAuthState={() => switchAuthState(actionState.signup)} />}

          {action === actionState.signup && <SignupForm
            user={user}
            setUser={setUser}
            authModalOpen={authModalOpen}
            setAuthModalOpen={setAuthModalOpen}
            switchAuthState={() => switchAuthState(actionState.signin)} />}
        </Box>
      </Box>
    </Modal>
  )
}
export default AuthModal;