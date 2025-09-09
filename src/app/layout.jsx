
import "./globals.css";
import Nav from "./navbar/page";
import Banner from "./banner/page";
import AfterBanner from "./afterbanner/page";
import BeforeFooter from "./beforefooter/page";
import Footer from "./footer/page";



export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <Banner />
        <AfterBanner />
       
        <BeforeFooter />
        <Footer />
         {children}
      </body>
    </html>
  );
}


