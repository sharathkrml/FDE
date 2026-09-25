import { Link } from "react-router-dom";
import { PHASES } from "../data/roadmap";
import { allStations, totalVideos, fmt, thumb } from "../data/util";

const duration = (s: { res: { seconds: number }[] }) =>
  fmt(s.res.reduce((a, r) => a + r.seconds, 0));

export default function Home() {
  const first = allStations[0];
  const firstVideo = first.res[0];

  return (
    <div className="home">
      <header className="hero">
        <h1>FDE Roadmap</h1>
        <p className="hero-sub">
          {PHASES.length} phases · {allStations.length} sessions · {totalVideos} free videos
        </p>
      </header>

      <Link className="feature" to={`/session/${first.id}`}>
        <img src={thumb(firstVideo.v)} alt="" />
        <div className="feature-body">
          <span className="feature-kicker">Start here</span>
          <h2>{first.title}</h2>
          <p>{first.goal}</p>
          <span className="feature-meta">
            {first.res.length} videos · {duration(first)}
          </span>
        </div>
      </Link>

      <section className="path">
        <h2>The path</h2>
        {PHASES.map((phase) => {
          const cover = phase.stations[0].res[0];
          return (
            <div className="phase-row" key={phase.id}>
              <div className="phase-info">
                <div className="phase-head">
                  <span className="phase-num">{phase.n}</span>
                  <h3>{phase.title}</h3>
                </div>
                <p>{phase.blurb}</p>
                <ol className="phase-sessions">
                  {phase.stations.map((s) => (
                    <li key={s.id}>
                      <Link to={`/session/${s.id}`}>
                        <span>{s.title}</span>
                        <span className="meta">{s.res.length} videos</span>
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
              <Link
                className="phase-cover"
                to={`/session/${phase.stations[0].id}`}
                aria-label={phase.stations[0].title}
              >
                <img src={thumb(cover.v)} alt="" loading="lazy" />
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
}
