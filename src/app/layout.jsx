
import "./globals.css";
import Nav from "./navbar/page";
import Banner from "./banner/page";
import AfterBanner from "./afterbanner/page";
import BeforeFooter from "./beforefooter/page";
import Footer from "./footer/page";
import BestCategori from "./best-categori/page";
import BestSellar from "./best-sellar/page";
import ShopLook from "./shop-look/page";
import WatchBuy from "./watch&buy/page";

export default function RootLayout({}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <Banner />
        <AfterBanner />
        <BestSellar />
        <ShopLook/>
        < WatchBuy />
        <BestCategori />
        <BeforeFooter />
        <Footer />
         
      </body>
    </html>
  );
}


