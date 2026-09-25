import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Session from "./components/Session";

export default function App() {
  return (
    <div className="app">
      <header className="topbar">
        <a className="brand" href="#/">
          FDE<span>Roadmap</span>
        </a>
      </header>
      <div className="layout">
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/session/:id" element={<Session />} />
          </Routes>
        </main>
      </div>
      <footer>
        <p>
          Sources: Vibe Engines FDE Roadmap 2026 · roadmap.sh Forward Deployed Engineer ·
          <code> FDE.md</code>. Videos via YouTube; channels credited on each session.
        </p>
        <p className="footer-by">
          Built in public by{" "}
          <a href="https://x.com/sharathkrml" target="_blank" rel="noopener">
            @sharathkrml
          </a>
        </p>
      </footer>
    </div>
  );
}
