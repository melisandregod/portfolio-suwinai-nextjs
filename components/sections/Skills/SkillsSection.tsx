"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Skills() {
  const t = useTranslations("Skills");
  return (
    <div className="lg:mt-20 m-4 p-4">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl lg:text-5xl font-bold intersect:motion-preset-expand motion-duration-1000">{t("title")}</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 mt-10 lg:mt-15 gap-15 lg:gap-20">
          <Image
            src="/images/Skills/c.png"
            width={500}
            height={500}
            alt="C logo"
            className="w-[60px] h-[70px] lg:w-[80px] lg:h-[90px]"
          />
          <Image
            src="/images/Skills/css.png"
            width={500}
            height={500}
            alt="CSS logo"
            className="w-[60px] h-[70px] lg:w-[80px] lg:h-[90px]"
          />
          <Image
            src="/images/Skills/html.png"
            width={500}
            height={500}
            alt="HTML logo"
            className="w-[60px] h-[70px] lg:w-[80px] lg:h-[90px]"
          />
          <Image
            src="/images/Skills/javascript.png"
            width={500}
            height={500}
            alt="javascript logo"
            className="w-[60px] h-[70px] lg:w-[80px] lg:h-[90px]"
          />
          <Image
            src="/images/Skills/typescript.webp"
            width={500}
            height={500}
            alt="typescript logo"
            className="w-[60px] h-[70px] lg:w-[80px] lg:h-[90px]"
          />
          <Image
            src="/images/Skills/php.svg"
            width={500}
            height={500}
            alt="php logo"
            className="w-[60px] h-[70px] lg:w-[80px] lg:h-[90px]"
          />
          <Image
            src="/images/Skills/react.png"
            width={500}
            height={500}
            alt="React logo"
            className="w-[60px] h-[70px] lg:w-[80px] lg:h-[90px]"
          />
          <Image
            src="/images/Skills/nextjs.png"
            width={500}
            height={500}
            alt="Nextjs logo"
            className="w-[60px] h-[70px] lg:w-[80px] lg:h-[90px]"
          />
          <Image
            src="/images/Skills/vue.png"
            width={500}
            height={500}
            alt="vue logo"
            className="w-[60px] h-[70px] lg:w-[80px] lg:h-[90px]"
          />
          <Image
            src="/images/Skills/tailwind.png"
            width={500}
            height={500}
            alt="tailwind logo"
            className="w-[60px] h-[70px] lg:w-[80px] lg:h-[90px]"
          />
          <Image
            src="/images/Skills/nestjs.png"
            width={500}
            height={500}
            alt="Nestjs logo"
            className="w-[60px] h-[70px] lg:w-[80px] lg:h-[90px]"
          />
          <Image
            src="/images/Skills/nodejs.png"
            width={500}
            height={500}
            alt="nodejs logo"
            className="w-[60px] h-[70px] lg:w-[80px] lg:h-[90px]"
          />
          <Image
            src="/images/Skills/mongodb.webp"
            width={500}
            height={500}
            alt="mongodb logo"
            className="w-[60px] h-[70px] lg:w-[80px] lg:h-[90px]"
          />
          <Image
            src="/images/Skills/mysql.png"
            width={500}
            height={500}
            alt="mysql logo"
            className="w-[60px] h-[70px] lg:w-[80px] lg:h-[90px]"
          />
          <Image
            src="/images/Skills/docker.webp"
            width={500}
            height={500}
            alt="docker logo"
            className="w-[60px] h-[70px] lg:w-[80px] lg:h-[90px]"
          />
          <Image
            src="/images/Skills/git.png"
            width={500}
            height={500}
            alt="git logo"
            className="w-[60px] h-[70px] lg:w-[80px] lg:h-[90px]"
          />
        </div>
      </div>
    </div>
  );
}
