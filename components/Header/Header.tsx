"use client";
import { useTranslations } from "next-intl";
import { ModeToggle } from "./mode-toggle";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import LanguageSwitcher from "../LanguageSwitcher";

export default function Header() {
  const t = useTranslations("nav");

  const [toggleMenu, setToggleMenu] = useState(false);
  const scrollToSection = (id: string, offset: number = 0) => {
    const element = document.getElementById(id);
    if (element) {
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="hidden md:flex justify-center">
        <nav className="z-[1000] fixed m-5 py-5 px-7 bg-primary rounded-4xl drop-shadow-xl/40 drop-shadow-primary">
          <ul className="flex items-center justify-center gap-8">
            <li
              className="hover:text-secondary text-primary-foreground cursor-pointer"
              onClick={() => scrollToSection("Home")}
            >
              {t("Home")}
            </li>
            <li
              className="hover:text-secondary text-primary-foreground cursor-pointer"
              onClick={() => scrollToSection("Skills", -150)}
            >
              {t("Skills")}
            </li>
            <li
              className="hover:text-secondary text-primary-foreground cursor-pointer"
              onClick={() => scrollToSection("Projects")}
            >
              {t("Projects")}
            </li>
            <li
              className="hover:text-secondary text-primary-foreground cursor-pointer"
              onClick={() => scrollToSection("Experience")}
            >
              {t("Experience")}
            </li>
            <li
              className="hover:text-secondary text-primary-foreground cursor-pointer"
              onClick={() => scrollToSection("Contact")}
            >
              {t("Contact")}
            </li>

            <ModeToggle />
            <LanguageSwitcher />
          </ul>
        </nav>
      </div>
      {/* Responsive Design */}
      <div className="md:hidden flex justify-end w-full">
        <div
          className={`${
            !toggleMenu ? "motion-translate-y-loop-25" : ""
          } motion-duration-[2s] fixed z-[9999] ml-1 mt-4`}
        >
          <DropdownMenu onOpenChange={() => setToggleMenu((prev) => !prev)}>
            <span className="mr-5 bg-primary rounded-[1000px] flex justify-center items-center size-15 drop-shadow-xl/40 drop-shadow-primary">
              <DropdownMenuTrigger>
                {toggleMenu ? (
                  <XIcon className="size-7" color="white" />
                ) : (
                  <MenuIcon className="size-7" color="white" />
                )}
              </DropdownMenuTrigger>
            </span>
            <DropdownMenuContent className="flex flex-col items-center mt-4 mr-5 p-2 gap-1 bg-primary drop-shadow-xl/40 drop-shadow-primary border-secondary border-1">
              <DropdownMenuItem
                className="hover:text-secondary text-primary-foreground cursor-pointer"
                onClick={() => scrollToSection("Home")}
              >
                {t("Home")}
              </DropdownMenuItem>
              <DropdownMenuItem
                className="hover:text-secondary text-primary-foreground cursor-pointer"
                onClick={() => scrollToSection("Skills")}
              >
                {t("Skills")}
              </DropdownMenuItem>
              <DropdownMenuItem
                className="hover:text-secondary text-primary-foreground cursor-pointer"
                onClick={() => scrollToSection("Projects")}
              >
                {t("Projects")}
              </DropdownMenuItem>
              <DropdownMenuItem
                className="hover:text-secondary text-primary-foreground cursor-pointer"
                onClick={() => scrollToSection("Experience")}
              >
                {t("Experience")}
              </DropdownMenuItem>
              <DropdownMenuItem
                className="hover:text-secondary text-primary-foreground cursor-pointer"
                onClick={() => scrollToSection("Contact")}
              >
                {t("Contact")}
              </DropdownMenuItem>
              <DropdownMenuSeparator className="w-full bg-secondary" />
              <div className="my-2">
                <ModeToggle />
              </div>
              <span className="m-1">
                <LanguageSwitcher />
              </span>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
}
