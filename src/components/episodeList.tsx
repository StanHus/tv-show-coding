import episodes from "../episodes.json";
import "../css/style.css";
import { useState } from "react";
import EpisodeEntry from "./episodeEntry";

export function EpisodeList(): JSX.Element {
  const [search, setSearch] = useState("");
  return (
    <>
      <input
        className="search"
        type="text"
        placeholder="Filter the names and summaries by keywords"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {episodes
          .filter((val) => {
            let ans;
            if (search === "") {
              ans = val;
            } else if (
              val.name.toLowerCase().includes(search.toLowerCase()) ||
              val.summary.toLowerCase().includes(search.toLowerCase())
            ) {
              ans = val;
            }
            return ans;
          })
          .map(EpisodeEntry)}
      </div>
    </>
  );
}
