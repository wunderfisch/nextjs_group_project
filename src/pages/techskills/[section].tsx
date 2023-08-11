import { useParams, usePathname } from "next/navigation";
import React, { useEffect } from "react";
import FetchData from "@/components/FetchData";
import { useRouter } from "next/router";
import useSWR from "swr";
type Props = {};

// export default async function ({}: Props) {
export default function Section({}: Props) {
  const params = useRouter();
  const language: any = params.query.section;
  console.log("language :>> ", language);
  // const myHeaders = new Headers();
  // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  // const urlencoded = new URLSearchParams();
  // urlencoded.append("language", language);

  // const requestOptions: RequestInit = {
  //   method: "POST",
  //   headers: myHeaders,
  //   body: urlencoded,
  //   redirect: "follow",
  // };
  // const fetcher = (url: string) =>
  //   fetch(url, requestOptions).then((res) => {
  //     console.log("res :>> ", res);
  //     res.json();
  //   });

  //const { data, error } = useSWR("/api/staticdata", fetcher);

  // useEffect(() => {
  //   if (params.query.section) {
  //     fetcher("/api/staticdata");
  //   }
  // }, [language]);

  return (
    <div>
      {/*
      <p>{section && section}</p>
      */}

      {language && <h1>{language}</h1>}

      {language && (
        <div key={language}>
          <FetchData pathname={language} />
        </div>
      )}
    </div>
  );
}
