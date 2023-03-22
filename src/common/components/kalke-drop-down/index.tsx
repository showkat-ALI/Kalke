import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export default function KalkeDropDown({
  name,
  size,
  id,
  options,
  onChange,
  value,
  sx,
  label,
  ...props
}: {
  name: any;
  size: any;
  id: any;
  options: any;
  onChange: any;
  value: any;
  sx: any;
  label: any;
}) {
  return (
    <FormControl size={size} {...props} sx={sx}>
      <InputLabel id={id} sx={{ padding: "1px" }}>
        <Typography
          sx={{
            color: "#455964",
            fontWeight: 600,
            fontSize: "0.85rem",
            fontFamily: "inherit",
            letterSpacing: "0.02rem",
          }}
        >
          {name}
        </Typography>
      </InputLabel>
      <Select
        labelId={id}
        id={id}
        value={value}
        label={label}
        onChange={onChange}
        sx={{ ".MuiOutlinedInput-notchedOutline": { border: 0 } }}
        IconComponent={KeyboardArrowDownIcon}
      >
        {options.map((item: any, index: any) => (
          <MenuItem value={item} key={index}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
