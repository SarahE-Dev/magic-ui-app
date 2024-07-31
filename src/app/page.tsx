'use client'
import { CobeDraggableAuto } from "../components/dragandauto";
import Particles from "../components/particles";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full relative">
      
      <Particles className=" absolute inset-0" />
      <CobeDraggableAuto />

    </main>
  );
}
