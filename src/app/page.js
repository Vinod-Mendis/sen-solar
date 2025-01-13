/** @format */

import React from "react";
import ButtonComponent from "./components/ButtonComponent";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto h-screen justify-center items-center flex ">
      <ButtonComponent
        variant={"green_outline"}
        icon={"circleArrow"}
        onClickFn={"submit"}>
        Submit
      </ButtonComponent>
    </div>
  );
}
