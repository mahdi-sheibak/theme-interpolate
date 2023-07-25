import { Button } from "@/components/button";

export default function Home() {
  return (
    <main className="grid place-items-center h-full">
      <div className="flex flex-col justify-around h-screen gap-5 items-center">
        <strong className="text-4xl">HOME</strong>
        <Button />
      </div>
    </main>
  );
}
