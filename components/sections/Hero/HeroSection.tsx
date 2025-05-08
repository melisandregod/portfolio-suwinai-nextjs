"use client";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
// import { Link } from "@/i18n/navigation";

export default function Hero() {
  const t = useTranslations("Home");
  return (
    <div className="m-4 p-4">
      <div className="flex flex-col items-center gap-5">
        <Image
          src="/images/profile.jpg"
          width={200}
          height={200}
          alt="Profile Picture"
          className="intersect:motion-preset-expand motion-duration-1000 motion-delay-0 w-50 h-50 rounded-[1000px] object-cover object-top border-2 border-primary drop-shadow-xl drop-shadow-accent "
        />
        <div className="overflow-hidden">
          <h1 className="intersect:motion-preset-slide-right motion-delay-0 motion-duration-1000">
            <p className="text-2xl">{t("title")}</p>
            <p className="text-3xl font-bold">{t("name")}</p>
          </h1>
          <p className="intersect:motion-preset-slide-right motion-delay-100 motion-duration-1000 text-2xl">{t("intro")}</p>
          <p className="intersect:motion-preset-slide-left motion-delay-200 motion-duration-1000 text-xl">{t("work")}</p>
          <p className="intersect:motion-preset-slide-left motion-delay-300 motion-duration-1000 text-l">{t("description")}</p>
        </div>
        <div className="flex w-full justify-end">
          <Button className="ml-3">Download CV</Button>
        </div>
      </div>
    </div>
  );
}
