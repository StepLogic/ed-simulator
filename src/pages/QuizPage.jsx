import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Button, Typography, useMediaQuery} from "@mui/material";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import logoEduBianco from "../assets/img/logoEduBianco.svg";
import Header from "../components/Header";

dayjs.extend(customParseFormat);

const TOMTOM_KEY = import.meta.env.VITE_TOMTOM_API;
document.title = "Form Edusogno";
const QuizPage = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const navigate = useNavigate();

  const questions = [
    {
      question: "I called Tom, ___ he didn't answer.",
      options: ["and", "but", "or", "so"],
      correctAnswer: "but",
    },
    {
      question: "Tommy ___ died.",
      options: ["are", "were", "is", "will"],
      correctAnswer: "but",
    },
    {
      question: "Jason ___ a student.",
      options: ["is", "are", "were", "will be"],
      correctAnswer: "but",
    },
  ];
  const smUp = useMediaQuery("(max-width:1047px)");
  const next = () => {
    if (activeQuestion + 1 === questions.length - 1) {
      navigate("/results");
    }
    setActiveQuestion((r) => r + 1);
  };
  const back = () => {
    if (activeQuestion === 0) return;
    setActiveQuestion((r) => r - 1);
  };
  const selectAnswer = (value) => {
    const dpCopyAnswer = [...answers];
    dpCopyAnswer[activeQuestion] = value;
    setAnswers(dpCopyAnswer);
  };
  return (
    <Box
      sx={{
        display: "grid",
        ["@media (min-width:1047px)"]: {
          gridTemplateRows: "3fr 8fr",
        },
        gridTemplateRows: "3fr 8fr",
        height: "calc(var(--vh, 1vh) * 100)",
        overflowX: "hidden",
      }}
    >
      <Header white={true} form={true}>
        <Box
          sx={{
            width: "fit-content",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto auto 10vh auto",
            "& img": {
              width: "94px",
              height: "40x",
              ["@media (min-width:1047px)"]: {
                width: "124px",
                height: "53px",
              },
            },
          }}
        >
          <img src={logoEduBianco} alt="Logo Edusogno" />
        </Box>
        <div className="absolute top-0 left-0 progress"></div>
        <Box
          className={`absolute right-0 top-0 bg-white nascondi transition-all`}
          sx={{
          width:`${100 - ((activeQuestion+0.01) / (questions.length - 1)) * 100}%`,
          transition:"all 2s"}}
        ></Box>
      </Header>

      <main className="relative">
        <Box
          sx={{
            display: "grid",
            gridTemplateRows: "2fr 4fr 2fr",

            ["@media (min-width:1047px)"]: {
              gridTemplateRows: "2fr 4fr 3fr",
            },
            height: "100%",
            placeItems: "center",
          }}
        >
          <Typography
            color={"primary"}
            sx={{
              fontSize: "calc(22px + 1vw)",
              textAlign: "center",
              ["@media (min-width:1047px)"]: {
                marginTop: "auto",
                textAlign: "left",
              },
            }}
          >
            {questions[activeQuestion].question}
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr",
              width: "90%",
              gap: "1rem",
               "& button": {
               
fontWeight:"400",
maxHeight:"56px"
                },
              ["@media (min-width:763px)"]: {
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                "& button": {
                  width: "100%",
                  minWidth: "174px",
                  textTransform: "none",
                  fontSize:"24px"
                },
              },
              ["@media (min-width:1047px)"]: {
                "& button": {
                  width: "100%",
                  minWidth: "calc(200px + 5vw)",
                  textTransform: "none",
                },
              },
              ["@media (max-width:763px)"]: {
                "& button": {
                  minWidth: "90vw",
                  textTransform: "none",
                },
              },
            }}
          >
            {questions[activeQuestion].options.map((r) => (
              <Button
                size="large"
                variant="contained"
                disableElevation
                color={r === answers[activeQuestion] ? "primary" : "buttonBack"}
                onClick={() => {
                  selectAnswer(r);
                }}
                sx={{
                  color:
                    r === answers[activeQuestion]
                      ? "#ffffff"
                      : "#2D224C!important",
                }}
              >
                {r}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              "& button": {
                height: "fit-content",
                width: "254px",
                display: "flex",
                flexDirection: "row",
                position: "relative",
              },
              "& button:first-of-type": {
                height: "fit-content",
                width: "254px",
                display: "flex",
                flexDirection: "row",
                position: "relative",
              },

              ["@media (max-width:1047px)"]: {
                "& button": {
                  aspectRatio: "1/1",
                  borderRadius: "50%!important",
                  padding: "0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "64px",
                  "& svg": {
                    position: "relative",
                    left: "unset",
                    right: "unset",
                  },
                },
                "& button:first-of-type": {
                  aspectRatio: "1/1",
                  borderRadius: "50%!important",
                  padding: "0",
                  width: "64px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "& svg": {
                    position: "relative",
                    right: "unset",
                    left: "unset",
                  },
                },
              },
            }}
          >
            {activeQuestion !== 0 && (
              <Button
                variant="contained"
                color="buttonBack"
                  size="large"
                onClick={() => back()}
              >
                <ChevronLeft
                  className="lg:absolute lg:left-4"
                  sx={{
                    width: "28px",
                    height: "28px",
                    ["@media (max-width:1047px)"]: {
                      width: "48px",
                      height: "48px",
                    },
                  }}
                />
                {!smUp && <span>back</span>}
              </Button>
            )}
            <Button
              disabled={!Boolean(answers[activeQuestion])}
              variant="contained"
              color="button"
                size="large"
              onClick={() => next()}
            >
              {!smUp && <span>Next</span>}
              <ChevronRight
                className="lg:absolute lg:right-4"
                sx={{
                  width: "28px",
                  height: "28px",
                  ["@media (max-width:1047px)"]: {
                    width: "48px",
                    height: "48px",
                  },
                }}
              />
            </Button>
          </Box>
        </Box>
      </main>
    </Box>
  );
};

export default QuizPage;