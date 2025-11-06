import "./globals.css"; // TailwindCSS or global styles
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { ThemeProvider } from "../components/theme-provider"; // Shadcn theme provider

export const metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <html lang="en" className="light">
      <body>
        <ThemeProvider>
          <Nav />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
