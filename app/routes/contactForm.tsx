import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Form" },
    { name: "description", content: "Welcome to the Contact Form page!" },
  ];
}

export default function ContactForm() {
  return <></>;
}
