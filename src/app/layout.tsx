import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayushka Kumari | Developer & Cloud Enthusiast",
  description: "Portfolio of Ayushka Kumari, Software Developer & Cloud Enthusiast.",
};

import { Background } from "@/components/background";
import { CustomCursor } from "@/components/cursor";
import { ScrollProgress } from "@/components/scroll-progress";
import { Navbar } from "@/components/navbar";

import { SmoothScrollProvider } from "@/components/smooth-scroll";
import { SceneNavigation } from "@/components/scene-navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <Background />
            <ScrollProgress />
            <CustomCursor />
            <SceneNavigation />
            <Navbar />
            <main className="relative z-10 min-h-screen overflow-x-clip">
              {children}
            </main>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
