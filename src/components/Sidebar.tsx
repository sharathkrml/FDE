import { NavLink } from "react-router-dom";
import { PHASES } from "../data/roadmap";

export default function Sidebar() {
  return (
    <nav className="sidenav">
      <NavLink to="/" end className="home-link">
        ⌂ Overview
      </NavLink>
      {PHASES.map((phase) => (
        <div className="nav-group" key={phase.id}>
          <span className="nav-tag">
            <b>{phase.n}</b> {phase.tag}
          </span>
          {phase.stations.map((s) => (
            <NavLink
              key={s.id}
              to={`/session/${s.id}`}
              className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}
            >
              {s.title}
            </NavLink>
          ))}
        </div>
      ))}
    </nav>
  );
}
