import { Box, Container, Typography, styled } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
function Footer() {
  const FooterContainer = styled(Box)(({ theme }) => ({
    width: "100%",

    [theme.breakpoints.up("xs")]: {
      height: "100px",
    },
    marginTop: "36px",
    backgroundColor: "black",

    display: "flex",
    justifyContent: "space-around",
  }));

  const FooterTypography = styled(Typography)(({ theme }) => ({
    color: "white",
  }));

  const FooterBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }));

  return (
    <FooterContainer>
      <FooterBox
        sx={{
          display: {
            xs: "none",
            sm: "flex",
          },
        }}
      >
        <FooterTypography>Questions? Call 1-202-202-202</FooterTypography>
        <FooterTypography>FAQ</FooterTypography>
        <FooterTypography>Cookie Preference</FooterTypography>
      </FooterBox>
      <FooterBox
        sx={{
          display: {
            xs: "none",
            sm: "flex",
          },
        }}
      >
        <FooterTypography>Help Centre</FooterTypography>
        <FooterTypography>Co operate information</FooterTypography>
      </FooterBox>
      <FooterBox
        sx={{
          display: {
            xs: "none",

            sm: "none",
            md: "flex",
          },
        }}
      >
        <FooterTypography>Terms of use</FooterTypography>
        <FooterTypography>Policy</FooterTypography>
      </FooterBox>
      <Box sx={{ display: "flex", alignItems: "center", gap: "5" }}>
        <FacebookIcon sx={{ color: "white" }} />
        <InstagramIcon sx={{ color: "white" }} />
        <TwitterIcon sx={{ color: "white" }} />
        <YouTubeIcon sx={{ color: "white" }} />
      </Box>
    </FooterContainer>
  );
}

export default Footer;
