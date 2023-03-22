import { Box } from "@mui/system";
import KalkeTextButton from "@buttons/kalke-text-button";
import HomeLayout from "@layouts/home-layout";
import { useRouter } from "next/router";
import { useState } from "react";
import RegistrationModal from "@components/popup/registration";
import LoginModal from "@components/popup/login";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const router = useRouter();
  const [openRegistrationPopUp, setOpenRegistrationPopUp] = useState(false);
  const [openLoginPopUp, setOpenLoginPopUp] = useState(false);
  // const { auth } = useAuth();
  // console.log(auth);
  return (
    <HomeLayout>
      <ToastContainer></ToastContainer>
      <Box
        sx={{
          width: "90%",
          mx: "auto",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ my: "5px", mx: "5px" }}>
            <KalkeTextButton
              text={"login"}
              onClick={() => {
                setOpenLoginPopUp(true);
              }}
              variant="outlined"
            />
          </Box>
          <Box sx={{ my: "5px", mx: "5px" }}>
            <KalkeTextButton
              text={"sign-up"}
              onClick={() => {
                setOpenRegistrationPopUp(true);
              }}
              variant="outlined"
            />
          </Box>
          <Box sx={{ my: "5px", mx: "5px" }}>
            <KalkeTextButton
              text={"career"}
              onClick={() => {
                router.push("career");
              }}
              variant="outlined"
            />
          </Box>
          <Box sx={{ my: "5px", mx: "5px" }}>
            <KalkeTextButton
              text={"create-job"}
              onClick={() => {
                router.push("create-job");
              }}
              variant="outlined"
            />
          </Box>
          <Box sx={{ my: "5px", mx: "5px" }}>
            <KalkeTextButton
              text={"job-preview"}
              onClick={() => {
                router.push("job-preview");
              }}
              variant="outlined"
            />
          </Box>
          <Box sx={{ my: "5px", mx: "5px" }}>
            <KalkeTextButton
              text={"dashboard"}
              onClick={() => {
                router.push("dashboard/recruiter");
              }}
              variant="outlined"
            />
          </Box>
          <Box sx={{ my: "5px", mx: "5px" }}>
            <KalkeTextButton
              text={"company directory"}
              onClick={() => {
                router.push("company-directory");
              }}
              variant="outlined"
            />
          </Box>
          <Box sx={{ my: "5px", mx: "5px" }}>
            <KalkeTextButton
              text={"apply-without-login"}
              onClick={() => {
                router.push("apply-without-login");
              }}
              variant="outlined"
            />
          </Box>
          <Box sx={{ my: "5px", mx: "5px" }}>
            <KalkeTextButton
              text={"apply-with-password"}
              onClick={() => {
                router.push("apply-with-password");
              }}
              variant="outlined"
            />
          </Box>
          <Box sx={{ my: "5px", mx: "5px" }}>
            <KalkeTextButton
              text={"old-user-apply"}
              onClick={() => {
                router.push("old-user-apply");
              }}
              variant="outlined"
            />
          </Box>
          <Box sx={{ my: "5px", mx: "5px" }}>
            <KalkeTextButton
              text={"apply-success"}
              onClick={() => {
                router.push("apply-success");
              }}
              variant="outlined"
            />
          </Box>
          <Box sx={{ my: "5px", mx: "5px" }}>
            <KalkeTextButton
              text={"apply-success-message"}
              onClick={() => {
                router.push("apply-success-message");
              }}
              variant="outlined"
            />
          </Box>
          <Box sx={{ my: "5px", mx: "5px" }}>
            <KalkeTextButton
              text={"apply-success"}
              onClick={() => {
                router.push("apply-success");
              }}
              variant="outlined"
            />
          </Box>
          <Box sx={{ my: "5px", mx: "5px" }}>
            <KalkeTextButton
              text={"confirm-email"}
              onClick={() => {
                router.push("confirm-email");
              }}
              variant="outlined"
            />
          </Box>{" "}
        </Box>
        {/* <Box>{email}</Box> */}
      </Box>
      <RegistrationModal
        openRegistrationPopUp={openRegistrationPopUp}
        setOpenRegistrationPopUp={setOpenRegistrationPopUp}
      ></RegistrationModal>
      <LoginModal
        openLoginPopUp={openLoginPopUp}
        setOpenLoginPopUp={setOpenLoginPopUp}
      ></LoginModal>
    </HomeLayout>
  );
}
