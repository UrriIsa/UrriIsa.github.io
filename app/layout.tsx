import type { Metadata } from "next";
/*import { Geist, Geist_Mono } from "next/font/google";*/
import {Space_Mono, Unbounded, DM_Serif_Display} from "next/font/google" ;
import "./style.css";
import Navbar from '@/components/Navbar';
import Cursor from '@/components/Cursor';

const spaceMono = Space_Mono ({
  subsets : ["latin"],
  weight : ["400", "700"],
  style: ["normal", "italic"],
  variable : "--fontMono"
}) ;

const unbounded = Unbounded ({
  subsets : ["latin"],
  weight : ["300", "400", "700", "900"],
  variable : "--fontMono"
}) ;
const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--fontSerif",
});


export const metadata: Metadata = {
  title: "Isaac Urrutia",
  description: "Computación. Biología. Arte.",
  icons : {
    icon : "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌿</text></svg>"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${dmSerif.variable} ${unbounded.variable}`}>
      <body>
          <Navbar/>
          <Cursor/>
          {children}
      </body>
    </html>
  );
}
