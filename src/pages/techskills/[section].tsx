import React from "react";
import FetchData from "@/components/FetchData";
import { useRouter } from "next/router";

export default function Section() {
  const params = useRouter();
  console.log("params :>> ", params);
  const language: any = params.query.section;
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
