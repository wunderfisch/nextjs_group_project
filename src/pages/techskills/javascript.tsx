"use client";

import React from "react";
import FetchData from "@/components/FetchData";
import { useParams } from "next/navigation";
import { usePathname } from "next/navigation";

// get URL parameter and send is as section to others

type Props = {};

export default function javascript({}: Props) {
  const pathname = usePathname();
  console.log("parapathname: >>>", pathname);
  return (
    <div>
      <p>something {pathname}</p>
      {/* // // key={section.id}
    // >
    //   <FetchData section={section} /> */}
    </div>
  );
}
