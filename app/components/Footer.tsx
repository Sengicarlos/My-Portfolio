export default function Footer() {
  return (
    <footer className="w-full bg-sidebar text-sidebar-foreground p-4 text-center mt-10">
      <p>© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
    </footer>
  );
}
