import * as React from "react";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";
import headerImg from "./imgs/logo.png";
import Alert from "@mui/material/Alert";
import CardActionArea from "@mui/material/CardActionArea";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import verifyImage from "./imgs/verify.png";
import trackImg from "./imgs/track.png";
import communicateImg from "./imgs/communicate.png";
import updateImg from "./imgs/update.png";
import controlImg from "./imgs/control.png";

const HeaderTopImg = styled.img``;
const HeaderLogoLink = styled.a``;
const AlertDiv = styled.div``;
const VerifyWrapper = styled.div`
  background-image: url(${verifyImage.src});
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 35% auto;
  height: 100vh;
`;
const ImageIcon = styled.img`
  width: 56px;
  margin: 0 auto;
`;
const CardHover = styled.div`
  text-align: center;
  &:hover {
    background: #037bfd;
    h3,
    p {
      color: white;
    }
  }
`;
const Title = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 160%;
  letter-spacing: 0.15px;
  color: #253237;
`;
const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  text-align: center;
  letter-spacing: 0.17px;
  color: #455964;
  height: 2.25em;
`;

const theme = styled.img``;

export default function VerifyEmailSent() {
  return (
    <VerifyWrapper>
      <Container component="main" maxWidth="lg">
        <HeaderLogoLink href="#">
          <HeaderTopImg src={headerImg.src} />
        </HeaderLogoLink>

        <Grid
          container
          spacing={2}
          sx={{
            width: "60%",
            pt: 15,
          }}
        >
          <Grid item xs={12}>
            <AlertDiv>
              <Alert
                severity="error"
                color="success"
                sx={{ mb: 3, color: "#00B655" }}
              >
                Confirm your email and finish your account creation!
              </Alert>
            </AlertDiv>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHover>
                <CardActionArea>
                  <CardContent>
                    <div>
                      <ImageIcon src={trackImg.src} />
                    </div>
                    <Title>Track</Title>
                    <Description>TRACK your job applications.</Description>
                  </CardContent>
                </CardActionArea>
              </CardHover>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHover>
                <CardActionArea>
                  <CardContent>
                    <div>
                      <ImageIcon src={communicateImg.src} />
                    </div>
                    <Title>Communicate</Title>
                    <Description>
                      Communicate directly with the hiring team.
                    </Description>
                  </CardContent>
                </CardActionArea>
              </CardHover>
            </Card>
          </Grid>
          <Grid item xs={6}>
            {" "}
            <Card sx={{ maxWidth: 345 }}>
              <CardHover>
                <CardActionArea>
                  <CardContent>
                    <div>
                      <ImageIcon src={controlImg.src} />
                    </div>
                    <Title>Update Profile</Title>
                    <Description>
                      No matter what kind of home you have to share, you can
                      increase your earnings.
                    </Description>
                  </CardContent>
                </CardActionArea>
              </CardHover>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHover>
                <CardActionArea>
                  <CardContent>
                    <div>
                      <ImageIcon src={updateImg.src} />
                    </div>
                    <Title>Control</Title>
                    <Description>
                      Control your data and privacy settings
                    </Description>
                  </CardContent>
                </CardActionArea>
              </CardHover>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </VerifyWrapper>
  );
}
