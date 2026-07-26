import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LTC Studios",
    short_name: "LTC Studios",
    description:
      "Creative House indépendante — création, production et catalogues musicaux.",
    start_url: "/",
    display: "standalone",
    background_color: "#f3eee3",
    theme_color: "#151512",
    lang: "fr",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "64x64",
        type: "image/svg+xml",
      },
    ],
  };
}
