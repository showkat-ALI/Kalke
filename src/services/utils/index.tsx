export function a11yProps(index: number) {
  return {
    id: `kalke-tab-${index}`,
    "aria-controls": `kalke-tabpanel-${index}`,
  };
}
