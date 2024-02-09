import "./globals.css";


export const metadata = {
  title: "Frontend Silje",
  description: "Frontend developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
