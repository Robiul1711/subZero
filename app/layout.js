import "./globals.css";
import ReduxProvider from "@/provider/ReduxProvider";
import { Manrope } from "next/font/google";
import ToastProvider from "@/provider/ToastProvider";
import bannerLayer from "@/assets/bannerlayer.png";
import Image from "next/image";
// Fonts
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

// Metadata
export const metadata = {
  title: "CREMA INFORMATICA",
  description: "CREMA INFORMATICA",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased`}>
      <body>
            {/* Background spotlight overlay */}
      <div className="absolute inset-0 -z-20 pointer-events-none select-none">
        <Image
          src={bannerLayer}
          alt="Spotlight Backlight"
          fill
          className="object-cover opacity-60 mix-blend-screen"
          priority
        />
      </div>
        <ReduxProvider>
          <ToastProvider />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}

