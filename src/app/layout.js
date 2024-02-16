import "./globals.css";
import "@fontsource/oleo-script";
import '@fontsource-variable/josefin-sans';
import '@fontsource/fira-mono';

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
