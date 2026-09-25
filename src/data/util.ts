import { PHASES } from "./roadmap";
import type { Phase, Station, VideoResource } from "./roadmap";

export type StationWithPhase = Station & { phase: Phase };
export type VideoWithStation = VideoResource & { stationId: string };

export const allStations: StationWithPhase[] = PHASES.flatMap((phase) =>
  phase.stations.map((station) => ({ ...station, phase }))
);

export const findStation = (id: string): StationWithPhase | undefined =>
  allStations.find((s) => s.id === id);

export const allVideos: VideoWithStation[] = allStations.flatMap((s) =>
  s.res.map((r) => ({ ...r, stationId: s.id }))
);

export const totalVideos = allVideos.length;
export const totalWithChapters = allVideos.filter((v) => v.chapters.length).length;

export const fmt = (s: number): string => {
  const h = Math.floor(s / 3600);
  const m = Math.round((s % 3600) / 60);
  return h ? `${h}h${m ? ` ${m}m` : ""}` : `${m}m`;
};

export const fmtStamp = (s: number): string => {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return h ? `${h}:${pad(m)}:${pad(sec)}` : `${m}:${pad(sec)}`;
};

export const thumb = (id: string): string =>
  `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;

export const watchUrl = (id: string): string =>
  `https://www.youtube.com/watch?v=${id}`;
