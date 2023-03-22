import { MoreVert } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const ScheduleCard = () => {
  return (
    <Box
      display="flex"
      p={1}
      gap={1}
      bgcolor="#F9FBFC"
      border="1px solid #ECEFF1"
      borderRadius="4px"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        bgcolor="#F2FAFF"
        border="1px solid #8DD0FF"
        borderRadius="4px"
        py={1}
        px={2}
      >
        <Typography color="primary" variant="caption">
          December
        </Typography>
        <Typography color="#1168EB" fontWeight={700} variant="h5">
          21
        </Typography>
        <Typography color="primary" variant="caption">
          Sunday
        </Typography>
      </Box>
      <Box
        display="flex"
        alignItems="start"
        gap={1}
        width="100%"
        justifyContent="space-between"
      >
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography fontWeight={600} variant="subtitle1">
            Shoaib Mahmud
          </Typography>
          <Typography variant="body2">
            Senior Product Designer • Applied a day ago • From talent
          </Typography>
          <Box display="flex" gap={1}>
            <Box display="flex" gap={1}>
              <AccessTimeIcon color="action" fontSize="small" />
              <Typography color="textSecondary" variant="body2">
                3:40PM - 04:00PM
              </Typography>
            </Box>
            <Box display="flex" gap={1}>
              <LocationOnOutlinedIcon color="action" fontSize="small" />
              <Typography color="textSecondary" variant="body2">
                House 11, Road 17, Block K, Banani, Dhaka, 1213
              </Typography>
            </Box>
          </Box>
        </Box>
        <IconButton size="small">
          <MoreVert />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ScheduleCard;
