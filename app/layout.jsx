import "./globals.css";

export const metadata = {
  title: "For Queen — A Letter From My Heart ❤️",
  description: "A romantic long-distance love letter and promise page for Queen.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
