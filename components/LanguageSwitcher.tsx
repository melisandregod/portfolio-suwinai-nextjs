"use client"; // Required for any component using client-side hooks (like useRouter)

// Import hooks for navigation and internationalization
import { useRouter, usePathname } from "next/navigation"; // Navigation helpers from Next.js App Router
import { useLocale } from "next-intl"; // Hook to get current active locale from next-intl

export default function LocaleSwitcher() {
  // Hook to programmatically navigate to a different route
  const router = useRouter();

  // Hook to get the current path, e.g. "/en/about"
  const pathname = usePathname();

  // Hook to get the current locale, e.g. "en" or "th"
  const locale = useLocale();

  // Function to switch to a different locale
  const switchLocale = (newLocale: string) => {
    // Don't do anything if the selected locale is already active
    if (newLocale === locale) return;

    // Split the pathname into segments (e.g. "/en/about" -> ["", "en", "about"])
    const segments = pathname.split("/");

    // Replace the second segment (locale) with the new locale
    segments[1] = newLocale;

    // Join the segments back into a path
    const newPath = segments.join("/");

    // Navigate to the new path (e.g. "/th/about")
    router.push(newPath);
  };

  return (
    <div>
      {locale === "en" ? (
        <button
          className="text-l text-white hover:text-secondary cursor-pointer"
          onClick={() => switchLocale("th")}
        >
          EN
        </button>
      ) : (
        <button
          className="text-l text-white hover:text-secondary cursor-pointer"
          onClick={() => switchLocale("en")}
        >
          TH
        </button>
      )}
    </div>
  );
}
