
import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "./context/active-section-context";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "./context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chris Dash6 | Portfolio",
  description:
    "Chris Dash6 is a Frontend Web Developer - UI/UX Designer - SEO specialist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-slate-600 text-gray-200 relative pt-24 sm:pt-36
      dark:bg-blue-200 dark:text-black dark:text-opacity-90`}>

        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]
        sm:w-[68.75rem]"></div>
        <div className="bg-[#a5b3a5] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem]
        sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
       <ThemeContextProvider>
       <ActiveSectionContextProvider>
        <Header/>
        {children}
          <Toaster position="top-right"/>
          <ThemeSwitch/>
        </ActiveSectionContextProvider>
        </ThemeContextProvider>
        
        </body>
    </html>
  );
}
