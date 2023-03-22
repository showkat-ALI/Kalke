import { StyledDotBadge } from "@components/StyledComponents/StyledBadge";
import { Avatar, Badge, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import googleLogo from "../../../assets/Images/random.png";

const MessageItem = () => {
  return (
    <Box>
      <Box mb={1} display="flex" gap={1}>
        <Avatar alt="S" src={googleLogo.src} />
        <Box>
          <Box bgcolor="#0071cd" borderRadius="4px" p={1}>
            <Typography color="#fff" variant="body2">
              Im doing great, thanks for asking.I wanted to schedule a meeting
              with you today.
            </Typography>
          </Box>
          <Typography variant="caption">8:20 AM</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MessageItem;
