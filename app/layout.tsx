import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minigames",
  description: "Collection of fun minigames",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="relative min-h-[100vh]">
          <div className="pb-10">{children}</div>
          <footer className="absolute bottom-0 w-full h-10 flex justify-center items-center">
            <div className="text-lg tracking-wide">
              Created by{" "}
              <Link
                href="https://www.imranyafith.com"
                target="_blank"
                className="text-blue-500 hover:underline underline-offset-4"
              >
                Imran Yafith
              </Link>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
