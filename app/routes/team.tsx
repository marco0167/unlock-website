import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Meet our Team" },
    { name: "description", content: "Welcome to the Team page!" },
  ];
}

export default function Team() {
  return <></>;
}
