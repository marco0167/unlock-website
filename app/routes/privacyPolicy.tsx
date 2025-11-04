import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Privacy Policy" },
    { name: "description", content: "Welcome to the Privacy Policy page!" },
  ];
}

export default function PrivacyPolicy() {
  return <></>;
}
