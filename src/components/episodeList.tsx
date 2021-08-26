import episodes from "../episodes.json";
import "../css/style.css";

interface IEpisode {
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

function EpisodeEntry(entry: IEpisode): JSX.Element {
  return (
    <section key={entry.id}>
      <h2 className="title">
        Episode Name:{entry.name}, Episode ID:{entry.id}
      </h2>
      <div className="body">
        <img
          className="part"
          src={entry.image.medium}
          alt="episode poster"
          width="450"
          height="300"
        />
        <div className="part">
          <p>Season: {entry.season}</p>
          <p>Episode: {entry.number}</p>
          <p>Airdate: {entry.airdate}</p>
          <p>AirTime: {entry.airtime}</p>
          <p>Type: {entry.type}</p>
          <p>AirStamp: {entry.airstamp}</p>
          <p>Runtime: {entry.runtime}</p>
          <p>
            <strong>Summary: </strong>
            {entry.summary}
          </p>
          <p>
            <a href={entry.url}>TV Maze Link</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export function EpisodeList(): JSX.Element {
  return (
    <>
      <div>{episodes.map(EpisodeEntry)}</div>
    </>
  );
}
