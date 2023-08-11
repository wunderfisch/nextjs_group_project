import { useRouter } from "next/router";
import React from "react";

type Props = {};

export default function test({}: Props) {
  const url = useRouter();
  console.log("url :>> ", url);
  const path = url.query.id;

  return <p>Post: {path}</p>;
}
