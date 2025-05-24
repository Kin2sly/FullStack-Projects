import { Button } from "~/components/ui/button";
import type { Route } from "./+types/home";
import { HomePage } from "~/components/homePage/HomePage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <HomePage />
    </main>
  );
}
