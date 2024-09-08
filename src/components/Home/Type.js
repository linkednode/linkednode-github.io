import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Trusted validator",
          "Secure",
          "24/7 Monitoring",
          "Transparent",
          "Docs guide"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
      }}
    />
  );
}

export default Type;
