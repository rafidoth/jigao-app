import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/app/utils/font";
import Providers from "@/app/utils/Providers";
import NavigationBar from "./components/NavigationBar";
export const metadata: Metadata = {
  title: "Kiii",
  description: "A AI powered test generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} flex justify-center antialiased`}
      >
        <Providers>
          <main className={`w-[1200px] flex flex-col justify-center items-center`}>
            <NavigationBar />
            {children}
          </main>
        </Providers>
      </body>
    </html >
  );
}
