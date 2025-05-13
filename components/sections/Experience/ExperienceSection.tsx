"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Experience() {
  const title = useTranslations("Experience");
  const t = useTranslations("EXPList");
  const list = ["SUNMI", "KU"];

  return (
    <div className="m-4 overflow-hidden" id="Experience">
      <div className="flex flex-col items-center gap-10 my-10">
        <h2
          className="text-3xl lg:text-5xl font-bold mt-2 xl:mt-20"
          data-aos="zoom-in"
        >
          {title("title")}
        </h2>
        <div className="xl:flex flex-col justify-center xl:px-40">
          <div className="w-full flex flex-col h-full my-15 xl:my-30 justify-center">
            <div
              className="absolute bg-primary dark:bg-white h-[55vh] w-2.5 z-[-1] rounded-2xl ml-21 drop-shadow-md drop-shadow-primary dark:drop-shadow-white"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="linear"
            />
            {list.map((key, i) => (
              <div key={i} className="flex items-center">
                <Image
                  src={`/images/Experience/${key}.png`}
                  alt="test"
                  width={600}
                  height={400}
                  className="w-[100] my-10 ml-10 mr-5 rounded-full border-primary dark:border-white border-4 drop-shadow-md drop-shadow-primary dark:drop-shadow-white"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                />
                <div className="mr-5" data-aos="fade-left" data-aos-delay="500">
                  <p className="font-bold text-md">
                    {t(`${key}.date`)} | {t(`${key}.role`)}
                  </p>
                  <p className="text-sm">{t(`${key}.company`)}</p>
                  <p className="hidden 2xl:flex text-sm ">
                    {t(`${key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
