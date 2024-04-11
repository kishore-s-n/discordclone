import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@components/mode-toggle";
import Mybtn from "@components/ui/Mybtn";
export default function Home() {
  return (
    <>
      <p className="font-bold text-5xl">this is a test text</p>
      <div className="h-screen">
        <Mybtn />
        <UserButton afterSignOutUrl="/" />
        <ModeToggle />
      </div>
    </>
  );
}
