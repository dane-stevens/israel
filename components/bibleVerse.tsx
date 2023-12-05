import { useEffect, useState } from "react";
const bibleVersionId = "de4e12af7f28f599-01";
const bibleSectionId = "Matthew 1:1";
export function BibleVerse() {
  const [verse, setVerse] = useState("");
  useEffect(() => {
    getBibleVerse();
  }, []);

  async function getBibleVerse() {
    const res = await fetch(
      `https://bible-api.com/john%203:16?translation=kjv`
    ).then((res) => res.json());
    console.log(res);
    setVerse(res);
  }
  return <div>{verse?.text}</div>;
}
