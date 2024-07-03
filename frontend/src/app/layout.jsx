
import Navbar from "@/components/Navbar";
import "./globals.css";


export const metadata = {
  title: "Green Leaf",
  description: "Best plants ecommerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className="w-3/4 mx-auto my-20">
          {children}
        </main>
      </body>
    </html>
  );
}
