import ChatIListItem from "@components/kalke-chat-list-item";
import MessageItem from "@components/MessageItem";
import ArrowForward from "@mui/icons-material/ArrowForward";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Search from "@mui/icons-material/Search";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { StyledDotBadge } from "@components/StyledComponents/StyledBadge";
import googleLogo from "../../../../assets/Images/random.png";
import { Send } from "@mui/icons-material";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import { styled } from "@mui/styles";

export default function Inbox() {
  return (
    <Box mb={4}>
      <Typography mb={3} fontWeight="600" variant="h5">
        Inbox
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Box bgcolor="#ffffff">
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search “Candidate name”"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <FilterAltOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Box px={1} py={2}>
              {[1, 2, 3, 4, 5].map((item) => (
                <ChatIListItem key={item} />
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box p={2} display="flex" flexDirection="column" bgcolor="#ffffff">
            <Box mb={1} display="flex" gap={1}>
              <StyledDotBadge
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                overlap="circular"
                color="success"
                variant="dot"
              >
                <Avatar
                  sx={{
                    width: "52px",
                    height: "52px",
                  }}
                  src={googleLogo.src}
                />
              </StyledDotBadge>

              <Box>
                <Typography
                  fontWeight="600"
                  fontSize="18px"
                  variant="subtitle1"
                >
                  Sabbir Hasan
                </Typography>
                <Typography color="textSecondary" variant="body2">
                  Senior Product Designer • Applied a day ago • From talent
                </Typography>
              </Box>
            </Box>

            <Divider light />

            <Box py={2} sx={{ overflowY: "scroll" }} flexGrow={1}>
              {[1, 2, 3, 4, 5].map((item) => (
                <MessageItem key={item} />
              ))}
            </Box>

            <Box display="flex">
              <CssTextField
                label="Type your message"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <Box display="flex" alignItems="center" gap={1}>
                        <CollectionsOutlinedIcon />
                        <AttachFileOutlinedIcon />
                        <KeyboardVoiceOutlinedIcon />
                      </Box>
                    </InputAdornment>
                  ),
                }}
              />
              <BootstrapButton variant="contained">
                <Send />
              </BootstrapButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

//CUSTOM COMPONENETS
const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "4px 0px 0px 4px",
    },
  },
});

const BootstrapButton = styled(Button)({
  borderRadius: "0px 4px 4px 0px",
  boxShadow: "none",
});
