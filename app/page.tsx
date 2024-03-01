import Header from "@/app/components/header";
import ChatSection from "./components/chat-section";
import Navbar from "./components/ui/navbar/navbar";

export default function Home() {
  return (
    <>
      <Navbar
        navItems={[
          { name: "Dashboard", href: "/" },
          { name: "Team", href: "/" },
          { name: "Projects", href: "/" },
          { name: "Calendar", href: "/calendar" },
        ]}
      />
      <main className="flex min-h-screen flex-col items-center gap-10 p-24 background-gradient">
        <Header />
        <ChatSection />
      </main>
    </>
  );
}
