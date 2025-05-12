"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const title = useTranslations("Projects");
  const t = useTranslations("ProjectList");
  const keys = [
    "PortfolioWebsite",
    "ThaiXplore",
    "MiniRPGChronicle",
    "MilkDeliveryManagement",
  ] as const;

  return (
    <div className="m-4" id="Projects">
      {/* Mobile Responsive */}
      <div className="md:hidden flex flex-col items-center">
        <h2 className="text-3xl lg:text-5xl font-bold" data-aos="zoom-in">
          {title("title")}
        </h2>
        <div className="grid grid-cols-1 my-10 gap-5">
          {keys.map((key, i) => {
            return (
              <Card className={`w-[350px]`} key={i} data-aos="flip-up">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{key}</CardTitle>
                    <p className="font-bold">{t(`${key}.date`)}</p>
                  </div>
                  <CardDescription>{t(`${key}.category`)}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2 h-full">
                  <Image
                    src={`/images/Projects/${key}.png`}
                    alt="Project Images
                  "
                    width={600}
                    height={400}
                    className="w-[300] h-[180]"
                  />
                  <p className="text-sm">{t(`${key}.description`)}</p>
                  <p className="text-sm font-bold">
                    Built with: {t(`${key}.stack`)}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Link href={t(`${key}.github`)}>
                    <Github className="cursor-pointer" />
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
          <Link
            className="w-full flex justify-center"
            href="https://github.com/melisandregod?tab=repositories&type=source"
          >
            <Button>See more in my Github</Button>
          </Link>
        </div>
      </div>
      {/* Desktop Responsive */}
      <div className="md:flex hidden flex-col items-center">
        <h2 className="text-3xl lg:text-5xl font-bold" data-aos="zoom-in">
          {title("title")}
        </h2>
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 my-10 gap-5">
          {keys.map((key, i) => {
            return (
              <Card
                className={`w-[350px]`}
                key={i}
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{key}</CardTitle>
                    <p className="font-bold">{t(`${key}.date`)}</p>
                  </div>
                  <CardDescription>{t(`${key}.category`)}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2 h-full">
                  <Image
                    src={`/images/Projects/${key}.png`}
                    alt="Project Images
                  "
                    width={600}
                    height={400}
                    className="w-[300] h-[180]"
                  />
                  <p className="text-sm ">{t(`${key}.description`)}</p>
                  <p className="text-sm font-bold">
                    Tech Stack : {t(`${key}.stack`)}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Link href={t(`${key}.github`)}>
                    <Github className="cursor-pointer" />
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        <Link
          className="w-full flex justify-center"
          href="https://github.com/melisandregod?tab=repositories&type=source"
        >
          <Button className="cursor-pointer">See more in my Github</Button>
        </Link>
      </div>
    </div>
  );
}
