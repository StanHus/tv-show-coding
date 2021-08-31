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

export function SeasonEp(season: number, number: number): string {
  const output = [];
  if (season < 10) {
    output.push(`S0${season}`);
  } else {
    output.push(`S${season.toString()}`);
  }

  if (number < 10) {
    output.push(`E0${number}`);
  } else {
    output.push(`E${number.toString()}`);
  }

  return output.join("");
}

export function EpisodeEntry(entry: IEpisode): JSX.Element {
  function checkText(text: string): string {
    text = text.replace("<p>", "");
    text = text.replace("</p>", "");
    return text;
  }

  function checkImage(imageLink: string): string {
    if (imageLink === "null") {
      return "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg";
    } else {
      return imageLink;
    }
  }

  const epTitle = `${entry.name} - ${SeasonEp(entry.season, entry.number)}`;

  return (
    <body className="body" key={entry.id}>
      <section className="elements">
        <div className="title">
          <h2>{epTitle}</h2>
        </div>
        <img
          className="image"
          src={checkImage(entry.image.medium)}
          alt="episode poster"
        />
        <div className="part">
          {/*<p>AirStamp: {entry.airstamp}</p>
               <p>Airdate: {entry.airdate}</p>
              <p>AirTime: {entry.airtime}</p>
              <p>Type: {entry.type}</p>
              <p>Runtime: {entry.runtime}</p> */}
          <p>
            <strong>Summary: </strong>
            {checkText(entry.summary)}
          </p>
          <p>
            <a href={entry.url}>TV Maze Link</a>
          </p>
        </div>
      </section>
    </body>
  );
}
