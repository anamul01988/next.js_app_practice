import "./globals.css";
// import Navbar from "@/components/shared/navbar";
// import Footer from "@/components/shared/footer";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Next.js Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}

        <div className="min-h-screen text-4xl" screen>
          {children}
        </div>

        {/* <Footer /> */}
      </body>
    </html>
  );
}
