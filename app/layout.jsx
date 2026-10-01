import "./globals.css";

export const metadata = {
  title: "For Queen ❤️",
  description: "A little question from someone who loves you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
