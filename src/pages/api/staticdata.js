import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  const language = req.query.language;

  try {
    const jsonDirectory = path.join(process.cwd(), "data");

    const fileContents = await fs.readFile(
      jsonDirectory + `/${language}questions.json`,
      "utf8"
    );
    // parse the data on the server side
    const parsedata = JSON.parse(fileContents);
    res.status(200).json(parsedata);
  } catch (error) {
    console.log("error :>> ", error);
  }
}
