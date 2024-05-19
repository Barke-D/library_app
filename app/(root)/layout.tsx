import Footer from "@/components/shared/Footer";
import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import { Separator } from "@/components/ui/separator";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full md:flex md:flex-row md:h-screen">
      <div className="flex flex-row">
        <Sidebar />
        <MobileNav />
      </div>
      <div className="flex w-full md:ml-5">
        <div>
          {children}
          <Separator />
          <Footer />
        </div>
      </div>
      <Toaster />
    </main>
  );
}
