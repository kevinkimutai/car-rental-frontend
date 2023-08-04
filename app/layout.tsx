import { Nav } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Vehire",
  description: "Hire any car.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className="">
        <Nav />
        {children}
      </body>
    </html>
  );
}
