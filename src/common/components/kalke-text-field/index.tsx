import React, { Dispatch, ReactNode, SetStateAction } from "react";
import TextField from "@mui/material/TextField";

interface IKalkeTextField {
  name: string;
  placeholder: string;
  error: boolean;
  message: string;
  label: ReactNode;
  value: string;
  onChange: Dispatch<SetStateAction<any>>;
  rest?: any;
  required?: boolean;
  size?: "small" | "medium" | undefined;
  sx?: object;
  border?: boolean;
  multiline?: boolean;
}

export default function KalkeTextField(props: IKalkeTextField) {
  const {
    name,
    placeholder,
    error,
    message,
    label,
    value,
    onChange,
    size = "medium",
    sx = {},
    border = true,
    required = false,
    multiline = false,
    ...rest
  } = props;
  return (
    <TextField
      name={name}
      label={label}
      size={size}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      error={error}
      sx={{
        ...sx,
        backgroundColor: "#ffffff",
        [border === false ? "& fieldset" : "undefined"]: { border: "none" },
        borderRadius: "3px",
      }}
      helperText={error ? message : ""}
      fullWidth
      required={required}
      multiline={multiline}
      {...rest}
    />
  );
}
