import React, { useState } from "react";
import { Box, ListItemButton, Typography } from "@mui/material";

export default function TablePanelKalke({
  tabdata,
  sx,
}: {
  tabdata: any;
  sx: any;
}) {
  const [selectTab, setSelectedTab] = useState(2);

  return (
    <Box>
      <Box sx={{ display: "flex", mt: "10px", mb: "20px" }}>
        {tabdata.map((option: any, index: any) => (
          <ListItemButton
            key={index}
            sx={{
              minHeight: 20,
              maxWidth: 140,
              justifyContent: "center",
              px: "8px",
              py: "8px",
              borderRadius: selectTab === option?.id ? "2px" : 0,
              border: selectTab === option.id ? "1px solid #8DD0FF" : "",
              backgroundColor: selectTab === option?.id ? "#F2FAFF" : "inherit",
            }}
            onClick={() => setSelectedTab(option.id)}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                }}
                color={selectTab === option?.id ? "#037BFD" : "inherit"}
              >
                {option.name}
              </Typography>
            </Box>
          </ListItemButton>
        ))}
      </Box>
      <Box sx={{}}>
        {tabdata.map((item: any, id: any) =>
          selectTab == item.id ? <item.component key={id} /> : ""
        )}
      </Box>
    </Box>
  );
}
