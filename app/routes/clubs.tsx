import ClubsPage from "~/pages/ClubsPage";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "For Clubs" },
    { name: "description", content: "Welcome to the Clubs page!" },
  ];
}

export default function Clubs() {
  return <ClubsPage />;
}
