import React from "react";
import FetchData from "@/components/FetchData";
import { useRouter } from "next/router";

// // this page doesn't receive props, only later they will be fetched
// export const getStaticProps:GetStaticProps<
// // some promise
// > =async (params:type) => {
//   // no fetch here
// }

export default function Section() {
  const params = useRouter();

  const language: any = params.query.section;

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
