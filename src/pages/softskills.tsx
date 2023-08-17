import React from "react";
import FetchData from "@/components/FetchData";

export default function Softskills() {
  const language: string = "softskills";

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
