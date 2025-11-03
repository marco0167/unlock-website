import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("players", "routes/players.tsx"),
  route("clubs", "routes/clubs.tsx"),
  route("mission", "routes/ourMission.tsx"),
  route("psychologists", "routes/psychologists.tsx"),
  route("team", "routes/team.tsx"),
] satisfies RouteConfig;
