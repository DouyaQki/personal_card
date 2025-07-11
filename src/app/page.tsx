// import { Banner } from "@/components/Banner";
import { Profile } from "@/components/Profile";
import { Links } from "@/components/Links";

export default function Home() {
  return (
    <>
      <main className="font-sans font-bold text-lg md:text-[1.25rem] bottom-20 flex flex-col gap-4">
        <Profile />
        <Links />
      </main>
    </>
  );
}
