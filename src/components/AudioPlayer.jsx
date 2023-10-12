import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import "../assets/styles/wavesurfer.css";
import { useMediaQuery } from "@mui/material";

const AudioPlayer = (props) => {
  const { correction, src, setLoading, onPlayClicked } = props;
  const smUp = useMediaQuery("(max-width:1047px)");
  const [duration, setDuration] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const containerRef = useRef();
  const waveSurferRef = useRef({
    isPlaying: () => false,
  });
  const [isPlaying, toggleIsPlaying] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !src) return;

    const waveSurfer = WaveSurfer.create({
      container: containerRef.current,
      barWidth: 4,
      barHeight: 1,
      barGap: 8,
      barRadius: 200,
      waveColor: "#D9D9D9",
      progressColor: "#8065C9", //"#8065C9",
      cursorColor: "transparent",
      height: smUp ? 22 : 65,
      responsive: true,
      interact: !!correction,
      normalize: true,
      backend: "MediaElement",
      // mediaControls: true,
      mediaType: "audio",
      audioRate: 1,
      audioContext: null,
      zoom: 1,
    });
    waveSurfer
      .load(src)
      .then((r) => {
        waveSurferRef.current = waveSurfer;
        setIsLoading(false);
        setDuration(
          `${Math.floor(waveSurfer.getDuration() / 60)}:${Math.floor(
            waveSurfer.getDuration() % 60,
          )}`,
        );
      })
      .catch((er) => {
        console.log("err", er);
      });
    // waveSurfer.on("waveform-ready", () => {
    //   setIsLoading(false);
    //   waveSurferRef.current = waveSurfer;
    // });

    return () => {
      waveSurfer.destroy();
    };
  }, [src, containerRef]);

  return (
    <Box
      sx={{
        borderRadius: "40px",
        background: "#FFF",
        boxShadow: "0px 0px 19px 2px rgba(0, 0, 0, 0.25)",
      }}
      className="flex flex-row items-center w-full max-w-[588px]  max-h-[45px] lg:max-h-[80px] py-2 pl-2 pr-4 lg:mx-0"
    >
      <Box className={`flex flex-col items-center justify-center mr-4 ${""}`}>
        {isLoading ? (
          <CircularProgress size={40} className={"ml-4"} />
        ) : (
          <Button
            variant="text"
            disabled={isPlaying && !correction}
            sx={{
              width: "fit-content",
              maxWidth: "65px",
              minWidth: "65px",
              border: "none",
              maxHeight: "60px",
              "&.Mui-disabled": {
                color: "#8065c9!important",
                backgroundColor: "transparent !important",
              },
            }}
            onClick={() => {
              if (isPlaying) {
                waveSurferRef.current.pause();
                toggleIsPlaying(false);
              } else {
                waveSurferRef.current.play();
                onPlayClicked?.();
                toggleIsPlaying(true);
              }
            }}
          >
            {isPlaying ? (
              <PauseIcon sx={{ fontSize: 32 }} />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.8639 8.71031C21.2175 8.98088 21.5038 9.32792 21.7007 9.72482C21.8976 10.1217 22 10.5579 22 11C22 11.4421 21.8976 11.8783 21.7007 12.2752C21.5038 12.6721 21.2175 13.0191 20.8639 13.2897C16.285 16.7927 11.172 19.5539 5.71637 21.4698L4.71885 21.8202C2.81242 22.4893 0.799057 21.2145 0.540895 19.2677C-0.180298 13.779 -0.180298 8.22105 0.540895 2.73233C0.799057 0.785483 2.81242 -0.489254 4.71885 0.179832L5.71637 0.530234C11.172 2.44616 16.285 5.2073 20.8639 8.71031ZM19.4616 11.4984C19.5387 11.4396 19.601 11.364 19.6439 11.2776C19.6869 11.1912 19.7092 11.0963 19.7092 11C19.7092 10.9037 19.6869 10.8088 19.6439 10.7224C19.601 10.636 19.5387 10.5604 19.4616 10.5016C15.0748 7.14537 10.1763 4.49995 4.94951 2.66436L3.952 2.31396C3.82955 2.2742 3.69971 2.26171 3.57181 2.2774C3.4439 2.29308 3.32109 2.33655 3.21217 2.40469C3.10325 2.47282 3.01093 2.56394 2.94182 2.6715C2.8727 2.77906 2.82852 2.90041 2.81242 3.02685C2.11715 8.32006 2.11715 13.6799 2.81242 18.9732C2.82872 19.0995 2.87305 19.2206 2.94225 19.328C3.01145 19.4354 3.1038 19.5263 3.21269 19.5943C3.32158 19.6623 3.44432 19.7056 3.57213 19.7212C3.69994 19.7368 3.82966 19.7243 3.952 19.6845L4.94951 19.3356C10.1764 17.4996 15.0749 14.8551 19.4616 11.4984Z"
                  fill="#8065C9"
                />
              </svg>
            )}
          </Button>
        )}
      </Box>
      <div className="w-full overflow-hidden" ref={containerRef} />
      <p className={"lg:text-sm text-[10px]  text-primary"}>{duration}</p>
    </Box>
  );
};

export default AudioPlayer;
