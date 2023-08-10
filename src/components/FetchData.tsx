import Questionblock from "@/components/Questionblock";
import useSWR from "swr";
import Head from "../../node_modules/next/head";

interface questioninterface {
  id: number;
  question: string;
  answer: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR("/api/staticdata", fetcher);
  // console.log("data :>> ", data);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <Head>
        <title key="title">`Questions on ${section}`</title>
      </Head>
      <h1>`${section} questions`</h1>
      <div>
        {data &&
          data.css.map((question: questioninterface) => {
            // console.log("cssquestion :>> ", cssquestion);
            return (
              <div key={question.id}>
                <Questionblock questionx={question} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
