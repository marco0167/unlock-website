import { type RouteConfig, index, route, } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("players", "routes/players.tsx"),
  route("clubs", "routes/clubs.tsx"),
  route("our-story", "routes/ourStory.tsx"),
  route("waitlist", "routes/waitlist.tsx"),
  route("form-contact", "routes/contactForm.tsx"),
  route("privacy-policy", "routes/privacyPolicy.tsx"),
  route("terms", "routes/termsAndConditions.tsx"),
  // route("*", "./not-found.tsx"),

] satisfies RouteConfig;
