import localFont from "next/font/local";
import "./globals.css";
import Navbars from "./Components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "DataBase",
  description: "A tech developer service offers expert guidance and solutions in software development, encompassing areas like web and mobile app creation, cloud computing, and cyber-security. These services typically include custom software development, system integration, and IT consulting to optimize",
  openGraph: {
    type: "website",
    title: "DataBalk",
    url: "https://frontendtest-flax.vercel.app",
    image: "https://images.pexels.com/photos/5060973/pexels-photo-5060973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A tech developer service offers expert guidance and solutions in software development, encompassing areas like web and mobile app creation, cloud computing, and cyber-security. These services typically include custom software development, system integration, and IT consulting to optimize"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbars/>
        {children}
      </body>
    </html>
  );
}
