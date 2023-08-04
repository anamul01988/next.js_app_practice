import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />

      <div className="min-h-screen text-4xl" screen>
        {children}
      </div>

      <Footer />
    </>
  );
}
