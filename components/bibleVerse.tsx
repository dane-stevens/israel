import { useEffect, useState } from "react";

export function BibleVerse({ data }) {
  // const [verse, setVerse] = useState("");
  // useEffect(() => {
  //   getBibleVerse();
  // }, []);

  // async function getBibleVerse() {
  //   const res = await fetch(
  //     `https://bible-api.com/john%203:16?translation=kjv`
  //   ).then((res) => res.json());
  //   console.log(res);
  //   setVerse(res);
  // }

  return (
    <div className="nx-italic nx-mt-6 nx-border-gray-300 nx-italic nx-text-gray-700 dark:nx-border-gray-700 dark:nx-text-gray-400 first:nx-mt-0 ltr:nx-border-l-2 ltr:nx-pl-6 rtl:nx-border-r-2 rtl:nx-pr-6">
      {data?.verses?.map((verse, i) => {
        return (
          <span key={i}>
            <sup className="dark:nx-text-gray-600 nx-text-gray-500 nx-text-xs">
              {verse.verse}
            </sup>
            {verse.text}
          </span>
        );
      })}
      <div className="nx-pt-4 dark:nx-text-gray-600 nx-text-gray-500 nx-flex nx-gap-2 nx-items-center">
        - {data.reference}{" "}
        <div className="nx-text-xs">({data.translation_name})</div>{" "}
        {/* <div className="nx-text-xs">{data.translation_note}</div> */}
      </div>
    </div>
  );
}
