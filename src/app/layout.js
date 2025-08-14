import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "./ui/components/footer/footer";
import Header from "./ui/components/header/header";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Labgov Summit",
  description:
    "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-8LDD8D0KJN`}
        />
        <script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8LDD8D0KJN', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </head>
      <body className={`text-violet-crea-800 ${montserrat.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
