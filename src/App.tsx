import { EpisodeList } from "./components/episodeList";
import "./css/style.css";
// import { Search } from "./components/episodeList";

function App(): JSX.Element {
  return (
    <div>
      <p className="header">TV-shows projects Academy</p>
      <EpisodeList />
    </div>
  );
}

export default App;
