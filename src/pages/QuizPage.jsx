import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Content from "../layout/common/Content.jsx";
import Layout from "../layout/index.jsx";
import AudioPlayer from "@components/AudioPlayer";
import { useTranslation } from "react-i18next";
// import "../src/assets/test.m4a";
const QuizPage = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const navigate = useNavigate();

  const questions = [
    {
      question: "I called Tom, ___ he didn't answer.",
      audio:
        "https://api.edusogno.com/api/user/v1/ielts/audio/stream/pwXbCXJnFpNsE82T12V4Mzegb8sZ",
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

  const next = () => {
    if (activeQuestion + 1 === questions.length - 1) {
      navigate("/results");
    }
    setActiveQuestion((r) => r + 1);
  };
  const back = () => {
    if (activeQuestion === 0) {
      navigate(-1);
      return;
    }
    setActiveQuestion((r) => r - 1);
  };
  const selectAnswer = (value) => {
    const dpCopyAnswer = [...answers];
    dpCopyAnswer[activeQuestion] = value;
    setAnswers(dpCopyAnswer);
  };

  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage("en");
  }, []);
  return (
    <Layout onLanguageChange={i18n.changeLanguage}>
      <Content
        disabled={!Boolean(answers[activeQuestion])}
        onClick={() => {
          next();
        }}
        onBack={() => back()}
        progress={(activeQuestion + 0.01) / (questions.length - 1)}
      >
        <div className={"w-full  items-center flex flex-col gap-4"}>
          <p className={"text-sm leading-[100%] text-primary text-center"}>
            {!questions[activeQuestion]?.audio
              ? t("quiz.instructionTwo")
              : t("quiz.instructionOne")}
          </p>
        </div>

        <Typography
          color={"primary"}
          sx={{
            fontSize: "calc(22px + 1vw)",
            textAlign: "center",
            ["@media (max-width:763px)"]: {
              minHeight: "80px",
            },
          }}
        >
          {questions[activeQuestion].question}
        </Typography>
        {questions[activeQuestion]?.audio && (
          <div className={"w-full  items-center flex flex-col gap-4 px-4"}>
            <AudioPlayer src={questions[activeQuestion].audio} />
          </div>
        )}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr",
            width: "100%",
            gap: "1rem",

            "& button": {
              fontWeight: "400",
              maxHeight: "56px",
            },
            ["@media (min-width:763px)"]: {
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              marginTop: "10vh",
              "& button": {
                width: "100%",
                minWidth: "174px",
                textTransform: "none",
                fontSize: "24px",
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
                minWidth: "100%",
                textTransform: "none",
              },
            },
          }}
          className={"container mx-auto"}
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
                height: 59,
                border: "none",
                fontSize: "24px",
                borderRadius: "9px",
                ["@media (max-width:763px)"]: { height: 34, fontSize: "18px" },
                color:
                  r === answers[activeQuestion]
                    ? "#ffffff"
                    : "#8065C9!important",
                backgroundColor:
                  r === answers[activeQuestion]
                    ? "#8065C9"
                    : "#F1EDFF!important",
              }}
            >
              {r}
            </Button>
          ))}
        </Box>
      </Content>
    </Layout>
  );
};

export default QuizPage;
