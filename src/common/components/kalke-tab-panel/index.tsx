import * as React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { a11yProps } from "src/services/utils";

interface IKalkeTabPanelProps {
  tabLabels: Array<{
    label: string;
    component: React.FC; // () => JSX.Element
  }>;
  tabValue: number;
  setTabValue: Function;
}

export function KalkeTabPanel(props: IKalkeTabPanelProps) {
  return (
    <Box>
      <Tabs
        value={props.tabValue}
        onChange={(_, value) => props.setTabValue(value)}
        aria-label="tabs"
      >
        {props.tabLabels?.map((item, index) => (
          <Tab
            key={index}
            sx={{ textTransform: "capitalize" }}
            label={item.label}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>

      {props.tabLabels?.map((item, index) => (
        <TabPanel key={index} value={props.tabValue} index={index}>
          {<item.component />}
        </TabPanel>
      ))}
    </Box>
  );
}

export function TabPanel(props: {
  [x: string]: any;
  children: any;
  value: any;
  index: any;
}) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`kalke-tabpanel-${index}`}
      aria-labelledby={`kalke-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}
