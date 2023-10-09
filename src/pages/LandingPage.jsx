import {Button} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom";


import {EdStart} from "../components/Illustration";
import Layout from "../layout/index.jsx";
import Subtext from "../layout/common/Subtext.jsx";
import Footer from "../layout/common/Footer.jsx";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="flex flex-col items-center justify-between h-full py-4 lg:px-0 px-3 max-w-[750px] mx-auto">
        <Subtext text={"What is your English level?"} subtext={"Test it now"}/>
        <EdStart className="w-2/5 lg:w-[316px]" />
        <div className="text-base text-center mt-4 px-4 lg:px-0">
          <p className="text-primary">
            Ensure that you are situated in a tranquil setting and have ample
            time to complete the test
          </p>
          <p className="text-primary font-semibold mt-4 text-base">
            In the event of non-completion, you will be require to restart from
            the beginning
          </p>
        </div>
      </div>
<Footer button={
  <Button onClick={()=>{navigate(("/quiz"))}} size={"large"} variant={"contained"}>Get Started</Button>
}/>
    </Layout>
  );
};

export default LandingPage;
