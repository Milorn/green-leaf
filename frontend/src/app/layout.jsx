
import Navbar from "@/components/Navbar";
import "./globals.css";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Green Leaf",
  description: "Best plants ecommerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Navbar />
        <div className="hidden fixed top-0 right-0 min-h-screen w-[80px] bg-[#475F45] md:flex flex-col justify-center items-center gap-20">
          <FiFacebook className="size-5 text-white" />
          <FiInstagram className="size-5 text-white" />
          <FiTwitter className="size-5 text-white" />
        </div>
        <main className="w-3/4 mx-auto my-8 md:my-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
