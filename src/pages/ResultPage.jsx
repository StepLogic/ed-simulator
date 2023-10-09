import Button from "@mui/material/Button";

import { EdFinish, EdStart } from "@components/Illustration";
import Layout from "../layout/index.jsx";
import Subtext from "../layout/common/Subtext.jsx";
import Footer from "../layout/common/Footer.jsx";
import React from "react";

function ResultsPage(props) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-between h-full py-4 lg:px-0 px-3 max-w-[750px] mx-auto">
        <Subtext text={"Great! Thanks for taking the time to do the test"} />
        <EdFinish className="w-2/5 lg:w-[316px]" />
        <div className="text-base text-center mt-4 px-4 lg:px-0">
          <p className="text-secondary">
            Your level will be assessed by our team.
          </p>
          <p className="text-primary mt-4">
            Go to the login and improve it when your course starts.
          </p>
          <p className="text-primary font-semibold mt-4 text-base">
            We hope you will enjoy the course!
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
            Go to login
          </Button>
        }
      />
    </Layout>
  );
}

export default ResultsPage;
