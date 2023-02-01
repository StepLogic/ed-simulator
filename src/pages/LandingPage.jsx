import { KeyRounded, Visibility, VisibilityOff } from "@mui/icons-material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {
  Box,
  Button,
  FormHelperText,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  Typography,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import useMyContext from "../hooks/useMyContext";
import { Stack } from "@mui/system";
import { CaImage, CaKey, CaUser } from "../components/Icons";
import Footer from "../components/Footer";

/* const text = {
  english: {
    headerTitle: "Hey 👋 Good to see you!",
    labelEmail: "Email address",
    buttonLogin: "LOG IN",
    buttonReset: "Reset your password",
  },
  italiano: {
    headerTitle: "Ciao 👋 Piacere di vederti!",
    labelEmail: "Indirizzo Email",
    buttonLogin: "ENTRA",
    buttonReset: "Recupera la password",
  },
}; */

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "grid",
        backgroundColor: "#d9daf3",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr 5fr 6fr",
        height: "calc(var(--vh, 1vh) * 100)",
        "&::-webkit-scrollbar": {
          width: "0em",
        },
        "scrollbar-width": "none",
        ["@media (max-width:1047px)"]: {
          gridTemplateRows: "1fr 8fr 8fr",
        },
        ["@media (max-width:763px)"]: {
          gap: "2vh",
          gridTemplateRows: "1fr 3fr 5fr",
        },
      }}
      className="overflow-y-hidden"
    >
      <Header
        sx={{
          ["@media (max-height:963px)"]: {
            paddingBottom: "10vh",
          },
          "& nav": {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
        logo={true}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            width: "calc(200px +  10vw)",
            height: "calc(200px + 10vh)",
            margin: "auto",
            ["@media (max-width:1047px)"]: {
              width: "calc(120px + 1vw)",
              height: "calc(160px + 5vh)",
            },
          }}
        >
          <CaImage />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // my: "1rem",
            ["@media (max-width:1047px)"]: {
              gap: "0.5rem",
            },
          }}
        >
          <Typography
            component={"p"}
            color="secondary"
            sx={{
              fontSize: "calc(24px + 1vw)",
              fontWeight: "700",
              ["@media (max-width:1047px)"]: {
                textAlign: "center",
                fontSize: "calc(18px + 1vh)",
                // maxWidth: "39",
              },
            }}
          >
            Qual è il tuo livello di <br className="lg:hidden" /> inglese? 🔍
          </Typography>
          <Typography
            color="secondary"
            sx={{
              fontSize: "calc(16px + 0.5vw)",
              ["@media (max-width:1047px)"]: {
                textAlign: "center",
                fontSize: "calc(14px + 0.5vw)",
                maxWidth: "66%",
              },
            }}
          >
            C1, B2 o Shish? 🇬🇧{" "}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "#d9daf3",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          paddingTop: "4vh",
          minHeight: "190px",
          ["@media (max-height:763px)"]: {
            paddingTop: "4vh",
          },
        }}
        className="bottom"
      >
        <Typography
          sx={{
            fontSize: "20px",
            color: "#ffffff",
            "& b": {
              color: "#74DFAC",
            },
            ["@media (max-width:1047px)"]: {
              fontSize: "calc(14px + 1vw)",
            },
          }}
        >
          Ci vogliono solo <b>6 minuti</b>
        </Typography>
        <Button
          sx={{
            maxWidth: "418px",
            width: "100%",
            color: "#31602A!important",
            ["@media (max-width:1047px)"]: {
              maxWidth: "70%",
            },
          }}
          color="green"
          variant="contained"
          size="large"
          onClick={() => navigate("/quiz")}
        >
          INIZIA IL TEST
        </Button>
      </Box>
    </Box>
  );
};

export default LandingPage;
