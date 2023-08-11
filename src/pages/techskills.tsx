import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

export default function techskills({}: Props) {
  const param = useRouter();
  console.log("param :>> ", param);
  return <div>techskills</div>;
}
