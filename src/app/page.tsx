import Image from "next/image";
import Login from "@/components/Login";
import Otp from "@/components/Otp";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Login />
      <Otp />
    </main>
  );
}
