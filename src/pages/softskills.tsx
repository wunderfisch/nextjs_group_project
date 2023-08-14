import React from "react";
import FetchData from "@/components/FetchData";

export default function Section() {
  const language: string = "softskills";
  console.log("language :>> ", language);

  return (
    <div>
      {language && (
        <div key={language}>
          <FetchData pathname={language} />
        </div>
      )}
    </div>
  );
}
