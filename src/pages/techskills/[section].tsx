"use client";

import { useParams, usePathname } from "next/navigation";
import React from "react";

type Props = {};

export default function Section({}: Props) {
  //   const params = useParams();
  //   console.log("params :>> ", params);
  const pathname = usePathname();
  //   const section = pathname minus /techskills/ mit RegExp
  console.log("parapathname: >>>", pathname);
  return (
    <div>
      <p>something {pathname}</p>
      {/* // // key={section}
// >
//   <FetchData pathname={section} /> */}
    </div>
  );
}
