import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Meet our Psychologists" },
    { name: "description", content: "Welcome to the Psychologists page!" },
  ];
}

export default function Psychologists() {
  return <></>;
}
