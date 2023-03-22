import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import KalkeTextField from "@components/kalke-text-field";
import KalkeIconTextButton from "@buttons/kalke-icon-text-button";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function JobPreviewApply() {
  return (
    <Box
      component={"div"}
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "24px",
        padding: "20px",
        borderRadius: "5px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Typography fontSize={"1.5rem"}>Submit your application</Typography>

      <br />

      <KalkeIconTextButton
        text={"Attach resume/CV"}
        type={"outlined"}
        size={"large"}
        sx={{
          width: "210px",
          height: "40px",
        }}
        startIcon={<InsertLinkIcon />}
        onClick={() => {}}
      />

      <br />

      <Box component={"div"}>
        <KalkeTextField
          value=""
          onChange={() => {}}
          placeholder=""
          error={false}
          message={""}
          size="medium"
          name="Fullname"
          label="Fullname"
          required={true}
        />
      </Box>

      <br />

      <Box component={"div"}>
        <KalkeTextField
          value=""
          onChange={() => {}}
          placeholder=""
          error={false}
          message={""}
          size="medium"
          name="Email"
          label="Email"
          required={true}
        />
      </Box>

      <br />

      <Box component={"div"}>
        <KalkeTextField
          value=""
          onChange={() => {}}
          placeholder=""
          error={false}
          message={""}
          size="medium"
          name="Phone"
          label="Phone"
          required={true}
        />
      </Box>

      <br />

      <Box component={"div"}>
        <KalkeTextField
          value=""
          onChange={() => {}}
          placeholder=""
          error={false}
          message={""}
          size="medium"
          name="Current or past company"
          label="Current or past company"
          required={true}
        />
      </Box>

      <br />
      <br />

      <Typography fontSize={"1rem"} fontWeight="600">
        Links
      </Typography>

      <br />

      <Box component={"div"}>
        <KalkeTextField
          value=""
          onChange={() => {}}
          placeholder=""
          error={false}
          message={""}
          size="medium"
          name="GitHub URL"
          label="GitHub URL"
          required={true}
        />
      </Box>

      <br />

      <Box component={"div"}>
        <KalkeTextField
          value=""
          onChange={() => {}}
          placeholder=""
          error={false}
          message={""}
          size="medium"
          name="Linkedin URL"
          label="Linkedin URL"
          required={true}
        />
      </Box>

      <br />

      <Box component={"div"}>
        <KalkeTextField
          value=""
          onChange={() => {}}
          placeholder=""
          error={false}
          message={""}
          size="medium"
          name="Portfolio URL"
          label="Portfolio URL"
          required={true}
        />
      </Box>

      <br />
      <br />

      <Typography fontSize={"1rem"} fontWeight="600">
        Additional
      </Typography>

      <br />

      <Box component={"div"}>
        <KalkeTextField
          value=""
          onChange={() => {}}
          placeholder=""
          error={false}
          message={""}
          size="medium"
          name="cover-letter"
          label="Please share with us why this position is a good fit for you and what you might be able to contribute in this position:"
          multiline={true}
        />
      </Box>

      <br />

      <KalkeIconTextButton
        text={"Attach Cover Letter"}
        type={"outlined"}
        size={"large"}
        sx={{
          width: "210px",
          height: "40px",
        }}
        startIcon={<InsertLinkIcon />}
        onClick={() => {}}
      />

      <br />

      <KalkeIconTextButton
        text={"Submit"}
        size={"large"}
        sx={{
          width: "125px",
          height: "40px",
        }}
        endIcon={<ArrowForwardIcon />}
        onClick={() => {}}
      />
    </Box>
  );
}
