'use client'
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

import { Button } from "../../ui/button";

export default function Skills() {
  const t = useTranslations("Home");
  return (
    <div className="flex">
      <h1>{t("title")}</h1>
      <h2>{t("about")}</h2>
      <Button>kuay</Button>
    </div>
  );
}
