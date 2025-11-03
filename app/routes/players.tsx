import PlayersPage from "~/pages/PlayersPage";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "For Players" },
    { name: "description", content: "Welcome to the Players page!" },
  ];
}

export default function Players() {
  return <PlayersPage />;
}
