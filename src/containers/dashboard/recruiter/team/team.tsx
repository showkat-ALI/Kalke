import { AddOutlined } from "@mui/icons-material";
import Search from "@mui/icons-material/Search";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";

export default function Team() {
  return (
    <Box mb={4}>
      <Typography mb={3} fontWeight="600" variant="h5">
        Team members
      </Typography>
      <Box bgcolor="#ffffff" p={2}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Search"
              fullWidth
              size="small"
              InputProps={{
                startAdornment: <Search />,
              }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Button variant="outlined" fullWidth>
              All team members
            </Button>
          </Grid>
          <Grid item xs={12} md={3}>
            <Link href="/recruiter/settings/team/invite-team-members">
              <Button
                variant="outlined"
                color="secondary"
                endIcon={<AddOutlined />}
                fullWidth
              >
                Invite users
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} />
        <Box p={1}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={2}>
              <Typography variant="body1">Name</Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="body1">Email</Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1">User role</Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="body1">Date added</Typography>
            </Grid>
            <Grid item xs={12} md={2} />
          </Grid>
        </Box>
        <Box bgcolor="#F9FBFC" p={1}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={2}>
              <Typography variant="body2">Sabbir Hasan</Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="body2">sabbirux@gmail.com</Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body2">
                <Button variant="contained" size="small" disabled>
                  Admin
                </Button>
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="body2">16 Dec, 2023</Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Box display="flex" gap={2} alignItems="center">
                <IconButton size="small">
                  <BorderColorIcon />
                </IconButton>
                <IconButton size="small">
                  <DeleteIcon color="error" />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
