/* eslint-disable @next/next/no-page-custom-font */
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import { getClientConfig } from "./config/client";
import type { Metadata, Viewport } from "next";
import { getServerSideConfig } from "./config/server";
import { NEXT_BASE_PATH } from "./constant";
const serverConfig = getServerSideConfig();

export const metadata: Metadata = {
  title: "Ocean AI Chat",
  description: "Your personal ChatGPT Chat Bot.",
  appleWebApp: {
    title: "Ocean AI Chat",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#151515" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="config" content={JSON.stringify(getClientConfig())} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link
          rel="manifest"
          href={`${NEXT_BASE_PATH}/site.webmanifest`}
          crossOrigin="use-credentials"
        ></link>
        <link rel="shortcut icon" href={`${NEXT_BASE_PATH}/favicon.ico`} />
        <script
          src={`${NEXT_BASE_PATH}/serviceWorkerRegister.js`}
          defer
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
