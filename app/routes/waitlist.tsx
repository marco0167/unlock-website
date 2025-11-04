import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Waitlist Form" },
    { name: "description", content: "Welcome to the Waitlist page!" },
  ];
}

export default function Waitlist() {
  return <></>;
}
