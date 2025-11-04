import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Terms and Conditions" },
    { name: "description", content: "Welcome to the Terms and Conditions page!" },
  ];
}

export default function TermsAndConditions() {
  return <></>;
}
