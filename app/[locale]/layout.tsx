import "@/style/globals.css";
import { Noto_Sans_Thai } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import ObserverProvider from "@/components/ObserverProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suwinai Aiamsumaung Portfolio",
  icons: "/images/profile.jpg",
  description: "Suwinai Aiamsumaung Portfolio Website",
};

const font = Noto_Sans_Thai({
  subsets: ["latin","thai"]
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning className={font.className}>
      <body>
        <NextIntlClientProvider locale={locale}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ObserverProvider>
              <Header />
              {children}
              <Footer />
            </ObserverProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
