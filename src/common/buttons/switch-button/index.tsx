// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import { makeStyles } from "@mui/styles";
// import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Switch, { SwitchProps } from "@mui/material/Switch";
// import Stack from "@mui/material/Stack";
// import Typography from "@mui/material/Typography";
// import { CustomTheme } from "../../../../styles/style";
// const KalkeToggleStyles = makeStyles({
//   "&:active": {
//     "& .MuiSwitch-thumb": {
//       width: 15,
//     },
//     "& .MuiSwitch-switchBase.Mui-checked": {
//       transform: "translateX(9px)",
//       color: "red",
//     },
//   },
//   "& .MuiSwitch-switchBase": {
//     padding: 2,
//     "&.Mui-checked": {
//       transform: "translateX(12px)",
//       color: "#BCE2FF",
//       "& + .MuiSwitch-track": {
//         opacity: 1,
//         borderColor: (props: any) => {
//           // console.log(props);
//           return props.customcolor;
//         },
//         backgroundColor: "red",
//       },
//     },
//   },
//   "& .MuiSwitch-thumb": {
//     boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//     transition: (props: any) =>
//       props.theme.transitions.create(["width"], {
//         duration: 200,
//       }),
//   },
//   "& .MuiSwitch-track": {
//     border: ` 1px solid ${(props: any) => props.customcolor}`,
//     borderRadius: 16 / 2,
//     opacity: 1,
//     backgroundColor: (props: any) =>
//       props.theme.palette.mode === "dark" ? "red" : "rgba(0,0,0,.25)",
//     boxSizing: "border-box",
//   },
// });
// const KalkeSingleSwitch = (props: any) => {
//   const styles = KalkeToggleStyles({ ...props, theme: CustomTheme });
//   return <Switch classes={{}} />;
// };
// export default function KalkeSwitch({
//   rightOption,
//   leftOption,
// }: {
//   rightOption: any;
//   leftOption?: any;
// }) {
//   const customcolor = "#BCE2FF";
//   return (
//     <Stack direction="row" spacing={1} alignItems="center">
//       <Typography>{leftOption}</Typography>

//       <KalkeSingleSwitch
//         customcolor={"#BCE2FF"}
//         inputProps={{ "aria-label": "ant design" }}
//       />

//       <Typography>{rightOption}</Typography>
//     </Stack>
//   );
// }

// new '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''//
import * as React from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
let bgColor: any;
const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 15,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : bgColor,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

export default function index({
  leftOption,
  rightOption,
  KalkebgColor,
}: {
  leftOption?: any;
  rightOption?: any;
  KalkebgColor: any;
}) {
  bgColor = KalkebgColor;
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography sx={{ color: "#546D7A" }}>{leftOption}</Typography>
      <AntSwitch defaultChecked inputProps={{ "aria-label": "ant design" }} />
      <Typography sx={{ color: "#546D7A" }}>{rightOption}</Typography>
    </Stack>
  );
}
