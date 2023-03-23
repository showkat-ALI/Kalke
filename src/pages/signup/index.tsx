import * as React from "react";
import { Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from "@emotion/styled";
import googleImg from "./imgs/google.svg";
import footerImgMaya from "./imgs/maya.png";
import footerImgKtc from "./imgs/ktc.png";
import footerImgSheba from "./imgs/sheba.png";
import footerImgLoop from "./imgs/loop.png";
import footerImgShikho from "./imgs/shikho.png";
import lineImg from "./imgs/line.png";
import headerImg from "./imgs/logo.png";
import { useRouter } from "next/router";
import { ROUTES } from "src/common/routes";

const HeaderTopImg = styled.img``;
const HeaderLogoLink = styled.a``;

const Title = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 48px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #183b56;
`;

const SubTitle = styled.p`
  text-align: center;
  letter-spacing: 0.2px;
  color: #183b56;
`;

const LoginWrapper = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
`;

const GoogleButton = styled(Button)`
  background: #50aa95;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;

  &:hover {
    background: #74ccb7;
  }
`;

const LineArea = styled.div`
  line-height: 19px;
  text-align: center;
  color: #183b56;
`;

const LineImgLeft = styled.img`
  float: left;
  margin-top: 10px;
`;

const LineImgRight = styled.img`
  float: right;
  margin-top: 10px;
`;

const GoogleIconWrapper = styled.div`
  background: #fff;
  padding: 5px;
  position: absolute;
  left: 8px;
  height: 80%;
  border-radius: 5px;
`;
const GoogleIcon = styled.img``;

const SignInButton = styled(Button)`
  background: #50aa95;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  &:hover {
    background: #74ccb7;
  }
`;

const CountEmploye = styled.p`
  text-align: center;
  letter-spacing: 0.2px;
  color: #183b56;
`;
const FooterBottom = styled.div`
  background: #50aa95;
`;
const BottomLink = styled.a`
  float: left;
  width: 20%;
  display: block;
`;
const BottomImage = styled.img``;

const theme = createTheme();

export default function SignIn() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <HeaderLogoLink href="#">
          <HeaderTopImg src={headerImg.src} />
        </HeaderLogoLink>
      </Container>

      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Title>Are you looking for a job?</Title>
        <SubTitle>
          Kalke is the industry leader for hiring employees grads to get hired.
          Create job and connect directly with potential employees
        </SubTitle>

        <LoginWrapper>
          <GoogleButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            <GoogleIconWrapper>
              <GoogleIcon src={googleImg.src} />
            </GoogleIconWrapper>
            Sign-Up WITH GOOGLE
          </GoogleButton>

          <LineArea>
            <LineImgLeft src={lineImg.src} />
            Or, sign Up with your email
            <LineImgRight src={lineImg.src} />
          </LineArea>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="repeat-password"
              label="Confirm password"
              type="password"
              id="repeat-password"
              autoComplete="new-password"
            />

            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"If you have account? Sign In"}
                </Link>
              </Grid>
            </Grid>
            <SignInButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                router.push(ROUTES.DASHBOARD);
              }}
            >
              Sign Up
            </SignInButton>
          </Box>
        </LoginWrapper>
        <CountEmploye>
          Millions of jobs and internships at over 300,00 employers
        </CountEmploye>
      </Container>
      <Container component="main" maxWidth="md">
        <FooterBottom>
          <BottomLink>
            <BottomImage src={footerImgMaya.src} />
          </BottomLink>
          <BottomLink>
            <BottomImage src={footerImgKtc.src} />
          </BottomLink>
          <BottomLink>
            <BottomImage src={footerImgSheba.src} />
          </BottomLink>
          <BottomLink>
            <BottomImage src={footerImgLoop.src} />
          </BottomLink>
          <BottomLink>
            <BottomImage src={footerImgShikho.src} />
          </BottomLink>
        </FooterBottom>
      </Container>
    </ThemeProvider>
  );
}
