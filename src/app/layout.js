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
      <body className="bg-backgroundLinear bg-no-repeat min-h-screen w-[100%] mx-auto mt-10 overflow-x-hidden">{children}</body>
    </html>
  );
}
