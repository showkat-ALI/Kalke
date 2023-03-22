import { Box } from "@mui/material";
import React, { useState } from "react";
import { ICommon } from "../interfaces/ICommon";
import AsideBar from "./recruiter/aside-bar";
import Header from "./recruiter/header";
import ScheduleTab from "./recruiter/schedule";
import Profile from "./recruiter/profile";
import Recruiter from "../../containers/dashboard/recruiter/overview/overview";
import Jobs from "../../containers/dashboard/recruiter/jobs/index";
import Candidates from "../../containers/dashboard/recruiter/candidates/candidates";
import Inbox from "../../containers/dashboard/recruiter/inbox/inbox";
import Schedule from "../../containers/dashboard/recruiter/schedule/schedule";
import Assessments from "../../containers/dashboard/recruiter/assessments/assessments";
import Marketplace from "../../containers/dashboard/recruiter/marketplace/marketplace";
import Settings from "../../containers/dashboard/recruiter/settings";
import Help from "../../containers/dashboard/recruiter/help/help";
import Notification from "./recruiter/notification";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CreateJob from "src/pages/create-job";
import Team from "@containers/dashboard/recruiter/team/team";
import Account from "@containers/dashboard/recruiter/settings/Account";
import CompanyProfile from "../../containers/dashboard/recruiter/settings";
import Billing from "@containers/dashboard/recruiter/settings/billing";

const RecruiterLayout: React.FC<ICommon> = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [selectedSubOption, setSelectedSubOption] = useState(0);

  const [secondRow, setSecondRow] = useState(0);

  const getMenu = () => {
    switch (selectedItem) {
      case 0:
        return <Recruiter />;
      case 1:
        return <Jobs />;
      case 2:
        return <Candidates />;
      case 3:
        return <Inbox />;
      case 4:
        return <Schedule />;
      case 5:
        return <Assessments />;
      case 6:
        return <Marketplace />;
      case 11:
        return <Help />;
      default:
        return "";
    }
  };

  const getSubMenu = () => {
    switch (selectedSubOption) {
      case 7:
        return <CompanyProfile />;
      case 8:
        return <Team />;
      case 9:
        return <Billing />;
      case 10:
        return <Account />;
      default:
        return "";
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AsideBar
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        secondRow={secondRow}
        setSecondRow={setSecondRow}
        selectedSubOption={selectedSubOption}
        setSelectedSubOption={setSelectedSubOption}
      />
      <Box
        sx={{
          flexGrow: 1,
          // backgroundColor: "#ECEFF1",
          backgroundColor: "#F5FAFF",
          // height: "100vh",
        }}
      >
        <Box
          sx={{
            py: "15px",
            backgroundColor: "white",
          }}
        >
          <Header />
        </Box>
        <Box
          sx={{
            backgroundColor: "#F9FBFC",
            paddingTop: "24px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          {/* {getMenu()}
          {getSubMenu()} */}
          {children}
        </Box>
      </Box>
      <Box
        sx={{
          // display: "none",
          backgroundColor: "white",
          paddingX: "16px",
          minWidth: "332px",
          pt: "16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: "35px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              borderRadius: "50%",
              backgroundColor: "#F2FAFF",
              width: "35px",
              height: "35px",
              mr: "15px",
            }}
          >
            <Box
              sx={{
                color: "#037BFD",
              }}
            >
              <NotificationsIcon />
            </Box>
          </Box>
          <Profile />
        </Box>
        <Box>
          <ScheduleTab />
        </Box>
        <Box>
          <Notification />
        </Box>
      </Box>
    </Box>
  );
};

export default RecruiterLayout;
