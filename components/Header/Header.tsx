'use client'
import { useTranslations } from "next-intl";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  const t = useTranslations("nav");

  const data = ["Home", "Projects", "Skills", "About", "Contact"];

  return (
    <div className="flex justify-center">
      <nav className="fixed m-5 py-5 px-7 bg-primary rounded-4xl drop-shadow-xl/40 drop-shadow-primary">
        <ul className="flex items-center justify-center gap-8">
          {data.map((d,i) => (
            <li key={i} className="hover:bg-secondary text-primary-foreground cursor-pointer">{t(d)}</li>
          ))}
          <ModeToggle />
        </ul>
      </nav>
    </div>
  );
}
