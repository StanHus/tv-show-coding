
import "../css/style.css";
import { useEffect } from "react";
import { useState } from "react";
import { EpisodeEntry, SeasonEp } from "./episodeEntry";

export function EpisodeList(): JSX.Element {
  interface fetchedEpisode {
    id: number;
    url: string;
    name: string;
    season: number;
    number: number;
    type: string;
    airdate: string;
    airtime: string;
    airstamp: string;
    runtime: number;
    image: {
      medium: string;
      original: string;
    };
    summary: string;
    _links: { self: { href: string } };
  }

  const [search, setSearch] = useState("");
  const [episode, setEpisode] = useState("all");

  const [list, setList] = useState<fetchedEpisode[]>([]);

  useEffect(() => {
    const getMeEpisode = async () => {
      const response = await fetch("https://api.tvmaze.com/shows/82/episodes");
      const jsonBody: fetchedEpisode[] = await response.json();
      setList((list) => [...list, ...jsonBody]);
    };
    getMeEpisode();
  }, []);

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
            {list.map((val: fetchedEpisode) => {
              return (
                <option key={val.id} value={val.name}>
                  {val.name} - {SeasonEp(val.season, val.number)}
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
          {list
            .filter((val: fetchedEpisode) => {
              let ans;
              if (episode === "all") {
                ans = val;
              } else if (val.name === episode) {
                ans = val;
              }
              return ans;
            })
            .filter((val: fetchedEpisode) => {
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
