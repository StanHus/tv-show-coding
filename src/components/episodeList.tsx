import episodes from "../episodes.json";
import "../css/style.css";
import { useState } from "react";
import EpisodeEntry from "./episodeEntry";

export function EpisodeList(): JSX.Element {
  const [search, setSearch] = useState("");
  const [episode, setEpisode] = useState("all");

  return (
    <>
      <div>
        <section className="dropdown">
          <h2 className="dropdownelement">Choose an episode</h2>
          <select
            className="dropdownelement"
            value={episode}
            onChange={(e) => {
              const selectedEpisode = e.target.value;
              setEpisode(selectedEpisode);
            }}
          >
            <option value="all">All</option>
            {episodes.map((val) => {
              return (
                <option key={val.id} value={val.name}>
                  {val.name}
                </option>
              );
            })}
          </select>
        </section>
        <section className="search">
          <h2 className="searchelement">Or search by keyword</h2>
          <input
            className="searchelement"
            type="text"
            placeholder="Filter the names and summaries by keywords"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </section>
        <div>
          {episodes
            .filter((val) => {
              let ans;
              if (episode === "all") {
                ans = val;
              } else if (val.name === episode) {
                ans = val;
              }
              return ans;
            })
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
      </div>
    </>
  );
}
