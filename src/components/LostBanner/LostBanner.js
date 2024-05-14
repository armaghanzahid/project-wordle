import React from "react";
import Banner from "../Banner/Banner";

function LostBanner({ answer }) {
  return (
    <Banner
      status="sad"
      Children={
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      }
    />
  );
}

export default LostBanner;
