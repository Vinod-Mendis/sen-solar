/** @format */

import React from "react";
import ButtonComponent from "./components/ButtonComponent";
import ScrollAnimation from "./components/ScrollAnimation";
import HeroCard from "./components/HeroCard";

export default function Home() {
  return (


<div>
  <div className="h-40"> 
    <ScrollAnimation />
    </div>
     
      <div className="h-[800px]">    <HeroCard variant={'dark'}/></div>
  
</div>

  );
}
