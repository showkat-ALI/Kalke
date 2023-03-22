import React, { useState } from "react";
import { Box, Grid, Button } from "@mui/material";
import { Document, Page, pdfjs } from "react-pdf";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  function onDocumentLoadSuccess({ numPages }: { numPages: any }) {
    setNumPages(numPages);
  }
  // console.log(require("../../../../../public/Resume_of_Showkat_ali.pdf"));
  return (
    <Grid sx={{ my: "0px" }} container gap={1}>
      <Grid
        item
        xs={9}
        sx={{
          backgroundColor: "#253237",
          pt: "20px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            width: "800px",
            height: "1200px",
            overflow: "auto",
          }}
        >
          <div>
            <Document
              file={"http://localhost:3000/Resume_of_Showkat_ali.pdf"}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
            <p>
              Page {pageNumber} of {numPages}
            </p>
          </div>
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box>
          <Button
            sx={{
              backgroundColor: "#F2FAFF",
              color: "#037BFD",
              border: "1px solid blue",
            }}
            endIcon={<FileDownloadIcon />}
          >
            Download
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
