import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR("/api/staticdata", fetcher);
  // console.log("data :>> ", data);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>CSS questions</h1>
      <div>
        <div>question: {data.css.question}</div>
        <div>Language: {data.css.answer}</div>
      </div>
    </div>
  );
}
