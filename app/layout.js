import "./globals.css";
import ReduxProvider from "@/provider/ReduxProvider";
import { Manrope } from "next/font/google";
import ToastProvider from "@/provider/ToastProvider";

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
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased`}>
      <body>
        <ReduxProvider>
          <ToastProvider />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}

