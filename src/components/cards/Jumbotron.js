import React from "react";
import ReactTypingEffect from "react-typing-effect";
import "../../index.css";
import Fallback from "../../Fallback";

const Jumbotron = ({ text }) => {
  return (
    <>
      <div className="fade-in-jumbotron">
        <Fallback/>
        <h1 className="fade-in-text">Die neue Welt des Online-Shoppings</h1>
        {/* <h4 >BFI Programmierakademie - MERN E-Commerce Projekt</h4> */}
      </div>
      <ReactTypingEffect
        text={[
          "dynamisch. progressiv.",
          "performant. schnell.",
          "reaktiv. modern",
        ]}
        speed={53}
        eraseSpeed={43}
        eraseDelay={2000}
        cursorRenderer={(cursor) => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h2>
              {text.split("").map((char) => {
                return <span style={{ color: "#cf3e32" }}>{char}</span>;
              })}
            </h2>
          );
        }}
      />
    </>
  );
};

export default Jumbotron;
