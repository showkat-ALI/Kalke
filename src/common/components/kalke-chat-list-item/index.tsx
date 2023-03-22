import React from "react";
import { Avatar, Badge, Typography } from "@mui/material";
import { Box } from "@mui/system";
import googleLogo from "../../../assets/Images/random.png";
import { StyledDotBadge } from "@components/StyledComponents/StyledBadge";

interface chatIListItemsProps {
  img?: string;
}

const ChatIListItem: React.FC<chatIListItemsProps> = (props) => {
  return (
    <Box p={1} mb={1} sx={{ border: "1px solid #F2FAFF" }}>
      <Box mb={1} display="flex" alignItems="center" gap={1}>
        <StyledDotBadge
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          overlap="circular"
          color="success"
          variant="dot"
        >
          <Avatar alt="Remy Sharp" src={googleLogo.src} />
        </StyledDotBadge>

        <Box width="100%">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography fontWeight="600" variant="subtitle1">
              Sabbir Hasan
            </Typography>
            <Typography color="textSecondary" variant="caption">
              8:40 AM
            </Typography>
          </Box>
          <Typography gutterBottom color="textSecondary" variant="caption">
            Senior Product Designer • Applied a day ago
          </Typography>
        </Box>
      </Box>
      <Typography
        fontSize="14px"
        sx={{ wordBreak: "break-word", ml: 6 }}
        variant="subtitle2"
      >
        Highly creative with the ability to work well within a team...
      </Typography>
    </Box>
  );
};

export default ChatIListItem;
