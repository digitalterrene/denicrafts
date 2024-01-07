import { Inter } from "next/font/google";
import "./globals.css";
import TopHeader from "@/components/ui-components/TopHeader";
import Navbar from "@/components/ui-components/Navbar";
import Footer from "@/components/ui-components/Footer";

const inter = Inter({ subsets: ["latin"] });
interface Metadata {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  url: string;
  siteName?: string;
  type?: string;
  locale?: string;
  author?: string;
  twitterHandle?: string;
  social: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}
export const metadata: Metadata = {
  title: "Denicrafts - Quality Carpentry Services",
  description: `Explore my range of construction services designed to 
                bring your vision to life. From building and drywalling to ceilings and tiling, 
                i am committed to providing the best quality service. Experience craftsmanship,
                attention to detail, and a dedication to excellence with Smanga the Builder.`,
  keywords: [
    "construction services",
    "quality craftsmanship",
    "building",
    "drywalling",
    "ceilings",
    "tiling",
    "roofing",
    "painting",
    "builders in Johannesburg,Gauteng",
    "tilers in Johannesburg,Gauteng",
    "painters in Johannesburg,Gauteng",
  ],
  image:
    "https://smanga-the-builder.vercel.app/_next/static/media/smanga.d036c194.png",
  url: "https://smanga-the-builder.vercel.app/",
  siteName: "Smanga the Builder",
  type: "website",
  locale: "en_US",
  author: "Denicrafts",
  twitterHandle: "@yourTwitterHandle",
  social: {
    twitter: "https://twitter.com/yourTwitterHandle",
    facebook: "https://www.facebook.com/yourFacebookPage",
    instagram: "https://www.instagram.com/yourInstagramPage",
    linkedin: "https://www.linkedin.com/in/yourLinkedinProfile",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gray-50/20">
          <TopHeader />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
