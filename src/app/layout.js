import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import "@/styles/globals.css";

export const metadata = {
  title: "FinLexa | Trust. Compliance. Growth.",
  description: "The future of financial, legal, and tax compliance. Advisory services for the modern era.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout-wrapper">
            <Navbar />
            <main style={{ minHeight: 'calc(100vh - 300px)' }}>
                {children}
            </main>
            <Footer />
        </div>
      </body>
    </html>
  );
}
