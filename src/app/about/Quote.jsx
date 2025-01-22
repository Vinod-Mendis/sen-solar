/** @format */

import React from "react";
import QuoteCard from "../components/QuoteCard";

export default function Quote() {
  return (
    <div className="w-full bg-[url('/images/greenBg.png')] bg-cover bg-no-repeat py-24 mb-20">
      <div className="max-w-7xl mx-auto">
        <QuoteCard />
      </div>
    </div>
  );
}
