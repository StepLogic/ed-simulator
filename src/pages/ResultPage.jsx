import Button from "@mui/material/Button";

import { EdFinish, EdStart } from "@components/Illustration";
import Layout from "../layout/index.jsx";
import Subtext from "../layout/common/Subtext.jsx";
import Footer from "../layout/common/Footer.jsx";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

function ResultsPage(props) {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage("en");
  }, []);

  return (
    <Layout onLanguageChange={i18n.changeLanguage}>
      <div className="flex flex-col items-center justify-between h-full py-4 lg:px-0 px-3 max-w-[750px] mx-auto">
        <Subtext text={t("result.text")} />
        <EdFinish className="w-2/5 lg:w-[316px]" />
        <div className="text-base text-center mt-4 px-4 lg:px-0">
          <p className="text-secondary">{t("result.instructionOne")}</p>
          <p className="text-primary mt-4">{t("result.instructionTwo")}</p>
          <p className="text-primary font-semibold mt-4 text-base">
            {t("result.instructionThree")}
          </p>
        </div>
      </div>
      <Footer
        button={
          <Button
            color={"white"}
            onClick={() => {
              navigate("/quiz");
            }}
            size={"large"}
            variant={"contained"}
          >
            {t("result.button")}
          </Button>
        }
      />
    </Layout>
  );
}

export default ResultsPage;
