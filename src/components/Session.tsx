import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { findStation, fmt, fmtStamp, thumb, watchUrl } from "../data/util";
import Player, { type YTPlayer } from "./Player";

export default function Session() {
  const { id } = useParams<{ id: string }>();
  const station = id ? findStation(id) : undefined;
  const [current, setCurrent] = useState<string>(station ? station.res[0].v : "");
  const playerRef = useRef<YTPlayer | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (station) setCurrent(station.res[0].v);
    playerRef.current = null;
    setReady(false);
    window.scrollTo(0, 0);
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleReady = useCallback((p: YTPlayer) => {
    playerRef.current = p;
    setReady(true);
  }, []);

  const seek = (t: number) => {
    const p = playerRef.current;
    if (p) {
      p.seekTo(t, true);
      p.playVideo();
    }
  };

  if (!station) {
    return (
      <div className="notfound">
        <p>Session not found.</p>
        <Link to="/">← Back to overview</Link>
      </div>
    );
  }

  const video = station.res.find((r) => r.v === current) ?? station.res[0];

  return (
    <div className="session">
      <Link className="back" to="/">
        ← Overview
      </Link>

      <header className="session-head">
        <span className="tag">
          {station.phase.n} · {station.phase.tag}
        </span>
        <h1>{station.title}</h1>
        <p className="goal">{station.goal}</p>
        <div className="chips">
          {station.concepts.map((c) => (
            <span className="chip" key={c}>{c}</span>
          ))}
        </div>
      </header>

      <div className="session-grid">
        <div className="session-main">
          <Player key={video.v} videoId={video.v} onReady={handleReady} />

          <div className="now">
            <div className="now-title">
              <a href={watchUrl(video.v)} target="_blank" rel="noopener">
                {video.title}
              </a>
            </div>
            <div className="now-sub">
              <span>{video.channel}</span>
              <span>·</span>
              <span>{fmt(video.seconds)}</span>
              <span>·</span>
              <a href={watchUrl(video.v)} target="_blank" rel="noopener">
                open on YouTube
              </a>
            </div>
            <p className="note">{video.note}</p>
          </div>

          <div className="build">
            <b>Build this</b>
            <p>{station.build}</p>
          </div>

          {station.res.length > 1 && (
            <div className="videos">
              <h3>Videos in this session</h3>
              {station.res.map((r) => (
                <button
                  key={r.v}
                  className={"vrow" + (r.v === video.v ? " active" : "")}
                  onClick={() => setCurrent(r.v)}
                >
                  <img loading="lazy" alt="" src={thumb(r.v)} />
                  <span className="vmeta">
                    <span className="vtitle">{r.title}</span>
                    <span className="vsub">
                      {r.channel} · {fmt(r.seconds)}
                      {r.chapters.length
                        ? ` · ${r.chapters.length} timestamps`
                        : " · no timestamps"}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        <aside className="sideline">
          <div className="sideline-head">
            <h3>What you'll learn</h3>
            <span>
              {video.chapters.length ? "click a timestamp to jump" : "key concepts"}
            </span>
          </div>

          {video.chapters.length > 0 ? (
            <ol className="chapters">
              {video.chapters.map((c, i) => (
                <li key={i}>
                  <button onClick={() => seek(c.t)} disabled={!ready}>
                    <span className="ts">{fmtStamp(c.t)}</span>
                    <span className="ct">{c.title}</span>
                  </button>
                </li>
              ))}
            </ol>
          ) : (
            <div className="nochapters">
              <p className="hint">
                No chapter markers published for this video. The session's core concepts:
              </p>
              <ul className="concept-list">
                {station.concepts.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
