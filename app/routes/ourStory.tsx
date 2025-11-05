import OurStoryPage from "~/pages/OurStoryPage";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Our Story" },
    { name: "description", content: "Welcome to the Our Story page!" },
  ];
}

export default function OurStory() {
  return <OurStoryPage />;
}
