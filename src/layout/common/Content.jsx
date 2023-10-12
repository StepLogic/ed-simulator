import { IconButton } from "@mui/material";
import React, { useEffect } from "react";
import { CaChevronRightLarge } from "@components/Icons";
import LinearProgress from "@mui/material/LinearProgress";
import Button from "@mui/material/Button";
import Footer from "./Footer.jsx";
import { useTranslation } from "react-i18next";

function Content(props) {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="h-[41px] bg-[#D9DAF3] flex flex-row items-center justify-start gap-4 px-[min(10%,2rem)]">
            <IconButton
              className="flex flex-row items-center justify-start gap-2 px-0 mx-0 lg:mx-1 lg:px-1 text-primary"
              onClick={() => props?.onBack()}
            >
              <CaChevronRightLarge className="rotate-180 h-[20px]" />
              <p className="font-semibold text-[20px]">
                {t("quiz.backButton")}
              </p>
            </IconButton>
          </div>
          <LinearProgress
            variant="determinate"
            color="button"
            value={props?.progress * 100}
          />
        </div>
        <div className="flex flex-col  justify-evenly items-center h-full px-4">
          {props?.children}
        </div>
      </div>
      <Footer
        noBackground={true}
        button={
          <Button
            size="medium"
            variant="contained"
            color="button"
            disabled={props?.disabled}
            onClick={props?.onClick}
          >
            {t("quiz.button")}
          </Button>
        }
      />
    </>
  );
}

export default Content;
