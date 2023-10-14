import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { EdStart } from "../components/Illustration";
import Layout from "../layout/index.jsx";
import Subtext from "../layout/common/Subtext.jsx";
import Footer from "../layout/common/Footer.jsx";
import { useTranslation } from "react-i18next";

const LandingPage = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage("en");
  }, []);

  return (
    <Layout onLanguageChange={i18n.changeLanguage}>
      <div className="flex flex-col items-center justify-between h-full py-4 lg:px-0 px-3 max-w-[800px] mx-auto">
        <Subtext text={t("landing.text")} subtext={t("landing.subText")} />
        <EdStart className="w-2/5 lg:w-[316px]" />
        <div className="text-base text-center mt-4 px-4 lg:px-0">
          <p className="text-primary">{t("landing.instructionOne")}</p>
          <p className="text-primary font-semibold mt-4 text-base">
            {t("landing.instructionTwo")}
          </p>
        </div>
      </div>
      <Footer
        button={
          <Button
            onClick={() => {
              navigate("/quiz");
            }}
            size={"large"}
            variant={"contained"}
          >
            {t("landing.button")}
          </Button>
        }
      />
    </Layout>
  );
};

export default LandingPage;
