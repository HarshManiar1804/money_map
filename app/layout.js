import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Money Map",
  description: "One Stop Finance Solution",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          {/* header */}
          <Header />
          {/* main */}
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />
          {/* footer */}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
