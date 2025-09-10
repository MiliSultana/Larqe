
import "./globals.css";
import Nav from "./navbar/page";
import Banner from "./banner/page";
import AfterBanner from "./afterbanner/page";
import BeforeFooter from "./beforefooter/page";
import Footer from "./footer/page";
import BestCategori from "./best-categori/page";


export default function RootLayout({}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <Banner />
        <AfterBanner />
        <BestCategori />
        <BeforeFooter />
        <Footer />
         
      </body>
    </html>
  );
}


