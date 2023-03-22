import { Box, Typography } from "@mui/material";
import OverviewChart from "./overview-chart";
import OverviewStats from "./overview-stats";
const overview = () => {
  const isLoading = false;
  return (
    <Box>
      <OverviewStats />
      <OverviewChart isLoading={isLoading} />
    </Box>
  );
};

export default overview;
