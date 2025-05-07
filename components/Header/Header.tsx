"use client";
import { useTranslations } from "next-intl";
import { ModeToggle } from "./mode-toggle";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContent, DropdownMenuItem } from "../ui/dropdown-menu";

export default function Header() {
  const t = useTranslations("nav");

  const data = ["Home", "Projects", "Skills", "About", "Contact"];
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className="hidden sm:flex justify-center">
        <nav className="fixed m-5 py-5 px-7 bg-primary rounded-4xl drop-shadow-xl/40 drop-shadow-primary">
          <ul className="flex items-center justify-center gap-8">
            {data.map((d, i) => (
              <li
                key={i}
                className="hover:text-secondary text-primary-foreground cursor-pointer"
              >
                {t(d)}
              </li>
            ))}
            <ModeToggle />
          </ul>
        </nav>
      </div>
      {/* Responsive Design */}
      <div className="sm:hidden flex justify-end w-full">
        <div className="fixed ml-1 mt-4">
          <DropdownMenu onOpenChange={() => setToggleMenu((prev) => !prev)}>
            <span className="mr-5 bg-primary rounded-[1000px] flex justify-center items-center size-15 drop-shadow-xl/40 drop-shadow-primary">
              <DropdownMenuTrigger>
                {toggleMenu ? (
                  <XIcon className="size-7" />
                ) : (
                  <MenuIcon className="size-7" />
                )}
              </DropdownMenuTrigger>
            </span>
            <DropdownMenuContent className="flex flex-col items-center mt-4 mr-5 p-2 gap-1 bg-primary drop-shadow-xl/40 drop-shadow-primary border-secondary border-1">
              {data.map((d, i) => (
                <DropdownMenuItem
                  key={i}
                  className="flex justify-center p-2 w-full hover:bg-secondary text-primary-foreground cursor-pointer"
                >
                  {t(d)}
                </DropdownMenuItem>
              ))}
              <div className="my-2">
              <ModeToggle/>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
}
