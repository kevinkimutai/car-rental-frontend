import "../globals.css";

export const metadata = {
  title: "Checkout",
  description: "checkout.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className="">{children}</body>
    </html>
  );
}
