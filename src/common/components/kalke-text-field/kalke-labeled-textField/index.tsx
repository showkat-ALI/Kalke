// import { Dialog, Grid } from "@mui/material";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// // import { makeStyles } from "@material-ui/core";

// import CloseIcon from "@mui/icons-material/Close";
// import { makeStyles } from "@mui/styles";
// import Image from "next/image";
// import KalkeTextButton from "@buttons/kalke-text-button";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import {
//   alpha,
//   Box,
//   FormControl,
//   InputBase,
//   InputLabel,
//   styled,
//   TextField,
//   Typography,
//   InputAdornment,
// } from "@mui/material";
// import IconButton from "@mui/material/IconButton/IconButton";
// import React, { useState } from "react";
// import { Controller, useFormContext } from "react-hook-form";
// export default function KalkeLabledTextField({
//   topSx,
//   labelSx,
//   id,
//   variant,
//   htmlFor,
//   defaultValue,
//   value,
// }: {
//   topSx: any;
//   labelSx: any;
//   id: any;
//   variant: any;
//   htmlFor: any;
//   defaultValue?: any;
//   value: any;
// }) {
//   const BootstrapInput = styled(InputBase)(({ theme }) => ({
//     "label + &": {
//       marginTop: theme.spacing(3),
//     },
//     "& .MuiInputBase-input": {
//       borderRadius: 4,
//       backgroundColor: "white",
//       border: "1px solid #ced4da",
//       fontSize: 16,
//       width: "100%",
//       padding: "10px 12px",
//       color: "#546D7A",
//       transition: theme.transitions.create([
//         "border-color",
//         "background-color",

//         "box-shadow",
//       ]),
//       // Use the system font instead of the default Roboto font.
//     },
//   }));
//   const {
//     control,
//     formState: { errors },
//   } = useFormContext();
//   return (
//     <Controller
//     control={control}
//     name={id}
//     render=(({field})=>(

//       <FormControl
//         variant="standard"
//         // sx={{ mb: "12px", width: "100%" }}
//         sx={topSx}
//       >
//         <InputLabel
//           shrink
//           htmlFor="bootstrap-input"
//           //   sx={{ fontWeight: 600 }}
//           sx={labelSx}
//         >
//           {value}
//         </InputLabel>
//         <BootstrapInput defaultValue={defaultValue} id={id} />
//       </FormControl>)
//     />
//   );
// }
export default function index() {
  return <></>;
}
