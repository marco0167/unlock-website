import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Our Mission" },
    { name: "description", content: "Welcome to the Our Mission page!" },
  ];
}

export default function OurStory() {
  return <></>;
}
