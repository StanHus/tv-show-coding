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

    const SeEp =  (season: number, number: number): string  => {
        const output = []
        if (season <10){
            output.push(`0${season}`)
        }
        else {output.push(season.toString())} 

        if (number <10){
            output.push(`0${number}`)
        }
        else {output.push(number.toString())}  
    
    return output.join(',')
    }

  return (
    <body key={entry.id}>
      <h2 className="title">Episode Name:{entry.name}</h2>
      <section className="body">
        <div className="part">
          <img
            src={entry.image.medium}
            alt="episode poster"
            width="450"
            height="300"
          />
          <p>AirStamp: {entry.airstamp}</p>
        </div>
        <div className="part">
          <p>{SeEp}</p>
          {/* <p>Airdate: {entry.airdate}</p>
          <p>AirTime: {entry.airtime}</p>
          <p>Type: {entry.type}</p>
          <p>Runtime: {entry.runtime}</p> */}
          <p>
            <strong>Summary: </strong>
            {entry.summary}
          </p>
          <p>
            <a href={entry.url}>TV Maze Link</a>
          </p>
        </div>
      </section>
    </body>
  );
}

export function EpisodeList(): JSX.Element {
  return (
    <>
      <div>{episodes.map(EpisodeEntry)}</div>
    </>
  );
}
