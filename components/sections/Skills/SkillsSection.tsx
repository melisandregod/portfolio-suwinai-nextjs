"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Skills() {
  const t = useTranslations("Skills");
  const logoList = [
    { src: "/images/Skills/c.png", alt: "C" },
    { src: "/images/Skills/css.png", alt: "CSS" },
    { src: "/images/Skills/html.png", alt: "HTML" },
    { src: "/images/Skills/javascript.png", alt: "JavaScript" },
    { src: "/images/Skills/typescript.webp", alt: "TypeScript" },
    { src: "/images/Skills/php.svg", alt: "PHP" },
    { src: "/images/Skills/react.png", alt: "React & React Native" },
    { src: "/images/Skills/nextjs.png", alt: "Next.js" },
    { src: "/images/Skills/vue.png", alt: "Vue" },
    { src: "/images/Skills/tailwind.png", alt: "Tailwind CSS" },
    { src: "/images/Skills/nestjs.png", alt: "NestJS" },
    { src: "/images/Skills/nodejs.png", alt: "Node.js" },
    { src: "/images/Skills/mongodb.webp", alt: "MongoDB" },
    { src: "/images/Skills/mysql.png", alt: "MySQL" },
    { src: "/images/Skills/docker.webp", alt: "Docker" },
    { src: "/images/Skills/git.png", alt: "Git" },
  ];
  return (
    <div className="lg:mt-20 m-4 p-4" id="Skills">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl lg:text-5xl font-bold intersect:motion-preset-expand motion-duration-1000">
          {t("title")}
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 my-10 lg:mt-15 gap-15">
          {logoList.map((v, i) => (
            <div key={i} className="flex flex-col items-center gap-5">
              <Image
                src={v.src}
                width={500}
                height={500}
                alt={v.alt}
                className="w-[60px] h-[70px] lg:w-[80px] lg:h-[90px] drop-shadow-xs drop-shadow-black"
              />
              <p className="hidden lg:flex text-xl text-nowrap font-semibold">{v.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
