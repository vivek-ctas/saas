import { ReactNode } from "react";
import Navigation from "./navigation";
import Footer from "./footer";
import { FloatingWidgets } from "./floatingWidgets";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingWidgets />
    </div>
  );
};

export default Layout;