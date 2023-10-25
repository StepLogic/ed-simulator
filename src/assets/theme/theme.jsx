import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    // fontFamily: 'Poppins',
    fontFamily: "Poppins, Inter",
    button: {
      textTransform: "none",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1920,
      xxxl: 2300,
      max: 3500,
    },
  },
  palette: {
    primary: {
      main: "#8065C9 !important",
      contrastText: "#fff",
    },
    secondary: {
      main: "#2D224C !important",
      contrastText: "#fff",
    },
    buttonBack: {
      main: "#D9DAF3 !important",
      contrastText: "#2D224C !important",
    },
    red: {
      main: "#E90000 !important",
      contrastText: "#fff !important",
    },
    buttonGreen: {
      main: "#74DFAC !important",
      contrastText: "#31602A !important",
    },
    green: {
      main: "#74DFAC !important",
      contrastText: "#fff !important",
    },
    lightPrimary: { main: "#d9daf3", contrastText: "#2D224C" },

    button: {
      // main: "#D4145A !important",
      // contrastText: "#fff",
      main: "#8065C9 !important",
      contrastText: "#fff",
    },

    button2: {
      // main: "#D4145A !important",
      // contrastText: "#fff",
      main: "#fff !important",
      contrastText: "#8065C9",
    },
    message: {
      main: "#4CAF50 !important",
    },
    white: {
      main: "#fff !important",
    },
  },
  components: {
    MuiDesktopDatePicker: {
      styleOverrides: {
        root: {
          display: "none",
          "&.Mui-selected": {
            color: "white!important",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "currentColor!important",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          ["@media (min-width:768px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "1.5rem",
          },

          // ["@media (min-width:1024px)"]: {
          //   // eslint-disable-line no-useless-computed-key
          //   fontSize: "26px",
          // },
          // ["@media (min-width:1280px)"]: {
          //   // eslint-disable-line no-useless-computed-key
          //   fontSize: "28px",
          // },
          ["@media (min-width:1920px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "28px",
          },
          ["@media (min-width:2300px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "30px",
          },
          ["@media (min-width:3500px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "36px",
          },
          marginTop: 0,
          color: "#2D224C",
          fontSize: "19px",

          background: "transparent",
          "-webkit-text-fill-color": "#2D224C!important",
          ":-webkit-background-clip": "text",
          "&::after": {
            borderColor: "#8065C9 ",
          },
          "&::before": {
            borderColor: "#8065C9 ",
          },
          "&.Mui-error:after": {
            borderBottomColor: "#D4145A",
          },
          "&.Mui-error:before": {
            borderBottomColor: "#D4145A",
          },
          "&::focus": {
            background: "none",
          },
          // "&"
        },
        input: {
          "&::placeholder": {
            // opacity: "0.7",
            color: "#9691A6",
          },

          "-webkit-autofill": {
            transition: "6000s!important",
            animationName: "none!important",
          },
          "-webkit-autofill:focus": {
            transition:
              "background-color 600000s 0s, color 600000s 0s !important",
          },
          ":-internal-autofill-selected": {
            background: "none!important",
            backgroundColor: "rgba(0,0,0,0)!important",
          },
          background: "transparent!important",
          "-webkit-text-fill-color": "#2D224C!important",
          ":-webkit-background-clip": "text!important",
        },
      },
    },
    MuiOutlinedInput: {
      input: {
        "&::placeholder": {
          // opacity: "0.7",
          color: "#9691A6",
        },

        "-webkit-autofill": {
          transition: "6000s!important",
          animationName: "none!important",
          "-webkit-box-shadow": "0 0 0px 1000px white inset",
        },
        "-webkit-autofill:focus": {
          transition:
            "background-color 600000s 0s, color 600000s 0s !important",
        },
        ":-internal-autofill-selected": {
          background: "none!important",
          backgroundColor: "rgba(0,0,0,0)!important",
        },
        background: "transparent!important",
        "-webkit-text-fill-color": "#2D224C!important",
        ":-webkit-background-clip": "text!important",
      },
      styleOverrides: {
        root: {
          // borderColor: "#8065C9",
          // borderWidth: "1px",
          height: "59px",
        },
        input: {
          border: "none",
        },
        notchedOutline: {
          borderColor: "#2D224C",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          marginTop: 0,
          "&:focus": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: "none",
          color: "#2D224C",
          "&.Mui-selected": {
            backgroundColor: "#8065C9",
            color: "white",
            "&.Mui-focusVisible": { backgroundColor: "#8065C9" },
            "&:hover": {
              backgroundColor: "#8065C9",
            },
          },
          "& .Mui-disabled": {
            backgroundColor: "none!important",
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: "13px",
          color: "#D4145A",
          fontWeight: "500",
          marginLeft: "0",
          marginRight: "0",
          ["@media (min-width:768px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "15px",
          },
          ["@media (min-width:1920px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "18px",
          },
          ["@media (min-width:3500px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "28px",
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            borderColor: "#2D224C!important",
          },
        },
        {
          props: { variant: "contained", color: "button" },
          style: {
            borderColor: "#2D224C!important",
          },
        },
        {
          props: { variant: "contained" },
          style: {
            borderColor: "currentcolor",
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            borderColor: "currentcolor",
            background: "#ffffff",
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            borderColor: "#2D224C!important",
          },
        },
      ],
      styleOverrides: {
        disabled: {},
        root: {
          fontFamily: "Inter",
          borderRadius: "7px",
          // textTransform: 'capitalize',
          fontWeight: "600",
          fontSize: "1rem",
          height: "35px",
          borderStyle: "solid",
          borderWidth: "1px",

          "&.Mui-disabled": {
            opacity: "50%",
          },
        },
        sizeLarge: {
          width: "100%",
          maxWidth: "550px!important",
        },
        sizeMedium: {
          width: "100%",
          maxWidth: "200px",
        },
        sizeSmall: {
          width: "100%",
          maxWidth: "150px",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: "10px",
          ["@media (min-width:768px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "12px",
          },
          ["@media (min-width:2300px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "14px",
          },
          ["@media (min-width:3500px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "26px",
            marginBottom: "0.5rem",
          },
        },
      },
    },
    MuiListItemSecondaryAction: {
      styleOverrides: {
        root: {
          right: "20px",
          transform: "translate(50%,-50%)",
          ["@media (min-width:2300px)"]: {
            // eslint-disable-line no-useless-computed-key
            right: "25.5px",
          },
          ["@media (min-width:3500px)"]: {
            // eslint-disable-line no-useless-computed-key
            right: "48px",
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeLarge: {
          ["@media (min-width:3500px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "5rem",
            "&.pb-1": {
              fontSize: "3rem",
            },
            "&.mr-2": {
              fontSize: "3rem",
            },
            "&.check": {
              fontSize: "3rem",
            },
          },
        },
      },
    },

    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          borderRadius: "7px",
          height: "100%",

          ["@media (min-width:1500px)"]: {
            width: "100%",
          },
          ["@media (min-width:768px)"]: {
            border: "none",
          },
          "& .PrivatePickersSlideTransition-root ": {
            height: "100%",
            minHeight: "200px",
            ["@media (min-width:768px)"]: {
              // minHeight: '400px',
              height: "100%",
            },
            // minHeight: "max(263px,fit-content)",
          },
        },
        content: {
          height: "100%",
          "&> *": {
            height: "100%",
            fontFamily: "Inter",
          },
        },
      },
    },

    MuiCalendarOrClockPicker: {
      styleOverrides: {
        root: {
          height: "100%",
          maxHeight: "100%!important",
          // ['@media (max-width:768px)']: {
          padding: "0",
          // },
          ["@media (min-width:1500px)"]: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            maxHeight: "unset!important",
            minHeight: "500px",
          },
          "&>div": {
            height: "100%",
            width: "100%",
            maxHeight: "100%",
          },
        },
      },
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        root: {
          display: "none",
          textTransform: "capitalize",
          color: "#8065C9",
          padding: 0,
          ["@media (min-width:768px)"]: {
            height: "50px!important",
          },
          ["@media (min-width:1500px)"]: {
            minHeight: "50px!important",
          },
          margin: "0 0rem 0.5rem 0",
          "&~div": {
            height: "calc(100% - 66px)!important",
            ["@media (min-width:768px)"]: {
              height: "calc(100% - 66px)!important",
            },
            ["@media (min-width:1500px)"]: {
              width: "100%",
              height: "calc(100% - 100px)!important",
            },
          },
        },
        label: {
          color: "#2D224C",
          fontSize: "22px",
          lineHeight: "140%",
          fontWeight: "700",
          ["@media (min-width:1500px)"]: {
            fontSize: "32px",
          },
        },
        labelContainer: {
          height: "32px",
          maxHeight: "32px",
          ["@media (min-width:1500px)"]: {
            height: "48px",
            maxHeight: "unset",
          },
        },
        switchViewButton: {
          display: "none",
        },
      },
    },
    MuiPickersArrowSwitcher: {
      styleOverrides: {
        root: {
          height: "42px",
          // position: 'absolute',
          // left: '50%',
          // transform: 'translateX(-50%)',
          // justifyContent: 'space-between',
          // width: '310px',

          // ['@media (min-width:768px)']: {
          //     // eslint-disable-line no-useless-computed-key
          //     width: '13px',
          //
          //     position: 'static',
          //     transform: 'translateX(-25px)',
          // },
          // ['@media (min-width:1024px)']: {
          //     // eslint-disable-line no-useless-computed-key
          //     width: '20px',
          //
          //     position: 'unset',
          //     transform: 'translateX(-20px)',
          // },
          // ['@media (min-width:1280px)']: {
          //     position: 'static',
          //     zIndex: '2',
          //     transform: 'translateX(-20px)',
          // },
          "& svg": {
            // fontSize: '2rem',
            // ['@media (min-width:768px)']: {
            //     // eslint-disable-line no-useless-computed-key
            //     width: '13px',
            //     height: '13px',
            // },
            // ['@media (min-width:1024px)']: {
            //     // eslint-disable-line no-useless-computed-key
            //     width: '15px',
            //     height: '15px',
            // },
            // ['@media (min-width:1280px)']: {
            //     // eslint-disable-line no-useless-computed-key
            //     width: '32px',
            //     height: '32px',
            // },
          },
        },
        spacer: {
          width: "8px",
        },
        button: {
          color: "#8065C9",
          "&:not(.Mui-disabled)": {
            color: "#2D224C",
          },
        },
      },
    },
    MuiDayPicker: {
      styleOverrides: {
        root: {
          minHeight: "0",
        },
        header: {
          height: "18px!important",
          ["@media (min-width:1500px)"]: {
            height: "20px!important",
          },
        },
        weekDayLabel: {
          fontSize: "10px",
          fontFamily: "Inter",
          fontWeight: "700",
          color: "#8065C9",
          width: "42px",
          height: "18px!important",
          ["@media (min-width:763px)"]: {
            width: "42px",
          },
          ["@media (min-width:1500px)"]: {
            height: "20px!important",
            fontSize: "16px",
            width: "14%",
            marginRight: "0.5rem",
          },
        },
        weekContainer: {
          marginBottom: "0.5rem",
          justifyContent: "space-between",
        },
        monthContainer: {
          display: "flex",
          flexDirection: "column",
          "& .MuiPickersDay-dayOutsideMonth": {
            background: "none!important",
            color: "#EEE!important",
          },
          "&>div:last-of-type .MuiPickersDay-dayOutsideMonth:not(.Mui-disabled)":
            {
              background: "#F7F4FF!important",
              color: "#D3C3FF!important",
            },
        },
      },
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          height: "100%",
          maxHeight: "100%",
          display: "flex",
          flexDirection: "column",
          // ['@media (max-width:768px)']: {
          padding: "0!important",
          // },
          "& .MuiPickersFadeTransitionGroup-root>div": {
            height: "100%",
            maxHeight: "100%",
          },
          "& .MuiPickersFadeTransitionGroup-root>div>div": {
            height: "100%",
            maxHeight: "100%",
          },
          ["@media (min-width:1500px)"]: {
            width: "100%",
            maxHeight: "auto",
            minHeight: "500px",
          },
        },
      },
    },

    MuiPickersDay: {
      styleOverrides: {
        root: {
          width: "42px",
          height: "clamp(30px,1vh + 0.5px,42px)",
          fontSize: "14px",
          fontWeight: "700",
          color: "#8065C9",
          backgroundColor: "#E7DEFF",
          borderRadius: "7px",
          ["@media (min-width:768px)"]: {
            width: "42px",
            height: "42px",
            fontSize: "20px",
          },

          ["@media (min-width:1500px)"]: {
            width: "14%",
            // maxHeight: '58px',
            height: "14%",
            aspectRatio: "1/1",
            marginRight: "0.5rem",
            fontSize: "clamp(30px,25px + 4%,42px)",
          },
          // textTransform: 'capitalize',
          // ['@media (min-width:768px)']: {
          //     // eslint-disable-line no-useless-computed-key
          //     fontSize: '9px',
          //     width: '28px',
          //     height: '28px',
          // },
          // ['@media (min-width:1024px)']: {
          //     // eslint-disable-line no-useless-computed-key
          //     fontSize: '11px',
          //     width: '32px',
          //     height: '32px',
          // },
          // ['@media (min-width:1280px)']: {
          //     // eslint-disable-line no-useless-computed-key
          //     fontSize: '14px',
          //     width: '36px',
          //     height: '36px',
          // },
          //
          // color: '#2D224C',
          // '&:not(.Mui-selected)': {
          //     border: 'none',
          // },
          // '&:not(.Mui-disabled)': {
          //     // backgroundColor: "#a283f746",
          // },
          // '&:not(.Mui-disabled):hover': {
          //     // backgroundColor: "#9e7df998",
          // },
          "&.Mui-selected": {
            backgroundColor: "#8065C9",
            color: "#fff!important",
            willChange: "backgroundColor",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "#8065C9",
            willChange: "backgroundColor",
          },
          "&.Mui-selected:focus": {
            backgroundColor: "#8065C9",
            willChange: "backgroundColor",
          },
          "& .Mui-disabled.MuiPickersDay-dayOutsideMonth": {},
          "&:is(.Mui-disabled)": {
            "&:not(.MuiPickersDay-dayOutsideMonth)": {
              backgroundColor: "#EEE!important",
              color: "#FFF",
              willChange: "backgroundColor",
            },
          },
        },
        today: {
          border: "1px solid #8065C9!important",
          color: "#8065C9!important",
        },
      },
    },
    MuiPickersFadeTransitionGroup: {
      stylesOverride: {
        root: {
          display: "grid",
          "&>div'": {
            display: "grid",
            flexDirection: "column",
            height: "100%",
          },
          "&>div>div": {
            display: "grid",
            gridTemplateRows: "18px auto",
          },
        },
      },
    },
  },
});
