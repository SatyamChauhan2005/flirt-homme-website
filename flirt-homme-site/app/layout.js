import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/fraunces/500-italic.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "FLIRT HOMME — Avi Couture Private Limited",
  description:
    "FLIRT HOMME is the designer shirt label of Avi Couture Private Limited, New Delhi — manufacturing formal, casual and party wear shirts for retail and bulk private-label orders.",
  keywords: [
    "FLIRT HOMME",
    "Avi Couture",
    "designer shirts manufacturer",
    "shirt manufacturer India",
    "private label shirts",
    "bulk shirt orders New Delhi",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-body bg-bone text-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
