import React, { useEffect } from "react";
import {
  CaBritishFlag,
  CaItalianFlag,
  CaLogoWhite,
} from "@components/Icons.jsx";
import s from "./index.module.css";
// import Select from "@components/select";
import MenuItem from "@mui/material/MenuItem";

import { ExpandMore } from "@mui/icons-material";
import LanguageSelector from "./LanguageSelector.jsx";

function Layout(props) {
  const [lang, setLang] = React.useState("en");

  const selectChange = (event) => {
    setLang(event.target.value);
    props?.onLanguageChange && props?.onLanguageChange(event.target.value);
  };

  const languages = [
    {
      label: "English",
      value: "en",
    },
    {
      label: "Italiano",
      value: "it",
    },
  ];

  return (
    <div className={s.root}>
      <div className={s.header}>
        <CaLogoWhite className="logo" />
        {props?.onLanguageChange ? (
          <LanguageSelector
            className="underline"
            IconComponent={ExpandMore}
            color="white"
            variant="standard"
            value={lang}
            onChange={selectChange}
          >
            {languages.map((r, i) => (
              <MenuItem key={i} value={r.value}>
                <p>{r.label}</p>&nbsp;
                {r?.value === "it" ? <CaItalianFlag /> : <CaBritishFlag />}
              </MenuItem>
            ))}
          </LanguageSelector>
        ) : (
          <div />
        )}
      </div>
      {props?.children}
    </div>
  );
}

export default Layout;
