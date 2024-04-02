import { Roboto } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core";
import {config} from "@fortawesome/fontawesome-svg-core"
config.autoAddCss=false 
const inter = Roboto({ subsets: ["latin"] ,weight:['100', '300','400' , '500' ,'700']});

export const metadata = {
  title: "Turing",
  description: "Create website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
