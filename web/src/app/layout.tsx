import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";
import FloatingChatAssistant from "./components/FloatingChatAssistant";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FernStack | Small Business Websites From $449 | Pay When You're Happy",
  description: "Hand-coded small business websites from $449 by FernStack. We build your draft first with no deposit and no lock in. Pay only when you're happy. Free quote.",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0d0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={poppins.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('fernstack-theme');
                  if (stored === 'light' || (!stored && window.matchMedia('(prefers-color-scheme: light)').matches)) {
                    document.documentElement.setAttribute('data-theme', 'light');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        {children}
        {/* Floating Quick Theme Toggle & AI Concierge Chat in Bottom Right */}
        <FloatingChatAssistant />
        <ThemeToggle variant="floating" />
      </body>
    </html>
  );
}
